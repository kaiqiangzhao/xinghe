import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "../components/DropDown";
import MyDisclosure from "../components/Disclosure";
import Footer from "../components/Footer";
import Github from "../components/GitHub";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [vibe, setVibe] = useState<VibeType>("Professional");
  const [generatedBios, setGeneratedBios] = useState<string>("");
  const defultDesc = "脱口秀演员因不当言论被热议";

  const bioRef = useRef<null | HTMLDivElement>(null);

  const scrollToBios = () => {
    if (bioRef.current !== null) {
      bioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  let topic = bio || defultDesc;

  const generateBio = async (e: any) => {
    let prompt = `你总能对一个事件进行深度的分析，然后获得多个创作灵感，启发人们写出极具价值，并值得人们反复阅读的文章，请列出你的 3 个创作灵感，这个事件是: ${topic}${
        topic.slice(-1) === "." ? "" : "."
    }`;

    e.preventDefault();
    setGeneratedBios("");
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedBios((prev) => prev + chunkValue);
    }
    // scrollToBios();
    setLoading(false);
  };

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>创作岛</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center text-center px-4 mt-12 sm:mt-24">
        <h2 className="sm:text-5xl text-4xl max-w-[808px] font-bold text-slate-900">
          使用 ChatGPT 生成创作灵感
        </h2>
        {/*<p className=" text-slate-400 mt-2"></p>*/}
        <div className="max-w-xl w-full">
          <div className="flex mt-10 items-center space-x-3">
          </div>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
            placeholder={
              "输入某个人物、事件等"
            }
          />
          {!loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-1 mt-1 hover:bg-black/80 w-full"
              onClick={(e) => generateBio(e)}
            >
              获取创作灵感 &rarr;
            </button>
          )}
          {loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          )}
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <div className="space-y-10 my-10">
          {generatedBios && (
            <>
              <div>
                <h2
                  className="sm:text-3xl text-2xl font-bold text-slate-900 mx-auto"
                  ref={bioRef}
                >
                  创作灵感
                </h2>
              </div>
              <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto  whitespace-pre-wrap">
                <div
                  className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border text-left"
                  onClick={() => {
                    navigator.clipboard.writeText(generatedBios);
                    toast("Bio copied to clipboard", {
                      icon: "✂️",
                    });
                  }}
                  key={generatedBios}
                >
                  <p>{generatedBios}</p>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="max-w-xl w-full">
          <h2
              className="sm:text-3xl text-2xl font-bold text-slate-900 mx-auto"
              ref={bioRef}
          >
            热点事件
          </h2>
          <div className="flex justify-center text-slate-400 mt-1 text-sm">
            周更（优化中），点击 <ChevronRightIcon className='h-5 w-5'></ChevronRightIcon> 即可查看创作灵感
          </div>
          <div className="max-w-xl w-full text-left">
            <MyDisclosure></MyDisclosure>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

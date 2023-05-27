import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b w-full mt-5 border-b-1 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3 items-center">
        <Image
          alt="header text"
          src="/xinghelogo.png"
          width={20}
          height={24}
        />
        <h2 className="sm:text-1xl text-1xl font-bold ml-2 tracking-tight">
            创作岛
        </h2>
      </Link>
        <a
            href="https://wenjuan.feishu.cn/m?t=sWFGJ45TTJMi-uqlt"
            target="_blank"
            rel="noreferrer"
            className="sm:text-1xl text-1xl hover:underline transition underline-offset-2 font-bold"
        >
            建议反馈
        </a>
    </header>
  );
}

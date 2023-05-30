import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const events = [
    {
        title:"泰裤辣",
        "ideas":[
            "分析网络热梗的流行和影响：你可以以某个网络热梗为例，分析其流行的原因和影响。例如，你可以探讨该热梗的背景和起源，分析该热梗在社交媒体和网络平台上的传播和影响，或者从文化和心理学的角度分析为什么人们会追捧和热衷于这个热梗等等。",
            "分析网络热梗的语言和表达方式：你可以以某个网络热梗为例，分析其语言和表达方式的特点和影响。例如，你可以探讨该热梗的语言和表达方式的创新和独特性，分析该热梗对于语言和文化的影响和贡献，或者探讨如何在使用和传播该热梗时保持合适的语言和态度等等。"
        ]
    },
    {
        title:"华表奖",
        "ideas":[
            "分析华表奖的历史和意义：你可以以华表奖为切入点，分析其历史和意义。例如，你可以探讨华表奖的创立背景和历程，分析其对于中国戏剧和文化的推动和影响，或者从文化产业和创意产业的角度分析华表奖的地位和作用等等。",
            "探讨华表奖的评选标准和影响力：你可以以华表奖为例，探讨其评选标准和影响力。例如，你可以分析华表奖的评选机制和标准，探讨如何评价和比较不同类型和风格的戏剧作品，或者分析华表奖对于中国戏剧和文化产业的推动和影响等等。",
        ]
    },
    {
        title:"AI 孙燕姿",
        "ideas":[
            "从AI技术的角度出发，探讨“AI孙燕姿”翻唱歌曲的可能性和限制，并分析AI技术在音乐领域的应用前景，以及对音乐创作和表演的影响。",
            "从孙燕姿的角度出发，探讨她对“AI孙燕姿”的态度和想法，分析她在音乐创作和表演中所持有的态度和价值观，并探讨如何将这种态度和价值观应用到音乐创作和表演中。",
            "从社会文化的角度出发，分析“AI孙燕姿”现象的背后所反映的社会文化现象和价值观，并探讨如何在这样的背景下，推动音乐创作和表演的发展和创新。"
        ]
    },
    {
        title:"ChatGPT",
        "ideas":[
            "一篇介绍ChatGPT的文章，介绍它是什么，它的功能和优势，以及如何使用它。可以从用户体验、技术实现等角度进行深度剖析，让读者更好地了解ChatGPT。",
            "一篇探讨ChatGPT技术应用前景的文章，分析它在智能客服、智能问答等领域的应用前景，并且结合行业现状对未来的发展做出预测。可以从技术优势、市场需求等方面进行探讨，让读者了解ChatGPT在未来的发展趋势。",
            "一篇讲述ChatGPT如何提升用户体验的文章，分析它在社交媒体、在线教育等领域的应用，以及它如何帮助企业提升客户满意度、降低成本等方面的优势。可以从用户需求、市场需求等方面进行分析，让读者了解ChatGPT在提升用户体验方面的价值。",
        ]
    },
    {
        title:"六一儿童节",
        "ideas":[
            "文章主题：六一儿童节的发展历程和意义。可以通过对历史资料和现实情况的分析，探讨六一儿童节的起源、发展、变迁及其所蕴含的意义和价值，从而激发人们对于儿童保护和教育的关注和思考。",
            "文章主题：如何让六一儿童节更有意义。可以从不同角度出发，比如家庭、学校、社区等，分享一些关于如何让六一儿童节更有意义的创意和实践，例如家庭亲子活动、学校教育课程、社区公益活动等，从而为读者提供一些有益的启示和参考。",
            "文章主题：六一儿童节的文化差异与融合。可以从国际化的视角出发，探讨不同国家和地区对于六一儿童节的庆祝方式和文化内涵的差异，并探讨如何在文化差异的基础上实现文化融合，从而为读者提供一些跨文化交流和理解的思考和启示。",
        ]
    }
]


export default function MyDisclosure() {
    return (
        <div className="w-full px-0 pt-6">
            <div className="mx-auto w-full rounded-2xl bg-gray-100 p-2">
                {events.map((event, index) => (
                    <Disclosure as="div" className="mt-0">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-black-900 hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-black-500 focus-visible:ring-opacity-75">
                                    <span>{index+1}. {event.title}</span>
                                    <ChevronRightIcon
                                        className={`${
                                            open ? 'rotate-90 transform' : ''
                                        } h-5 w-5 text-black-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-1 pb-4 text-sm text-gray-500">
                                    {event.ideas.map((idea) => (
                                        <p className="pt-2">{"• "+idea}</p>
                                    ))}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    )
}

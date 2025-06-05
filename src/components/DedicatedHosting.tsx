import { hosting_1, hosting_2, hosting_3, hosting_4, human, human_service } from "../exports/images"
import { Circle } from 'lucide-react'

const hostings = [
    {
        name: "Dedicated Hosting",
        img: hosting_1,
    },
    {
        name: "Shared Hosting",
        img: hosting_2,
    },
    {
        name: "Reseller Hosting",
        img: hosting_3,
    },
    {
        name: "Domain Hosting",
        img: hosting_4,
    },
]

const descriptions = {
    title: "DEDICATED HOSTING",
    description: "Lorem ipsum dolor sit amet, ectetuer adipiscing elit. Nullsam aget dolor sit amit, ecc.",
    list: [
        'Fully Managed Dedicated Server',
        'Windows & Linux',
        'Complete Control with Root access',
        'Dedicated Bandwidth',
    ]
}

export default function DedicatedHosting() {
    return (
        <div className="md:py-16 md:px-20">
            <div className="max-w-7xl mx-auto">
                <div 
                    className="flex 2xl:px-10 flex-col md:flex-row items-center"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    {/* Left Column - Hostings List */}
                    {/* <div className="space-y-6"> */}
                        <div className="mx-auto w-[90%] md:max-w-[305px]">
                            {hostings.map((hosting, index) => (
                                <div 
                                key={index} 
                                className="md:py-8 p-4 md:px-16 bg-gray-200 flex gap-2 md:gap-8 hover:bg-[var(--primary-color)] hover:text-white transition-all duration-200 items-center"
                                data-aos="slide-right"
                                data-aos-duration="800"
                                data-aos-delay={`${index * 200 + 400}`}
                                data-aos-easing="ease-out"
                            >
                                    <img src={hosting.img} alt={hosting.name} className="size-6 md:size-10 mb-2" />
                                    <h3 className="text-sm md:text-xl font-semibold">{hosting.name}</h3>
                                </div>
                            ))}
                        </div>
                    {/* </div> */}

                    {/* Center Column - Human Image */}
                    <div className="flex-1 flex items-center justify-center relative">
                        <img 
                            src={human} 
                            alt="Human" 
                            className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-delay="600"
                        />
                        <img 
                            src={human_service} 
                            alt="Human Service" 
                            className="absolute top-[85px] md:top-[150px] rounded-full right-[22px] md:right-[50px] h-auto max-w-[100px] md:max-w-[150px] drop-shadow-2xl shadow-gray-500/50"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="800"
                        />
                    </div>

                    {/* Right Column - Descriptions */}
                    <div className="space-y-6 max-w-[380px] shadow-[-5px_0_10px_-5px_rgba(0,0,0,0.05)] bg-white rounded-r-lg p-4">
                        <h2 
                            className="text-3xl font-bold text-gray-800"
                            data-aos="fade-left"
                            data-aos-duration="800"
                            data-aos-delay="1000"
                        >
                            {descriptions.title}
                        </h2>
                        <p 
                            className="text-gray-600 leading-relaxed"
                            data-aos="fade-left"
                            data-aos-duration="800"
                            data-aos-delay="1100"
                        >
                            {descriptions.description}
                        </p>
                        <div className="space-y-3">
                            {descriptions.list.map((item, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-start"
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay={`${1200 + index * 100}`}
                                >
                                    <Circle className="size-5 text-[var(--primary-color)] mt-1" />
                                    <span 
                                    className="ml-2 text-gray-700"
                                    data-aos="fade-left"
                                    data-aos-duration="600"
                                    data-aos-delay="100"
                                >
                                    {item}
                                </span>
                                </div>
                            ))}
                            <button
                                className="w-1/2 py-3 my-8 bg-[var(--primary-color)] text-white rounded-md font-semibold hover:bg-[var(--primary-hover-color)] cursor-pointer transition-colors duration-300"
                                data-aos="zoom-in"
                                data-aos-duration="800"
                                data-aos-delay="1600"
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

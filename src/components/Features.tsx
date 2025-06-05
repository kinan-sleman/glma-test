import { feature_1, feature_2, feature_3, feature_4, feature_5, feature_6 } from "../exports/images"

const features = [
    {
        title: "55 Second Provisioning",
        description: "Lorem Ipsom dolor sit amet, ecteur adipscing elit. Nullam aget",
        img: feature_1,
    },
    {
        title: "SSD Hard Drives",
        description: "Lorem Ipsom dolor sit amet, ecteur adipscing elit. Nullam aget",
        img: feature_2,
    },
    {
        title: "Simple Control Panel",
        description: "Lorem Ipsom dolor sit amet, ecteur adipscing elit. Nullam aget",
        img: feature_3,
    },
    {
        title: "KVM Virtualizer",
        description: "Lorem Ipsom dolor sit amet, ecteur adipscing elit. Nullam aget",
        img: feature_4,
    },
    {
        title: "Tier-1 Bandwidth",
        description: "Lorem Ipsom dolor sit amet, ecteur adipscing elit. Nullam aget",
        img: feature_5,
    },
    {
        title: "Amazing Hardware",
        description: "Lorem Ipsom dolor sit amet, ecteur adipscing elit. Nullam aget",
        img: feature_6,
    },
]

export default function Features() {
    return (
        <div className="py-4 md:py-16 bg-gray-100">
            <h3 
                className="text-sm text-[var(--text-color)] text-center mb-4 font-bold tracking-wider"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
            >
                HOSTING
            </h3>
            <h2 
                className="text-5xl font-light text-center text-[var(--text-color)] tracking-widest mb-16"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
            >
                FEATURES
            </h2>

            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {features.map((feature, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay={`${400 + index * 200}`}
                        data-aos-easing="ease-out"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <img 
                            src={feature.img} 
                            alt={feature.title} 
                            className="md:mb-6"
                            data-aos="zoom-in"
                            data-aos-duration="600"
                            data-aos-delay="100"
                        />
                        <div className="w-full pt-6 text-center">
                            <h3 
                                className="text-sm md:text-xl font-semibold text-[var(--text-color)] mb-2 uppercase"
                                data-aos="fade-up"
                                data-aos-duration="600"
                                data-aos-delay="200"
                            >
                                {feature.title}
                            </h3>
                            <p 
                                className="text-gray-600 text-[11px] md:text-sm"
                                data-aos="fade-up"
                                data-aos-duration="600"
                                data-aos-delay="300"
                            >
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

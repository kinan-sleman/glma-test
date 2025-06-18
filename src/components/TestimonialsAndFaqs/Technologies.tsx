import { technology_1, technology_2, technology_3 } from "../../exports/images"
import { useTranslation } from "react-i18next"


export default function Technologies() {
    const { t } = useTranslation();

    const technologies = [
        {
            title: t("Technology"),
            SubTitle: t("private networking"),
            img: technology_1,
        },
        {
            title: t("Technology"),
            SubTitle: t("Simple Api"),
            img: technology_2,
        },
        {
            title: t("Technology"),
            SubTitle: t("IPv6 Support"),
            img: technology_3,
        },
    ]
    return (
        <div className="py-4 md:py-16 md:px-8 bg-white">
            <div className="px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-12 max-w-7xl mx-auto">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-6 border border-gray-200"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay={`${index * 200 + 400}`}
                        data-aos-easing="ease-out"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <h3
                            className="text-xl font-semibold text-gray-800 uppercase"
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-delay="100"
                        >
                            {t(tech.title)}
                        </h3>
                        <p
                            className="text-2xl text-gray-500 tracking-wide mt-2 uppercase"
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-delay="200"
                        >
                            {t(tech.SubTitle)}
                        </p>
                        <img
                            src={tech.img}
                            alt={t(tech.title)}
                            className="size-40 object-contain my-6"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="300"
                        />
                        <button
                            className="w-1/2 py-3 my-8 bg-[var(--primary-color)] text-white rounded-md font-semibold hover:bg-[var(--primary-hover-color)] cursor-pointer transition-colors duration-300"
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-delay="400"
                        >
                            {t("Learn More")}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

import { useTranslation } from "react-i18next"

export default function PricingPlan() {
    const { t } = useTranslation();
    const plans = [
        {
            price: "$19",
            name: t("Starter Plan"),
            advantages: [
                t("10GB Bandwidth"),
                t("1TB Storage Space"),
                t("10 Free SUB-DOMAINS"),
            ],
        },
        {
            price: "$29",
            name: t("Business Plan"),
            advantages: [
                t("50GB Bandwidth"),
                t("5TB Storage Space"),
                t("50 Free SUB-DOMAINS"),
            ],
        },
        {
            price: "$39",
            name: t("Premium Plan"),
            advantages: [
                t("50GB Bandwidth"),
                t("10TB Storage Space"),
                t("500 Free SUB-DOMAINS"),
            ],
        },
    ];

    return (
        <div className="bg-[var(--primary-color)] h-auto md:h-[700px] pt-20 md:py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <h3 
                    className="text-sm text-white text-center mb-4 font-bold tracking-wider"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="200"
                >
                    {t("OUR PACKAGE &")}
                </h3>
                <h2 
                    className="text-5xl font-light text-center text-white tracking-widest mb-16"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                >
                    {t("PRICING PLAN")}
                </h2>
                <div className="flex flex-col md:flex-row h-full px-8 gap-1 md:gap-8 relative items-center overflow-hidden md:items-end transition-all duration-500">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={`w-full md:flex-1 overflow-hidden shadow-xl ${index === 1 ? 'bg-[var(--primary-hover-color)]' : 'bg-gray-200'}`}
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay={`${400 + index * 200}`}
                            data-aos-easing="ease-out"
                        >
                            {/* Price and Name Section */}
                            <div className={`${index === 1 ? 'h-50' : 'h-40'} flex flex-col items-center justify-center ${index === 1 ? 'bg-[var(--primary-hover-color)] text-white' : 'bg-gray-100 text-gray-800'
                                }`}>
                                <div className="flex justify-center items-start gap-1 mb-8">
                                    <span className=" self-start">{plan.price[0]}</span>
                                    <span className="text-4xl font-semibold">{plan.price.slice(1)}</span>
                                    <span className="text-sm self-end text-[var(--text-color)]">/MD</span>
                                </div>
                                <div className="relative">
                                    <div className="absolute top-[-5px] w-full h-[1px] bg-gray-200"></div>
                                    <div className="absolute bottom-[-5px] w-full h-[1px] bg-gray-200"></div>
                                    <h3 className="text-2xl uppercase  relative z-10 ">{plan.name}</h3>
                                </div>
                            </div>

                            <div className="bg-white pb-2 h-full flex flex-col">
                                <div className="px-8 py-8 flex flex-col items-center justify-between h-full">
                                    {plan.advantages.map((advantage, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-4 mb-6 text-gray-600 hover:text-gray-800 transition-colors duration-300"
                                        >

                                            <span 
                                        className="text-lg font-light"
                                        data-aos="fade-right"
                                        data-aos-duration="600"
                                        data-aos-delay="100"
                                    >
                                        {advantage}
                                    </span>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className={`cursor-pointer text-white mx-auto py-3 px-6 text-center font-semibold transition-all duration-300 ${index === 1 ? 'bg-[var(--primary-hover-color)] hover:bg-[var(--primary-color)] hover:scale-105' : 'bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] hover:scale-105'
                                        }`}
                                >
                                    <span 
                                    className="uppercase tracking-wider"
                                    data-aos="zoom-in"
                                    data-aos-duration="600"
                                    data-aos-delay="200"
                                >
                                    {t("Choose Plan")}
                                </span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

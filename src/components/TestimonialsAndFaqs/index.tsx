import Testimonials from "../Testimonials"
import Faqs from "./Faqs"
import { useTranslation } from "react-i18next"

export default function TestimonialsAndFaqs() {
    const { t } = useTranslation();
    return (
        <div className="py-4 md:py-16 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto px-3 md:px-6 flex flex-col md:flex-row items-start gap-12">
                <div 
                    className="md:w-1/2"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                >
                    <h3 
                        className="text-sm text-[var(--text-color)] font-extrabold tracking-wider uppercase"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                    >
                        {t("CUSTOMERS")}
                    </h3>
                    <h2 
                        className="md:text-5xl font-light text-[var(--text-color)] tracking-widest mb-16 uppercase"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="200"
                    >
                        {t("Testimonials")}
                    </h2>
                    <Testimonials 
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="300"
                    />
                </div>
                <div 
                    className="md:w-1/2"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                >
                    <h3 
                        className="text-sm text-[var(--text-color)] font-extrabold tracking-wider uppercase"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                    >
                        {t("CUSTOMERS")}
                    </h3>
                    <h2 
                        className="md:text-5xl font-light text-[var(--text-color)] tracking-widest mb-16 uppercase"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="200"
                    >
                        {t("FAQs")}
                    </h2>
                    <Faqs 
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="300"
                    />
                </div>
            </div>
        </div>
    )
}

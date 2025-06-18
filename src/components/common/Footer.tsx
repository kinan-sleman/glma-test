import {
    Mail,
    MessageCircle,
    PhoneCall,
    Circle,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
    const { i18n, t } = useTranslation();
    const products = [
        t("Webhosting"),
        t("Reseler Hosting"),
        t("VPS Hosting"),
        t("Wordpress Hosting"),
        t("Dedicated Hosting"),
        t("Windows Hosting"),
    ];
    const { language, setLanguage, flags } = useLanguage();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = e.target.value;
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
    };
    return (
        <div
            className="bg-[#0B1129]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
        >
            <div className="max-w-7xl mx-auto px-2 md:px-8 flex flex-col">
                {/* Chat Section */}
                <div
                    className="bg-[var(--primary-color)] w-full md:w-3/4 mx-auto px-6 py-8 flex flex-col md:flex-row justify-between text-white mb-8 divide-y md:divide-y-0 md:divide-x divide-white/30"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                >
                    <div className="flex gap-3 items-center px-4 py-2 md:py-0">
                        <PhoneCall />
                        <h2 className="font-bold">{t("123-456-7890")}</h2>
                    </div>
                    <div className="flex gap-3 items-center px-4 py-2 md:py-0">
                        <Mail />
                        <h2 className="font-bold">{t("INFO@HOSTPRESS.COM")}</h2>
                    </div>
                    <div className="flex gap-3 items-center px-4 py-2 md:py-0">
                        <MessageCircle />
                        <h2 className="font-bold">{t("CHAT WITH US")}</h2>
                    </div>
                </div>

                {/* About + Products */}
                <div
                    className="flex gap-10 flex-col md:flex-row justify-between mb-6"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="400"
                >
                    <div
                        className="md:w-1/2 flex flex-col gap-3"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                    >
                        <div className="flex items-center">
                            <div className="relative flex items-center justify-center w-10 h-10">
                                <MessageCircle
                                    fill="#2277eb"
                                    stroke="#2277eb"
                                    size={40}
                                    strokeWidth={1.5}
                                />
                                <span
                                    className="absolute text-white font-bold"
                                    style={{
                                        fontSize: "20px",
                                        lineHeight: "1",
                                    }}
                                >
                                    H
                                </span>
                            </div>
                            <span className="text-2xl font-bold mb-1 text-white">ostpress</span>
                        </div>
                        <p className="text-[var(--text-color)]">
                            {t("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus assumenda debitis, totam doloremque sequi necessitatibus unde. Eius, nisi ex libero corrupti ducimus ipsum molestias harum ipsam placeat voluptas. Molestias!")}
                        </p>
                    </div>
                    <div
                        className="md:w-1/2"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="200"
                    >
                        <h2 className="text-2xl font-bold mb-1 text-white">{t('PRODUCT')}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-3 gap-4">
                            {products.map((item, index) => (
                                <div key={index} className="flex gap-2">
                                    <Circle className="size-5 text-[var(--primary-color)] mt-1" />
                                    <p className="text-[var(--text-color)]">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className="border-t border-gray-700 !grid md:grid-cols-3 grid-cols-6 text-[var(--text-color)]"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="500"
                >
                    {/* Language Selector */}
                    <div
                        className="flex py-6 col-span-3 md:col-span-1 items-center gap-2 px-4 border-b md:border-b-0 md:border-r border-gray-700 border-r md:border-0"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                    >
                        <img
                            src={flags[language as keyof typeof flags]}
                            alt="flag"
                            className="w-5 h-4 object-cover"
                        />
                        <select
                            id="lang"
                            value={language}
                            onChange={handleChange}
                            className="bg-transparent text-white border-none focus:outline-none text-sm"
                        >
                            <option value="en" className="text-black">{t('English')}</option>
                            <option value="ar" className="text-black">{t('العربية')}</option>
                        </select>
                    </div>

                    {/* Social Icons */}
                    <div
                        className="flex py-6 col-span-3 md:col-span-1 items-center justify-center gap-4 px-4 border-b md:border-b-0 md:border-r border-gray-700"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="200"
                    >
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                            <div
                                key={idx}
                                className="bg-[#121A3E] size-[35px] rounded-full flex items-center justify-center"
                            >
                                <Icon className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" />
                            </div>
                        ))}
                    </div>

                    {/* Newsletter */}
                    <div
                        className="flex col-span-6 md:col-span-1 py-6 justify-center px-4 mt-6 md:mt-0"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="300"
                    >
                        <div className="flex gap-3 items-start md:items-center w-full max-w-xl">
                            <div className="flex flex-col">
                                <h2 className="text-white font-bold">{t('SUBSCRIBE')}</h2>
                                <p className="text-[var(--text-color)] text-sm">{t("Newsletter")}</p>
                            </div>
                            <div className="flex items-center bg-[#121A3E] rounded overflow-hidden flex-grow">
                                <input
                                    type="email"
                                    placeholder={t('Email Address')}
                                    className="px-4 py-2 outline-none text-sm bg-transparent text-white placeholder:text-gray-400 w-full"
                                />
                                <button className="px-4 text-white font-bold h-full">
                                    {t('Go')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div
                className="bg-[#080D20] mt-10 py-6"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
            >
                <p className="text-center text-[var(--text-color)]">
                    {t('© 2025 Hostpress. All rights reserved.')}
                </p>
            </div>
        </div>
    );
}

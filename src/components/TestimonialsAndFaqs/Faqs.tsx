import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

interface Faq {
    question: string
    answer: string
}
export default function Faqs() {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState<number | null>(0)

    const faqs: Faq[] = [
        {
            question: t("What hosting plans do you offer?"),
            answer: t("We offer a variety of hosting plans to suit different needs, from shared hosting to dedicated servers. Check our pricing page for more details.")
        },
        {
            question: t("What is your uptime guarantee?"),
            answer: t("We guarantee 99.99% uptime for all our hosting services. Our infrastructure is built for maximum reliability.")
        },
        {
            question: t("How do I get support?"),
            answer: t("Our 24/7 support team is available via chat, email, and phone. Response times are typically under 15 minutes during business hours.")
        },
        {
            question: t("Can I upgrade my plan later?"),
            answer: t("Absolutely! You can upgrade your hosting plan at any time through your account dashboard.")
        }
    ]
    const toggleExpand = (index: number) => {
        setExpanded((prev: number | null) => prev === index ? null : index)
    }

    return (
        <div
            className="space-y-4"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
        >
            {faqs.map((faq, index) => (
                <motion.div
                    key={index}
                    className="border-b bg-[#f2f2f2] border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.1
                    }}
                >
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleExpand(index)}
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 p-2">{t(faq.question)}</h3>
                        <motion.div
                            className="w-5 h-5 mr-2"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {expanded === index ? (
                                <Minus className="w-full h-full text-gray-600" />
                            ) : (
                                <Plus className="w-full h-full text-gray-600" />
                            )}
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{
                            height: 0,
                            opacity: 0,
                            y: 20
                        }}
                        animate={{
                            height: expanded === index ? "auto" : 0,
                            opacity: expanded === index ? 1 : 0,
                            y: expanded === index ? 0 : 20
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut"
                        }}
                        className="overflow-hidden bg-gray-100"
                    >
                        <p className="text-gray-600 mt-2 p-2">{t(faq.answer)}</p>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    )
}

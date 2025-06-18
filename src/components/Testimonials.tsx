import { motion, AnimatePresence } from "framer-motion"
import { human } from "../exports/images"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"

interface Testimonial {
    number: string
    description: string
}

export default function Testimonials() {
    const { t } = useTranslation();
    const testimonials: Testimonial[] = [
        {
            number: "01",
            description: t("Working with Hostpress has been a game-changer for our business. Their customer service is exceptional and they truly understand our needs. The platform is user-friendly and has helped us streamline our operations significantly."),
        },
        {
            number: "02",
            description: t("I've never worked with a more professional and reliable hosting company. Their technical support is available 24/7 and they always respond promptly. The uptime is outstanding and their security measures are top-notch."),
        },
        {
            number: "03",
            description: t("Hostpress has exceeded our expectations in every way. Their pricing is competitive and their features are unmatched. The performance of our websites has improved dramatically since switching to their services."),
        },
    ]

    const [index, setIndex] = useState(0)
    const current = testimonials[index]

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % testimonials.length)
    }

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div 
            className="w-full bg-gray-200 flex flex-col md:flex-row items-center gap-2 min-h-[560px] md:min-h-auto"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
        >
            <img 
                src={human} 
                className="max-h-[330px]"
                alt=""
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="300"
            />
            <div className="relative w-full">
                <div className="min-h-[100px] pr-5 max-h-[330px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current.number}
                            initial={{ 
                                rotateY: 90, 
                                opacity: 0, 
                                y: 20 
                            }}
                            animate={{ 
                                rotateY: 0, 
                                opacity: 1, 
                                y: 0 
                            }}
                            exit={{ 
                                rotateY: -90, 
                                opacity: 0, 
                                y: -20 
                            }}
                            transition={{ 
                                duration: 0.5, 
                                ease: "easeOut"
                            }}
                            className="flex gap-2 p-4 rounded "
                        >
                            <span className="text-4xl font-bold text-gray-600 border-r border-gray-600 md:border-0 h-fit pr-2 md:pr-0">{current.number}</span>
                            <motion.p 
                                className="text-gray-600 line-clamp-6 overflow-hidden" 
                                title={t(current.description)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {t(current.description)}
                            </motion.p>
                        </motion.div>

                        <div className="flex items-center justify-end gap-3 mt-4">
                            <motion.button 
                                onClick={handlePrev}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-6 h-6 text-gray-700 hover:text-black transition flex items-center justify-center"
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </motion.button>
                            <motion.button 
                                onClick={handleNext}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-6 h-6 text-gray-700 hover:text-black transition flex items-center justify-center"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

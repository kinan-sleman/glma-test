import { motion, useAnimation, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface CounterProps {
    target: number;
    title: string;
}

const Counter = ({ target, title }: CounterProps) => {
    const { t } = useTranslation();
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });


    const count = useMotionValue(0);

    const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

    useEffect(() => {
        if (inView) {

            controls.start({
                scale: [0, 1],
                opacity: [0, 1],
                transition: {
                    duration: 0.5,
                    ease: "easeOut",
                },
            });
            const numberAnimation = animate(count, target, {
                duration: 2,
                ease: "easeOut",
            });
            return () => {
                numberAnimation.stop();
            };
        }
    }, [controls, inView, target, count]);

    return (
        <div ref={ref} className="relative p-8 text-center">

            <motion.div
                initial={{ opacity: 0 }}
                animate={controls}
                className="relative z-10"
            >

                <motion.div
                    animate={{
                        scale: [0, 1],
                        opacity: [0, 1],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                    }}
                    className="mb-4"
                >

                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 2,
                            ease: "easeOut",
                        }}
                        className="text-4xl font-bold text-black"
                    >
                        {rounded}
                    </motion.span>
                </motion.div>
                <motion.div
                    animate={{
                        y: [20, 0],
                        opacity: [0, 1],
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                    className="text-lg text-gray-600 uppercase tracking-wider"
                >
                    {t(title)}
                </motion.div>
            </motion.div>

            <div className="absolute inset-0 opacity-50 pointer-events-none"></div>
        </div>
    );
};
export default function Counters() {
    const { t } = useTranslation();
    const countersData = [
        { target: 5000, title: t("Happy Clients") },
        { target: 3000, title: t("Servers") },
        { target: 2000, title: t("DEDICATED STAFF") },
        { target: 20, title: t("AWARDS WDN") },
    ];
    return (
        <div className="max-w-7xl mx-auto px-8 py-10 bg-white">
            <div className="w-full">
                <div className="grid grid-cols-2 lg:grid-cols-4 relative">
                    {countersData.map((counter, index) => (
                        <div
                            key={index}
                            className={`relative ${index === 0 ? 'border-r' : index === 1 ? 'border-b' : index === 2 ? 'border-t' : index === 3 ? 'border-l' : ''} border-gray-200 md:border-0`}
                        >
                            <Counter {...counter} />
                            {index < countersData.length - 1 && (
                                <div className="absolute top-0 right-0 h-full w-px bg-gray-200 hidden lg:block" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
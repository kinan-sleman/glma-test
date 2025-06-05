import { technology_globally } from "../exports/images";

export default function TechnlogyGlobally() {
    return (
        <div className="py-16 bg-gray-100">
            <h3 
                className="text-sm text-[var(--text-color)] text-center font-bold tracking-wider uppercase"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
            >
                Technology
            </h3>
            <h2 
                className="text-5xl font-light text-center text-[var(--text-color)] tracking-widest mb-16 uppercase"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
            >
                Transfer Globally
            </h2>

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-12">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={technology_globally}
                        alt="Technology Globally"
                        className="max-w-full h-auto rounded-xl"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                    />
                </div>

                <div 
                    className="w-full md:w-1/2"
                    data-aos="slide-left"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                >
                    <h3 
                        className="text-2xl font-semibold text-[var(--text-color)] mb-4 uppercase tracking-wide"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                    >
                        Technology Globally
                    </h3>
                    <p 
                        className="text-gray-600 text-sm leading-relaxed"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="200"
                    >
                        Experience seamless global technology services with our advanced infrastructure.
                        Our cutting-edge solutions connect businesses worldwide, ensuring reliable performance
                        and exceptional user experience. From cloud computing to data centers, we provide
                        comprehensive solutions tailored to your needs. 
                    </p>
                    <button
                        className="w-fit py-2 px-3 my-8 bg-[var(--primary-color)] text-white font-semibold hover:bg-[var(--primary-hover-color)] cursor-pointer transition-colors duration-300"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="300"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

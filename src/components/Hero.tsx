import { hero } from "../exports/images";

export default function Hero() {
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center p-8"
            style={{ backgroundImage: `url(${hero})` }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
        >
            <div className="max-w-7xl mx-auto md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-white">
                    <h1 
                        className="text-6xl font-bold mb-4"
                        data-aos="fade-up"
                        data-aos-duration="800" 
                        data-aos-delay="300"
                    >
                        50% OFF
                    </h1>
                    <h2 
                        className="text-3xl font-semibold mb-6"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="400"
                    >
                        ON HOSTING
                    </h2>
                    <p 
                        className="text-lg text-[var(--text-color)] hidden md:block"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="500"
                    >
                        High-growth businessess & moderate web traffic, you can buy our vps hosting with on ...
                    </p>
                </div>
                <div className="flex justify-end">
                    <div 
                        className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full"
                        data-aos="slide-left"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 border-b-2 border-gray-300 mb-4 outline-none focus:border-primary"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border-b-2 border-gray-300 mb-4 outline-none focus:border-primary"
                        />
                        <textarea
                            placeholder="Message"
                            className="w-full p-3 border-b-2 border-gray-300 mb-4 outline-none focus:border-primary resize-y min-h-[150px]"
                        />
                        <button
                            className="w-1/2 py-3 bg-[var(--primary-color)] text-white rounded-md font-semibold hover:bg-[var(--primary-hover-color)] cursor-pointer transition-colors duration-300"
                            data-aos="zoom-in"
                            data-aos-duration="800"
                            data-aos-delay="700"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

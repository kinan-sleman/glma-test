import Marquee from "react-fast-marquee";
import { semi_services } from '../exports/images';

export default function SemiService() {
    return (
        <div className="w-full bg-[#fafafa] overflow-hidden md:py-4">
            <Marquee speed={50} gradient={false} pauseOnHover={true}>
                <img
                    src={semi_services}
                    className="h-20 object-contain"
                    alt="Semi Services"
                />
            </Marquee>
        </div>
    )
}

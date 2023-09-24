import { socialIcons } from "@/app/utils/landing/landing";
import Image from "next/image";

export const Footer = () => {
    return (
        <div className="flex w-full flex-col items-center bg-brand-app-orange px-6 py-20 md:px-12 lg:px-20 xl:px-32">
            <div className="font-chillax text-4xl font-bold md:text-5xl xl:text-6xl">See ya EthersEatrz!</div>
            <div className="mt-16 h-[1px] w-full bg-brand-black"></div>
            <div className="flex w-full items-center justify-between py-4">
                <div className="font-chillax text-sm font-medium text-brand-black/60 md:text-base xl:text-lg">© EthersEat. all rights reserved</div>
                <div className="flex items-center gap-2 md:gap-3">
                    {socialIcons.map((icon, i) => (
                        <Image key={i} src={icon} alt={icon} width={i === 4 ? 16 : 20} height={i === 4 ? 16 : 20} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;

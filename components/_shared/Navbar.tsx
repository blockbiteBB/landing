import Image from "next/image";
import Link from "next/link";
import GenericButton from "./GenericButton";
import BurgerIcon from "./BurgerIcon";
import { navMenu } from "@/app/utils/landing/landing";

const NavBar = () => {
    return (
        <div className="grid w-full grid-cols-2 items-center gap-5 bg-brand-black px-6 py-5 text-white md:px-12 lg:grid-cols-3 lg:px-20 xl:px-32">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <div className="flex items-center gap-2">
                        <div className="flex w-14 flex-col items-center justify-center text-center font-chillax text-4xl font-bold leading-4">
                            <span className="rotate-90 text-[#FFDB58]">B</span>
                            <span className="h-2 w-8 rounded-full bg-red-600"></span>
                            <div className="-rotate-90 text-[#FF914D]">B</div>
                        </div>
                        <div className="font-chillax text-xl font-bold tracking-wider xl:text-2xl">EthersEat</div>
                    </div>
                </Link>
            </div>
            <div className="hidden items-center justify-between gap-3 text-sm font-semibold capitalize lg:flex lg:text-base">
                {navMenu.map((item) => (
                    <div key={item} className="transform cursor-pointer transition-transform hover:scale-110 hover:text-brand-app-orange">
                        {item}
                    </div>
                ))}
            </div>
            <div className="hidden items-center justify-end gap-2.5 lg:flex xl:gap-5">
                <a target="_blank" href="https://ethereats-dapp.vercel.app/" rel="noopener noreferrer">
                    <GenericButton border={true} className="bg-transparent text-xs font-semibold !text-white lg:text-sm xl:text-base">
                        Launch App
                    </GenericButton>
                </a>

                <GenericButton border={true} className="!border-brand-app-orange bg-brand-app-orange text-xs font-semibold lg:text-sm xl:text-base">
                    Apply
                </GenericButton>
            </div>
            <div className="flex justify-end lg:hidden">
                <div className="flex aspect-square w-10 cursor-pointer items-center justify-center self-end rounded-full border-2 border-white shadow-custom-shadow">
                    <BurgerIcon />
                </div>
            </div>
        </div>
    );
};

export default NavBar;

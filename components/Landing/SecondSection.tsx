import { highlights } from "@/app/utils/landing/landing";
import Image from "next/image";

const SecondSection = () => {
    return (
        <div className="w-full bg-[#F0F0F0] px-6 py-20 text-brand-black md:px-12 lg:px-20 xl:px-32">
            <div className="font-sourceCodePro text-lg font-normal uppercase xl:text-xl">are you gonna use EthersEat?</div>
            <div className="mt-2 font-chillax text-3xl font-semibold leading-[43px] md:text-4xl xl:text-5xl xl:leading-[58px]">
                Changing the way web3 people
                <br />
                order, deliver and eat food
            </div>
            <div className="gird-cols-1 mt-14 grid gap-14 md:grid-cols-3 md:gap-10 lg:gap-20">
                {highlights.map((highlight, i) => (
                    <div key={i} className="flex flex-col gap-6 lg:gap-10">
                        <div className="relative">
                            <Image src={highlight.img} alt={highlight.title} className="w-full" width={0} height={0} />
                            {i === 1 && <img src="/brand/landing/highlights/aave.png" alt="aave logo" className="absolute left-20 top-16 w-24" />}
                            {i === 1 && (
                                <img
                                    src="/brand/landing/highlights/eth-global.png"
                                    alt="eth global logo"
                                    className="absolute left-40 top-16 aspect-square w-24 rounded-full bg-white p-1"
                                />
                            )}
                            {i === 1 && (
                                <img
                                    src="/brand/landing/highlights/uniswap.png"
                                    alt="uniswap logo"
                                    className="absolute left-12 top-36 aspect-square w-24 rounded-full bg-white p-1"
                                />
                            )}
                        </div>
                        <div className="text-xl font-bold xl:text-2xl">{highlight.title}</div>
                        <div className="text-lg font-normal xl:text-xl">{highlight.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecondSection;

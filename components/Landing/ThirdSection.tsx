import Image from "next/image";
import GenericButton from "../_shared/GenericButton";

const ThirdSection = () => {
    const items = [
        "Create an order with the amount you wish to spend",
        "The order is sent to the blockchain",
        "As a block miner the delivery driver will compete to deliver your order based on the fee",
        "Less fee for both",
        "Both win!",
    ];

    const leftPart = () => (
        <div className="w-full md:w-1/2">
            <div className="font-sourceCodePro text-lg uppercase xl:text-xl">coming up</div>
            <div className="mt-3 font-chillax text-3xl font-semibold leading-[58px] md:text-4xl xl:text-5xl">Food delivery solution</div>
            <div className="mt-3 text-xl font-bold xl:text-2xl">No more high fees</div>
            <div className="mt-5 text-lg font-medium leading-[33px] xl:text-xl">
                We are building a food delivery solution that will be powered by the blockbite token. This will allow us to offer the lowest fees in
                the market. Giving the power back to delivery drivers, restaurants and customers.
            </div>
            <div className="mt-6 text-lg font-bold xl:text-xl">How it works?</div>
            <ul className="mt-5 list-disc pl-5">
                {items.map((item, index) => (
                    <li key={index} className="ml-5 mt-2.5 text-lg font-medium leading-[33px] xl:text-xl">
                        {item}
                    </li>
                ))}
            </ul>
            <div className="mt-16 flex items-center gap-4">
                <GenericButton border={true} className="!border-black font-semibold">
                    Learn more
                </GenericButton>
                <GenericButton border={true} className="!border-brand-app-green bg-brand-app-green font-semibold">
                    Apply
                </GenericButton>
            </div>
        </div>
    );

    const rightPart = () => (
        <div className="mb-14 flex w-full items-center justify-center md:mb-0 md:w-1/2">
            <div className="relative">
                <Image src="/brand/food.png" className="aspect-square rounded-full" width={370} height={370} alt="barcelona" />
                <GenericButton className="absolute -right-4 bottom-14 w-fit -rotate-[8deg] bg-btn font-sourceCodePro font-semibold uppercase !text-white md:-right-10">
                    #blockbiteETH
                </GenericButton>
                <Image
                    src="/brand/arrows/hero-arrow.svg"
                    alt="airplane img"
                    width={61}
                    height={56}
                    className="absolute -bottom-12 left-5 -rotate-[35deg] md:-bottom-1 md:-left-8"
                />
                <div className="absolute -bottom-28 -left-6 max-w-[200px] rotate-[9deg] text-center font-sourceCodePro text-xl uppercase text-brand-black md:-bottom-20 md:-left-20">
                    order your favorite food
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex w-full flex-col items-center gap-16 bg-[#F9F9F9] px-6 pb-28 pt-20 md:flex-row md:px-20 lg:gap-20 lg:px-32 xl:gap-28 xl:px-52">
            {leftPart()}
            {rightPart()}
        </div>
    );
};

export default ThirdSection;

import Image from "next/image";

const RightPart = () => {
    return (
        <div className="relative my-12 md:my-0">
            <Image src="/brand/food.png" alt="food img" className="aspect-square rounded-full" width={310} height={310} />
            <Image
                src="/brand/arrows/hero-arrow.svg"
                alt="airplane img"
                width={61}
                height={56}
                className="absolute -bottom-5 -rotate-[15deg] md:-left-14 md:bottom-10 md:-rotate-[5deg]"
            />
            <div className="absolute -bottom-20 -left-10 max-w-[200px] rotate-[9deg] text-center font-sourceCodePro text-xl uppercase text-brand-black md:-bottom-3 md:-left-40">
                order your favorite food
            </div>
        </div>
    );
};

export default RightPart;

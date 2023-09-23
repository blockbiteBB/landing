import GenericButton from "@/components/_shared/GenericButton";

const LeftPart = () => {
    return (
        <div className="w-full md:w-2/3">
            <div className="max-w-[900px] font-chillax text-3xl font-semibold leading-[40px] text-white md:text-5xl md:leading-[60px] xl:text-7xl xl:leading-[70px]">
                The Food Deliver
                <br />
                for Web3 Era
            </div>
            <div className="mt-8 flex items-center gap-3 md:mt-10 md:justify-normal md:gap-6">
                <GenericButton border={true} className="!border-black">
                    Learn more
                </GenericButton>
                <GenericButton border={true} className="!border-brand-app-orange md:bg-brand-app-orange bg-[#FFDB58]">
                    Apply
                </GenericButton>
            </div>
        </div>
    );
};

export default LeftPart;

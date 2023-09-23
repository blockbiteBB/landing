const LogoBanner = () => {
    return (
        <div className="flex overflow-hidden bg-brand-black py-5 text-white">
            <div className="flex animate-revertScrollEffect space-x-10 whitespace-nowrap">
                {Array(60)
                    .fill(0)
                    .map((_, idx) => {
                        return (
                            <div
                                key={idx}
                                className="flex flex-col items-center justify-center border-white text-center font-chillax text-4xl font-bold leading-4 xl:text-5xl xl:leading-6"
                            >
                                <span className="rotate-90 text-[#FFDB58]">B</span>
                                <span className="h-2 w-8 rounded-full bg-red-600 xl:w-10"></span>
                                <div className="-rotate-90 text-[#FF914D]">B</div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default LogoBanner;

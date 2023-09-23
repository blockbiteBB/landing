const Banner = () => {
    return (
        <div className="flex w-full overflow-hidden bg-brand-black text-white">
            <div className="flex animate-scrollEffect space-x-4 whitespace-nowrap">
                {Array(60)
                    .fill(0)
                    .map((_, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-4">
                            <div className="aspect-square w-3 rounded-full bg-hero"></div>
                            <div className="font-sourceCodePro text-xl font-medium uppercase">decentralized food delivery</div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Banner;

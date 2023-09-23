import NavBar from "../../_shared/Navbar";
import RightPart from "./RightPart";
import LeftPart from "./LeftPart";
import Banner from "../Banner";

const FirstSection = () => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-between rounded-2xl">
            <NavBar />
            <div className="flex w-full flex-col items-center bg-hero px-6 py-14 pb-20 md:flex-row md:flex-row md:px-12 lg:px-20 xl:px-32">
                <LeftPart />
                <RightPart />
            </div>
            <Banner />
        </div>
    );
};

export default FirstSection;

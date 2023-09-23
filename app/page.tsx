import FirstSection from "@/components/Landing/FirstSection/FirstSection";
import LogoBanner from "@/components/Landing/LogoBanner";
import SecondSection from "@/components/Landing/SecondSection";
import ThirdSection from "@/components/Landing/ThirdSection";
import Footer from "@/components/Landing/Footer";
import BurgerMenuModal from "@/components/Landing/BurgerMenuModal";

const Home = () => {
    return (
        <div className="min-h-[100vh] min-w-[100vw] bg-white">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <LogoBanner />
            <Footer />
            <BurgerMenuModal />
        </div>
    );
};

export default Home;

import { navMenu } from "@/app/utils/landing/landing";
import MobileModal from "../_shared/MobileModal";
import GenericButton from "../_shared/GenericButton";

const BurgerMenuModal = () => {
    return (
        <MobileModal>
            <div className="flex flex-col gap-6 capitalize">
                {navMenu.map((menu, index) => (
                    <div key={index} className="text-center text-xl font-semibold text-brand-black">
                        {menu}
                    </div>
                ))}
                <div className="flex flex-col items-center gap-5">
                    <GenericButton border={true} className="w-40 !border-black bg-black text-base font-semibold !text-white">
                        Launch App
                    </GenericButton>
                    <GenericButton border={true} className="!border-brand-app-orange bg-brand-app-orange w-40 text-base font-semibold">
                        Apply
                    </GenericButton>
                </div>
            </div>
        </MobileModal>
    );
};

export default BurgerMenuModal;

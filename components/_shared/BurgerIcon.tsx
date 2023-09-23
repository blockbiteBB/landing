"use client";

import { useModal } from "@/app/contexts/ModalContext";

const BurgerIcon = () => {
    const [{ mobileModalOpen }, dispatch] = useModal();
    const handleClick = () => {
        mobileModalOpen ? dispatch({ type: "CLOSE_MOBILE_MODAL" }) : dispatch({ type: "OPEN_MOBILE_MODAL" });
    };

    return (
        <div onClick={handleClick} className="flex flex-col gap-1 lg:hidden">
            <div
                className={`h-[3px] w-6 transform rounded bg-white transition duration-500 ${mobileModalOpen ? "translate-y-[3px] rotate-45" : ""}`}
            ></div>
            <div className={`h-[3px] w-6 transform self-end rounded bg-white transition duration-500 ${mobileModalOpen ? "hidden" : ""}`}></div>
            <div
                className={`h-[3px] w-6 transform rounded bg-white transition duration-500 ${mobileModalOpen ? "-translate-y-1 -rotate-45" : ""}`}
            ></div>
        </div>
    );
};

export default BurgerIcon;

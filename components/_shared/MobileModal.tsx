"use client";

import { useModal } from "@/app/contexts/ModalContext";
import { useEffect } from "react";

interface MobileModalProps {
    children: React.ReactNode;
    title?: string;
}

const MobileModal = ({ children, title }: MobileModalProps) => {
    const [{ mobileModalOpen }] = useModal();

    useEffect(() => {
        if (mobileModalOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [mobileModalOpen]);

    return (
        <div
            className={`absolute bottom-0 left-0 z-10 w-full transform rounded-t-2xl bg-white p-5 py-10 shadow-custom-shadow transition-all duration-300 lg:hidden ${
                mobileModalOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
        >
            {children}
        </div>
    );
};

export default MobileModal;

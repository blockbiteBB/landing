import { State } from "./store";

export type Action = { type: "OPEN_MOBILE_MODAL" } | { type: "CLOSE_MOBILE_MODAL" };

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "OPEN_MOBILE_MODAL":
            return { ...state, mobileModalOpen: true };
        case "CLOSE_MOBILE_MODAL":
            return { ...state, mobileModalOpen: false };

        default:
            throw "Bad action type";
    }
};

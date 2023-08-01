import { atom } from "recoil";

export const activeImgAtom = atom({
    key:'activeImg',
    default: ''
});

export const qrCodeAtom = atom({
    key:'qrCode',
    default: ''
});
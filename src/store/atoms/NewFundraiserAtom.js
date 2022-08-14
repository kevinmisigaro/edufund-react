import { atom } from "jotai";

export const fundraiserAtom = atom({
    degree: "",
    level: "",
    amount: "",
    course: "",
    destination: "",
    background: "",
    currency: "",
    country: "",
    reason: "",
    image: "",
    video: "",
    offer: "",
    title: "",
    story: "",
    repay: "",
    timeline: "",
    ageRange: "",
    grade: ""
});

export const fundraiserImageAtom = atom(null);

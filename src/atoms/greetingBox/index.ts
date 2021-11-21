import { atom } from "jotai";

export const nameAtom = atom("");

export const isEmptyNameAtom = atom((get) => get(nameAtom).length === 0);

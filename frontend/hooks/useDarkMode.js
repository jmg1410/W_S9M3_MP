import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
    const [dark, setDark] = useLocalStorage(false)
    return [dark, setDark]
}
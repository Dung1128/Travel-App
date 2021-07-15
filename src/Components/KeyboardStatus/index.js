import React, { useState, useRef } from "react";
import { Keyboard } from "react-native";

/**
 * Returns if the keyboard is open / closed
 * 
 * @return {bool} isOpen
 */
export function useKeyboardStatus() {
    const [isOpen, setIsOpen] = useState(false);
    const keyboardShowListener = useRef(null);
    const keyboardHideListener = useRef(null);

    useEffect(() => {
        keyboardShowListener.current = Keyboard.addListener('keyboardDidShow', () => setIsOpen(true));
        keyboardHideListener.current = Keyboard.addListener('keyboardDidHide', () => setIsOpen(false));

        return () => {
            keyboardShowListener.current.remove();
            keyboardHideListener.current.remove();
        }
    })

    return isOpen;
}
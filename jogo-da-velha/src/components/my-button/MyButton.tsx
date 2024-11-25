import { useState } from "react";
import marcar from "./marcar";
import style from "./myButton.module.css";

interface buttonProps {
    player:number,
    setPlayer:(number:number) => void
}

export default function MyButton(buttonProps: buttonProps) {
    const [text, setText] = useState("");

    return (
        <button 
            onClick={() => marcar(setText, buttonProps.player, buttonProps.setPlayer)}
            className={style.myButton}
        >
            <span>{text}</span>
        </button>
    )
}
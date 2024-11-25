import { useState } from "react";
import MyButton from "../my-button/MyButton";
import style from "./tableGame.module.css";

export default function TableGame() {
    const [player, setPlayer] = useState(0)

    return(
        <article className={style.tableGame}>
            <div>
                <h1>jogador {player}</h1>
            </div>
            <div>
                <MyButton player={player} setPlayer={setPlayer}/>
                <MyButton player={player} setPlayer={setPlayer}/>
                <MyButton player={player} setPlayer={setPlayer}/>
            </div>
            <div>
                <MyButton player={player} setPlayer={setPlayer}/>
                <MyButton player={player} setPlayer={setPlayer}/>
                <MyButton player={player} setPlayer={setPlayer}/>
            </div>
            <div>
                <MyButton player={player} setPlayer={setPlayer}/>
                <MyButton player={player} setPlayer={setPlayer}/>
                <MyButton player={player} setPlayer={setPlayer}/>
            </div>
        </article>
    )
}
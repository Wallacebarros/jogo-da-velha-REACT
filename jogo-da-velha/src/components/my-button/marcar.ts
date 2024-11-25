export default function marcar(setText:(msg:string) => void, player:number, setPlayer:(number:number)=>void) {
    if (player === 1) {
        setText("X")
        setPlayer(0)
    } else {
        setText("O")
        setPlayer(1)
    }
}
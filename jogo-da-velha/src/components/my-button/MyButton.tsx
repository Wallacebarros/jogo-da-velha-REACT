interface button {
    text: string;
    onButtonClick: () => void;
}

export default function MyButton(button:button) {
    return (
        <button onClick={button.onButtonClick}>{button.text}</button>
    )
}
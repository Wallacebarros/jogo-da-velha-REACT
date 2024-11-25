import { useState } from "react";
import MyButton from "./components/my-button/MyButton";

export default function App() {
const [content, setContent] = useState(0);

  return (
    <main>
      <MyButton text="-" onButtonClick={()=>setContent(content - 1)}/>
      <p>{content}</p>
      <MyButton text="+" onButtonClick={()=>setContent(content + 1)}/>
    </main>
  )
}
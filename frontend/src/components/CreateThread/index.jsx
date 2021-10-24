import { useState } from "react";
import Form from "./Form";

const style = { width: "768px" };

export default function CreateThread() {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => setClicked(true)}
      className="border border-red-600 border-opacity-50 rounded p-3 font-sans font-semibold text-red-600 max-w-screen-md"
      style={style}
    >
      Новое обсуждение
      {clicked && <Form />}
    </button>
  );
}
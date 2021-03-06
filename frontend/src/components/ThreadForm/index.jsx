import { useState } from "react";
import Form from "./Form";

export default function ThreadForm() {
  const [clicked, setClicked] = useState(false);
  const closeForm = () => setClicked(false);

  return (
    <button
      onClick={() => setClicked(true)}
      className="border border-red-600 border-opacity-50 rounded p-3 font-sans font-semibold text-red-600 max-w-screen-md w-full"
    >
      Новое обсуждение
      {clicked && <Form closeForm={closeForm} />}
    </button>
  );
}

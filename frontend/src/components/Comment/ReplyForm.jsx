import { useState } from "react";
import { useDispatch } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
import { createReply } from "../../store/actions/thread";

export default function ReplyForm({ parentId, closeForm }) {
  const [replyText, setReplyText] = useState("");

  const dispatch = useDispatch();

  const onChange = (event) => setReplyText(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    const reply = fromParams(replyText, parentId);
    dispatch(createReply(reply));
    closeForm();
  };

  return (
    <form className="pt-2" onSubmit={onSubmit}>
      <TextareaAutosize
        autoFocus
        id="commentText"
        placeholder="Введите ответ..."
        className="w-full border border-gray-300 rounded shadow-sm font-sans focus:border-red-300 focus:ring-red-300"
        onChange={onChange}
      />
      <input
        type="submit"
        className="w-full border border-red-300 rounded cursor-pointer py-1 font-sans text-white bg-red-600"
      />
    </form>
  );
}

function fromParams(content, parentId) {
  return {
    content: content,
    parent_id: parentId,
  };
}

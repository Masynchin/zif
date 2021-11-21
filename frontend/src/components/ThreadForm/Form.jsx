import { useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { insertTopic } from "../../store/actions/topic";

export default function Form({ closeForm }) {
  const { topic } = useParams();
  const [commentText, setCommentText] = useState("");

  const dispatch = useDispatch();

  const onChange = (event) => setCommentText(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    const comment = fromParams(commentText, topic);
    dispatch(insertTopic(comment));
    closeForm();
  };

  return (
    <form className="pt-2" onSubmit={onSubmit}>
      <textarea
        id="commentText"
        placeholder="Напишите стартовый комментарий..."
        className="w-full border border-gray-300 rounded shadow-sm focus:border-red-300 focus:ring-red-300"
        onChange={onChange}
      ></textarea>
      <input
        type="submit"
        className="w-full border border-red-300 rounded cursor-pointer py-1 text-white bg-red-600"
      ></input>
    </form>
  );
}

function fromParams(text, topic) {
  return {
    content: text,
    topic: topic,
  };
}

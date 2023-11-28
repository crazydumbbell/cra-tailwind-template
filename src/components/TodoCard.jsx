import { BsAlarm } from "react-icons/bs";
import { TbHttpDelete } from "react-icons/tb";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleDone } from "../redux/appThunk";

const TodoCard = ({ index, id, title, isDone }) => {
  const dispatch = useDispatch();

  const onClickIsDone = () => {
    dispatch(toggleDone({ todoId: id }));
  };

  return (
    <li
      className={`w-96 py-2 text-2xl flex ${
        index % 2 ? "bg-white" : "bg-gray-200"
      }`}
    >
      <span className="bg-black w-1/12 inline-block hover:bg-cyan-600 ease-out duration-1000 rounded-full px-3">
        {id}
      </span>
      <button
        className={`bg-yellow-100 w-7/12 ${
          isDone && " line-through"
        } inline-block hover:bg-cyan-600 ease-out duration-1000`}
        onClick={onClickIsDone}
      >
        {title}
      </button>
      <button className="bg-blue-100 w-2/12 hover:bg-cyan-600 ease-out duration-1000 items-center px-5 shadow-inner shadow-2xl contrast-50">
        <BsAlarm />
      </button>
      <button className="bg-emerald-100 w-2/12 hover:bg-green-600 ease-out duration-1000 px-5 shadow-inner shadow-2xl contrast-10">
        <TbHttpDelete />
      </button>
    </li>
  );
};

export default TodoCard;

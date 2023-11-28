import { BsAlarm } from "react-icons/bs";
import { TbHttpDelete } from "react-icons/tb";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleDone, updateTodo, deleteTodo } from "../redux/appThunk";

const TodoCard = ({ index, id, title, isDone }) => {
  const [updateToggle, setUpdateToggle] = useState(false);
  const [newTodo, setNewTodo] = useState(title);

  const dispatch = useDispatch();

  const onClickIsDone = () => {
    dispatch(toggleDone({ todoId: id }));
  };

  const onClickUpdateToggle = () => {
    setUpdateToggle(!updateToggle);
  };

  const onSubmitUpdateTodo = (e) => {
    e.preventDefault();

    if (!newTodo || newTodo === title) return;

    dispatch(updateTodo({ todoId: id, title: newTodo }));

    setNewTodo(newTodo);
    setUpdateToggle(false);
  };
  const onClickDelete = () => {
    dispatch(deleteTodo({ todoId: id }));
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
      {updateToggle ? (
        <form
          className="w-7/12 bg-red-100 flex"
          onSubmit={onSubmitUpdateTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        >
          <input className="w-3/4" type="text"></input>
          <button className="w-1/4 ml-2" type="submit">
            <BsAlarm />
          </button>
        </form>
      ) : (
        <button
          className={`w-7/12 ${isDone && "line-through"}`}
          onClick={onClickIsDone}
        >
          {title}
        </button>
      )}

      <button
        className="bg-blue-100 w-2/12 hover:bg-cyan-600 ease-out duration-1000 items-center shadow-inner shadow-2xl contrast-50"
        onClick={onClickUpdateToggle}
      >
        {updateToggle ? (
          "취소"
        ) : (
          <div className="px-5">
            {" "}
            <BsAlarm />
          </div>
        )}
      </button>

      <button
        className="bg-emerald-100 w-2/12 hover:bg-green-600 ease-out duration-1000 px-5 shadow-inner shadow-2xl contrast-10"
        onClick={onClickDelete}
      >
        <TbHttpDelete />
      </button>
    </li>
  );
};

export default TodoCard;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/appThunk";

const CreateTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const onSubmitCreateTodo = (e) => {
    e.preventDefault();

    if (!newTodo) return;

    dispatch(createTodo({ title: newTodo }));
    // dispatch를 통해 createTodo라는 썽크함수 실행
    // 이친구는 썽크에 가있음
  };

  return (
    <form onSubmit={onSubmitCreateTodo}>
        {/* 인풋창의 값을 onSubmit이벤트를통해 서버로 전송 */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <input type="submit" value="생성" />
    </form>
  );
};

export default CreateTodo;

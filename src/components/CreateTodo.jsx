import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../redux/appThunk";
import { setNewTodo } from "../redux/appSlice";

const CreateTodo = () => {
  const { newTodo } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();
  
  const onSubmitCreateTodo = async (e) => {
    e.preventDefault();
    // 온서브밋이니까 새로고침 막아놔야됨

    if (!newTodo) return;

    await dispatch(createTodo({ title: newTodo }));
    // dispatch를 통해 createTodo라는 썽크함수 실행
    // 이친구는 썽크에 가있음
    // 객체로 받으니까 {}
    dispatch(setNewTodo(""));
    // 요거는 입력한칸 입력후 값 날리는것
    // dispatch는 비동기함수라 여기서는 잘 실행되지만
    // 원래는 실행순서를 보장받을수 없는 함수임
    // 그래서 (e)앞에 async랑 함수 앞에 await 붙여주면 끝~
  };

  return (
    <form className="bg-blue-100 flex" onSubmit={onSubmitCreateTodo}>
      {/* 인풋창의 값을 onSubmit이벤트를통해 서버로 전송 */}
      <input
        className="ease-out duration-1000 px-4 py-2 text-2xl focus:outline-none border-2 focus:border-blue-500"
        type="text"
        value={newTodo}
        onChange={(e) => dispatch(setNewTodo(e.target.value))}
      />
      <input
        className="ease-out duration-1000 first-letter:ml-4 px-4 py-3 bg-pink-400 hover:bg-pink-600 active:bg-emerald-600 rounded-md "
        type="submit"
        value="생성"
      />
    </form>
  );
};

export default CreateTodo;

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "./redux/appThunk";
import CreateTodo from "./components/CreateTodo";
import TodoCard from "./components/TodoCard";

const App = () => {
  const { todos } = useSelector((state) => state.appReducer);
  // useSelector는 앱슬라이스에서 값을 가져오는역할 앱슬라이서만 리듀서에 부착되어있어서그럼
  // 그 안의 화살표 함수는 그 안에서 어떤것을 가져올 것인가를 고름
  const dispatch = useDispatch();
  // useDispatch는 값을 관리함

  useEffect(() => {
    if (todos) return;
    // 투두가 빈값이라도 리턴
    // 이거 안하면 유즈이펙트 무한으로 돌아감
    //투두가 없을때만 한번 실행해주기때문에 무한루프에서 탈~출!

    dispatch(getTodos());
  }, [todos, dispatch]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="bg-red-500 min-h-screen max-w-screen-md mx-auto mt-20 flex flex-col items-center hover:bg-blue-600 ease-out duration-1000 rounded-2xl">
      <CreateTodo />
      <ul className="mt-12 flex flex-col gap-5 ">
        {todos?.map((v, i) => (
          <TodoCard key={i} index={i} id={v.id} title={v.title} isDone={v.isDone} />
        ))}
      </ul>
    </div>
  );
};

export default App;

// 백엔드랑 프론트 둘다 각각 다른 터미널로 켜논상태여야 값을 잘 불러옴
// 2번 값을 가져오는 이유는 디버그모드 때문임

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "./redux/appThunk";
import CreateTodo from "./components/CreateTodo";

const App = () => {
  const { todos } = useSelector((state) => state.appReducer);
  // useSelector는 앱슬라이스에서 값을 가져오는역할 앱슬라이서만 리듀서에 부착되어있어서그럼
  // 그 안의 화살표 함수는 그 안에서 어떤것을 가져올 것인가를 고름
  const dispatch = useDispatch();
  // useDispatch는 값을 관리함

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="bg-red-100">
      <CreateTodo />
    </div>
  );
};

export default App;

// 백엔드랑 프론트 둘다 각각 다른 터미널로 켜논상태여야 값을 잘 불러옴
// 2번 값을 가져오는 이유는 디버그모드 때문임

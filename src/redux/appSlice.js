import { createSlice } from "@reduxjs/toolkit";
import {
  createTodo,
  getTodos,
  toggleDone,
  updateTodo,
  deleteTodo,
} from "./appThunk";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    todos: null,
    isLoading: false,
    newTodo: "",
    updateToggle: false,
  },
  // 초기값 설정~

  reducers: {
    setNewTodo: (state, action) => {
      state.newTodo = action.payload;
    },
    setUpdateToggle: (state) => {
      state.updateToggle = !state.updateToggle;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
    });
    // state인자를 받아서 isLoading을 true로 바꿔줘라
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTodos.rejected, (state) => {
      state.isLoading = false;
      //
    });
    builder.addCase(createTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      // todos.js의 newTodo가 action에 들어있음
      state.todos = [...state.todos, action.payload];
      state.isLoading = false;
    });
    builder.addCase(createTodo.rejected, (state) => {
      state.isLoading = false;
    });
    //
    builder.addCase(toggleDone.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(toggleDone.fulfilled, (state, action) => {
      state.todos = state.todos.map((v) => {
        console.log(typeof action.payload.id);

        if (v.id === action.payload.id) {
          return action.payload;
        } else {
          return v;
        }
      });
      state.isLoading = false;
    });
    builder.addCase(toggleDone.rejected, (state) => {
      state.isLoading = false;
    });

    // 구분용 주석///////////////////////////////////

    builder.addCase(updateTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.todos = state.todos.map((v) => {
        if (v.id === action.payload.id) {
          return action.payload;
        } else {
          return v;
        }
      });
      state.isLoading = false;
    });
    builder.addCase(updateTodo.rejected, (state) => {
      state.isLoading = false;
    });

    //
    builder.addCase(deleteTodo.pending, (state) => {
      state.isLoading = true;
    });
    // state인자를 받아서 isLoading을 true로 바꿔줘라
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter((v) => {
        if (v.id !== action.payload) {
          return v;
        }
      });
      state.isLoading = false;
      // 딜리트는 그냥 데이터가 아니레 메시지가 날라옴
    });
    builder.addCase(deleteTodo.rejected, (state) => {
      state.isLoading = false;
      //
    });
  },
  //   위 4가지가 기본 포맷
  // 비동기 요청은 reducer말고 extraReducer
  // action.payload 는 Thunk 익스포트한거에 들어있음
  // 컴포넌트들이 많아지고 복잡해지면 프롭스로 내려주던 데이터가 너무 많다.
  // 그리고 각 컴포넌트마다 계속 내려줘야됨
  // 그러지말고 데이터를 리덕스에 등록해서 쓰는곳에서 쓰면됨

  // ---------------------- 위 내용이 "추가" 에 대한 슬라이서//
});

export const { setNewTodo, setUpdateToggle } = appSlice.actions;

export default appSlice;

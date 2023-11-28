import { createAsyncThunk } from "@reduxjs/toolkit";
// 썽크는 비동기요청을 위함. 서버왔다갔다 하려면 비동기는 필수
// http통신으로 요청하므로 axios를 씀
import axios from "axios";

export const getTodos = createAsyncThunk("appSlice/getTodos", async () => {
  const response = await axios.get("http://localhost:3010/todos");
  //나중에 주소들은 환경변수 처리 해주면됨(은닉 + 개발/베포시 달라지는정보들)

  return response.data.todos;
});

export const createTodo = createAsyncThunk(
  "appSlice/createTodo",
  async ({ title }) => {
    // title이란 값을 요구하고 있음. 왜냐면 백엔드에 title이라고 보내줘야되기 때문
    // todos.js백엔드로 보냄 {title로 보냄}

    const response = await axios.post(
      "http://localhost:3010/todos",
      { title },
      {
        headers: {
          "Content-Type": "application/json",
        },
        // 헤더는 없어도됨 그냥 메타데이터임. 명시용
      }
    );
    return response.data.todo;
  }
  //   요거는 백엔드에서 받아오는것.
);

export const toggleDone = createAsyncThunk(
  "appSlice/toggleDone",
  async ({ todoId, title }) => {
    const response = axios.put(`http://localhost:3010/todos/${todoId}/done`);
    return (await response).data.todo;
  }
);

// 걍 썽크 기본 포맷임 앞에 주소는 불러들일 백엔드 주소
// 거기서 todoId라는 놈으로 요청해서
// axios로 호스트로 보내는것임

export const updateTodo = createAsyncThunk(
  "appSlice/updateTodo",
  async ({ todoId, title }) => {
    const response = await axios.put(
      `http://localhost:3010/todos/${todoId}`,
      {
        title,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.todo;
  }
);

export const deleteTodo = createAsyncThunk(
  "appSlice/deleteTodo",
  async ({ todoId }) => {
    await axios.delete(`http://localhost:3010/todos/${todoId}`);

    return todoId;
  }
);

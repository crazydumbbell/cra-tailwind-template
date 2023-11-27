import { createAsyncThunk } from "@reduxjs/toolkit";
// 썽크는 비동기요청을 위함. 서버왔다갔다 하려면 비동기는 필수
// http통신으로 요청하므로 axios를 씀
import axios from "axios";

export const getTodos = createAsyncThunk("appSlice/getTodos", async () => {
  const response = await axios.get("http://localhost:3010/todos");

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

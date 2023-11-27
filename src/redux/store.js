import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    appReducer: appSlice.reducer,
  },
});

export default store;

// export할때 default로 하면 전체파일에 익스포트 하는것이다.
// 지금은 리듀서가 appSlice밖에 없어서 스토어에 1개 밖에없지만
// 리듀서가 많아지면 스토어에 계속 추가되고 앺에서 갖다 쓰면됨

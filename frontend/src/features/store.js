import { configureStore } from "@reduxjs/toolkit";
import ticketListReducer from "./ticketListSlice";
import ticketDetailReducer from "./ticketDetailSlice";
const store = configureStore({
  reducer: {
    ticketList: ticketListReducer,
    ticketDetail: ticketDetailReducer,
  },
});

export default store;

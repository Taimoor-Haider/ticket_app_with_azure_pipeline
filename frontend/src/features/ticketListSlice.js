import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  tickets: [],
  error: null,
};

const ticketListSlice = createSlice({
  name: "ticketList",
  initialState: initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.tickets = [];
    },
    setError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.tickets = [];
    },
    setTickets: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.tickets = payload;
    },
  },
});
export const { setLoading, setError, setTickets } = ticketListSlice.actions;

export const ticketListSelector = (state) => state.ticketList;

export default ticketListSlice.reducer;

export const fetchTickets = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get("/api/tickets/");
    dispatch(setTickets(data));
  } catch (err) {
    const errorMessage =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(setError(errorMessage));
  }
};

export const setInitialTicket = (ticket) => {};

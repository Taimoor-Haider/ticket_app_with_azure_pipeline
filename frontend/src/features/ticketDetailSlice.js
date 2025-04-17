import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  error: null,
  ticket: null,
};

const ticketDetailSlice = createSlice({
  initialState: initialState,
  name: "ticketDetail",
  reducers: {
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.ticket = null;
    },
    setError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.ticket = null;
    },
    setTicket: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.ticket = payload;
    },
  },
});

export const { setError, setLoading, setTicket } = ticketDetailSlice.actions;

export const ticketDetailSelector = (state) => state.ticketDetail;

export default ticketDetailSlice.reducer;

export const fetchTicket = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get(`/api/tickets/${id}`);
    dispatch(setTicket(data));
  } catch (err) {
    const errorMessage =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(setError(errorMessage));
  }
};

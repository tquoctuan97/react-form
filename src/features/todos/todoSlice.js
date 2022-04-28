const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  list: [],
  loading: false,
  isUpdating: false,
  isDeleting: false,
  countFetch: 0,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    fetchTodoList(state) {
      if (state.list <= 0) {
        state.loading = true;
      }
    },
    fecthTodoListSuccess(state, action) {
      state.list = action.payload;
      state.loading = false;
      state.countFetch++;
    },
    fecthTodoListFailed(state) {
      state.loading = false;
    },
    add() {},
    update(state) {},
    delete(state) {},
  },
});

// Actions
export const todoActions = todoSlice.actions;

// Reducers
const todoReducer = todoSlice.reducer;
export default todoReducer;

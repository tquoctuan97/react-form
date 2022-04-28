const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isLoggedIn: Boolean(localStorage.getItem('access-token')),
  logging: false,
  currentUser: {
    firstName: '',
    lastName: '',
    hobby: '',
    gender: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register(state, action) {
      state.currentUser = action.payload;
    },
    login(state, action) {
      state.logging = true;
    },
    loginSuccess(state, action) {
      state.logging = false;
      state.isLoggedIn = true;
    },
    loginFailed(state, action) {
      state.logging = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = {};
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Reducers
const authReducer = authSlice.reducer;
export default authReducer;

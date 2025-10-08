import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"",
    email:"",
    role:"",
    isLoggedIn:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,       
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.isLoggedIn = true;
    },
    clearUser: (state) => {
      state.name = '';
      state.email = '';
      state.role = '';
      state.isLoggedIn = false;
    },
  },
});


export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
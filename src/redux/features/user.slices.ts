import { User } from "@/interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type UserSliceState = {
  user?: User;
};

const initialState: UserSliceState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

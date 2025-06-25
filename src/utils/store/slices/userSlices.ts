import { createSlice } from "@reduxjs/toolkit";

interface SessionType {
    access_token: string;
    refresh_token: string;
}
interface UserType {
    id: string;
    email: string;
    name: string;
    role: string | null;
    phone: string;
    salary: string | null;
    createdAt: string;
    session: SessionType;
  }
interface UserState {
    user: UserType | null;
}

const initialState: UserState = {
    user: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
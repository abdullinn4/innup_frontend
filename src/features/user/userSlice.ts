import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserBasicData } from '../../entities';
import { userFetchData } from '../../service/UserService';
import {handleLogout, loginUserService} from '../../service';

interface UserState {
    isAuthenticated: boolean;
    user: UserBasicData | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
};

export const getUserData = createAsyncThunk<UserBasicData, void>('user/getUserData', async () => {
    return await userFetchData();
});

export const loginUser = createAsyncThunk<UserBasicData, { email: string; password: string }>(
    'user/loginUser',
    async ({ email, password }) => {
        return await loginUserService(email, password);
    }
);

export const logoutUser = createAsyncThunk<void, void>('user/logoutUser', async () => {
    await handleLogout();
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserBasicData>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUserData.fulfilled, (state, action: PayloadAction<UserBasicData>) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(getUserData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch user data';
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<UserBasicData>) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to login';
            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to logout';
            });
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

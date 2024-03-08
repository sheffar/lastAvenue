import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleReqResErrors, handleToastNotifs } from "@/utils/helpers";
import { AuthService } from "@/services/api/auth";

interface IinitialState {
  logginIn: boolean;
  loginRejectedError: ICustomError | null;
  u_data: null | Record<string, unknown>;
}

const initialState: IinitialState = {
  logginIn: false,
  loginRejectedError: null,
  u_data: null,
};

const action = {
  login: createAsyncThunk("auth/login", async (data: ILogin, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(data, "auth/sign-in");
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }),
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearLoginRejectedError: (state) => {
      state.loginRejectedError = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(action.login.pending, (state) => {
        state.logginIn = true;
      })
      .addCase(action.login.fulfilled, (state, action) => {
        state.u_data = action.payload.data;
        state.logginIn = false;
      })
      .addCase(action.login.rejected, (state, action) => {
        state.logginIn = false;

        const err = action.payload as ICustomError;

        if (err.response?.data?.status === 103) {
          state.loginRejectedError = err;

          handleToastNotifs({
            type: "error",
            position: "top-right",
            id: "error",
            message: err.response?.data?.message || " ",
          });
        } else {
          handleReqResErrors(err);
        }
      });
  },
});

export const auth = {
  reducer: slice.reducer,
  action: action,
  mutation: slice.actions,
};

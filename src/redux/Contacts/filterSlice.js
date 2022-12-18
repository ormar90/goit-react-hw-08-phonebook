const { createSlice } = require("@reduxjs/toolkit");

const filterInitialState = '';
const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        queryFilter(state, action) {
            return state = action.payload;
        },
    },
});

export const { queryFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
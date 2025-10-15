import { createSlice } from "@reduxjs/toolkit";

//להגדיר לסלייס את הסטייט ההתחלתי
const initValue = {
    counter:99
}

const counterSlice = createSlice({
    name:"counter",
    initialState:initValue,
    reducers:{

    }
})


export default counterSlice.reducer
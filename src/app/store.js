import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice.js'
import trainersReducer from '../features/trainers/trainersSlice.js'
import searchTrainers from '../features/SearchTrainers/SearchTrainersSlice.js'

export const store = configureStore({
    reducer:{
        user:userReducer,
        trainers:trainersReducer,
        searchTrainers:searchTrainers
    }
})
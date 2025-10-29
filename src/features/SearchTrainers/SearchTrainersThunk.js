import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTrainersBySearch = createAsyncThunk(
    'trainers/getBySearch',
    async (data,thunkAPI)=>{
        try{
            const res = await fetch("http://localhost:3000/trainers/readBySearch", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            if(!res.ok){
                return thunkAPI.rejectWithValue(result.message);
            }
            return result
        }catch(error){
            return thunkAPI.rejectWithValue(error.message) 
        }
    }
)
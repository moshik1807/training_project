import { useState } from "react"
import { BUTTON } from "./button"
import { useSelector,useDispatch } from "react-redux"
import { createTraining } from "../features/trainings/trainingsThunk"
import { Snackbar } from "@mui/material"
import { userIdSelector } from "../features/user/userSlice"

export function DateTime({trainerId}){
    const [date,setDate] = useState("")
    const [time,setTime] = useState("")
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const userId = useSelector(userIdSelector)

    const handleSubmit = ()=>{
        const training ={
            coachId:trainerId,
            traineeId:userId,
            date:date,
            time:time
        }
        dispatch(createTraining(training))
        setOpen(true)
        setDate("")
        setTime("")
    }

    return(
        <>
            <label>
                date:
                <input 
                    type="date"
                    value={date}
                    onChange={(e)=> setDate(e.target.value)} />
            </label>
            <label>
                time:
                <input 
                    type="time"
                    value={time}
                    onChange={(e)=> setTime(e.target.value)} />
            </label>
            <BUTTON onClick={handleSubmit}>send</BUTTON>
            <Snackbar 
                open={open}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
                message="Training added successfully!"
            />
        </>
    )
}
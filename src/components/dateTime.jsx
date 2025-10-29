import { useState } from "react"
import { BUTTON } from "./button"
import { useSelector,useDispatch } from "react-redux"
import { createTraining } from "../features/trainings/trainingsThunk"

export function DateTime({trainerId}){
    const [date,setDate] = useState("")
    const [time,setTime] = useState("")
    const dispatch = useDispatch()
    const userId = useSelector((state)=> state.user.user.id)

    const handleSubmit = ()=>{
        const training ={
            coachId:trainerId,
            traineeId:userId,
            date:date,
            time:time
        }
        dispatch(createTraining(training))
        alert("add training")
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
        </>
    )
}
import Navbar from "../components/navbar"
import { Training } from "../components/trainingCard"
import { useSelector,useDispatch } from "react-redux"
import { getTrainingsById } from "../features/trainings/trainingsThunk"
import { useEffect } from "react"
import { userSelector } from "../features/user/userSlice"
import { trainingsSelector } from "../features/trainings/trainingsSlice"

export default function TrainingsPage() {
    const dispatch = useDispatch()
    const user = useSelector(userSelector)
    const trainings = useSelector(trainingsSelector)
    
    useEffect(()=>{
        if(!user){
            return
        }
        dispatch(getTrainingsById(user.id))
    },[user,dispatch])
    

    return(
        <>
        <Navbar/>
        <h1>trainings</h1>
        {trainings.map((training,i)=>(
            <div key={i}>
                <Training training={training}/>
            </div>
        ))}
        </>
    )
}







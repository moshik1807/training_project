import Navbar from "../components/navbar"
import { Training } from "../components/trainingCard"
import { useSelector,useDispatch } from "react-redux"
import { getTrainingsById } from "../features/trainings/trainingsThunk"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function TrainingsPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state=> state.user.user)
    const trainings = useSelector(state => state.trainings.trainings)

    useEffect(()=>{
        if(!user){
            return
        }
        dispatch(getTrainingsById(user.id))
    },[user,dispatch,navigate])
    

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







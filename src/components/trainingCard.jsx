import { useSelector,useDispatch } from "react-redux"
import { BUTTON } from "./button"
import { deleteTraining } from "../features/trainings/trainingsThunk"
import { userSelector } from "../features/user/userSlice"

export function Training({training}){
    const trainers = useSelector(state => state.trainers.trainers)
    const trainer = trainers?.find((e)=> e.id == training.coachId)
    const dispatch = useDispatch()
    const user = useSelector(userSelector)

    const handleDelete = ()=>{
        dispatch(deleteTraining({trainingId:training.id,userId:user.id}))
    }

    if(!trainer){
        return (
            <>
                <h1>Trainer not found</h1>
            </>
        )
    }

    return(
        <section style={{color:"white",width:"200px",height:"200px"}}>
            <h1>{trainer.name}</h1>
            <h2>{user.name}</h2>
            <h3>{training.date}  {training.time}</h3>
            <BUTTON onClick={handleDelete}>🗑️</BUTTON>
        </section>
    )
}
import Navbar from "../components/navbar"
import { Training } from "../components/trainingCard"
import { useSelector } from "react-redux"

export default function TrainingsPage() {
    const trainings = useSelector(state => state.trainings.trainings)
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

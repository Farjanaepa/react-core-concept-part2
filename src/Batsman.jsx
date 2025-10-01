import { useState } from "react"


export default function Batsman () {
    const [runs, setRuns] = useState(0);

    const handleRun = () => {
        const updatedRun = runs + 1;
        setRuns(updatedRun);
    }

    const handleSix = () => {
        const updatedRun = runs + 6;
        setRuns(updatedRun)
    }
    return (
        <div>
            <h3>Player</h3>
            <h1>Score : {runs}</h1>
            <button onClick={handleRun}>Singles</button>
            <button>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}
import react from "react";


const Result=({score,playAgain})=>(
    <div className="score-board">
        <div className="score"> your scored {score}/5 Correct answer !</div>
            <button className="playBtn" onClick={playAgain}>play Again !</button>
        
    </div>

)
export default Result
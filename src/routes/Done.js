import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCorrectNum, selectIncorrectNum } from "../features/question/questionSlice";

const Done = () => {
    const correctNum = useSelector(selectCorrectNum);
    const incorrectNum = useSelector(selectIncorrectNum);

    return ( 
        <div>
            <h2>Final score:</h2>
            <p><span className="green">Correct</span> / <span className="red">Incorrect</span>:</p>
            <p><span className="green">{correctNum}</span> / <span className="red">{incorrectNum}</span></p>
            <Link to="/"><button className="restart-btn">Restart and generate new questions</button></Link>
        </div>
     );
}
 
export default Done;
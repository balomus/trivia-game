import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCorrectNum, selectIncorrectNum } from "../features/question/questionSlice";

const Done = () => {
    const correctNum = useSelector(selectCorrectNum);
    const incorrectNum = useSelector(selectIncorrectNum);

    return ( 
        <div>
            <h2>Final score:</h2>
            <p>Correct / Incorrect: {correctNum} / {incorrectNum}</p>
            <Link to="/"><button>Restart and generate new questions</button></Link>
        </div>
     );
}
 
export default Done;
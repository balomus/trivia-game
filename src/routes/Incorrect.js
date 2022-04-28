import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decodeHtml } from "../decodeHtml";
import { selectApiResponse } from "../features/builder/builderSlice";
import { selectQuestionNumber } from "../features/question/questionSlice";

const Incorrect = () => {
    const navigate = useNavigate();

    const questionNumber = useSelector(selectQuestionNumber);
    const apiResponse = useSelector(selectApiResponse);

    useEffect(() => {
        setTimeout(() => {
            if (questionNumber > apiResponse.length)
            {
                navigate('/done');
            }
            else
            {
                navigate('/question');
            }
        }, 3000);
    }, [])

    return ( 
        <div>
            <h2 className="red">Incorrect!</h2>
            <p>The correct answer is:</p>
            <div>
                {decodeHtml(apiResponse[questionNumber - 2].correct_answer)}
            </div>
        </div> 
    );
}
 
export default Incorrect;
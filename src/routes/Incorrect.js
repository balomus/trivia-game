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
                console.log("questionNumber = " + questionNumber + " questionNumber - 2 is  " + (questionNumber - 2) +  " apiResponse.length = " + apiResponse.length);
                navigate('/question');
                console.log("timeout done");
            }
        }, 3000);
    }, [])

    return ( 
        <div>
            Incorrect! The correct answer is:
            <div>
                {decodeHtml(apiResponse[questionNumber - 2].correct_answer)}
            </div>
        </div> 
    );
}
 
export default Incorrect;
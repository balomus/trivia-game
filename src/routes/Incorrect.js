import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectApiResponse } from "../features/builder/builderSlice";
import { selectCurrentQuestion, selectQuestionNumber } from "../features/question/questionSlice";

const Incorrect = () => {
    const navigate = useNavigate();

    // const currentQuestion = useSelector(selectCurrentQuestion);
    const questionNumber = useSelector(selectQuestionNumber);
    const apiResponse = useSelector(selectApiResponse);

    useEffect(() => {
        setTimeout(() => {
            // console.log("timeout triggered")
            navigate('/question');
            console.log("timeout done");
        }, 3000);
    }, [])

    return ( 
        <div>
            Incorrect! The correct answer is:
            <div>
                {apiResponse[questionNumber - 2].correct_answer}
            </div>
        </div> 
    );
}
 
export default Incorrect;
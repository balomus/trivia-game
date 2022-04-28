import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectApiResponse } from "../features/builder/builderSlice";
import { selectQuestionNumber } from "../features/question/questionSlice";

const Correct = () => {
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
            <h2 className="green">Correct!</h2>
        </div> 
    );
}
 
export default Correct;
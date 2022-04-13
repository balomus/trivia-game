import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentQuestion, selectQuestionNumber } from "./questionSlice";

const Question = () => {
    
    const currentQuestion = useSelector(selectCurrentQuestion);
    const questionNumber = useSelector(selectQuestionNumber);

    const [answers, setAnswers] = useState(["sample1", "sample2", "sample3", "sample4"])

    const dispatch = useDispatch();

    

    const randomizeAnswers = (wrongArr, correct) => {
        const randomNum = Math.floor(Math.random() * 4);
        const newArr = wrongArr.splice(randomNum, 0, correct);
        console.log("newArr is " + newArr);
        return newArr;
    }

    useEffect(() => {
        // randomizeAnswers(currentQuestion.incorrect_answers, currentQuestion.correct_answer)
    }, [currentQuestion])

    return ( 
        <div>
            <h2>Question # {questionNumber}</h2>
            <p>{currentQuestion.question}</p>
            
        </div>
     );
}
 
export default Question;
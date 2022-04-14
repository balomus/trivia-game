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
        console.log("currentQuestion changed, useEffect ran");
        const randomNum = Math.floor(Math.random() * 4);
        console.log("correct answer should be index " + randomNum);
        let newArr = [...currentQuestion.incorrect_answers];
        newArr.splice(randomNum, 0, currentQuestion.correct_answer);
        console.log(newArr);
        setAnswers(newArr);
        // setAnswers(randomizeAnswers(currentQuestion.incorrect_answer, currentQuestion.correct_answer))
    }, [currentQuestion])

    return ( 
        <div>
            <h2>Question # {questionNumber}</h2>
            <p>{currentQuestion.question}</p>
            {answers.map((item) => {
                return <div key={item}><button>{item}</button></div>
            })}
        </div>
     );
}
 
export default Question;
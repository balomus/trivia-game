import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { decodeHtml } from "../../decodeHtml";
import { selectApiResponse } from "../builder/builderSlice";
import { selectCorrectNum, selectCurrentQuestion, selectIncorrectNum, selectQuestionNumber, setCorrectNum, setCurrentQuestion, setIncorrectNum, setQuestionNumber } from "./questionSlice";

const Question = () => {
    const navigate = useNavigate();
    
    const currentQuestion = useSelector(selectCurrentQuestion);
    const questionNumber = useSelector(selectQuestionNumber);
    const correctNum = useSelector(selectCorrectNum);
    const incorrectNum = useSelector(selectIncorrectNum);
    const apiResponse = useSelector(selectApiResponse);

    const [answers, setAnswers] = useState(["sample1", "sample2", "sample3", "sample4"])

    const dispatch = useDispatch();

    // const decodeHtml = (html) => {
    //     let txt = document.createElement("textarea");
    //     txt.innerHTML = html;
    //     return txt.value;
    // }

    const randomizeAnswers = () => {
        console.log("currentQuestion changed, useEffect ran");
        const randomNum = Math.floor(Math.random() * 4);
        console.log("correct answer should be index " + randomNum);
        let newArr = [...currentQuestion.incorrect_answers];
        newArr.splice(randomNum, 0, currentQuestion.correct_answer);
        console.log(newArr);
        setAnswers(newArr);
    }

    const handleClick = (e) => {
        const answer = e.target.textContent;

        const clickedButton = document.getElementById(e.target.textContent);

        console.log("clickedButton = " + clickedButton);

        // console.log("clickedElement is " + clickedButton + " and clickedElement.innerHTML is " + clickedButton.innerHTML);

        // console.log(clickedButton.innerHTML);
        // clickedButton.innerHTML.backgroundColor = "#000000";

        // clickedElement.backgroundColor = "#000000";

        if (correctNum + incorrectNum < apiResponse.length)
        {
            if (answer === decodeHtml(currentQuestion.correct_answer))
            {
                console.log("Right answer selected");
                dispatch(setCorrectNum(Number(correctNum) + 1));
                navigate('/correct');
            }
            else
            {
                console.log("Wrong answer selected");
                dispatch(setIncorrectNum(Number(incorrectNum) + 1));
                navigate('/incorrect');
            }
        }

        if (questionNumber <= apiResponse.length)
        {
            dispatch(setQuestionNumber(questionNumber + 1));
            dispatch(setCurrentQuestion(apiResponse[questionNumber]));
        }
    }

    useEffect(() => {
        randomizeAnswers()
    }, [currentQuestion])

    return ( 
        <div>
            <p><span className="green">Correct</span> / <span className="red">Incorrect</span>:</p>
            <p><span className="green">{correctNum}</span> / <span className="red">{incorrectNum}</span></p>
            {/* <p>Incorrect #: {incorrectNum}</p> */}
            <h2>Question # {questionNumber} of {apiResponse.length}</h2>
            <h3>{currentQuestion.category}</h3>
            <p>{decodeHtml(currentQuestion.question)}</p>
            <br></br>
            {answers.map((item) => {
                return <div key={decodeHtml(item)} id={decodeHtml(item)}><button onClick={handleClick}>{decodeHtml(item)}</button></div>
            })}
            <br></br>
            <Link to="/"><button className="restart-btn">Restart and generate new questions</button></Link>
        </div>
     );
}

 
export default Question;
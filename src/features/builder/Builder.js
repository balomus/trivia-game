import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAmount, setAmount } from "./builderSlice";

const Builder = () => {
  const dispatch = useDispatch();
  const amount = useSelector(selectAmount);
  // const [amount, setAmount] = useState(10);
  // const [category, setCategory] = useState(9);
  // const [difficulty, setDifficulty] = useState("easy");
  // const [type, setType] = useState("multiple");
  // const [questions, setQuestions] = useState();
  // const [currentQuestion, setCurrentQuestion] = useState(0);

  // const handleClick = async () => {
  //     try{
  //       const response = await fetch("https://opentdb.com/api.php?amount=" + amount + "&category=" + category + "&difficulty=" + difficulty + "&type="  + type)
  //       const data = await response.json();
  //       setQuestions(data);
  //       console.log(data);
  //       console.log("question - " + data.results[currentQuestion].question + " answer - " + data.results[currentQuestion].correct_answer);
  //     }
  //     catch (error) {
  //       console.error(error);
  //     }
  // }

  const handleClick = () => {
    console.log("clicked");
  }

  return ( 
      <div>
          # of questions:
          <select name="amount" id="amount-select" value={amount} onChange={(e) => dispatch(setAmount(e.target.value))}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
          <p>Sample API URL: https://opentdb.com/api.php?amount={amount}&category=*&difficulty=*&type=*</p>
          <button onClick={handleClick}>Get Trivia Questions</button>
      </div>
    );
}
 
export default Builder;
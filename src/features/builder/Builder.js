import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCorrectNum, setCurrentQuestion, setIncorrectNum, setQuestionNumber } from "../question/questionSlice";
import { selectAmount, selectApiResponse, selectCategory, selectDifficulty, selectType, setAmount, setApiResponse, setCategory, setDifficulty, setType } from "./builderSlice";

const Builder = () => {
  const [fullCategories, setFullCategories] = useState([{ id: "", name: "All Categories" }]);

  const fetchMyAPI = async () => {
    let response = await fetch("https://opentdb.com/api_category.php");
    let data = await response.json();
    setFullCategories([{id: "", name: "All Categories"}, ...data.trivia_categories]);
    console.log(data.trivia_categories);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  const dispatch = useDispatch();
  
  const amount = useSelector(selectAmount);
  const category = useSelector(selectCategory);
  const difficulty = useSelector(selectDifficulty);
  const type = useSelector(selectType);

  const handleClick = async() => {
    console.log("clicked");
    const response = await fetch("https://opentdb.com/api.php?amount=" + amount + "&category=" + category + "&difficulty=" + difficulty + "&type=" + type);
    const data = await response.json();
    dispatch(setApiResponse([...data.results]));
    dispatch(setCurrentQuestion([...data.results][0]))
    dispatch(setQuestionNumber(1));
    dispatch(setCorrectNum(0));
    dispatch(setIncorrectNum(0));
    console.log([...data.results]);
  }

  return ( 
      <div>
          # of questions: 
          <select name="amount" id="amount-select" value={amount} onChange={(e) => dispatch(setAmount(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>

          <br></br>

          Category: 
          <select name="category" id="category-select" value={category} onChange={(e) => dispatch(setCategory(e.target.value))}>
            {fullCategories.map((item) => {
              return <option value={item.id} key={item.id}>{item.name}</option>
            })}
          </select>

          <br></br>

          Difficulty: 
          <select name="difficulty" id="difficulty-select" value={difficulty} onChange={(e) => dispatch(setDifficulty(e.target.value))}>
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <br></br>

          Type: 
          <select name="type" id="type-select" value={type} onChange={(e) => dispatch(setType(e.target.value))}>
            <option value="">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>

          <p>Sample API URL: https://opentdb.com/api.php?amount={amount}&category={category}&difficulty={difficulty}&type={type}</p>
          <button onClick={handleClick}>Get Trivia Questions</button>
      </div>
    );
}



 
export default Builder;
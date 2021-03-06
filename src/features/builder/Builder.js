import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCorrectNum, setCurrentQuestion, setIncorrectNum, setQuestionNumber } from "../question/questionSlice";
import { selectAmount, selectCategory, selectDifficulty, selectType, setAmount, setApiResponse, setCategory, setDifficulty, setType } from "./builderSlice";

const Builder = () => {
  const navigate = useNavigate();

  const [fullCategories, setFullCategories] = useState([{ id: "", name: "All Categories" }]);

  const fetchMyAPI = async () => {
    let response = await fetch("https://opentdb.com/api_category.php");
    let data = await response.json();
    setFullCategories([{id: "", name: "All Categories"}, ...data.trivia_categories]);
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
    const response = await fetch("https://opentdb.com/api.php?amount=" + amount + "&category=" + category + "&difficulty=" + difficulty + "&type=" + type);
    const data = await response.json();
    if (data.response_code === 1)
    {
      window.alert("Unfortunately, the Open Trivia Database doesn't have enough questions for you. Try more generalized criteria, less questions, or a different category.");
    }
    else
    {
      dispatch(setApiResponse([...data.results]));
      dispatch(setCurrentQuestion([...data.results][0]))
      dispatch(setQuestionNumber(1));
      dispatch(setCorrectNum(0));
      dispatch(setIncorrectNum(0));
      navigate('/question')
    }
  }

  return ( 
      <div>
          <h3># of questions: </h3>
          <select name="amount" id="amount-select" value={amount} onChange={(e) => dispatch(setAmount(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>

          <br></br>

          <h3>Category: </h3>
          <select name="category" id="category-select" value={category} onChange={(e) => dispatch(setCategory(e.target.value))}>
            {fullCategories.map((item) => {
              return <option value={item.id} key={item.id}>{item.name}</option>
            })}
          </select>

          <br></br>

          <h3>Difficulty: </h3>
          <select name="difficulty" id="difficulty-select" value={difficulty} onChange={(e) => dispatch(setDifficulty(e.target.value))}>
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <br></br>

          <h3>Type: </h3>
          <select name="type" id="type-select" value={type} onChange={(e) => dispatch(setType(e.target.value))}>
            <option value="">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>

          <br></br>
          <button onClick={handleClick} className="restart-btn">Get Trivia Questions</button>
          {/* <div>
            Sample URL: <br></br>
            https://opentdb.com/api.php?amount={amount}&category={category}&difficulty={difficulty}&type={type}
          </div> */}
      </div>
    );
}



 
export default Builder;
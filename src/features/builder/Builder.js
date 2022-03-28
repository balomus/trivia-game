import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAmount, selectCategory, setAmount, setCategory } from "./builderSlice";

const Builder = () => {
  const [fullCategories, setFullCategories] = useState(null);

  useEffect(() => {
    setFullCategories(async () => {
      try {
        const response = await fetch("https://opentdb.com/api_category.php");
        const data = await response.json();
        console.log(data);
        return response.data;
      } catch (error) {
        return error;
      }
    });
  }, []);

  console.log(fullCategories);

  const dispatch = useDispatch();
  const amount = useSelector(selectAmount);
  const category = useSelector(selectCategory);

  let categories = [ { id: 999, name: "All Categories" } ]
  let fullCategoriesResponse = async () => {
    try {
      const response = await fetch("https://opentdb.com/api_category.php");
      const data = await response.json();
      console.log(data);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  console.log(fullCategoriesResponse);

  categories.push()
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

          Category:
          <select name="category" id="category-select" value={category} onChange={(e) => dispatch(setCategory(e.target.value))}>
            <option value="All Categories">All Categories</option>
          </select>
          <p>Sample API URL: https://opentdb.com/api.php?amount={amount}&category=*&difficulty=*&type=*</p>
          <button onClick={handleClick}>Get Trivia Questions</button>
      </div>
    );
}
 
export default Builder;
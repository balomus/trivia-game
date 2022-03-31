import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAmount, selectCategory, setAmount, setCategory } from "./builderSlice";

const Builder = () => {
  const [fullCategories, setFullCategories] = useState([{ id: 999, name: "All Categories" }]);

  const fetchMyAPI = async () => {
    let response = await fetch("https://opentdb.com/api_category.php");
    let data = await response.json();
    setFullCategories([{id: 999, name: "All Categories"}, ...data.trivia_categories]);
    console.log(data.trivia_categories);
  }

  useEffect(() => {
    fetchMyAPI();
    // console.log(fullCategories);
    // setFullCategories(async () => {
    //   try {
    //     const response = await fetch("https://opentdb.com/api_category.php");
    //     const data = await response.json();
    //     console.log([{ id: 999, name: "All Categories" }, ...data.trivia_categories]);
    //     return [{ id: 999, name: "All Categories" }, ...data.trivia_categories];
    //   } catch (error) {
    //     return error;
    //   }
    // });
  }, []);

  // console.log(fullCategories);

  const dispatch = useDispatch();
  const amount = useSelector(selectAmount);
  const category = useSelector(selectCategory);

  const array = [{id: 1, name: 'one'}, {id: 2, name: 'two'}, {id: 3, name: 'three'}];

  // const categoryList = fullCategories.map((category) => {
  //   <option key={category.id}>{ category.name }</option>
  // });

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

          <br></br>

          Category:
          <select name="category" id="category-select" value={category} onChange={(e) => dispatch(setCategory(e.target.value))}>
            {fullCategories.map((item) => {
              return <option value={item.id} key={item.id}>{item.name}</option>
            })}
            {/* <option value="All Categories">All Categories</option> */}
          </select>
          <p>Sample API URL: https://opentdb.com/api.php?amount={amount}&category=*&difficulty=*&type=*</p>
          <button onClick={handleClick}>Get Trivia Questions</button>
          {/* {array.map((item) => {
            return <p key={item.id}>{item.name}</p>
          })} */}

          <div>
            {fullCategories.map((item) => (
              <p key={item.id}>{item.name}</p>
            ))}
          </div>
      </div>
    );
}



 
export default Builder;
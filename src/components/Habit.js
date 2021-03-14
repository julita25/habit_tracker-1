import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../actions/habits";
import "./habit.css"
function Habit({ habit, setCurrentId }) {
  const dispatch = useDispatch();
  // const completeHandler = () => {
  //   setTodos(
  //     todos.map((item) => {
  //       if (item.id === todo.id) {
  //         return {
  //           ...item,
  //           completed: !item.completed,
  //         };
  //       }
  //       return item;
  //     })
  //   );
  // };

  return (
    <div className="todo">
      <h3 className = "habit">
        {habit.habit}
        <div className="wrapper">
          <button className= "btn expand" onClick={() => setCurrentId(habit._id)}><div className="editTxt">Edit</div></button>
          <button className="btn expand" onClick= {() => dispatch(deleteHabit(habit._id))}><div className="editTxt">Delete</div></button>
        </div>
       
       
      </h3>
    </div>
  );
}

export default Habit;

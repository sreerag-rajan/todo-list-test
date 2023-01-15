import { nanoid } from 'nanoid'

//ACTION TYPES
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';


//ACTIONS

export const addTodo = (task) => (dispatch) => {
  const newTask= {
    id: nanoid(5),
    task: {task},
    isComplete: false
  }
  dispatch({type: ADD_TODO, payload: newTask});
}


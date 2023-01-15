import { ADD_TODO, TOGGLE_TODO } from "./action"; 
const initState = {
  tasks: [],
  pendingTasks: 0,
  completedTasks: 0
};

export const todoReducer = (store = initState, {type, payload})=> {
  switch(type){
    // case SET_TODO:
    //   return {tasks: payload.tasks, pendingTasks: payload.pendingTasks, completedTasks: payload.completedTasks};
    case ADD_TODO:
      {tasks: [...store.tasks, payload], completedTasks : store.completedTasks, pendingTasks:store.pendingTasks + 1};

    case TOGGLE_TODO:{
      let completedTasks = 0, pendingTasks = 0;
      const tasks = store.tasks.map((el) => {
        if(el.id === payload.id)
          el.isComplete = el.isComplete;
        
        el.isComplete ? completedTasks++ : pendingTasks--;
        return el;
      });
      return {tasks, completedTasks, pendingTasks}

    }
    default:
      return store;
  }
}
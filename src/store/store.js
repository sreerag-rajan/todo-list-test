import { legacy_createStore, applyMiddleware } from "redux";
import { todoReducer } from "./reducer";

const middleware = (store)=>(next)=>(action)=>{
  if(typeof action === 'function')
    return action(store.dispatch);
  
  next(action);

}

export const store = legacy_createStore(todoReducer, applyMiddleware(middleware));
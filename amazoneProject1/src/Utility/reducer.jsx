import {TYPE} from "./action.type"
export const initialState={
    basket:[]
}
export const reducer=(state,action)=>{
    switch(action.type){
        case TYPE.ADD_TO_BASKET:
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
        default:
            return state;
           
        
    }
}
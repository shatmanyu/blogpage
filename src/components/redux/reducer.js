import { SET_SECTION_NAME } from "./action";

const clickedOption = (state=100,action) =>{
    switch(action.type){
        case SET_SECTION_NAME :return action.payload;
        default:return state;
    }
}

export default clickedOption;

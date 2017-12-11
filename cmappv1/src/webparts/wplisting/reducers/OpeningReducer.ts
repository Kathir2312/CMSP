import { IOpening } from "../../../cmcommon/objmodelOpening";
import { PERSONA_INITIALS_COLOR } from "office-ui-fabric-react";
import { Action, ActionTypes } from "../actions/actiontypes";


//immmutable State which would be carried in redux store
export type IOpeningViewState = Readonly<{
    Openings: IOpening[];
    isLoding: boolean;
    ErrorMsg: string;
}>

//set the initial state of redux store, It is advised to have initial state always
const initialState:IOpeningViewState  = {
    Openings:[],
    isLoding:false,
    ErrorMsg:''
};
 
//Reducer gets two params 1. State and 2. Action and will always return State without failing
export const openingreducer =(state:IOpeningViewState=initialState, action: Action): IOpeningViewState=>{
switch (action.type) {
    case ActionTypes.OPENINGS_REQUEST:
        //spreading object to not mutate the existing vale of the state
        return{...state,
             isLoding:true
            };
    case ActionTypes.OPENINGS_SUCCESS:
            return {...state,
                Openings:action.payload,
                isLoding:false
            };
    case ActionTypes.OPENINGHS_ERROR:
            return{
                ...state,
               ErrorMsg: action.payload 
            };
    default:
        return state;
}

};

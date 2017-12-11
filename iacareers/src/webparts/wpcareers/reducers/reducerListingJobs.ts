import { JoblistingState } from "../types/index";
import { CMAction, CMActionTypes } from "../actions/actiontypes";
import {IOpening} from '../../../cmcommon/objmodelOpening'

const initState : JoblistingState =
{
     jobOpenings: [],
     loading:false,
     ErrorMessage: '',
     selection: []
}

export const reducerListingJobs = (state: JoblistingState=initState, action:CMAction): JoblistingState=>{
    switch (action.type) {
        case CMActionTypes.JOBOPENINGS_REQUEST:
            return{...state, loading:true}
        case CMActionTypes.JOBOPENINGS_SUCCESS:
            return {
                ...state,
                jobOpenings: action.jobopeninglist,
                loading:false
            }
        case CMActionTypes.JOBOPENINGS_ERROR:
            return{...state,
            ErrorMessage:action.error,
            loading:false
        }
        case CMActionTypes.JOB_SELECTIONCHANGED:
            if(!(action.referenceID==null))
            return{
                ...state,
                selection: [action.referenceID]
            }
            else
            return{...state, selection:[]}

        default:
            return state;
}
};
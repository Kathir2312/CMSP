import { CMAction, CMActionTypes } from "./actiontypes";
import { IOpening } from "../../../cmcommon/objmodelOpening";
import { IDataProvider } from "../../../cmcommon/IDataProvider";
import { Dispatch } from "redux";


export const InitiateJobOpeningAsync =(): CMAction=>({
    type: CMActionTypes.JOBOPENINGS_REQUEST
});

export const JobOpeningsReceived = (response: IOpening[]): CMAction => ({
    type:CMActionTypes.JOBOPENINGS_SUCCESS,
    jobopeninglist:response
});

export const receiveOpeningsError = (Error:String): CMAction => ({
    type:CMActionTypes.JOBOPENINGHS_ERROR, 
    error:Error
});

export const jobselectionchanged = (JDescr:String, refID: Number): CMAction => ({
    type: CMActionTypes.JOB_SELECTIONCHANGED,
    jobDescr: JDescr,
    referenceID: refID
});


export function getJobOpenings(dp: IDataProvider)
{
    return (dispatch: Dispatch<any>) =>{
        dispatch(InitiateJobOpeningAsync());
        dp.readOpenings('sss')
            .then((response:IOpening[])=>{
                console.log(response);
                alert('called back');
                dispatch(JobOpeningsReceived(response));
            })
            .catch((error:Error)=>{
                alert('called back Error');
                dispatch(receiveOpeningsError(error.message));
            });
    }
}

export function jobSelected(item: IOpening)
{
    return(dispatch: Dispatch<any>) => {
        dispatch(jobselectionchanged(item.Opening, item.ID))
    }
}

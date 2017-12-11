import { IOpening } from "../../../../lib/cmcommon/objmodelOpening";

export enum CMActionTypes{
    JOBOPENINGS_REQUEST ,
	JOBOPENINGS_SUCCESS ,
    JOBOPENINGHS_ERROR ,
    JOB_SELECTIONCHANGED
}

export type CMAction = {type: CMActionTypes.JOBOPENINGS_REQUEST} | 
                        {type:CMActionTypes.JOBOPENINGS_SUCCESS, jobopeninglist: IOpening[]} |
                        {type:CMActionTypes.JOBOPENINGHS_ERROR, error:String} |
                        {type : CMActionTypes.JOB_SELECTIONCHANGED, jobDescr:String,referenceID: Number};
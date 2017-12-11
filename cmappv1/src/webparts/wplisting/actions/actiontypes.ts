import { IOpening } from "../../../cmcommon/objmodelOpening";

export enum ActionTypes {
	OPENINGS_REQUEST,
	OPENINGS_SUCCESS,
    OPENINGHS_ERROR
}

export type Action =
	{ type: ActionTypes.OPENINGS_REQUEST} |
	{ type: ActionTypes.OPENINGS_SUCCESS, payload: IOpening[]} |
	{ type: ActionTypes.OPENINGHS_ERROR, payload: string} ;


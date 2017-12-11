
import { IOpening } from '../../../cmcommon/objmodelOpening';
import { Action, ActionTypes } from './actiontypes';
import { IDataProvider } from '../../../cmcommon/IDataProvider';
import { Dispatch } from 'redux';

export const OpeningsRequestInitiated = (): Action => ({
	type: ActionTypes.OPENINGS_REQUEST
});

export const OpeningsError = (errormsg: string): Action => ({
	 type: ActionTypes.OPENINGHS_ERROR,payload: errormsg
 });
export const OpeningsSuccess = (response: IOpening[]): Action => ({
	type: ActionTypes.OPENINGS_SUCCESS,
	payload: response
});
//method for view will call the actions

export function getOpenings(mydataProvider: IDataProvider ) {
	//return async (dispatch: any) => {
		return (dispatch: Dispatch<any>) =>{
			dispatch(OpeningsRequestInitiated());
		try {
			mydataProvider.readOpenings('test')
			.then(ls=>{
				dispatch(OpeningsSuccess(ls));
			  })
			.catch(e=>{dispatch(OpeningsError(e));})
		} catch (error) {
			dispatch(OpeningsError(error));
		}
	};
	//};
}
import { userInfoState } from "../types/index";
import { CMAction, CMActionTypes, enumjobApplicationactions, CMActionJobapplicationNavigate } from "../actions/actiontypes";
import  { IPersonalInfo, IContactInfo, IAcademicDetails, IcareerDetails, CMWizardSteps } from '../../../cmcommon/objmodelIACareers'

const initStateuserInfo : userInfoState =
{
    personalInfo: null,
    contactInfo: null,
    academicInfo:null,
    careersInfo: null,
    isvalidState: false,
    ErrorMessage: null,
    currentView: CMWizardSteps.WIZARD_Step1,
    nextView:CMWizardSteps.WIZARD_Step2,
    prevView: null
}


export const reducerJobApplication = (state: userInfoState=initStateuserInfo, action:CMActionJobapplicationNavigate): userInfoState=>{
    switch (action.type) {
        case enumjobApplicationactions.WIZARD_Show_Next:
            //if(action.currentViewvalid)
            //{
                return{...state, isvalidState: action.currentViewvalid,currentView: action.nextView}//,prevView:action.currentView}
            //}
        case enumjobApplicationactions.WIZARD_Show_Prev:
                return{...state, isvalidState: action.currentViewvalid,currentView: action.prevView}//, nextView:action.currentView}
        case enumjobApplicationactions.WIZARD_Init_Current:
                return{...state, isvalidState: action.currentViewvalid,currentView: action.currentView, nextView:action.nextView, prevView:action.prevView}        
        default:
            return state;
}
};
import { IOpening } from "../../../cmcommon/objmodelOpening"
import { userInfoState } from "../types/index";
import { IPersonalInfo, IContactInfo, IAcademicDetails, IcareerDetails, CMWizardSteps } from "../../../cmcommon/objmodelIACareers";

export enum CMActionTypes{
    JOBOPENINGS_REQUEST ='JONOPENING_Request' ,
	JOBOPENINGS_SUCCESS ='JONOPENING_Success',
    JOBOPENINGS_ERROR ='JONOPENING_Error',
    JOB_SELECTIONCHANGED='JONOPENING_SelecionChanged'
}

export enum enumjobApplicationactions{
    WIZARD_Init_Current = 'Init_CurrentView',
    WIZARD_Show_Next  ='Show_NEXT',
    WIZARD_Show_Prev  ='Show_PREV',
    VALIDATE_Current =  'Validate_FORM'

}

export type CMAction = {type : CMActionTypes.JOBOPENINGS_REQUEST} | 
                        {type :CMActionTypes.JOBOPENINGS_SUCCESS, jobopeninglist: IOpening[]} |
                        {type :CMActionTypes.JOBOPENINGS_ERROR, error:String} |
                        {type : CMActionTypes.JOB_SELECTIONCHANGED, jobDescr:String,referenceID: Number}

export type CMActionJobapplicationNavigate = {type : enumjobApplicationactions, currentViewvalid:boolean, currentView: CMWizardSteps, nextView: CMWizardSteps, prevView: CMWizardSteps}

//export type CMActionJobapplicationInitCurr = {type : enumjobApplicationactions, currentView: CMWizardSteps, nextView: CMWizardSteps, prevView: CMWizardSteps}

                        
export type CMActionJobapplication1 = {type : CMWizardSteps.WIZARD_Step1, personalInfo: IPersonalInfo,  nextstep: CMWizardSteps.WIZARD_Step2, prevstep:null, valid:boolean } |
{type : CMWizardSteps.WIZARD_Step2, contactInfo: IContactInfo,  nextstep: CMWizardSteps.WIZARD_Step3, prevstep:CMWizardSteps.WIZARD_Step1 , valid:boolean}|
{type : CMWizardSteps.WIZARD_Step3, personalInfo: IAcademicDetails,  nextstep: CMWizardSteps.WIZARD_Step4, prevstep:CMWizardSteps.WIZARD_Step3 , valid:boolean} |
{type : CMWizardSteps.WIZARD_Step4, personalInfo: IcareerDetails,  nextstep: null, prevstep:CMWizardSteps.WIZARD_Step3, valid:boolean }


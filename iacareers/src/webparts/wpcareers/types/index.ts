import { IOpening } from "../../../cmcommon/objmodelOpening";
import { IPersonalInfo, IContactInfo, IAcademicDetails, IcareerDetails, CMWizardSteps } from "../../../cmcommon/objmodelIACareers";


export type CMCareersSetting = Readonly<{
    SPOSiteUrl:String;
    isLoading: boolean;
    ErrorMessage: String;
}>

export type JoblistingState = Readonly<{
    jobOpenings: IOpening[],
    loading: boolean,
    ErrorMessage: String,
    selection: Number[]
}>;


export type userInfoState = Readonly<{
    personalInfo: {object: IPersonalInfo, valid: boolean}
    contactInfo: {object: IContactInfo, valid: boolean},
    academicInfo:{object: IAcademicDetails, valid: boolean},
    careersInfo:{object: IcareerDetails, valid: boolean}, 
    isvalidState: boolean,
    currentView: CMWizardSteps, 
    nextView: CMWizardSteps,
    prevView: CMWizardSteps,
    ErrorMessage: String
}>;



export type CareerappState = Readonly<{
    //setting:CMCareersSetting,
    jobOpeningState: JoblistingState
    jobapplicationstate: userInfoState
}>




//WebPart Properties / Component Properties 
// export interface IjobListingProps {
//     ;
//   }
  
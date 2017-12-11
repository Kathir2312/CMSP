import { IOpening } from "../../../cmcommon/objmodelOpening";

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

export type CareerappState = Readonly<{
    //setting:CMCareersSetting,
    jobOpeningState: JoblistingState
}>




//WebPart Properties / Component Properties 
// export interface IjobListingProps {
//     ;
//   }
  
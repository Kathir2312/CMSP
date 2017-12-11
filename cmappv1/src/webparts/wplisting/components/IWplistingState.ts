import { IOpening } from "../../../cmcommon/objmodelOpening";
import { IColumn } from "office-ui-fabric-react";

export interface IWplistingState{
    items: IOpening[];
    isLoading: boolean;
    columns: IColumn[];
    isCompactMode: boolean;
}
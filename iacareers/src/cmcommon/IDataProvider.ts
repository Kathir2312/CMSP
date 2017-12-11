import {IOpening} from "./objmodelOpening";

export interface IDataProvider {
    readOpenings(s:string): Promise<IOpening[]>;
}
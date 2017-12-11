import { ICMDocument } from "../common/IObjects";

export default  interface IDataProvider {

    validateSettings(): boolean;

    readDocumentsFromSearch(): Promise<ICMDocument[]>;

    readDocumentsFromLibrary(): Promise<ICMDocument[]>;

}
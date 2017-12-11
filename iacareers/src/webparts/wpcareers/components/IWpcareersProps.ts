import { PageContext } from "@microsoft/sp-page-context";
import { IDataProvider } from "../../../cmcommon/IDataProvider";

export interface IWpcareersProps {
  description: string;
  pageContext: PageContext;
  dataProvider: IDataProvider;
}

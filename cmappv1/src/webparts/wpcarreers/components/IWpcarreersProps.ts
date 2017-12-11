import { Store } from "redux";
import { PageContext } from "@microsoft/sp-page-context";
import { IDataProvider } from "../../../cmcommon/IDataProvider";
import { CareerappState } from "../types/index";

export interface IWpcarreersProps {
  //store: Store<CareerappState>;
  description: string;
  pageContext: PageContext;
  dataProvider: IDataProvider;
}

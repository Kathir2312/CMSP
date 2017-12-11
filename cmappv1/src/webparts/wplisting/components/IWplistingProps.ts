import PageContext from "@microsoft/sp-page-context/lib/PageContext";
import { IDataProvider} from "../../../cmcommon/IDataProvider";
import { Store } from "redux";
import { IOpeningViewState } from "../reducers/OpeningReducer";

export interface IWplistingProps {
  store: Store<IOpeningViewState>;
  description: string;
  pageContext: PageContext;
  dataProvider: IDataProvider;
}

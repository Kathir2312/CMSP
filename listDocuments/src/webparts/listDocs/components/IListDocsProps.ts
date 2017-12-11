import { DisplayMode } from '@microsoft/sp-core-library';
import IDataProvider from '../../../dataprovider/IDataProvider';

export interface IListDocsProps {
  title: string;
  webPartDisplayMode: DisplayMode;
  dataProvider: IDataProvider;
  useSearchData: boolean;
}

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, EnvironmentType } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'WplistingWebPartStrings';
import Wplisting from './components/Wplisting';
import { IWplistingProps } from './components/IWplistingProps';
import { IDataProvider } from '../../cmcommon/IDataProvider';
import Environment from '@microsoft/sp-core-library/lib/Environment';
import mockDataProvider from '../../cmcommon/mockDataProvider';
import sharepointDataProvider from '../../cmcommon/sharepointDataProvider';

export interface IWplistingWebPartProps {
  description: string;
}
import { Provider } from 'react-redux';
import reduxstore  from './store/reduxstore';
const mystore = reduxstore();

export default class WplistingWebPart extends BaseClientSideWebPart<IWplistingWebPartProps> {

  private _dataProvider: IDataProvider;
  
     protected onInit(): Promise<void> {
//       debugger;
       //if (DEBUG && Environment.type === EnvironmentType.Local) {
         this._dataProvider = new mockDataProvider();  
       //} else {
         //  this._dataProvider = new sharepointDataProvider();
       //}
       return super.onInit();
     }

  // public render(): void {
  //   const element: React.ReactElement<IWplistingProps > = React.createElement(
  //     Wplisting,
  //     {
  //       description: this.properties.description,
  //       pageContext: this.context.pageContext,
  //       dataProvider: this._dataProvider
  //     }
  //   );

  //   ReactDom.render(element, this.domElement);
  // }


  public render(): void {
    
        const provider: React.ReactElement<Provider> = React.createElement(typeof Provider,null, React.createElement(
          Wplisting,
          {
            store:mystore,
            description: this.properties.description,
            pageContext: this.context.pageContext,
            dataProvider: this._dataProvider
          }
        )
      );
    
    
        ReactDom.render(provider, this.domElement);
      }


  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-webpart-base';

import * as strings from 'Spfxreact1WebPartStrings';
import Spfxreact1 from './components/Spfxreact1';
import { ISpfxreact1Props } from './components/ISpfxreact1Props';

export interface ISpfxreact1WebPartProps {
  description: string;
}

export default class Spfxreact1WebPart extends BaseClientSideWebPart<ISpfxreact1WebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxreact1Props > = React.createElement(
      Spfxreact1,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
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

export interface ISPLists {
  value: ISPList[];
}

export interface ISPList {
  Title: string;
  Id: string;
}

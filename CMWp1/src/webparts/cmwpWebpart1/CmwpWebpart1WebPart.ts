import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'CmwpWebpart1WebPartStrings';
import CmwpWebpart1 from './components/CmwpWebpart1';
import { ICmwpWebpart1Props } from './components/ICmwpWebpart1Props';

export interface ICmwpWebpart1WebPartProps {
  description: string;
}

export default class CmwpWebpart1WebPart extends BaseClientSideWebPart<ICmwpWebpart1WebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICmwpWebpart1Props > = React.createElement(
      CmwpWebpart1,
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

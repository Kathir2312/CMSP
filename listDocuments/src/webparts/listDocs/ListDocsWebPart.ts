import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ListDocsWebPartStrings';
import ListDocs from './components/ListDocs';
import { IListDocsProps } from './components/IListDocsProps';

export interface IListDocsWebPartProps {
  description: string;
}

export default class ListDocsWebPart extends BaseClientSideWebPart<IListDocsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IListDocsProps > = React.createElement(
      ListDocs,
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

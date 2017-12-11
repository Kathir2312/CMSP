import * as React from 'react';
import styles from './ListDocs.module.scss';
import { IListDocsProps } from './IListDocsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {DisplayMode} from '@microsoft/sp-core-library';
import { Link, MarqueeSelection, DetailsList, Selection, Image, ImageFit,SelectionMode, Spinner, SpinnerSize, Fabric, ColumnActionsMode, IColumn, CheckboxVisibility,Callout, Panel,
     PanelType, IContextualMenuItem, autobind, ContextualMenu, IContextualMenuProps, DirectionalHint,css } 
from 'office-ui-fabric-react';

import * as _ from "lodash";
import IListDocumentState from './IListDocumentState'
import MockupDataProvider from '../../../dataprovider/mockupDataProvider';
import IDataProvider from '../../../dataprovider/IDataProvider';
import { ICMDocument } from '../../../common/IObjects';
import { Utils } from '../../../common/Utils';


export default class ListDocs extends React.Component<IListDocsProps, {}> {
  private _selection: Selection;
  private _isConfigurationValid: boolean = true;

  constructor(props: IListDocsProps) {
    super(props);

    this._isConfigurationValid = false;
    if (props.dataProvider) {
      this._isConfigurationValid = props.dataProvider.validateSettings();
    }

    this.state = {
      allDocuments: [],
      displayedDocuments: [],
      isLoading: true,
      contextualMenuProps: null,
      columns: this._setupColumns()
    };

    this._renderItemColumn = this._renderItemColumn.bind(this);
    this._onResetFiltersClicked = this._onResetFiltersClicked.bind(this);
    //this._onContextualMenuDismissed = this._onContextualMenuDismissed.bind(this);
    //this._getContextualMenuProps = this._getContextualMenuProps.bind(this);

  }
 render(): React.ReactElement<IListDocsProps> {
    return (
      <div className={ styles.listDocs }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.title)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  public componentDidMount() {
    debugger;
    if (this._isConfigurationValid) {

      if (this.props.useSearchData) {
        this.props.dataProvider.readDocumentsFromSearch().then(
          (documents: ICMDocument[]) => {
            debugger;
            this.setState({
              allDocuments: documents,
              displayedDocuments: documents,
              isLoading: false,
              //columns: this.state.columns
            });

          },
          (data: any) => {

            this.setState({
              allDocuments: [],
              displayedDocuments: [],
              isLoading: false,
              isErrorOccured: true,
              errorMessage: data
            });

          }).catch((ex) => {

            this.setState({
              allDocuments: [],
              displayedDocuments: [],
              isLoading: false,
              isErrorOccured: true,
              errorMessage: ex.errorMessage
            });
          });
      }
      else {
        this.props.dataProvider.readDocumentsFromLibrary().then(
          //resolve
          (documents: ICMDocument[]) => {
            debugger;
            this.setState({
              allDocuments: documents,
              displayedDocuments: documents,
              isLoading: false,
              //columns: this.state.columns
            });

          },
          //reject
          (data: any) => {

            this.setState({
              allDocuments: [],
              displayedDocuments: [],

              isLoading: false,
              isErrorOccured: true,
              errorMessage: data
            });
          }
        ).catch((ex) => {
          debugger;
          this.setState({
            allDocuments: [],
            displayedDocuments: [],
            isLoading: false,
            isErrorOccured: true,
            errorMessage: ex.errorMessage
          });

        });
      }

    }
  }

  private _setupColumns(): IColumn[] {
    
        const columnsSingleClient: IColumn[] =
          [{
            key: 'FileIcon',
            name: '',
            fieldName: 'FileIcon',
            minWidth: 20,
            maxWidth: 20,
            isResizable: true,
            data: String
          },
          {
            key: 'Name',
            name: 'Name',
            fieldName: 'Name',
            minWidth: 100,
            isResizable: true,
            isSorted: false,
            isSortedDescending: false,
            columnActionsMode: ColumnActionsMode.hasDropdown,
            onColumnClick: this._onColumnClick,
            onColumnContextMenu: this._onColumnContextMenu,
            data: String
          },
          {
            key: 'ContentType',
            name: 'Content Type',
            fieldName: 'ContentType',
            minWidth: 80,
            isResizable: true,
            isSorted: false,
            isSortedDescending: false,
            columnActionsMode: ColumnActionsMode.hasDropdown,
            onColumnClick: this._onColumnClick,
            onColumnContextMenu: this._onColumnContextMenu,
            data: String
          },
          {
            key: 'Id',
            name: 'ID',
            fieldName: 'Id',
            minWidth: 60,
            isResizable: true,
            isSorted: false,
            isSortedDescending: false,
            columnActionsMode: ColumnActionsMode.hasDropdown,
            onColumnClick: this._onColumnClick,
            onColumnContextMenu: this._onColumnContextMenu,
            data: Number
          },
          {
            key: 'VersionString',
            name: 'Version',
            fieldName: 'VersionString',
            minWidth: 60,
            isResizable: true,
            isSorted: false,
            isSortedDescending: false,
            data: String
          },
          {
            key: 'Modified',
            name: 'Modified',
            fieldName: 'Modified',
            minWidth: 80,
            isResizable: true,
            isSorted: false,
            isSortedDescending: false,
            columnActionsMode: ColumnActionsMode.hasDropdown,
            onColumnClick: this._onColumnClick,
            onColumnContextMenu: this._onColumnContextMenu,
            data: Date
          },
          {
            key: 'ModifiedBy',
            name: 'Modified By',
            fieldName: 'ModifiedBy',
            minWidth: 80,
            isResizable: true,
            isSorted: false,
            isSortedDescending: false,
            columnActionsMode: ColumnActionsMode.hasDropdown,
            onColumnClick: this._onColumnClick,
            onColumnContextMenu: this._onColumnContextMenu,
            data: String
          },
          ];
    
        return columnsSingleClient;
      }
    
      private _onResetFiltersClicked() {
    
        //*let columns = this.state.columns;
        //reset the columns
        _.map(columns, (c: IColumn) => {
    
          c.isSorted = false;
          c.isSortedDescending = false;
          c.isFiltered = false;
    
        });
        //update the state, this will force the control to refresh
        this.setState({
          //*displayedDocuments: this.state.allDocuments,
          showResetFilters: false,
          //*columns: columns
        });
    
      }
    
      private _renderItemColumn(item, index, column) {
        //here we can add column specific logic
        // - image control for the FileIcon column
        // - render link for the Name column
        let fieldContent = item[column.fieldName];
    
        switch (column.key) {
          case 'FileIcon':
            return <Image src={fieldContent} width={16} height={16} imageFit={ImageFit.center} />;
          case 'Name':
            return <Link data-selection-invoke={true} >{item[column.key]}</Link>;
          default:
            return <span>{fieldContent}</span>;
        }
    
      }
    
      private _openDocument(docItem: ICMDocument, thisContext: any): void {
        debugger;
        let utility = new Utils();
        //*utility.OpenDocument(docItem, thisContext, true);
      }
    

      @autobind
      private _onColumnClick(ev: React.MouseEvent<HTMLElement>, column: IColumn) {
        debugger;
        if (column.columnActionsMode !== ColumnActionsMode.disabled) {
          this.setState({
            contextualMenuProps: this._getContextualMenuProps(ev, column)
          });
        }
      }
      private _getContextualMenuProps(ev: React.MouseEvent<HTMLElement>, column: IColumn): IContextualMenuProps {
        debugger;
        let utility = new Utils();
        let items: IContextualMenuItem[] = utility.GetSortingMenuItems(column, this._onSortColumn);
        if (this.isFilterable(column.key)) {
          items.push({
            key: 'filterBy',
            name: 'Filter by ',// + column.name,
            canCheck: true,
            checked: column.isFiltered,
            subMenuProps: {
              items: this._GetFilterValues(column)
            }
          });
        }
    
        return {
          items: items,
          targetElement: ev.currentTarget as HTMLElement,
          directionalHint: DirectionalHint.bottomLeftEdge,
          gapSpace: 10,
          isBeakVisible: true,
          onDismiss: this._onContextualMenuDismissed
        };
      }
}

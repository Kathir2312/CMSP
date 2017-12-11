import * as React from 'react';
import styles from './Wplisting.module.scss';
import { IWplistingProps } from './IWplistingProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import pnp from "sp-pnp-js";
import { Web } from "sp-pnp-js/lib/sharepoint/webs";
import {IDataProvider} from '../../../cmcommon/IDataProvider';
import { IWplistingState } from './IWplistingState';
import { IOpening } from '../../../cmcommon/objmodelOpening';
import {
  Link, MarqueeSelection, DetailsList, DetailsListLayoutMode, Selection, Image, ImageFit,
  SelectionMode, Spinner, SpinnerSize, Fabric, ColumnActionsMode, IColumn, CheckboxVisibility,
  Callout, Panel, PanelType, IContextualMenuItem, autobind, ContextualMenu, IContextualMenuProps, DirectionalHint,
  css
} from 'office-ui-fabric-react';
import { connect } from 'react-redux';
import { getOpenings } from '../actions/OpeningsActions';
import { Dispatch } from 'redux';
import { IOpeningViewState } from '../reducers/OpeningReducer';

export interface IDetailsListDocumentsExampleState {
  columns: IColumn[];
  items: IOpening[];
  selectionDetails: string;
  isModalSelection: boolean;
  isCompactMode: boolean;
}

const _columns:IColumn[]=[
  { key:'colOpening',
    minWidth:70,
    maxWidth:90,
    name:'Opening',
    fieldName:'Opening',
    data: 'string',
    isResizable: true,
  },
  { key:'colQual',
    minWidth:90,
    maxWidth:100,
    name:'Qualification',
    fieldName:'Qualification',
    data: 'string',
    isResizable: true,
  },
  { key:'colStartDate',
  minWidth:90,
  maxWidth:100,
  name:'StartDate',
    fieldName:'StartDate',
    data: 'string',
    isResizable: true,
  },
  { key:'colEndDate',
  minWidth:90,
  maxWidth:100,
  name:'EndDate',
    fieldName:'EndDate',
    data: 'string',
    isResizable: true,
  }
];


interface IConnectedDispatch {
	getLists: (mydataProvider:IDataProvider) => void;
}

interface IConnectedState {
  Openings:IOpening[];
  isLoding:boolean;
  ErrorMsg:String;
}

//#region   "old"
//Map the application state to the properties of the Components. Making them available in this.props inside the component.
// function mapStateToProps(state: IOpeningViewState, ownProps: IWplistingProps): IOpeningViewState {
// 	return {
//     Openings: state.Openings,
//     isLoding :state.isLoding,
//     ErrorMsg: state.ErrorMsg
//   };
// }
//#endregion

function mapStateToProps(state: IOpeningViewState, ownProps: IWplistingProps): IOpeningViewState {
	return state;
}

//#region   "old"
// //Map the actions to the properties of the Component. Making them available in this.props inside the component.
// const mapDispatchToProps = (dispatch: Dispatch<IOpeningViewState>):IConnectedDispatch=> ({
// 	getLists: (mydataProvider: IDataProvider) => {
//     dispatch(getOpenings(mydataProvider));
// 	}
// 	// addList: (spHttpClient: SPHttpClient, currentWebUrl: string, listtitle: string) => {
// 	// 	dispatch(addList(spHttpClient, currentWebUrl, listtitle));
// 	// }
// });
//#endregion

const mapDispatchToProps = (dispatch: Dispatch<IOpeningViewState>)=> ({
	getLists: (mydataProvider: IDataProvider) => {
    dispatch(getOpenings(mydataProvider));
	}
});


 class Wplisting extends React.Component<IWplistingProps & IOpeningViewState & IConnectedDispatch,{}> {


  public render(){
    //let { items, isLoading, columns, isCompactMode  } = this.state;
    const _items: IOpening[]= this.props.Openings;

    return (
      <div className={ styles.wplisting }>
          {this.props.isLoding &&    <Spinner size={SpinnerSize.large} />}
          <DetailsList
            items={ this.props.Openings }
            columns={ _columns }
            setKey='set'
            layoutMode={ DetailsListLayoutMode.justified }
            isHeaderVisible={ true }
            selectionPreservedOnEmptyClick={ true }
          />

      </div>
      
    );
  }

  public componentDidMount() {
    // debugger;
    // this.props.dataProvider.readOpenings('test').then(ls=>{
    //   this.setState({ items: ls, isLoading:false, columns: _columns, isCompactMode:false})
    // })
      this.props.getLists(this.props.dataProvider);
  
  }

// protected  _renderListings():void{
//   this.props.dataProvider.readOpenings('test').then(ls=>{
//     this.setState({ items: ls, isLoading:false})
//   })

//   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wplisting);
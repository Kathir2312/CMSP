import { IColumn, Spinner, SpinnerSize, DetailsList, DetailsListLayoutMode, Selection, ISelection,  CompoundButton } from 'office-ui-fabric-react'
import * as React from "react";
import { IOpening } from "../../../cmcommon/objmodelOpening";
import styles from './Wpcareers.module.scss'
import { JoblistingState, CareerappState } from "../types/index";
import { Dispatch } from "redux";
import { IDataProvider } from "../../../cmcommon/IDataProvider";
import { getJobOpenings, jobSelected } from "../actions/actionCreatorListingJobs";
import { connect } from 'react-redux';

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
      data: 'date',
      isResizable: true,
    },
    { key:'colEndDate',
    minWidth:90,
    maxWidth:100,
    name:'EndDate',
      fieldName:'EndDate',
      data: 'date',
      isResizable: true,
    }
  ];

export interface IJobListingProps {
        dataProvider: IDataProvider;
       }

export interface IJobListingEvents{
    getJobs: (mydataProvider: IDataProvider)=>void;
    selctionchanged : (item:IOpening)=>void;
}
//Store ===> Component(import/decouple state object in to component specific state props)
function mapStateToProps(state: CareerappState, ownProps: {}): JoblistingState {
	return state.jobOpeningState;
    }
// Component ===>  Store  sending events to store from components
const mapDispatchToProps = (dispatch: Dispatch<JoblistingState>) : IJobListingEvents => ({
        getJobs: (mydataProvider: IDataProvider) => {
            dispatch(getJobOpenings(mydataProvider));
        },
        selctionchanged : (item:IOpening) =>{
            dispatch(jobSelected(item));
        }
    });
    
class CMjobListingComponent extends React.Component<IJobListingProps  & JoblistingState &  IJobListingEvents, {}> {
  private _selection: Selection;
      constructor (props){
        super(props);
        //this._selection= new Selection();

        this._selection = new Selection({
          onSelectionChanged: () => {
            console.log(this._selection.getSelection()[0]);
             this.props.selctionchanged(this._selection.getSelection()[0] as IOpening)
          }
        });
      }
      public render(){
            //let { items, isLoading, columns, isCompactMode  } = this.state;
            const _items: IOpening[]= this.props.jobOpenings;
            

            return (
              <div className={ styles.wpcareers}>
                  {this.props.loading  && <Spinner size={SpinnerSize.large} />}
                  <DetailsList
                    items={ this.props.jobOpenings }
                    columns={ _columns }
                    setKey='set'
                    layoutMode={ DetailsListLayoutMode.justified }
                    isHeaderVisible={ true }
                    selectionPreservedOnEmptyClick={ true }
                    selection = {this._selection}
                  /> 
              </div>
              
            );      
      }

      public componentDidMount() {
          this.props.getJobs(this.props.dataProvider);
      
      }


      private _getSelectionDetails(): string {
        let selectionCount = this._selection.getSelectedCount();
        console.log(this._selection);
        switch (selectionCount) {
          case 0:
            return 'No items selected';
          case 1:
            return '1 item selected: ' + (this._selection.getSelection()[0] as any).Opening;
          default:
            return `${selectionCount} items selected`;
        }
      }

      private _onItemInvoked(item: IOpening): void {
        alert(`Item invoked: ${item.Opening}`);
      }

  }

  export default connect(mapStateToProps, mapDispatchToProps)(CMjobListingComponent);
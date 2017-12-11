
import { ICMDocument } from '../../../common/IObjects';
import { IColumn, IContextualMenuProps } from 'office-ui-fabric-react';

interface IListDocumentState {
    allDocuments?: ICMDocument[];
    displayedDocuments?: ICMDocument[];
    showResetFilters?: boolean;
    isLoading?: boolean;
    columns?: IColumn[];
    showPanel?: boolean;
    panelDocUrl?: string;
    panelTitle?: string;
    contextualMenuProps?: IContextualMenuProps;

    //???
    isErrorOccured?: boolean;
    errorMessage?: string;
}

export default IListDocumentState;
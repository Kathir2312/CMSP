import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { openingreducer } from '../reducers/OpeningReducer';
import { IOpening } from '../../../cmcommon/objmodelOpening';
import {Store} from 'redux';
import { IDataProvider } from '../../../cmcommon/IDataProvider'
const loggerMiddleware = createLogger();

export default function reduxstore() {

    //if (process.env.NODE_ENV === 'production') {
      //  return createStore(openingreducer, applyMiddleware(thunkMiddleware));
    //}
    //else {
        return createStore(openingreducer, applyMiddleware(thunkMiddleware, loggerMiddleware));
    //}
}

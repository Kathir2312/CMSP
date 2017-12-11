import {reducerListingJobs} from './reducerListingJobs'
import { Reducer } from 'redux';
import { CareerappState } from '../types/index';
import { combineReducers } from 'redux';

const reducerIndex: Reducer<CareerappState> = combineReducers<CareerappState>({
    //setting:CMCareersSetting,
    jobOpeningState: reducerListingJobs
});


export default reducerIndex;
import { IColumn, Spinner, SpinnerSize, DetailsList, DetailsListLayoutMode, Selection, ISelection,  CompoundButton, TextField } from 'office-ui-fabric-react'
import * as React from "react";
import { IPersonalInfo } from "../../../cmcommon/objmodelIACareers";
import styles from './Wpcareers.module.scss'
import { userInfoState, CareerappState } from "../types/index";
import { Dispatch } from "redux";
import { IDataProvider } from "../../../cmcommon/IDataProvider";
import { getJobOpenings, jobSelected } from "../actions/actionCreatorListingJobs";
import { connect } from 'react-redux';


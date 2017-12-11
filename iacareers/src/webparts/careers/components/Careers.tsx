import * as React from 'react';
import styles from './Careers.module.scss';
import { ICareersProps } from './ICareersProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {CommandButton, CompoundButton } from 'office-ui-fabric-react';

export default class Careers extends React.Component<ICareersProps, {}> {
  public render(): React.ReactElement<ICareersProps> {
    return (
      <div className={ styles.careers }>
        <CompoundButton
            primary={ true }
            description='You can create a new account here.'
            disabled={ true }
            checked={ false }
          >
            Create account
          </CompoundButton>        
      </div>
    );
  }
}

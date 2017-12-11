import * as React from 'react';
import styles from './CmwpWebpart1.module.scss';
import { ICmwpWebpart1Props } from './ICmwpWebpart1Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class CmwpWebpart1 extends React.Component<ICmwpWebpart1Props, {}> {
  public render(): React.ReactElement<ICmwpWebpart1Props> {
    return (
      <div className={ styles.cmwpWebpart1 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Custom Webpart With React!</span>
              <p className={ styles.subTitle }>Customize react experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
              <span>&nbsp;</span>
              <button onClick={(e)=>{alert('clicked');}}  value="Click" className={styles.button}>Click Me</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

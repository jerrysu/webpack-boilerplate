import React from 'react';

import cx from 'classnames';

import styles from './styles/App.css';

export default class App extends React.Component {
  state = {
    clicked: false
  }

  handleClick() {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className={styles.header}>Jumbotron</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling extra
            attention to featured content or information.
          </p>
          <p>
            <a
              className={cx('btn', 'btn-lg', {
                'btn-default': this.state.clicked,
                'btn-primary': !this.state.clicked
              })}
              onClick={() => this.handleClick()}>
              Learn more
            </a>
          </p>
        </div>
      </div>
    );
  }
}

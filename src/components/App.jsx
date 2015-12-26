import Button from 'Button.jsx';
import React from 'react';

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
            <Button
              type={this.state.clicked ? 'danger' : 'primary'}
              size="large"
              onClick={() => this.handleClick()}>
              Learn more
            </Button>
          </p>
        </div>
      </div>
    );
  }
}

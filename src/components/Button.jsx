import React from 'react';
import cx from 'classnames';

export default class Button extends React.Component {
  static propTypes = {
    href: React.PropTypes.string,
    block: React.PropTypes.bool,
    type: React.PropTypes.oneOf([
      'default',
      'primary',
      'success',
      'info',
      'warning',
      'danger',
      'link'
    ]),
    size: React.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large'])
  };

  static defaultProps = {
    size: 'medium',
    type: 'default',
    block: false
  };

  state = {
    active: false
  };

  render() {
    const {size, type, ...props} = this.props;
    const Component = this.props.href ? 'a' : 'button';
    return (
      <Component
        {...props}
        className={cx('btn', {
          'btn-xs': this.props.size === 'xsmall',
          'btn-sm': this.props.size === 'small',
          'btn-lg': this.props.size === 'large',
          'btn-primary': this.props.type === 'primary',
          'btn-success': this.props.type === 'success',
          'btn-info': this.props.type === 'info',
          'btn-warning': this.props.type === 'warning',
          'btn-danger': this.props.type === 'danger',
          'btn-block': this.props.block
        })}>
        {this.props.children}
      </Component>
    );
  }
}

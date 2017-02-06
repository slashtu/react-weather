import React, { PureComponent } from 'react';

// import css from './Menu.css'

export default class MenuItem extends PureComponent {
  render() {
    const { name, index } = this.props
    console.log(this.props)
    return (
        <li onClick={this.props.onSelect.bind(this, index)}>{name}</li>
    );
  }
}

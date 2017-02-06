import React, { Component, cloneElement } from 'react';

// import css from './Menu.css'

export default class Menu extends Component {
  render() {
    const { activeKey, onSelect } = this.props; 

    const children = this.props.children.map((child, index) => {
      const isActive = (index === activeKey)? true : false;
      return cloneElement(child, {active: isActive, onSelect, index});
    });

    return (
      <lu>
        {children}
      </lu>
    );
  }
}

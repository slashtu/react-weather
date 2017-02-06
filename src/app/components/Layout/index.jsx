import React, { Component } from 'react';
import css from './Layout'

class Header extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={css.Header}>
        {children}
      </div>
    );
  }
}

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={css.Layout}>
        {children}
      </div>
    );
  }
}

class Content extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={css.Content}>
        {children}
      </div>
    );
  }
}

class Sider extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={css.Sider}>
        {children}
      </div>
    );
  }
}

Layout.Header = Header;
Layout.Content = Content;
Layout.Sider = Sider;

export default Layout;

import React, { Component } from 'react';

import Layout from 'components/Layout'
const { Content, Header, Sider } = Layout;

// import Table from 'components/Table';
import Menu from 'components/Menu'
import MenuItem from 'components/MenuItem'
import LineChart from 'components/Chart/LineChart'
import TodayWeather from 'containers/TodayWeather'

import style from './App.css';

export default class App extends Component {

  state = {
    selectedIndex: 0
  }

  componentDidMount(){

  }

  renderContent = () => {

    let content;

    switch(this.state.selectedIndex){
      case 0:
        content = <LineChart />;
        break;

      case 1:
        content = <TodayWeather />;
        break;

      deafult:
        content = <TodayWeather />;
    }
    return content;
  }

  handleSelect = ( index ) => {
    console.log('selected', index);
    this.setState({ selectedIndex: index });
  }

  render() {
    return (
      <Layout>
        <Sider>
          <Menu activeKey={this.state.selectedIndex} onSelect={this.handleSelect}>
            <MenuItem name={`Data Analysis`} />
            <MenuItem name={`Today's Weather`} />
          </Menu>
        </Sider>
        <Content>
          {this.renderContent()}
        </Content>
      </Layout>
    );
  }
}

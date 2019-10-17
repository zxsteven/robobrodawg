import React, { Component } from 'react';
import { connect } from 'react-redux'

import Search from '../components/Search'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'

import { setSearchField, requestRobot } from '../redux/actions/actions'

import './App.css'
import 'tachyons';

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots()
  }

  render() {

    const { searchField, onSearchChange, robots, isPending } = this.props
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboBroDawg</h1>
          <Search searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobot.searchField,
    robots: state.requestRobot.robots,
    isPending: state.requestRobot.isPending,
    error: state.requestRobot.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobot())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);

import React, { Component } from 'react'
import Papa from 'papaparse'

import CityTable from './CityTable'

import './App.css'

import citiesCSV from './cities'

class App extends Component {

  state = {
    cities: [],
    loading: true
  }

  componentDidMount () {
    Papa.parse(citiesCSV, {
      header: true,
      dynamicTyping: true,
      complete: ({data: cities}) => {
        this.setState({
          cities,
          loading: false
        })
      }
    })
  }

  sortCities = query => {
    switch (query) {
      case 'City':
      case 'Country':
      case '#':
        return [...this.state.cities].sort((a, b) => {
          return a[query] < b[query] ? -1 : 1
        })
      default:
        return [...this.state.cities].sort((a, b) => {
          return a[query] < b[query] ? 1 : -1
        })
    }
  }

  parseQuery = () => {
    const query = window.location.href.replace(window.location.origin, '').slice(1)

    if (query === '') {
      return query
    } else {
      return query.replace(/%20|-/, ' ').split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
    }
  }

  render() {
    const { cities, loading } = this.state
    const { sortCities, parseQuery } = this

    let displayedCities = [...cities]
    if (cities[0]) {
      const query = parseQuery()
      if (cities[0].hasOwnProperty(query)) {
        displayedCities = sortCities(query)
      } else {
        query !== '' && alert('Invalid query: ' + query)
      }
    }

    return (
        loading
        ? <div>Loading...</div>
        : <CityTable cities={displayedCities} />
    )
  }

}

export default App;

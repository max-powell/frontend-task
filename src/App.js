import React, { Component } from 'react'
import Papa from 'papaparse'

import CityTable from './CityTable'

import './App.css'

import citiesCSV from './cities'

class App extends Component {

  state = {
    headers: [],
    cities: [],
    loading: true
  }

  componentDidMount () {
    Papa.parse(citiesCSV, {
      dynamicTyping: true,
      complete: ({data: [headers, ...cities]}) => {
        this.setState({
          headers,
          cities,
          loading: false
        })
      }
    })
  }

  sortCities = query => {
    const propertyIndex = this.state.headers.findIndex((e) => e === query)

    const comparatorAsc = (a, b) => {
      return a[propertyIndex] < b[propertyIndex] ? -1 : 1
    }

    const comparatorDesc = (a, b) => {
      return -comparatorAsc(a, b)
    }


    switch (query) {
      case 'City':
      case 'Country':
      case '#':
        return [...this.state.cities].sort(comparatorAsc)
      default:
        return [...this.state.cities].sort(comparatorDesc)
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
    const { headers, cities, loading } = this.state
    const { sortCities, parseQuery } = this

    let displayedCities = [...cities]
    if (!loading) {
      const query = parseQuery()
      console.log(headers, query)
      if (headers.includes(query)) {
        displayedCities = sortCities(query)
      } else {
        query !== '' && alert('Invalid query: ' + query)
      }
    }

    return (
        loading
        ? <div>Loading...</div>
        : <CityTable headers={headers} cities={displayedCities} />
    )
  }

}

export default App;

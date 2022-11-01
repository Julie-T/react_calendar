import React from 'react'
import PropTypes from 'prop-types'
import Calendar from './components/Calendar'

const App = (props) => {
  const now = new Date(2017, 2, 8);
  
  return (
    <div><Calendar now={now}/></div>
  )
}

App.propTypes = {}

export default App

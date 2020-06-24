import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

import { initialState } from './initialState'
import { reducer } from './reducer'

const controllersContext = createContext(initialState)

const { Provider } = controllersContext

const ControllersStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

ControllersStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { controllersContext, ControllersStateProvider }

import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

import { initialState } from './initialState'
import { reducer } from './reducer'

const appControllersContext = createContext(initialState)
appControllersContext.displayName = 'Application Controllers'

const { Provider } = appControllersContext

const AppControllersStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

AppControllersStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { appControllersContext, AppControllersStateProvider }

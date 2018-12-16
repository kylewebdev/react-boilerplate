import React from 'react'
import { hot } from 'react-hot-loader'

// const COMPONENT = React.lazy(() => import('./COMPONENT'))

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default hot(module)(App)

import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './Components/Login'
import Home from './Components/Home'
import NotFound from './Components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" Component={Login} />
    <Route exact path="/" Component={Home} />
    <Route path="/not-found" Component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App

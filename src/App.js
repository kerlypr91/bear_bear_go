
import './App.scss';
import 'semantic-ui-css/semantic.min.css'

import { Provider } from 'react-redux'
import Home from './Containers/Home'
import store from './Redux/store'

function App () {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Main from './Main';



class App extends React.Component
{
  render()
  {
    const element =

      <BrowserRouter>
        <
          Route
          path={ '/' }
          exact={ true }
          component={ () => <Main/> }
        />

        <
          Route
          path={ '/root' }
          exact={ true }
          component={ () => <div>root</div> }
        />

      </BrowserRouter>
    ;

    return element;
  }
}

export default App;

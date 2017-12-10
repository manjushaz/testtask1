import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBarFixed from './appbar';
import MainArea from './mainarea';

class App extends React.Component {
  render() {
    return(
      <MuiThemeProvider>
      <NavBarFixed />
      <MainArea />
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

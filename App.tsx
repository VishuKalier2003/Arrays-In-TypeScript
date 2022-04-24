import './App.css';
// { App component } present in components folder
// Retrieving the required component by the folder identity
import { Greet } from './components/Greet';
import { Name } from './components/Name';
import { List } from './components/List';

function App() {
  const NameList = [
    { first_name: 'Harsh',
      last_name: 'Panwar'
    },
    { first_name: 'Divyansh',
      last_name: 'Rajput'
    },
    { first_name: 'Sarthak',
      last_name: 'Bajaj'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Greet name='Vishu Kalier' num={10} loggedIn={true}/>
        <Name first_name='Vishu' last_name='Kalier' />
        <List names={NameList}/>
        </header>
    </div>
  );
}

export default App;

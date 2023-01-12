import './App.css';
import First from './components/First';

function App() {
  return (
    <div className="App">
      <First firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <First firstName="John" lastName="Smith" age={88} hairColor="Brown" />
    </div>
  );
}


export default App;

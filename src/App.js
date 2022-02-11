import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation';
import UpperSection from './components/UpperSection';
import Stores from './components/Stores';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <UpperSection></UpperSection>
      <Stores></Stores>
    </div>
  );
}

export default App;

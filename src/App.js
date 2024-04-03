
import './App.css';
import '../src/Utils/Scrollbar.css'; // Import your CSS file with scrollbar styles
import Home from './Components/Home';

function App() {
  return (
    <div style={{ 
      backgroundColor: '#0b0f19',
      height : '100%' , 
      width : '100%',
      overflow : 'auto'
      }}>
   <Home />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';


function App() {
    return (
        <div className="App">
            <Navbar />
            <h1>CS 230L</h1>
            <h2>Section - 002</h2>
            <p>WVU ID: 800312805</p>
            <p>Hi, I am John Craft</p>
            <Card />
        </div>
    );
}

export default App;

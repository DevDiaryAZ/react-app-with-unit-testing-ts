import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const people = ["Ann", "Anton", "Dima", "Vasya"]
    const users = [
        {name: "Ann"},
        {name: "Anton"},
        {name: "Dima"},
        {name: "Vasya"}
    ]
    const liElement = users.map((el, index) => <li key={index}>{el.name}</li>)
    return (
        <div className="App">
            <ul>
                {liElement}
            </ul>
        </div>
    );
}

export default App;

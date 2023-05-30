 import { useState } from 'react'
 import './App.css'
import { useEffect } from "react";
import Header from "./componentes/Header";
import Taskslist from "./componentes/Taskslist";
import './style.css';


function App() {
  


  return (
    <div className="App">
      <Header />
      <Taskslist/>
    </div>
  );
}

export default App;

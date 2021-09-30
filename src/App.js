import './App.scss';
import { useState, useEffect, useContext } from 'react';

import Table from "./components/table/table.js"
import Nav from "./components/nav/nav.js"
import Menu from "./components/menu/menu.js"
import Modal from "./components/modal/modal.js"

import ModalContext from "./context/modal-context.js"


function App() {

  const [folders,setFolders] = useState([])
  const [activeFolder, setActiveFolder] = useState(["inbox"])

  useEffect(
      async () => {
        const result = await fetch('./folders.js', { mode: 'no-cors'})
        .then(response => response.json())
        .then(data => setFolders(data));
      }
    ,[ ])

    const modalContext = useContext(ModalContext);
 

  return (
  
      <div  className="App">
        
        <Nav/>
        <div className="main-container">
          
          <Menu activeFolder={activeFolder} setActiveFolder={setActiveFolder} folders={folders}/> 
          <Table activeFolder={activeFolder}/>
          
          {modalContext.active ? <Modal/> : null}
          


        </div>
      </div>
  );
}

export default App;

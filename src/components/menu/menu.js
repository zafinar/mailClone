
import "./menu.scss"

import {useContext} from 'react'

import ModalContext from "../../context/modal-context.js"



function Menu (props){

   const modalContext = useContext(ModalContext)

   function createEmail(){
    modalContext.activeUpdate(true)
    modalContext.typeUpdate("write")
   }



    return(
        <div className="menu">
            <button class="compose" onClick={createEmail} >Compose</button>
            {props.folders.map((folder, i) => {
            
            return <button key={i} onClick={()=>{ props.setActiveFolder(folder.toLowerCase())}}>{folder}</button>
            })}
          
        </div>
    )
}

export default Menu
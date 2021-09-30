import { useState, useEffect, useContext } from 'react';

import ModalContext from "../../context/modal-context.js"

function TableRow (props) {

    const modalContext = useContext(ModalContext)

    function openEmail() {
     
      modalContext.activeUpdate(true);
      modalContext.contentUpdate(message);
      modalContext.typeUpdate("read")  
      console.log(modalContext.active)
    }
     
    const [message, setMessage] = useState({})
    useEffect(
        async () => {
          const result = await fetch(`./messages/${props.messageId}.js`, { mode: 'no-cors'})
          .then(response => response.json())
          .then(data => setMessage(data));
          
        }
      ,[])


    return (
            <tr onClick={openEmail}>
                <td  className="a" >
                from: {props.from}             
                </td>
                <td className="b">
                subject: {props.subject}           
                </td>
                <td className="c">
                {message.body ? message.body.substring(0,70) : ""} ...    
                </td>
                
            
            </tr>



    )
}

export default TableRow
import TableRow from "./table-row"
import { useState, useEffect } from 'react';
import "./table.scss"
function Table (props) {

   const [emails,setEmails] = useState([])


    useEffect(
        async () => {
          const result = await fetch(`./folders/${props.activeFolder}.js`, { mode: 'no-cors'})
          .then(response => response.json())
          .then(data => setEmails(data));
          
        }
      ,[props.activeFolder])


    return (
        <table>
            <tbody>
                {emails.map((email,i) => {
                    return <TableRow key={i} from={email.from} subject={email.subject} messageId={email["message-id"]} />
                })}
            </tbody>
        </table>
    )
}

export default Table
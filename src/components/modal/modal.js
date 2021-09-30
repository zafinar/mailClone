import "./modal.scss"

import {useContext,useState} from "react"

import ModalContext from "../../context/modal-context.js"



function Modal (props){
    const modalContext = useContext(ModalContext)

    const [content, setContent] = useState("");
    const [recipient, setRecipient] = useState("");
    const [subject, setSubject] = useState("");

    function closeModal(){
        modalContext.activeUpdate(false)
        modalContext.contentUpdate({})
        modalContext.typeUpdate("read")
    }

    function sendEmail(){
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let test = re.test(recipient);
        if(test){
           
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({subject: subject, to:recipient, body:content })
            };
            fetch('/messages/new', requestOptions)

            console.log(`
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({subject: subject, to:recipient, body:content })
            };
            fetch('/messages/new', requestOptions)`)
                

            
           closeModal()
        }

    }

    function favorite(){

    }

    function deleteMail(){
        modalContext.key
        async () => {
            const result = await fetch('./folders/inbox.js', { mode: 'no-cors'})
            .then(response => response.json())
            .then(data => setFolders(data));
          }
    }

    function replyTo(){
        modalContext.typeUpdate("write");
        setContent(modalContext.content.from+"\n"+modalContext.content.subject+"\n"+modalContext.content.to+"\n"+modalContext.content.date+"\n"+modalContext.content.body +"\n__________________________________________________")
        
        setRecipient(modalContext.content.from.match(/\<([^)]+)\>/)[1])

        setSubject("Re:"+modalContext.content.subject)
    }

    return(
       
        <div onClick={closeModal} className="backdrop">
           
            <div onClick={(event)=>{event.stopPropagation()}} className="modal">
                {modalContext.type === "read"
                ? 
                   <div>    
                        <div className="modal-nav">                 
                            <div onClick={replyTo} className="reply">reply</div>
                            <div className="favorite">favorite</div>
                            <div onClick={deleteMail} className="delete">delete</div>
                            <div onClick={closeModal} className="close">X</div>
                        </div>
                        
                        <div className="email-container">
                            <div>From:{modalContext.content.from}</div>
                            <div>Subject:{modalContext.content.subject}</div>
                            <div>To:{modalContext.content.to}</div>
                            <div>Date:{modalContext.content.date}</div>
                            <div class="email-body">Body:{modalContext.content.body}</div>
                        </div>
                    </div>
                :
                    <div>
                         <div className="modal-nav">           
                            <button onClick={sendEmail}>Send</button>      
                            <div onClick={closeModal} className="close">X</div>
                        </div>
                           
                            <div className="email-container write">
                                <span><input placeholder="To" type="text" onChange={(e) => setRecipient(e.target.value)} value={recipient}/></span>
                                <span><input placeholder="Subject" type="text" onChange={(e)=>setSubject(e.target.value)} value={subject}/></span>
                                <span><textarea placeholder="content" onChange={(e)=> setContent(e.target.value)} value={content} type="textbox"/></span>
                                 
                                
                              
                            </div>

                        
                    </div>    

                
                }
            </div>
           
            
            
        </div>
        
    )

}

export default Modal
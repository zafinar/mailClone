import {createContext, useState} from 'react'

const ModalContext = createContext({
  content: {},
  type: "read",
  active: false,
  key: null,
  typeUpdate: (type) => {},
  contentUpdate: (content) =>{},
  activeUpdate: (active) =>{},
  keyUpdate: (key) => {}   
});

export function ModalContextProvider(props){

    const [modalContent,setContent] = useState({})
    const [modalType, setType] = useState("read")
    const [modalActive, setActive] = useState(false)
    const [modalKey, setKey] = useState(null)
    

    function typeHandler(type){
        setType(type)
    }

    function contentHandler(content){
        setContent(content)
    }

    function activeHandler(active){
        setActive(active)
    }

    function keyHandler(key){
        setKey(key)
    }

    const context = {

        content: modalContent,
        type: modalType,
        active: modalActive,
        key: modalKey,
        typeUpdate: typeHandler,
        contentUpdate: contentHandler, 
        activeUpdate: activeHandler,
        keyUpdate: keyHandler,
    };


    return <ModalContext.Provider value={context}>
        {props.children}
    </ModalContext.Provider>

}

export default ModalContext;
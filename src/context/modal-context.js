import {createContext, useState} from 'react'

const ModalContext = createContext({
  content: {},
  type: "read",
  active: false,
  typeUpdate: (type) => {},
  contentUpdate: (content) =>{},
  activeUpdate: (active) =>{}   
});

export function ModalContextProvider(props){

    const [modalContent,setContent] = useState({})
    const [modalType, setType] = useState("read")
    const [modalActive, setActive] = useState(false)

    

    function typeHandler(type){
        setType(type)
    }

    function contentHandler(content){
        setContent(content)
    }

    function activeHandler(active){
        setActive(active)
    }

    const context = {
        content: modalContent,
        type: modalType,
        active: modalActive,
        typeUpdate: typeHandler,
        contentUpdate: contentHandler, 
        activeUpdate: activeHandler 
    };


    return <ModalContext.Provider value={context}>
        {props.children}
    </ModalContext.Provider>

}

export default ModalContext;
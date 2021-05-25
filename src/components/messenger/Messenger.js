import { useContext, useEffect, useState, useRef } from 'react';
import './Messenger.css'
import {db} from './../../firebase'
import { AuthContext } from '../../provider/AuthContext';

const Messenger = ()=>{

    const { userData } = useContext(AuthContext);

    const [ writeMessage, setWriteMessage] = useState("");
    const [ messages, setMessages] = useState()
    const scrollRef = useRef()

    const handleNewMessagge = async()=>{
        if(writeMessage!==""){
            console.log(writeMessage)
        }

        //get date
        const date = new Date;

        //set to firebase
        await db.collection("msgs").doc().set({
            owner : {id : userData.email, photo : userData.photo},
            text : writeMessage,
            time : date.getTime()
        })
            .then(()=>setWriteMessage(""))
    }

    const getMessages = ()=>{
        db.collection("msgs").orderBy("time", "asc").onSnapshot((querySnapshot)=>{
            let msgs = [];
            querySnapshot.forEach(doc=>{
                msgs.push({...doc.data(), id : doc.id})
            })
            setMessages(msgs)
        })
    }

    useEffect(()=>{
        getMessages()
    },[])


    useEffect(()=>{
        scrollRef.current?.scrollIntoView()
    },[messages])
    return(
        <>
            <div className="messenger">
                <div className="messenger-chat">
                    <div className="messenger-chat-box">
                        <ul className="messenger-list">
                            
                            {messages!==undefined 
                                ?
                                (
                                    messages.map((msg)=>{
                                        return(
                                            <li className="messenger-list-items" key={msg.id} ref={scrollRef}>
                                                <div className={`msg-box ${userData.email === msg.owner.id ? "own" : ""}`}>
                                                    <div className="msg-box__img-container">
                                                        <img
                                                            src={msg.owner.photo}
                                                            alt="user img"
                                                            className="msg-box__img"
                                                            />
                                                    </div>
                                                    <div className="msg-box__txt">
                                                        {msg.text}
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })             
                                )
                                :
                                (
                                    "Cargando"
                                )
                            }
                        
                        </ul>
                    </div>
                </div>
                <div className="messenger-send">
                    <div className="messenger-send-box">
                        <input
                            type="text"
                            className="messenger-send-box__input"
                            value={writeMessage}
                            onChange={e=>setWriteMessage(e.target.value)}
                            onKeyUp={e=>{if(e.key==="Enter"){handleNewMessagge()}}}
                        />
                        <button 
                            className="messenger-send-box__button"
                            onClick={handleNewMessagge}
                        >
                            SEND
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messenger;
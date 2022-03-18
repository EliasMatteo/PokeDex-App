import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const ChatBox =({
    msgs,
    chatTxt,
    SendToIO,
    setChatTxt
})=>{

//   const [mySoc, setMySoc] = useState(null);

//   const [msgs, setMsgs] = useState([]);
//   const [chatTxt, setChatTxt] = useState("");

//   const [users, setUsers] = useState({});

//   useEffect(()=>{
//     // const socket = io("ws://example.com/my-namespace", {
//     //   reconnectionDelayMax: 10000,
//     //   auth: {
//     //     token: "123"
//     //   },
//     //   query: {
//     //     "my-key": "my-value"
//     //   }
//     // });
//     const socket = io("http://localhost:8888");

//     // socket.on("user_connected", (users)=>{
//     //   setUsers(users);
//     // })

//     socket.on("change", (id, txt)=>{
//       // alert(`${id} has connected`)
//       setMsgs((prev)=>[
//         ...prev,
//         `${id}: ${txt}`
//      ])
//      console.log(setMsgs)
//     });

//     setMySoc(socket);
//   }, []);

//   const SendToIO = async () => {
//     mySoc.emit("alert_all", chatTxt)
//   };

    return (
        <div className="chat-box-container">
            <div className="chat-box-chatlog">
                {msgs.map((o,i)=><div className="chat-box-message">
                {o}
                </div>)}
            </div>
            <div className="chat-box-im">
                <input className="chat-box-input" type='text' placeholder="Write a message" onChange={(e)=>setChatTxt(e.target.value)}/>
                <button className="chat-box-button" onClick={SendToIO}>Send</button>
            </div>
        </div>
        );
    };

export default ChatBox;

// style={{background:"#CCC", padding:10, margin:10, borderRadius:"20px"}}

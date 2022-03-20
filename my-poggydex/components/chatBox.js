import { io } from "socket.io-client";
import { useEffect, useCallback, useState } from "react";
import Image from "next/image";

const ChatBox = ({ msgs, chatTxt, SendToIO, setChatTxt }) => {
  const [showChat, setShowChat] = useState(false);
  const hide = () => setShowChat(false);
  const show = () => setShowChat(true);

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

  if ((showChat==true))
    return (
      <div className="chat-box-container">
          <button className="chat-box-hide-button" onClick={hide}/>
        <div className="chat-box-chatlog">
          {msgs.map((o, i) => (
            <div className="chat-box-message">{o}</div>
          ))}
        </div>
        <div className="chat-box-im">
          <input
            className="chat-box-input"
            type="text"
            placeholder="Write a message"
            onChange={(e) => setChatTxt(e.target.value)}
          />
          <button className="chat-box-button" onClick={SendToIO}>
            Send
          </button>
        </div>
      </div>
    );
  else {
    return (
      <button className="chat-box-show-button" onClick={show}>
        <Image
          src={"/icon/chat.svg"}
          alt="chat icon"
          width={50}
          height={50}
        />
      </button>
    );
  }
};

export default ChatBox;

// style={{background:"#CCC", padding:10, margin:10, borderRadius:"20px"}}

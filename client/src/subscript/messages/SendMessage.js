import { useState } from "react";

const SendMessage = () => {
    const[message, setMessage] = useState('');
    const user = "Anonymous";
    const T_ID = window.location.pathname;
    var threadID = "0";
    if (T_ID === "/") { //home - 0
       threadID = "0";
    } else { //other thread
       threadID = T_ID.substring(9, T_ID.length);
    }
    
    const handleSendMessage = (e) => {
        
        const MU = {message, user, threadID};
        fetch('http://localhost:8000/info', {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify(MU)
        });
    }

    return (
        <div id="disp-msg-cont">
            <div className="dm-title">Send a message</div>
            <form class onSubmit={handleSendMessage}>
                <input 
                    type="text"
                    required
                    value = {message}
                    onChange = {(e) => setMessage(e.target.value)}
                    className="dm-new-msg"
                />
                <button className="dm-button">Send</button>
            </form>
        </div>
    );
}
 
export default SendMessage;
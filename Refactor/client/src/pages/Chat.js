import React from 'react';
import { Link } from "react-router-dom";

const Chat = () => {

  return (
    <section>
      <br/>
        <div className="userWelcome">Welcome to Cumulus Chat, <span id="usernameio ">User</span>!</div>
        <Link to="/">
        <button className="logoutButton" id="logout" type='submit'>Logout</button>
        </Link>
        
        <div >

          <div id="cumulus-chat" className="messageBox">

            <div id="cumulus-window">

              <ul className="messageList">
                <div id="output"></div>
                <div id="feedback"></div>
              </ul>

            </div>

          </div>

          <div className="input-group mb-3 messageInput">
            <input type="text" className="form-control" placeholder="Message" aria-label="Message" aria-describedby="basic-addon2" id="message"/>
              <button id="send" type="button">Send</button>
          </div>
        </div>
    </section>
  );
};

export default Chat;

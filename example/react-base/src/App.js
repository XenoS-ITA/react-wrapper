import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [message, setMessage] = useState("example");

  function OnMessage(event) {
    if (event.data.message) {
      console.log("Message received: " + event.data.message)
      setMessage(event.data.message);
    }
  }

  useEffect(() => {
    window.addEventListener("message", OnMessage)

    return () => {
      window.removeEventListener("message", OnMessage)
    }
  });
  

  return (
    <>
      <div>Message received is: {message}</div>
    </>
  );
}

export default App;

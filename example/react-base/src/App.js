import logo from './logo.svg';
import './App.css';

function App() {
  function OnMessage(event) {
    console.log("Message received: " + event.data.message)
  }

  useEffect(() => {
    window.addEventListener("message", OnMessage)

    return () => {
      window.removeEventListener("message", OnMessage)
    }
  });
  

  return (
    <>
    </>
  );
}

export default App;

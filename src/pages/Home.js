import "./Pages.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Welcome to my portfolio!"
  );
  const [commandMessage, setCommandMessage] = useState("");
  const [user, setUser] = useState("visitor@Danny_the_Dev~~");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  console.log(output);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const terminalRef = useRef(null);
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const commandResponse = (command) => {
    if (command === "help") {
      setOutput("list of commands");
    }
  };
  
  const handleKeyDown = (e) => {
    let key = e.key;
    if (key === "Enter") {
      if (input == "clear") {
        setOutput([]);
        setInput("");
      } else {
        let newOutput = [
          ...output,
          { command: input, response: commandResponse(input) },
        ];
        setOutput(newOutput);
        setInput("");
      }
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const navigate = useNavigate();

  setTimeout(() => {
    setWelcomeMessage("");
    setCommandMessage(
      "please enter a command, input 'help' for a list of commands"
    );
  }, 10000);

  return (
    <main ref={terminalRef}>
      <div className="title-bar">
        <div className="title-bar-buttons">
          <button id="button-one"></button>
          <button id="button-two"></button>
        </div>
        <h1>Portfolio -- User@Danny_the_Dev --</h1>
      </div>
      <div className="terminal-container">
        <div className="welcome-text">{welcomeMessage}</div>
        <div className="command-text">{commandMessage}</div>
        <div className="input">
          {user}
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            maxLength="99"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;

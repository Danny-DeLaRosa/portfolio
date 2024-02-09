import "./Pages.css";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Welcome to my portfolio!"
  );
  const [commandMessage, setCommandMessage] = useState("");
  const [user, setUser] = useState("Visitor@Danny_the_Dev~~");
  const navigate = useNavigate();
  setTimeout(() => {
    setWelcomeMessage("");
    setCommandMessage(
      "please enter a command, input 'help' for a list of commands"
    );
  }, 7000);

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick = (e) => {
    inputRef.current.focus();
  };

  const terminalRef = useRef(null);
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const handleChange = (e) => {
    setInput(e.target.value.toLowerCase());
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

  const commandResponse = (command) => {
    let listOfCommands = [
      "\nPROJECTS - This will take you to my projects page.\n",
      "ABOUT - About Danny De La Rosa.\n",
      "SECRET - 🤫\n",
      "HELP - List of commands.\n",
      "SOCIAL - Social media pages.\n",
      "CLEAR - Clear the terminal.",
    ];
    if (command == "projects") {
      window.open(
        "https://github.com/Danny-DeLaRosa?tab=repositories",
        "_blank"
      );
    } else if (command === "about") {
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Diam in arcu cursus euismod quis viverra nibh. Quam pellentesque nec nam aliquam sem. Rhoncus dolor purus non enim praesent elementum facilisis leo.";
    } else if (command === "secret") {
      return "Please enter password:";
    } else if (command === "password") {
      window.open(
        "https://youtu.be/dQw4w9WgXcQ?si=fBDDtHiTRFIwu6L2&t=43",
        "_blank"
      );
    } else if (command === "help") {
      return listOfCommands;
    } else if (command === "social") {
      return [
        "\nLINKEDIN - www.linkedin.com/in/dannydlr\n",
        "GITHUB - www.github.com/Danny-DeLaRosa\n",
        "YOUTUBE - @DannytheDev",
      ];
    } else if (command === "linkedin") {
      window.open("https://www.linkedin.com/in/dannydlr/", "_blank");
    } else if (command === "github") {
      window.open("https://github.com/Danny-DeLaRosa", "_blank");
    } else if (command === "youtube") {
      window.open(
        "https://www.youtube.com/channel/UC2RW4ZXG5kPol2cdLxmkCNw",
        "_blank"
      );
    } else {
      setUser("Visitor@Danny_the_Dev~~");
      return `'${command}' was not recognized, type 'help' for a list of available commands`;
    }
  };

  const [words, setWords] = useState([]);
  useEffect(() => {
    fetch("https://api.datamuse.com/words?rel_jjb=coding")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWords(data);
      });
  }, []);
  let randomNumber = Math.floor(Math.random() * words.length);
  console.log(randomNumber);
  let password = words[randomNumber].word;
  console.log(`password: ${password}`);
  return (
    <>
      <main onClick={handleClick}>
        <div className="title-bar">
          <div className="title-bar-buttons">
            <button id="button-one"></button>
            <button id="button-two"></button>
          </div>
          <h1>Portfolio -- User@Danny_the_Dev --</h1>
        </div>
        <div ref={terminalRef} className="terminal-container">
          <div className="welcome-message">{welcomeMessage}</div>
          <div className="command-message">{commandMessage}</div>
          <div className="output">
            {output.map((value, index) => (
              <div key={index} className="response">
                {user} {value.command}
                <br />
                {value.response}
                <br />
                <br />
              </div>
            ))}
          </div>

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
    </>
  );
}

export default Home;

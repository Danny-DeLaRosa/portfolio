import "./Pages.css";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  // state variables
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Welcome to my portfolio!"
  );
  const [commandMessage, setCommandMessage] = useState("");
  const [list, setList] = useState("")
  const [user, setUser] = useState("Visitor@Danny_the_Dev~~");
  const [words, setWords] = useState([]);
  const [password, setPassword] = useState("");

  // Hooks
  const navigate = useNavigate();
  const inputRef = useRef();
  const terminalRef = useRef(null);

  // useEffects
  useEffect(() => {
    if (terminalRef.current) { // Keeps the terminal reference at the bottom of the terminal
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);
  useEffect(() => { //Focus on input on login
    inputRef.current.focus();
  }, []);
  useEffect(() => { //API fetch
    fetch("https://api.datamuse.com/words?rel_jjb=coding")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setWords(data);
      });
  }, []);
  
  // functions
  // this function handles the click function on the entire page.
  const handleClick = (e) => {
    inputRef.current.focus();
  };
  // this function handles the input field fill
  const handleChange = (e) => {
    setInput(e.target.value.toLowerCase());
  };
  // this function handles the the actions on hitting the enter key
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
  // these functions handles the command response
  const listOfCommands = [
    "\nPROJECTS - This will take you to my projects page.\n",
    "ABOUT - About Danny De La Rosa.\n",
    "SECRET - 🤫\n",
    "HELP - List of commands.\n",
    "SOCIAL - Social media pages.\n",
    "CLEAR - Clear the terminal.",
  ];
  setTimeout(() => {
    setWelcomeMessage("");
    setCommandMessage(
      `please enter a command, here is a list of commands you can use:`
    );
    setList(listOfCommands.join("\n"));
  }, 5000);
  const commandResponse = (command) => {
    let randomNumber = Math.floor(Math.random() * words.length); // random number between 0 and length of words array
    let randomWord = words[randomNumber]; // generate random word from words array based on random number
    let word = randomWord.word;
    let commandPassword = password;
    
    if (command == "projects") {
      window.open(
        "https://github.com/Danny-DeLaRosa?tab=repositories",
        "_blank"
      );
    } else if (command === "about") {
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Diam in arcu cursus euismod quis viverra nibh. Quam pellentesque nec nam aliquam sem. Rhoncus dolor purus non enim praesent elementum facilisis leo.";
    } else if (command === "secret") {
      setPassword(word);
      console.log(`Congratulations you found the password: ${word}`);
      return "Please enter password:";
    } else if (command === commandPassword) {
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
          <div className="list-commands">{list}</div>
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

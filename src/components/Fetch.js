import { useState, useEffect } from "react";

const Fetch = () => {
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

  return <div>{words.word}</div>;
};
export default Fetch;

import styles from "./App.module.css";
import { useState } from "react";
export default function App() {
  const [states, setStates] = useState({
    regex: "",
    sentence: "",
    display: false,
    matches: []
  });
  // We want a single eventhandler for first name, and last name input field

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setStates({
      ...states,
      [name]: value
    });
  };

  const testHandler = (event) => {
    event.preventDefault();
    // alert(inputs.regex + " " + inputs.sentence);
    const reg = new RegExp(states.regex, "gi");
    const matches = states.sentence.match(reg);
    console.log(matches);

    setStates({
      ...states,
      matches: [...matches],
      display: true
    });

    setTimeout(() => {
      setStates({
        ...states,
        display: false
      });
    }, 3000);
  };

  return (
    <>
      <form className={styles.formStyle}>
        <label for="regex">Regex</label>
        <br />
        <input
          id="regex"
          name="regex"
          placeholder="Your Regex"
          value={states.regex}
          onChange={handleChange}
        />
        <br />
        <label for="sentence">Sentence</label>
        <br />
        <input
          id="sentence"
          name="sentence"
          placeholder="Your sentence"
          value={states.sentence}
          onChange={handleChange}
        />

        <br />
        <input
          type="submit"
          name="submit"
          value="Test"
          style={{ padding: ".7em" }}
          onClick={testHandler}
          className={styles.submitStyle}
        />
      </form>
      {states.display && (
        <h1 className={styles.outStyle}>
          {states.matches.map((word) => (
            <li key={Math.random()}>{word}</li>
          ))}
        </h1>
      )}
    </>
  );
}

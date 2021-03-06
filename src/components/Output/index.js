import React from "react";
import styles from "./Output.css";

const Output = props => {
  return (
    <div className="output-container">
      <div className="output-words-container">
        <div className="output-words">
          {props.results.name1.length === 0
            ? ""
            : `

          ${props.results.name1} has ${props.num1} ${props.results.noun}s. 
          ${props.results.name2} ${props.results.verb} ${props.num2} ${
                props.results.noun
              }s. 
          How many ${props.results.noun}s does ${props.results.name1} now have?

          `}

          {/*


      <div className="output-container">
        <div className="output-words-container">
            <div className="output-words">
                {props.name1} has {props.amount1} {props.noun}, {props.name2} {props.verb} {props.amount2} {props.noun}, how many {props.noun} are there?
            </div>
        </div>
        <div className="output-answer">
            Answer: {Number(props.amount1)+Number(props.amount2)}
     */}
        </div>
      </div>
      <div className="output-answer">Answer: 4</div>

      <div>
        <h3>Provide Us Your Email and Feedback</h3>
        <form method="POST" action="https://formspree.io/lydiarachel@gmail.com">
          <input type="email" className="email" placeholder="Your email" />
          <input
            className="text-area"
            name="message"
            placeholder="Feedback Message"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Output;

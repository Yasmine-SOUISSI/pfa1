import React from "react";
import Sentiment from "sentiment";
import { useState } from "react";
import feedback from "./feedback.jpg";
import positif from "./positif.jpg";
import negatif from "./negatif.png";

export function Analyse() {
  const sentiment = new Sentiment();

  const [msg, setmsg] = useState();
  const [score, setscore] = useState(0);

  return (
    <table>
      <tr>
        <td>
          <textarea
            onChange={(e) => {
              setmsg(e.target.value);
            }}
            className='feedback'
          />
        </td>
        <td>
          <button
            onClick={(e) => {
              setscore(sentiment.analyze(msg).score);
            }}
            className='btnfeedback'
          >
            Valider
          </button>
        </td>
      </tr>
      {score == 0 ? (
        <div>
          <img
            src={feedback}
            className='imgfeedback'
            height='500px'
            width='700px'
          />
        </div>
      ) : (
        <div>
          {score > 0 ? (
            <div>
              <img
                src={positif}
                className='imgfeedback'
                height='500px'
                width='700px'
              />
            </div>
          ) : (
            <div>
              <img
                src={negatif}
                className='imgfeedback'
                height='500px'
                width='700px'
              />
            </div>
          )}
        </div>
      )}
    </table>
  );
}

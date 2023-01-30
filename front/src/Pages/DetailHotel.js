import React from "react";
import Axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import userimg from "./user.png";
import vocal from "./vocal.png";
import valide from "./valide.png";
import invalid from "./invalid.png";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export function DetailHotel() {
  const { pays, region, nom, stars, prix } = useParams();
  const star = ["⭐", "⭐", "⭐", "⭐", "⭐"];
  const fullcircles = ["🟣", "🟣", "🟣", "🟣", "🟣"];
  const emptycircles = ["⚪", "⚪", "⚪", "⚪", "⚪"];

  const [hotel, sethotel] = useState(nom);
  const [user, setuser] = useState("");
  const [note, setnote] = useState(0);
  const [msg, setmsg] = useState("");
  const addtolist = () => {
    console.log(user + msg);
    Axios.post("http://localhost:3001/insertCom", {
      hotel: hotel,
      user: user,
      note: note,
      msg: msg,
    });
    window.location.reload(false);
  };

  const [comments, setcomments] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/readcomments").then((response) => {
      console.log(response);
      setcomments(response.data);
    });
  }, []);

  const commands = [];

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <html>
      <body>
        <div class='bn'>
          <div class='star'>
            <table>
              <tr>
                <td>
                  <h3>{star.slice(5 - stars)} </h3>{" "}
                </td>

                <td>
                  <h1 className='hvocal'>{nom}</h1>
                  <h4 className='hvocal'>localisation : {region}</h4>
                </td>

                <td>
                  <img
                    src={vocal}
                    width='180px'
                    height='180px'
                    className='vocal'
                  />
                </td>
              </tr>
            </table>
            <br></br>
          </div>
          <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br>
          <div>
            {comments
              .filter((item) => {
                return nom.toLowerCase() == item.hotel
                  ? item
                  : item.hotel == nom;
              })
              .map((c, key) => {
                return (
                  <div>
                    <table className='us'>
                      <tr>
                        <td>
                          <img src={userimg} class='av' alt='' />{" "}
                          <span>{c.user}</span>
                        </td>

                        <div class='Acom'>
                          <div className='com'>
                            <span className='c'>{c.msg}</span>
                          </div>
                        </div>
                        <td>
                          <div className='note'>
                            <span>
                              {fullcircles.slice(5 - c.note)}
                              {emptycircles.slice(c.note)}
                            </span>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                );
              })}
            <div class='space'>
              <input
                type='text'
                className='yn'
                placeholder='username'
                onChange={(event) => {
                  setuser(event.target.value);
                }}
              />

              <input
                placeholder='Ton Commentaire .....'
                type='text'
                className='yc'
                value={transcript}
              />

              <input
                type='number'
                placeholder='Note / 5'
                className='yn'
                onChange={(event) => {
                  setnote(event.target.value);
                }}
              />
              <img
                src={valide}
                onClick={() => {
                  setmsg(transcript);
                }}
                width='80px'
                height='80px'
              />
              <img
                src={invalid}
                onClick={resetTranscript}
                width='80px'
                height='80px'
              />

              <button class='yn ' onClick={addtolist}>
                Commenter
              </button>

              <spam
                onClick={SpeechRecognition.startListening({
                  continuous: "true",
                  language: "fr",
                })}
              />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

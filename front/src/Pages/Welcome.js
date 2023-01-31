import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState } from "react";
import { BrowserRouter, redirect } from "react-router-dom";
import vocal from "./vocal2.png";
import v from "./v1.png";
import p1 from "./p1.jpg";
import p3 from "./p3.jpg";
import p4 from "./p4.jpg";
import p5 from "./p5.jpg";
import loc from "./loc.png";
import par from "./par.png";
import ok from "./ok.png";
import dollar from "./dollar.png";
import call from "./call.png";

import h1 from "./h1.png";
import h2 from "./h2.png";
import h3 from "./h3.jpg";
import h4 from "./h4.png";
import h6 from "./h6.jpg";
import h7 from "./h7.png";
import h8 from "./h8.png";

import "./Form.css";

export function Welcome() {
  const [message, setMessage] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");
  const pages = ["accueil", "vol", "hotel", "croisiere"];
  const urls = {
    accueil: "/home",
    vol: "/vols",
    hotel: "/hotels",
    croisiere: "/Croisieres",
  };
  const commands = [
    {
      command: "efface",
      callback: () => resetTranscript(),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true,
    },
    {
      command: "ouvre *",
      callback: (site) => {
        window.open("http://" + site);
      },
    },
    {
      command: "vol",
      callback: () => {
        window.open("http://localhost:3000/Vols");
      },
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true,
    },
    {
      command: "hotels",
      callback: () => {
        window.open("http://localhost:3000/hotels");
      },
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true,
    },
    {
      command: "croisiere",
      callback: () => {
        window.open("http://localhost:3000/Croisieres");
      },
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true,
    },
    {
      command: "météo",
      callback: () => {
        window.open("http://localhost:3000/weather");
      },
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true,
    },
    {
      command: "feedback",
      callback: () => {
        window.open("http://localhost:3000/Analyse");
      },
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true,
    },
  ];

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <redirect to={urls[redirectUrl]} />;
    }
  }

  return (
    <body>
      <div className='bhome'>
        <table>
          <tr>
            <td>
              <img src={v} height='250px' width='800px' className='' />
            </td>

            <td>
              <img src={vocal} height='200px' width='200px' className='imvoc' />
            </td>
          </tr>

          <div
            onClick={SpeechRecognition.startListening({
              continuous: true,
              language: "fr",
            })}
          />
        </table>
        <td>
          <img src={p1} className='p1' />
        </td>
        <td>
          <img src={p3} className='p3' />
        </td>

        <h2>Nos garanties</h2>

        <table>
          <br></br>
          <tr>
            <td>
              <div className='g1'>
                <img src={loc} height='60px' width='60px' className='' />
                <br></br>
                Une proximité des clients : 34 points de vente sur tout le
                territoire tunisien
              </div>
            </td>
            <td>
              <div className='g1'>
                <img src={call} height='60px' width='60px' className='' />
                <br></br>
                Un call-center toujours à l'écoute de nos clients même en
                période de grand flux.
              </div>
            </td>
            <td>
              <div className='g1'>
                <img src={dollar} height='60px' width='60px' className='' />
                <br></br>
                Des tarifs les plus attractifs du marché (en TTC)
              </div>
            </td>{" "}
            <td>
              <div className='g1'>
                <img src={par} height='60px' width='60px' className='' />
                <br></br>
                Une exhaustivité de l'offre Plus de 884.000 hôtels dans le monde
              </div>
            </td>
            <td>
              <div className='g1'>
                <img src={ok} height='60px' width='60px' className='' />
                <br></br>
                Plus de 18 ans d'expérience sur le marché
              </div>
            </td>
          </tr>
        </table>

        <br></br>

        <h2>Nos Partenaires</h2>

        <marquee>
          <img src={h1} height='300px' width='600px' className='' />
          <img src={h2} height='300px' width='600px' className='' />
          <img src={h4} height='300px' width='600px' className='' />
          <img src={h7} height='300px' width='600px' className='' />
          <img src={h8} height='300px' width='600px' className='' />
          <img src={h3} height='300px' width='600px' className='' />

          <img src={h6} height='300px' width='600px' className='' />
        </marquee>
      </div>
    </body>
  );
}

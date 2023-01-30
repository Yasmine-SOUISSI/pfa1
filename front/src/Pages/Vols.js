import { useState, useEffect } from "react";
import Axios from "axios";
import avion from "./avion.png";
import { Link } from "react-router-dom";

export function Vols() {
  const [De, setDe] = useState("");
  const [Dest, setDest] = useState("");
  const [horaire, setHoraire] = useState("");
  const [comp, setComp] = useState("");
  const [prix, setprix] = useState("");
  const [ref, setref] = useState("");

  const [search, setsearch] = useState("--");
  const [sdest, setsdest] = useState("");

  const [listevols, setlistevols] = useState([]);

  const fullcircles = ["🔴", "🔴", "🔴", "🔴", "🔴"];
  const emptycircles = ["⚪", "⚪", "⚪", "⚪", "⚪"];

  console.log(sdest);
  console.log(search);

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      console.log(response);
      setlistevols(response.data);
    });
  }, []);

  return (
    <body>
      <div className='bn'>
        <h1>Vols</h1>
        <div class='dv'>
          <b>De :</b>
          <select
            class='bs'
            value={search}
            required
            onChange={(event) => {
              setsearch(event.target.value);
            }}
          >
            <option>--</option>

            <option>tunis</option>
            <option>paris</option>
            <option>turquie</option>
            <option>dubai</option>
          </select>{" "}
          &ensp; &ensp; &ensp;
        </div>
        <br></br>
        <b>à :</b>{" "}
        <input
          class='bs'
          onChange={(ev) => {
            setsdest(ev.target.value);
          }}
        />
        {listevols
          .filter((item) => {
            return search.toLowerCase() === "--"
              ? item
              : item.De.toLowerCase().includes(search) &&
                  item.Destination.toLowerCase().includes(sdest);
          })
          .map((val, key) => {
            return (
              <div class='all'>
                <br></br>

                <div class='v'>
                  <table>
                    <tr>
                      <td>
                        <img src={avion} class='av' alt='' />{" "}
                      </td>
                      <div class='det'>
                        {" "}
                        <td>
                          De : {val.De} ---- à : {val.Destination} <br></br>
                          Compagnie : {val.compagnie} <br></br>
                          {fullcircles.slice(5 - val.note)}
                          {emptycircles.slice(val.note)}
                        </td>
                        <td>
                          {" "}
                          <div class='h'>
                            <b>ref :{val.ref}</b>
                            <br></br> <b>{val.horaire}</b>{" "}
                          </div>{" "}
                        </td>
                        <br></br>
                      </div>
                    </tr>
                  </table>
                  <td>
                    {" "}
                    <div class='p'>
                      {" "}
                      <b>{val.prix} DT</b>{" "}
                    </div>
                    <button class='b'>
                      <Link
                        to={`/Formulaire/${val.De}/${val.Destination}/${val.ref}`}
                      >
                        Réserver
                      </Link>
                    </button>
                  </td>
                  <br></br>
                </div>
              </div>
            );
          })}
      </div>
    </body>
  );
}

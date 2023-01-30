import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export function Hotels() {
  const [listhotels, setlisthotels] = useState([]);
  const stars = ["⭐", "⭐", "⭐", "⭐", "⭐"];
  const [pays, setpays] = useState("--");
  const [budget, setbudget] = useState(0);
  const [starsH, setstarsH] = useState(0);
  console.log(budget);
  useEffect(() => {
    Axios.get("http://localhost:3001/readhotels").then((response) => {
      console.log(response);
      setlisthotels(response.data);
    });
  }, []);
  return (
    <div class='bn'>
      <h1>Hotels</h1>
      <table>
        <tr className='top'>
          <b>Budget:</b>
          <select
            className='s'
            value={budget}
            required
            onChange={(event) => {
              setbudget(event.target.value);
            }}
          >
            <option>--</option>

            <option value='300'> &lt; 300 TND </option>
            <option value='800'>&lt; 800 TND</option>
            <option value='1500'>&lt; 1500 TND</option>
            <option value='2000'>&lt; 2000 TND</option>
          </select>
          <br></br>
          <b>Pays :</b>
          <select
            className='s'
            value={pays}
            required
            onChange={(event) => {
              setpays(event.target.value);
            }}
          >
            <option>--</option>

            <option>tunisie</option>
            <option>paris</option>
            <option>dubai</option>
            <option>turquie</option>
          </select>{" "}
          <br></br>
          <td>
            {listhotels
              .filter((item) => {
                return pays.toLowerCase() == "--" || budget === 0
                  ? item
                  : item.Pays.toLowerCase() == pays && item.prix < budget * 1;
              })
              .map((h, key) => {
                return (
                  <div>
                    <div className='hdiv'>
                      {" "}
                      <br></br>
                      <table>
                        <tr>
                          <td>
                            <img class='ih' src={h.img1} />
                          </td>

                          <td>
                            <div class='tdl'>
                              <h3>{h.Nom}</h3>
                              <h4>
                                <b>{h.region}</b>
                              </h4>
                              <b>{h.number}</b>
                            </div>
                          </td>
                          <td>
                            <div class=' '>
                              {stars.slice(5 - h.Stars)}
                              <h4>
                                <b>{h.prix} TND</b>
                              </h4>
                              <button className='vp'>
                                <Link
                                  className='vl'
                                  to={`/details/${h.Pays}/${h.region}/${h.Nom}/${h.Stars}/${h.prix}`}
                                >
                                  Avis
                                </Link>
                              </button>

                              <button className='vp2'>
                                <Link
                                  className='vl2'
                                  to={`/Reserver/${h.region}/${h.Nom}/${h.prix}/${h.Stars}`}
                                >
                                  Réserver
                                </Link>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <br></br>
                  </div>
                );
              })}
          </td>
        </tr>
      </table>
    </div>
  );
}

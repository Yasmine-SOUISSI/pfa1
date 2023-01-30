import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export function Croisiere() {
  const [listeCrois, setlisteCrois] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/croisiere").then((response) => {
      console.log(response);
      setlisteCrois(response.data);
    });
  }, []);

  return (
    <div className='bn'>
      {listeCrois.map((val, key) => {
        return (
          <div>
            <div className='allcrois'>
              <div>
                <table>
                  <tr>
                    <td>
                      <div className='Box'>
                        <img className='croisimg hover-img' src={val.img3} />

                        <img className='croisimg' src={val.img1} />
                      </div>
                    </td>
                    <td>
                      <div className='croisdet'>
                        <b className='croisb'>{val.depart}</b> <br></br>
                        {val.date} <br></br>
                        <b className='croisp'>{val.prix} TND </b>
                        <br></br>
                        <button className='croisbtn b'>
                          <Link
                            to={`/Details-croisiere/${val.depart}/${val.date}/${val.escale1}/${val.escale2}/${val.escale3}
            /${val.escale4}/${val.escale5}/${val.escale6}/${val.prix}
            `}
                          >
                            Voir plus
                          </Link>
                        </button>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

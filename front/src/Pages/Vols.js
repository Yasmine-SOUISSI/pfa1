import { useState, useEffect } from "react";
import avion from "./avion.png";
import { Link } from "react-router-dom";

export function Vols() {
  const [search, setsearch] = useState("--");
  const [sdest, setsdest] = useState("--");
  const [listevols, setlistevols] = useState([]);
  const fullcircles = ["🔴", "🔴", "🔴", "🔴", "🔴"];
  const emptycircles = ["⚪", "⚪", "⚪", "⚪", "⚪"];

  useEffect(() => {
    setlistevols([
      {
        _id: {
          $oid: "637f70481ac3df3be8c0de0f",
        },
        De: "Tunis",
        Destination: "Paris",
        horaire: "21h-05h",
        compagnie: "nouvelair",
        prix: 1120,
        note: 3,
        ref: "3254",
      },
      {
        _id: {
          $oid: "637f8bb831b6153e3f0482e2",
        },
        De: "sfax",
        Destination: "chine",
        horaire: "5h-20h",
        compagnie: "Tunisair",
        prix: "1200",
        note: 3,
        ref: "6624",
      },
      {
        _id: {
          $oid: "637f8e1b31b6153e3f0482e4",
        },
        De: "Monastir",
        Destination: "Turkie",
        horaire: "1h-09h",
        compagnie: " Nouvelair",
        prix: "1450",
        note: 2,
        ref: "8821",
      },
      {
        _id: {
          $oid: "63810688a94aef0fd273d8e6",
        },
        De: "tozeur",
        Destination: "dubai",
        horaire: "15h-20h",
        compagnie: "nouvelair",
        prix: "1200",
        ref: "2500",
        note: 2,
      },
      {
        _id: {
          $oid: "63820614a94aef0fd273d9df",
        },
        De: "Djerba",
        Destination: "korea",
        horaire: "15h-20h",
        compagnie: "tunisair",
        prix: "1560",
        ref: "6699",
        note: 3,
      },
    ]);
  }, []);

  const filtered = listevols.filter((val) => {
    if (
      val.compagnie.toLowerCase().includes(sdest.toLowerCase()) &&
      val.De.toLowerCase().includes(search.toLowerCase())
    ) {
      return val;
    } else if (search === "--" && sdest === "--") {
      return val;
    }
  });

  return (
    <div className='bn'>
      <h1>Vols</h1>
      <div className='dv'>
        <b>Departure:</b>
        <select
          className='bs'
          value={search}
          required
          onChange={(event) => {
            setsearch(event.target.value);
          }}
        >
          <option>--</option>
          <option>Tunis</option>
          <option>Paris</option>
          <option>Turquie</option>
          <option>Dubai</option>
        </select>
      </div>
      <br></br>
      <b> Arival :</b>{" "}
      <select
        className='bs'
        value={sdest}
        required
        onChange={(event) => {
          setsdest(event.target.value);
        }}
      >
        <option>--</option>
        <option>Tunis</option>
        <option>Paris</option>
        <option>Turquie</option>
        <option>Dubai</option>
      </select>
      <div className='d-flex'>
        {filtered.length > 0 ? (
          <>
            {filtered.map((val, key) => {
              return (
                <div className='card m-4' key={key + val.compagnie}>
                  <table>
                    <tr>
                      <td>
                        <img
                          src={avion}
                          className='av'
                          alt='avion'
                          width='200px'
                          height='200px'
                        />
                        <div className='det'>
                          <td>
                            De : {val.De} ---- à : {val.Destination} <br></br>
                            Compagnie : {val.compagnie} <br></br>
                            {fullcircles.slice(5 - val.note)}
                            {emptycircles.slice(val.note)}
                          </td>
                          <td>
                            <div className='h'>
                              <b>ref :{val.ref}</b>
                              <br></br> <b>{val.horaire}</b>{" "}
                            </div>{" "}
                          </td>
                          <br></br>
                        </div>
                      </td>
                    </tr>
                  </table>
                  <td>
                    <div className='p'>
                      <b>{val.prix} DT</b>
                    </div>
                    <button className='btn-primary'>
                      <Link
                        to={`/Formulaire/${val.De}/${val.Destination}/${val.ref}`}
                      >
                        Réserver
                      </Link>
                    </button>
                  </td>
                  <br></br>
                </div>
              );
            })}
          </>
        ) : (
          <p>No results</p>
        )}
      </div>
    </div>
  );
}

import { useParams } from "react-router-dom";
import { useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";

export function Formhotel() {
  const { region, Nom, prix, Stars } = useParams();
  const star = ["⭐", "⭐", "⭐", "⭐", "⭐"];

  const [prenom, setprenom] = useState("--");
  const [name, setnom] = useState("--");
  const [numero, setnumero] = useState("--");
  const [de, setde] = useState("--");
  const [a, seta] = useState("--");
  const [nombre, setnombre] = useState(0);

  const [Chambre, setChambre] = useState("double");

  return (
    <div class='recu2'>
      <br></br>
      <table>
        <tr>
          <td>
            <div class='star'>
              <h3>{star.slice(5 - Stars)} </h3>{" "}
            </div>
          </td>
          <td className=''>
            <div class='nr'>
              <h2>
                <b>{Nom} </b>
              </h2>
              <h3>- {region} -</h3>
            </div>
          </td>
        </tr>
      </table>
      <form
        action={`/Reservation/${Nom}/${prenom}/${name}/${numero}/${de}/${a}/${nombre}/${Chambre}/${prix}`}
      >
        <div class='form-group wid'>
          <label>Prenom :</label>
          <input
            type='text'
            required
            class='form-control bl'
            onChange={(event) => {
              setprenom(event.target.value);
            }}
          />{" "}
          <br></br>
          <label>Nom :</label>
          <input
            type='text'
            required
            class='form-control bl'
            onChange={(event) => {
              setnom(event.target.value);
            }}
          />
          <br></br>
          <label>Numero :</label>
          <input
            type='text'
            required
            class='form-control bl'
            onChange={(event) => {
              setnumero(event.target.value);
            }}
          />
          <br></br>
          <label>Email :</label>
          <input type='email' required class='form-control bl' />
          <br></br>
          De :{" "}
          <input
            type='date'
            required
            className='form-control bl'
            onChange={(event) => {
              setde(event.target.value);
            }}
          />{" "}
          <br></br>
          jusqu'à :
          <input
            type='date'
            required
            className='form-control bl'
            onChange={(event) => {
              seta(event.target.value);
            }}
          />
          <br></br>
          <label>Nombre de personnes :</label>
          <input
            type='Number'
            required
            class='form-control bl'
            onChange={(event) => {
              setnombre(event.target.value);
            }}
          />
          <br></br>
          <label for='exampleFormControlSelect1'>Chambre :</label>
          <select
            class='form-control bl'
            value={Chambre}
            onChange={(event) => {
              setChambre(event.target.value);
            }}
            required
          >
            <option>simple</option>
            <option>double</option>
            <option>familiale</option>
            <option>suite simple</option>
            <option>suite luxe</option>
          </select>
          <br></br>
          <button className='br'>Réserver </button>
        </div>
      </form>
    </div>
  );
}

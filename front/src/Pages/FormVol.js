import { useParams } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

export function FormVol() {
  const { de, a, ref } = useParams();

  const [prenom, setprenom] = useState("--");
  const [name, setnom] = useState("--");
  const [Numero, setNumero] = useState("--");
  const [classe, setclasse] = useState("économique");
  const [nombre, setnombre] = useState(1);
  const [email, setemail] = useState("--");

  const ReserverVol = () => {
    Axios.post("http://localhost:3001/insertvol", {
      prenom: prenom,
      nom: name,
      Numero: Numero,
      Email: email,
    });
  };

  return (
    <form
      action={`/recu/${ref}/${prenom}/${name}/${Numero}/${classe}`}
      class='bn'
    >
      <br></br>
      <h3 class='x'>
        Vol de <b>{de}</b> à <b>{a}</b>
      </h3>
      <br></br>

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
            setNumero(event.target.value);
          }}
        />
        <br></br>
        <label>Email :</label>
        <input
          type='email'
          required
          class='form-control bl'
          onChange={(event) => {
            setemail(event.target.value);
          }}
        />
        <br></br>
      </div>
      <div class='form-group wid'>
        <label for='exampleFormControlSelect1'>Classe :</label>
        <select
          class='form-control bl'
          value={classe}
          required
          onChange={(event) => {
            setclasse(event.target.value);
          }}
        >
          <option>économique</option>
          <option>économique premium</option>
          <option>affaires</option>
          <option>La première classe</option>
        </select>
        <br></br>
        <br></br>

        <button className='br' onClick={ReserverVol}>
          Réserver{" "}
        </button>
      </div>
    </form>
  );
}

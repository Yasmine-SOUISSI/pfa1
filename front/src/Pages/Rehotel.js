import { useParams } from "react-router-dom";
import hotel from "./hotel.png";
import "./Form.css";

export function Rehotel() {
  const { Nom, prenom, name, numero, de, a, nombre, Chambre, prix } =
    useParams();
  var montant = prix * nombre;
  return (
    <div className=''>
      <div className='recu'>
        <br></br>
        <h2>
          Reçu de reservation à <b>{Nom}</b>{" "}
        </h2>
        <br></br>
        <table className='trec'>
          <tr>
            <td>
              <b>M/Mme : </b> {prenom} {name} <br></br>
              <b>Numero de tel : </b> {numero} <br></br>
              <b>à prtir de : </b>
              {de} <br></br>
              <b>jusqu'à :</b> {a} <br></br>
              <b>Les chambres : </b> {Chambre} <br></br>
              <b>pour </b> {nombre} personnes <br></br> <br></br>
              <b>Montant à payer : </b> {montant} TND <br></br>
            </td>
            <td>
              <img src={hotel}></img>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

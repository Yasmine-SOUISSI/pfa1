import { useParams } from "react-router-dom";
import avion from "./avion.png";


export function ReVol() {
  const { ref, prenom, name, numero, classe } = useParams();

  return (
    <div className='r'>
      <table className='t'>
        <h3>
          Reçu de réservation de vol <b>{ref}</b>
        </h3>
        <br></br>
        <br></br>
        <br></br>
        <tr>
          <td>
            <h4>
              <b> Mr/Mme :</b> {prenom} {name} <br></br> <br></br>
              <b> Numero de tel :</b> {numero} <br></br> <br></br>
              <b> Classe :</b> {classe} <br></br>
            </h4>
          </td>
          <td>
            <img src={avion}></img>
          </td>
        </tr>
      </table>
      <b class='v11'> Bon Voyage ! </b>
    </div>
  );
}

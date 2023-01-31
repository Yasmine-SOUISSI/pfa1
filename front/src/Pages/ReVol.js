import { useParams } from "react-router-dom";
import avion from "./avion.png";

export function ReVol() {
  const { ref, prenom, name, numero, classe } = useParams();

  return (
    <div className=''>
      <h3>
        Reçu de réservation de vol <b>{ref}</b>
      </h3>

      <h4>
        <b> Mr/Mme :</b> {prenom} {name} <br></br> <br></br>
        <b> Numero de tel :</b> {numero} <br></br> <br></br>
        <b> Classe :</b> {classe} <br></br>
      </h4>
      <img
        src={avion}
        alt='avion'
        style={{ width: "200px", height: "200px" }}
      />

      <b className='v11'> Bon Voyage ! </b>
    </div>
  );
}

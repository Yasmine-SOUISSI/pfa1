import { useParams } from "react-router-dom";
import "./Form.css";
import map from "./map.png";

export function DetailCrois() {
  const {
    depart,
    date,
    escale1,
    escale2,
    escale3,
    escale4,
    escale5,
    escale6,
  } = useParams();

  return (
    <>
      <h1 className='depart'> {depart}</h1>
      <h3>
        <b>Date : </b>
        {date}
      </h3>
      <div className='escales'>
        <table>
          <tr>
            <td>
              <h4>Le programme :</h4>
              <b>Escale 1 :</b> {escale1} <br></br>
              <b>Escale 2 :</b> {escale2} <br></br>
              <b>Escale 3 :</b> {escale3} <br></br>
              <b>Escale 4 :</b> {escale4} <br></br>
              <b>Escale 5 :</b> {escale5} <br></br>
              <b>Escale 6 :</b> {escale6} <br></br>
              <button className='croisbtn b'>Réserver</button>
            </td>
            <td>
              <img src={map} width='800px' />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

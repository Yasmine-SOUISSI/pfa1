import "./App.css";
import Errors from "./Pages/Errors/Errors";
import Landpage from "./Pages/Landpage/Landpage";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { Vols } from "./Pages/Vols";
import { ReVol } from "./Pages/ReVol";
import { FormVol } from "./Pages/FormVol";
import { DetailHotel } from "./Pages/DetailHotel";
import { Formhotel } from "./Pages/Formhotel";
import { Hotels } from "./Pages/Hotels";
import { Rehotel } from "./Pages/Rehotel";
import { Croisiere } from "./Pages/Croisiere";
import { DetailCrois } from "./Pages/DetailCrois";
import { Chat } from "./Pages/Chat";
import { Welcome } from "./Pages/Welcome";
import { Weather } from "./Pages/Weather";
import { Analyse } from "./Pages/Analyse";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "./Redux/actions/user";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Landpage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Hotels' element={<Hotels />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/*' element={<Errors />} />
        <Route path='/Formulaire/:de/:a/:ref' element={<FormVol />} />

        <Route path='/Cruiser' exact element={<Croisiere />} />
        <Route
          path='/Details-croisiere/:depart/:date/:escale1/:escale2/:escale3/:escale4/:escale5/:escale6/:prix'
          element={<DetailCrois />}
        />

        <Route path='/vols' element={<Vols />} />
        <Route path='/hotels' element={<Hotels />} />

        <Route path='/home' element={<Welcome />} />
        <Route
          path='/recu/:ref/:prenom/:name/:numero/:classe'
          element={<ReVol />}
        />
        <Route
          path='/details/:pays/:region/:nom/:stars/:prix'
          element={<DetailHotel />}
        />
        <Route
          path='/Reserver/:region/:Nom/:prix/:Stars'
          element={<Formhotel />}
        />
        <Route
          path='/Reservation/:Nom/:prenom/:name/:numero/:de/:a/:nombre/:Chambre/:prix'
          element={<Rehotel />}
        />
        <Route path='/chat' element={<Chat />} />
        <Route path='/Weather' element={<Weather />} />
        <Route path='/Analyse' element={<Analyse />} />
      </Routes>
    </div>
  );
}

export default App;

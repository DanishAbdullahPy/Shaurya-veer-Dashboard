import "./App.css";
import Home from "./components/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Geomap from "./pages/geomap/Geomap";
import Regulations from "./pages/regulations/Regulations";
import Duty from "./pages/duty/Duty";
import Bot from "./pages/bot/Bot";

// import LoginForm from "./components/Login/Loginsignup";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import DPO from "./pages/dpo/DPO";
import POLICESTATION from "./pages/policestation/POLICESTATION";
import TESTREPORT from "./pages/testreport/TESTREPORT";
import SECTORPOLICE from "./pages/sectorpolice/SECTORPOLICE";
import FIRREPORT from "./pages/firreport/FIRREPORT";
import SEIZURE from "./pages/seizure/SEIZURE";
import POLITICS from "./pages/politics/POLITICS";
import Colorbooth from "./pages/colorbooth/Colorbooth";

// import { useContext } from "react";
// import { AuthContext } from "./components/Context/AuthContext";

function App() {
  // const { user } = useContext(AuthContext);

  // const ProtectedRoute = ({ children }) => {
  // if (!user) {
  // return <Navigate to="/" />;
  // }
  // return children;
  // };
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home />} path="/">
            <Route element={<Dashboard />} path="/"></Route>
            <Route element={<Geomap />} path="/map"></Route>
            <Route element={<Regulations />} path="/regulations"></Route>
            <Route element={<Duty />} path="/duty"></Route>
            <Route element={<Bot />} path="/bot"></Route>
            <Route element={<DPO />} path="/dpo"></Route>

            <Route element={<POLICESTATION />} path="/policestation"></Route>
            <Route element={<SECTORPOLICE />} path="/sectorpolice"></Route>

            <Route element={<TESTREPORT />} path="/testreport"></Route>
            <Route element={<FIRREPORT />} path="/firreport"></Route>
            <Route element={<SEIZURE />} path="/seizurereport"></Route>
            <Route element={<POLITICS />} path="/politics"></Route>
            <Route element={<Colorbooth />} path="/colorbooth"></Route>

            <Route element={<Navigate to="/" />} path="*"></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

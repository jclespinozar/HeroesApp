import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { Screen } from "../components/marvel/Screen";
import { Navbar } from "../components/ui/Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <div className="container mt-2">
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Screen />} />
          <Route path="/hero/:heroId" element = {<HeroScreen/>} />
        </Routes>
      </div>
    </Router>
  );
}
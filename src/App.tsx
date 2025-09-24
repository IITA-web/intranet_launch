import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import CountDown from "./pages/CountDown";
import Intranet from "./pages/Intranet";
import LightWorks from "./pages/LightWorks";
import Start from "./pages/Start";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Start />} />
        <Route path="/countdown" element={<CountDown />} />
        <Route path="/lightworks" element={<LightWorks />} />
        <Route path="/intranet" element={<Intranet />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

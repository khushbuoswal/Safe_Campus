import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import WarningsPage2 from "./pages/WarningsPage2";
import WarningsPage4 from "./pages/WarningsPage4";
import WarningsPage3 from "./pages/WarningsPage3";
import WarningsPage1 from "./pages/WarningsPage1";
import ForgotPassword from "./pages/ForgotPassword";
import MapPage2 from "./pages/MapPage2";
import MapPage2Level1 from "./pages/MapPage2Level1";
import MapPage2Level2 from "./pages/MapPage2Level2";
import MapPage2Level3 from "./pages/MapPage2Level3";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/warnings-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/warnings-page-4":
        title = "";
        metaDescription = "";
        break;
      case "/warnings-page-3":
        title = "";
        metaDescription = "";
        break;
      case "/warnings-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/map-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/map-page-level-1":
        title = "";
        metaDescription = "";
        break;
      case "/map-page-level-2":
        title = "";
        metaDescription = "";
        break;
      case "/map-page-level-3":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/report-incidents":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/warnings-page-2" element={<WarningsPage2 />} />
      <Route path="/warnings-page-4" element={<WarningsPage4 />} />
      <Route path="/warnings-page-3" element={<WarningsPage3 />} />
      <Route path="/warnings-page-1" element={<WarningsPage1 />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/map-page-2" element={<MapPage2 />} />
      <Route path="/map-page-level-1" element={<MapPage2Level1 />} />
      <Route path="/map-page-level-2" element={<MapPage2Level2 />} />
      <Route path="/map-page-level-3" element={<MapPage2Level3 />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/report-incidents" element={<Statistics />} />
    </Routes>
  );
}
export default App;

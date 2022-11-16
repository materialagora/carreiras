import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./pages/hero";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hero/:heroName" element={<Hero />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

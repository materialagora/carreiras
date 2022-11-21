import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateHeroGroup from "./pages/create-hero-group";
import EditHeroGroup from "./pages/edit-hero-group";
import Hero from "./pages/hero";
import HeroGroupList from "./pages/hero-group-list";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hero/:heroId" element={<Hero />} />

        <Route path="hero-group">
          <Route path="create" element={<CreateHeroGroup />} />

          <Route path="list">
            <Route index element={<HeroGroupList />} />
            <Route path=":heroGroupId" element={<EditHeroGroup />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

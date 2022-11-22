import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateHeroGroupPage from "./pages/create-hero-group-page";
import EditHeroGroupPage from "./pages/edit-hero-group-page";
import HeroGroupListPage from "./pages/hero-group-list-page";
import HeroPage from "./pages/hero-page";
import HomePage from "./pages/home-page";
import NotFoundPage from "./pages/not-found-page";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="hero/:heroId" element={<HeroPage />} />

        <Route path="hero-group">
          <Route path="create" element={<CreateHeroGroupPage />} />

          <Route path="list">
            <Route index element={<HeroGroupListPage />} />
            <Route path=":heroGroupId" element={<EditHeroGroupPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

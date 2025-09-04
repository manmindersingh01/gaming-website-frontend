import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";
import LoadingScreen from "./components/LoadingScreen";

// Lazy loaded pages for better performance
const HomePage = lazy(() => import("./pages/HomePage"));
const GamesPage = lazy(() => import("./pages/GamesPage"));
const GameDetailPage = lazy(() => import("./pages/GameDetailPage"));
const TournamentsPage = lazy(() => import("./pages/TournamentsPage"));
const CommunityPage = lazy(() => import("./pages/CommunityPage"));
const StorePage = lazy(() => import("./pages/StorePage"));
// @ts-ignore
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="games" element={<GamesPage />} />
          <Route path="games/:id" element={<GameDetailPage />} />
          <Route path="tournaments" element={<TournamentsPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="store" element={<StorePage />} />
          {/* Removing ProfilePage route as it doesn't exist */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

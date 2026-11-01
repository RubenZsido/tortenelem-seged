import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { HomePage } from "./components/HomePage";
import { TetelPage } from "./components/TetelPage";
import { TetelekIndex } from "./components/TetelekIndex";
import { TopicPage } from "./components/TopicPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/temakor/:slug" element={<TopicPage />} />
          <Route path="/tetelek" element={<TetelekIndex />} />
          <Route path="/tetelek/:slug" element={<TetelPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

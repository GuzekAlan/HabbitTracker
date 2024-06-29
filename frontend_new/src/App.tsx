import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CreateHabit from "./pages/CreateHabit";
import Auth from "./pages/Auth";
import useAuth from "./hooks/useUserStore";

function App() {
  const { userId } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {userId() && <Route path="/create_habit" element={<CreateHabit />} />}
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

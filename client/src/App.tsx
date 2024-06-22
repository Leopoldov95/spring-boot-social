import { useQuery, useMutation } from "@tanstack/react-query";
import "./App.css";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import CreatePost from "./components/auth/SignUp";
import { getAllUsers } from "./services/api";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { useUserStore } from "./store/store";
import { User } from "./services/interfaces";
import Navbar from "./components/global/Navbar";
import Auth from "./pages/Auth";

const App = () => {
  const user = useUserStore((state) => state.user);

  console.log(`User is... ${user}`);

  // const getQuery = useQuery({
  //   queryKey: ["allUsers"],
  //   queryFn: () => getAllUsers()
  // })

  // if (getQuery.isLoading) return <h1>loading...</h1>
  // if (getQuery.isError) return <pre>{JSON.stringify(getQuery.error)}</pre>

  // console.log(getQuery.data);

  return (
    <main className="py-8 px-4 relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        {/* May need to update path to include userId */}
        <Route path="/auth" element={<Auth />} />
      </Routes>
      {/* Navbar */}
      <Navbar />
    </main>
  );
};

const PrivateRoutes = () => {
  const user = useUserStore((state) => state.user);
  return user ? <Outlet /> : <Navigate to="/auth" />;
};

export default App;

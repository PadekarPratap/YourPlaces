import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./user/pages/Users";
import Places from "./place/pages/Places";
import NotFound from "./shared/pages/NotFound";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import NewPlace from "./place/pages/NewPlace";
import UpdatePlace from "./place/pages/UpdatePlace";
import Auth from "./user/pages/Auth";
import AuthProvider from "./shared/components/context/Auth-Context";
import ProtectedRoutes from "./shared/components/ProtectedRoutes/ProtectedRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/:userId/places" element={<Places />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/place/:placeId" element={<UpdatePlace />} />
              <Route path="/place/new" element={<NewPlace />} />
            </Route>
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer />
        </main>
      </AuthProvider>
    </Router>
  );
};
export default App;

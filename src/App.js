import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import LoginPage from "./pages/login";
import SignupPage from "./pages/signUp";
import ProposalPage from "./pages/proposals"
import ForgetPassswordPage from "./pages/forgetPassword";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="forget-password" element={<ForgetPassswordPage />} />
      <Route path="proposals" element={<ProposalPage />}/>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

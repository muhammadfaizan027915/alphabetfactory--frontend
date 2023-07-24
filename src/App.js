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
import ApprovalPage from "./pages/approvals";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="forget-password" element={<ForgetPassswordPage />} />
      <Route path="proposals" element={<ProposalPage />}/>
      <Route path="approvals" element={<ApprovalPage />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

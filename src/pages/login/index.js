import AuthLayout from "../../components/authLayout";
import LoginCard from "../../components/loginCard";

const LoginPage = () => {
  return (
    <AuthLayout backgroundImageUrl="/assets/images/backgroundLogin.png">
      <LoginCard />
    </AuthLayout>
  );
};

export default LoginPage;

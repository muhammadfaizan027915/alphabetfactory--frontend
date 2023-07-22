import AuthLayout from "../../components/authLayout";
import SignupCard from "../../components/signupCard";
const SignupPage = () => {
  return (
    <AuthLayout
      backgroundImageUrl={"/assets/images/backgroundSignup.png"}
      isDarkLogo
    >
      <SignupCard />
    </AuthLayout>
  );
};

export default SignupPage;

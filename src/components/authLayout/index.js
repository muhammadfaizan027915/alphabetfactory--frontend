const AuthLayout = ({ children, backgroundImageUrl, isDarkLogo }) => {
  return (
    <div className="p-2 sm:p-[5%] min-w-[100vw] min-h-[100vh] overflow-auto bg-black">
      <div className="max-h-[100vh] rounded-3xl lg:rounded-none overflow-hidden flex">
        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img
            src={backgroundImageUrl}
            className="w-full h-full object-cover"
          />

          <div className="w-56 h-56 absolute top-1/4 left-1/2 -translate-x-1/2">
            <img
              src={
                isDarkLogo
                  ? "/assets/images/alphabetLogoDark.png"
                  : "/assets/images/alphabetLogo.png"
              }
              className="object-fill"
            />
          </div>
        </div>
        <div className="w-full py-8 lg:w-1/2 bg-red-600 flex flex-col lg:flex-row justify-center items-center">
          <div className="w-56 h--fit mb-6 lg:hidden">
            <img
              src={"/assets/images/alphabetLogoDark.png"}
              className="object-fill"
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

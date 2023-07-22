const AuthLayout = ({ children, backgroundImageUrl, isDarkLogo }) => {
  return (
    <div className=" min-w-[100vw] min-h-[100vh] overflow-auto bg-black">
      <div className=" w-[95%] lg:h-[95%] max-w-7xl rounded-3xl lg:rounded-none overflow-hidden lg:min-w-[920px] lg:min-h-[600px] flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="hidden lg:block lg:h-full lg:w-1/2 lg:relative">
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
        <div className="h-full w-full py-8 lg:w-1/2 bg-red-600 flex flex-col lg:flex-row justify-center items-center">
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

const LoginCard = () => {
  return (
    <div className="py-10 px-6 h-fit bg-white w-[95%] sm:w-[75%] lg:max-w-[400px] m-aut rounded-[2rem] ">
      <h1 className="mb-6 uppercase font-semibold text-4xl text-center">
        Login
      </h1>
      <form>
        <div className="mb-2">
          <label className="font-semibold inline-block mb-2" htmlFor="username">
            Username or an Email
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username or an email"
            className="bg-gray-100 h-10 w-full border-2 rounded-lg px-4 focus:outline-none"
          />
        </div>

        <div className="mb-2">
          <label className="font-semibold inline-block mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="bg-gray-100 h-10 w-full border-2 rounded-lg px-4 focus:outline-none"
          />
        </div>
        <div className="mb-6 text-end text-sm">
          <a className="text-red-600 font-semibold cursor-pointer uppercase">
            Forgot your password ?
          </a>
        </div>

        <div className="text-center">
          <button className="py-2 px-8 rounded-full text-lg font-semibold text-white bg-black uppercase">
            Login
          </button>
        </div>
      </form>

      <div className="text-center">
        <p className="mt-2 font-semibold">OR</p>
        <a className="text-red-600 font-semibold cursor-pointer uppercase">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default LoginCard;

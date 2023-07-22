const SignupCard = () => {
  return (
    <div className="py-5 px-6 bg-white w-[95%] sm:w-[75%] lg:max-w-[400px] m-auto rounded-[2rem] ">
      <h1 className="mb-6 uppercase font-semibold text-4xl text-center">
        Sign Up
      </h1>
      <form>
        <div className="mb-2">
          <label className="font-semibold inline-block" htmlFor="fullname">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="Enter your Full Name"
            className="bg-gray-100 h-10 w-full border-2 rounded-lg px-4 focus:outline-none"
          />
        </div>

        <div className="mb-2">
          <label className="font-semibold inline-block mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            className="bg-gray-100 h-10 w-full border-2 rounded-lg px-4 focus:outline-none"
          />
        </div>

        <div className="mb-2">
          <label className="font-semibold inline-block mb-1" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your Username"
            className="bg-gray-100 h-10 w-full border-2 rounded-lg px-4 focus:outline-none"
          />
        </div>

        <div className="mb-2">
          <label className="font-semibold inline-block mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="bg-gray-100 h-10 w-full border-2 rounded-lg px-4 focus:outline-none"
          />
        </div>

        <div className="mb-2">
          <label className="flex align-center gap-2 text-red-600">
            <input type="checkbox" /> Our terms and conditions
          </label>
        </div>

        <div className=" text-center">
          <button className="py-2 px-8 rounded-full text-lg font-semibold text-white bg-black uppercase">
            Sign Up
          </button>
        </div>
      </form>

      <div className="text-center">
        <p className="mt-2 font-semibold">OR</p>
        <a className="text-red-600 font-bold cursor-pointer uppercase">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default SignupCard;

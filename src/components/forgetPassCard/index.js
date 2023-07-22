import { useNavigate } from 'react-router-dom'

const ForgetPassCard = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefaults()
    try{

    }catch(err){

    }
  }
  const onLoginClick= ()=>{
    navigate('/login')
  }

  return (
    <div className="py-5 px-6 bg-white w-[95%] sm:w-[75%] lg:max-w-[400px] m-auto rounded-[2rem] ">
      <h1 className="mb-6 font-semibold text-4xl text-center">
        Forget Password
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="font-semibold inline-block mb-2" htmlFor="username">
            Username or an Email
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username or an email"
            className="bg-gray-100 h-10 w-full border-2 border-gray-300 rounded-lg px-4 focus:outline-none"
          />
        </div>
        <div className="mb-6 text-end text-sm"></div>

        <div className="text-center">
          <button className="py-2 px-8 rounded-full text-lg font-semibold text-white bg-black uppercase">
            Submit
          </button>
        </div>
      </form>

      <div className="text-center">
        <p className="mt-2 font-semibold">OR</p>
        <a className="text-red-600 font-semibold cursor-pointer uppercase" onClick={onLoginClick}>
          Login?
        </a>
      </div>
    </div>
  );
};

export default ForgetPassCard;

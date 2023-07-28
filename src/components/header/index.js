import { useNavigate } from "react-router-dom";
const Header = ({onSidebar}) => {
  const navigate = useNavigate();
  const onLogoutClick = () => {
    navigate("/");
  };
  return (
    <div className="w-full h-16 px-4 sticky top-0 bg-white z-50">
      <div className="h-16 flex justify-between items-center">
        <div className="w-[140px] h-fit px-4 flex items-center justify-center gap-4">
          <button onClick={onSidebar}>
            <span className="material-symbols-outlined text-3xl" >menu</span>
          </button>
          <img
            src="/assets/images/alphabetLogoDark.png"
            className="object-fill"
          />
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <p className="font-semibold text-right hidden sm:block">Welcome, XXXXX!</p>
          <button
            className="h-[36px] px-6 rounded-full text-md font-semibold text-white bg-red-600"
            onClick={onLogoutClick}
          >
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

const Searchbar = () => {
  return (
    <div className="flex items-center rounded-3xl border-2 border-gray-300 bg-gray-200 w-full sm:w-72 overflow-hidden">
      <input
        type="search"
        className="px-2 w-4/5 h-8 bg-transparent focus:outline-none"
        placeholder="Search..."
      />{" "}
      <button className="flex justify-center items-center w-1/5 h-8 text-gray-400 hover:text-black ">
        <span class="material-symbols-outlined">search</span>
      </button>
    </div>
  );
};

export default Searchbar;

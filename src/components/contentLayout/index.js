import Header from "../header";

const ContentLayout = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] p-2 sm:p-6 bg-black">
      <div className="w-full h-full px-4 rounded-3xl bg-white overflow-y-auto relative">
          <Header />
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;

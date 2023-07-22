const ContentLayout = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] p-2 sm:p-6 bg-black">
      <div className="w-full h-full p-4 rounded-3xl bg-white">{children}</div>
    </div>
  );
};

export default ContentLayout;

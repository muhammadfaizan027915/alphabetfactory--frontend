const CorporateVideo = () => {
  return (
    <div className="animate-move-in bg-white px-2 py-2 sm:p-8 md:min-h-[786px]">
      <h1 className=" text-2xl md:text-3xl font-bold">Corporate Video</h1>
      <iframe
        className="mt-4 w-full h-[550px]"
        src="https://www.youtube.com/embed/hlGMgoHyqT8?si=cnn1j3wE0UmKRgg2"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default CorporateVideo;

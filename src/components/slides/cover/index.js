const Cover = ({slideAnimation}) => {
  return (
    <div className={slideAnimation}>
      <div className={styles.imgContainer}>
        <div className="w-[90%] md:w-96 md:ml-20 mx-auto bg-gray-500 bg-opacity-80 p-8 text-white">
          <h1 className="text-3xl font-bold">Proposal E-Learning</h1>
          <p className="text-sm mt-4">Jul 28th 2023</p>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className="md:w-[20%]  pt-2 px-6">
          <h3 className="font-semibold text-lg">From:</h3>
          <div className="text-sm">
            <p>Offorte</p>
            <p>Bramentuin 28</p>
            <p>4847 BT</p>
            <p>Teteringen</p>
            <p>Nederland</p>
          </div>
        </div>
        <div className="md:w-[20%]  pt-2 px-6">
          <h3 className="font-semibold text-lg">Attn:</h3>
          <div className="text-sm">
            <p>Example Company</p>
            <p>Empire street 123</p>
            <p>254512</p>
            <p>New York</p>
            <p>USA</p>
          </div>
        </div>
        <div className={"md:w-[60%]  pt-2 px-6"}>
          <h3 className="font-semibold text-lg">Digital Proposal</h3>
          <p className="text-sm">
            Of course I am curious about your findings. If something is still
            missing or if you just have a question, use the quotation "Ask a
            question" function, or mail / call, we are happy to help! Scroll
            with the arrows at the top or use the menu on the left to browse
            through the different pages of this quote.
          </p>
        </div>
      </div>

      <div>
        <p className="p-2 bg-black text-white text-center">
          This proposal is valid till Sep 26th 2023.
        </p>
      </div>
    </div>
  );
};

const styles = {
  imgContainer:
    "flex justify-start items-center h-[450px] overflow-hidden relative bg-[url('/public/assets/images/backgroundImage.jpg')] bg-no-repeat bg-cover",
  textContainer: "flex flex-col md:flex-row min-h-72 bg-white py-8",
};

export default Cover;

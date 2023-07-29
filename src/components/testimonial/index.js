const Testimonial = () => {
  return (
    <div className="bg-white text-center p-4 lg:p-8 min-h-[350px] border-b ">
      <h1 className="text-2xl text-red-600">Customer Ltd</h1>
      <p className="text-sm">
        "I think it is a very pleasant collaboration. We have a good click with
        the team and the company focuses very much on quality and does not go
        for that quick profit. They stand for a lasting long relationship. That
        working method also fits very well with our company. "
      </p>
      <div className="mt-4 overflow-hidden rounded-full h-20 w-20 flex flex-col justify-center items-center mx-auto">
        <img src="/assets/images/alphabetLogoDark.png" fill />
      </div>
      <h3 className="text-lg font-semibold">Muhammad Faizan</h3>
    </div>
  );
};

export default Testimonial;

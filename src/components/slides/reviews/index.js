import Testimonial from "../../testimonial";

const Reviews = () => {
  return (
    <div className="animate-move-in min-h-[786px]">
      <div className="grid md:grid-cols-12 grid-rows-1">
        <div className="md:col-span-4 bg-gray-300 p-4 lg:p-6">
          <h1 className="text-3xl font-bold">Reviews</h1>
          <p className="mt-4">
            Of course we can tell you how good we are in our services, but even
            more important is what customers say about us and whether they are
            satisfied with the services provided. That is why we would like to
            let our customers have their say to tell you how they experienced
            our services.
          </p>
        </div>
        <div className="md:col-span-8 grid md:grid-cols-2">
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default Reviews;

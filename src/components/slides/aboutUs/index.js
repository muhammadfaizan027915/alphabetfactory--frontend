const AboutUs = ({slideAnimation}) => {
  return (
    <div className={`${slideAnimation} bg-white h-full min-h-[786px] max-w-3xl mx-auto lg:max-w-full`}>
      <div className="flex flex-col lg:flex-row lg:items-center lg:h-[393px]">
        <div className="lg:w-2/6 min-h-[320px] lg:h-full px-6 py-16 bg-black ">
          <p className="font-black text-white text-3xl tracking-tighter">
            With us by your side you do not have to lie awake at night, we will
            take care of you and give you the best possible advice or help.
          </p>
        </div>
        <div className="lg:w-2/6 min-h-[320px] lg:min-h-full bg-[url('/public/assets/images/backgroundImage.jpg')] bg-no-repeat bg-cover"></div>
        <div className="lg:w-2/6 min-h-[320px] lg;min-h-full px-6 py-8">
          <h2 className="text-3xl text-red-600">Why Offorte?</h2>
          <p className="mt-4 text-lg">
            Pragmatic cooperation, a high degree of professionalism and great
            expertise are words with which we describe our services and actions.
            Thanks to our broad knowledge, we can always deliver the best
            results for your issues and we exceed your expectations.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:h-[393px]">
        <div className="lg:w-2/6 min-h-[320px] lg:min-h-full px-6 py-8">
          <p className="text-sm">
            With us you will always get a fixed point of contact, so you can
            call your advisor at any time for advice or if you have a question.
            The driven consultants ensure that the project is successfully
            completed and together with you realize results that exceed
            expectations. All projects are carried out within budget and within
            the set time frame. You can also view the progress at all times, so
            that you are never faced with surprises. As a trusted partner, our
            company supports various diverse organizations with various issues.
            With the best match for your question, we provide strategic advice
            to implementation for a variety of issues.
          </p>
        </div>
        <div className="lg:w-2/6 min-h-[320px] lg:min-h-full bg-[url('/public/assets/images/backgroundImage.jpg')] bg-no-repeat bg-cover"></div>
        <div className="lg:w-2/6 min-h-[320px] lg:min-h-full bg-[url('/public/assets/images/backgroundImage.jpg')] bg-no-repeat bg-cover"></div>
      </div>
    </div>
  );
};

export default AboutUs;

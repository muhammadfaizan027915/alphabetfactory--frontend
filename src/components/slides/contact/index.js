const Contact = ({slideAnimation}) => {
  return (
    <div className={`${slideAnimation} bg-white h-full min-h-[786px] max-w-3xl mx-auto lg:max-w-full`}>
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:h-[393px]">
        <div className="lg:w-2/6 min-h-[320px] lg:h-full p-6 bg-gray-200 ">
          <h2 className="h-10 text-3xl tracking-tight font-semibold">
            Contacts
          </h2>
          <p className="my-4 text-sm">
            Of course, the entire Offorte team is available throughout the week
            to help and support you. <br /> <br />
            To the right are the direct contact persons who have the lead during
            this project.
          </p>
          <strong>General Phone:</strong>
          <p className="text-sm">090078601</p>

          <strong className="mt-4 block">Email customer support:</strong>
          <p className="text-sm">support@offorte.com</p>
        </div>

        <div className="lg:w-2/6 min-h-[320px] lg;min-h-full px-6 py-8">
          <h2 className="h-10 text-3xl tracking-tight font-semibold"></h2>
          <h4 className="text-2xl text-red-600">Muhammad Faizan</h4>
          <p className="my-2 text-sm">
            Amy is a true project manager and will ensure that everything runs
            smoothly and that the correct finishing touches are put in place.
          </p>
          <strong>Phone:</strong>
          <p className="text-sm">090078601</p>

          <strong className="mt-4 block">Email:</strong>
          <p className="text-sm">support@offorte.com</p>
        </div>

        <div className="lg:w-2/6 min-h-[320px] lg;min-h-full px-6 py-8">
          <h2 className="h-10 text-3xl tracking-tight font-semibold"></h2>
          <h4 className="text-2xl text-red-600">Muhammad Zain</h4>
          <p className="my-2 text-sm">
            Amy is a true project manager and will ensure that everything runs
            smoothly and that the correct finishing touches are put in place.
          </p>
          <strong>Phone:</strong>
          <p className="text-sm">090078601</p>

          <strong className="mt-4 block">Email:</strong>
          <p className="text-sm">support@offorte.com</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:h-[393px]">
        <div className="lg:w-2/6 min-h-[320px] lg:min-h-full bg-[url('/public/assets/images/backgroundImage.jpg')] bg-no-repeat bg-cover"></div>
        <div className="lg:w-2/6 min-h-[320px] lg:min-h-full bg-[url('/public/assets/images/backgroundImage.jpg')] bg-no-repeat bg-cover"></div>
        <div className="lg:w-2/6 min-h-[320px] lg:min-h-full bg-[url('/public/assets/images/backgroundImage.jpg')] bg-no-repeat bg-cover"></div>
      </div>
    </div>
  );
};

export default Contact;

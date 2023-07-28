const Introduction = () => {
  return (
    <div>
      <div className="flex flex-col  md:flex-row md:items-stretch">
        <div className="md:w-[55%] min-h-80 bg-black text-white p-4 md:8 text-justify">
          <h3 className="text-lg font-semibold">Dear Faizan,</h3>
          <p className="font-light text-sm">
            As promised during our pleasant conversation last week, you hereby
            receive my proposal for the development of your E-Learning project.
            In this proposal I started from a nice lean & mean basis with which
            your various projects can be lifted to a higher level. A super base
            that is flexible and can grow with your organization.
          </p>
          <p className="mt-4">Yours Sincerely,</p>
          <p>Muhammad Zain</p>
        </div>
        <div className="md:w-[45%] min-h-[320px] bg-[url('/public/assets/images/backgroundImage.jpg')] bg-no-repeat bg-cover"></div>
      </div>
      <div className="flex flex-col md:flex-row md:items-stretch bg-white border-b-[20px] border-red-600 py-2">
        <div className="md:w-[55%] min-h-[400px] px-4 sm:px-10 mt-4">
          <h2 className="text-2xl">About Example Company</h2>
          <p className="mt-4 text-sm">
            This text describes the company and the services of the customer. In
            the sales conversation, listen carefully to how the customer
            describes her company and strengths. Ask carefully about this. You
            then insert this company description in this place and describe it
            with your own words that are close to what the customer has told
            you. In this way you show the customer in your quotation that you
            have listened carefully in the conversation and that you understand
            the opportunities for the company. This description should be a
            celebration of recognition of the customer and give a good feeling.
            Even if you have further standardized your proposal, showing that
            you understand the customer gives you a head start on the
            competition.
          </p>
        </div>
        <div className=" md:w-[45%] min-h-[400px] px-4 sm:px-10 mt-4">
          <h2 className="text-2xl">Why Offorte?</h2>
          <p className="mt-4 text-sm">
            With our many years of experience and our in-house developed
            products, we are the ideal partner for companies that want to go the
            extra mile. We think along with you, but are occasionally a bit
            stubborn when necessary. By understanding the organization and
            activities of our customers, we can truly tailor our solutions. We
            use our passion for innovation to spot opportunities for you. We
            think along and go for a long-term cooperation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

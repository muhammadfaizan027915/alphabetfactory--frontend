import Investmenttable from "../../table/investmentTable";

const Investment = ({slideAnimation}) => {
  return (
    <div className={`${slideAnimation} h-[786px] flex flex-col lg:flex-row items-stretch`}>
      <div className="lg:w-1/2 bg-white  p-4 md:p-8">
        <h2 className="text-2xl text-red-600 text-bold">Investment</h2>
        <p className="text-sm mt-4">
          All work has been carefully budgeted on the basis of the description
          of the work to be performed in this proposal. Interim changes and / or
          additions to the work are discussed in good time in mutual
          consultation with the client and any additional costs are made
          transparent. Mentioned rates are exclusive of VAT, postage, printing,
          travel and courier costs. Invoicing takes place in several
          installments: 50% upon issuing of the assignment, 40% upon first
          delivery, the remaining amount upon completion of work by means of
          partial invoices.
        </p>
        <Investmenttable />
      </div>
      <div className="lg:w-1/2 h-full min-h-96  bg-[url('/public/assets/images/backgroundImage.jpg')] bg-cover bg-no-repeat">
        <h1 className="p-4 md:w-[70%] mx-auto pt-16 md:pt-40 text-white text-3xl text-center ">
          We look forward to getting started and to work on your high quality
          production
        </h1>
      </div>
    </div>
  );
};

export default Investment;

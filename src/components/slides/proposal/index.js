const Proposal = ({slideAnimation}) => {
  return (
    <div className={`${slideAnimation} flex flex-col md:flex-row items-stretch min-h-[768px]`}>
      <div className="md:w-1/2 bg-white p-4 md:p-8 flex flex-col gap-4">
        <h3 className="text-3xl font-bold">The Proposal</h3>
        <p className="text-sm">
          What we can do for you depends on the service you want to purchase.
          First of all, we sit down with you to discuss your wishes and goals.
          Are these clear and do we understand each other well? Then we will
          look for the right advisor to help you. We will link you to an expert
          and experienced advisor who will help you with your request for help.
        </p>

        <h4 className="text-2xl text-red-600">Personal contact</h4>
        <p>
          You will receive a direct contact, so you can count on a fast service
          at all times and we are always ready for you. The number of hours for
          which the expert advisor has been hired can be found on the quotation.
          You will receive an overview of the hours worked per month, so you
          will not be faced with surprises later.
        </p>

        <h4 className="text-2xl text-red-600">Concrete solution</h4>
        <p>
          Your advisor gives you advice, concrete and feasible solutions and
          also takes care of the implementation. In the meantime and at the end
          of the services provided, an evaluation takes place, so you can
          indicate whether you are satisfied with the service or whether you
          would like to see changes. We adapt the service to your wishes.
        </p>

        <h4 className="text-2xl text-red-600">Exceeding expectations</h4>
        <p>
          With us by your side, you don't have to lie awake all night, we take
          care of you and give you the best possible advice or help. The driven
          consultants ensure that the project is successfully completed and
          together with you realize results that exceed expectations.
        </p>
      </div>
      <div className="md:w-1/2 min-h-[420px] bg-[url('/public/assets/images/backgroundImage.jpg')] bg-no-repeat bg-cover"></div>
    </div>
  );
};

export default Proposal;

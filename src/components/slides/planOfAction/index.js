import PlansTable from "../../table/plansTable";

const PlanOfAction = () => {
  return (
    <div className="animate-move-in">
      <div className="min-h-[768px] bg-white p-3 md:p-8">
        <h1 className="text-2xl font-semibold">Plan of Action</h1>
        <p className="text-sm mt-4 text-justify">
          To make our collaboration a great success, we propose the following
          action plan. Of course we will refine this further as soon as we get
          started. All your feedback is indispensable for a perfect result.
        </p>
        <PlansTable />
      </div>
    </div>
  );
};

export default PlanOfAction;

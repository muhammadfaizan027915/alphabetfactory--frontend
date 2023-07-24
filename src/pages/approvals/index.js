import { useEffect, useState } from "react";
import ApprovalSlide from "../../components/approvalSlide";
import ContentLayout from "../../components/contentLayout";

const approvals = [
  {
    title: "aasdfasd",
    description: "1",
  },
  {
    title: "sdfasdfa",
    description: "2",
  },
  {
    title: "fghgfhfg",
    description: "3",
  },
  {
    title: "dfsgsdfg",
    description: "4",
  },
  {
    title: "dsskdlfj",
    description: "5",
  },
  {
    title: "84739253",
    description: "aksldfjaksldfjal;sdkfjsas;ldfjaslf;ajdfkal",
  },
  {
    title: "kjgdlfdf",
    description: "aksldfjaksldfjal;sdkfjsas;ldfjaslf;ajdfkal",
  },
];

const ApprovalPage = () => {
  const [approval, setApproval] = useState(approvals[0]);
  const [approvalIndex, setApprovalIndex] = useState(0);
  const onNext = () => {
    const next = approvalIndex + 1
    setApprovalIndex(next < approvals.length ? next : 0);
  };

  const onPrev = () => {
    const prev = approvalIndex - 1
    setApprovalIndex(prev >= 0 ? prev : approvals.length - 1 );
  };

  useEffect(() => {
    setApproval(approvals[approvalIndex]);
  }, [approvalIndex]);

  return (
    <ContentLayout>
      <h1 className="text-center text-2xl font-semibold py-4 uppercase">
        Recent Approvals
      </h1>
      <ApprovalSlide approval={approval} onNext={onNext} onPrev={onPrev} />
    </ContentLayout>
  );
};

export default ApprovalPage;

import { useContext, useEffect, useState } from "react";
import ProposalSlide from "../../../components/proposalSlide";
import ContentLayout from "../../../components/contentLayout";
import { AppContext } from "../../../context/store";
import Cover from "../../../components/slides/cover";
import Introduction from "../../../components/slides/introduction";
import Investment from "../../../components/slides/investment";
import Proposal from "../../../components/slides/proposal";
import PlanOfAction from "../../../components/slides/planOfAction";
import AboutUs from "../../../components/slides/aboutUs";
import Contact from "../../../components/slides/contact";
import Reviews from "../../../components/slides/reviews";
import Impression from "../../../components/slides/impression";
import CorporateVideo from "../../../components/slides/corporateVideo";
import Closing from "../../../components/slides/closing";

const ApprovalPage = () => {
  const Slides = {
    cover: Cover,
    introduction: Introduction,
    "the proposal": Proposal,
    "plan of action": PlanOfAction,
    investment: Investment,
    "about us": AboutUs,
    contact: Contact,
    reviews: Reviews,
    "corporate video": CorporateVideo,
    "impression": Impression,
    closing: Closing
  };

  const { selectedSlide, slidesName } = useContext(AppContext);
  const [index, setIndex] = useState(0);
  const [SelectedSlide, setSelectedSlide] = selectedSlide;

  const Slide = Slides[SelectedSlide];

  const onNext = () => {
    const next = index + 1;
    setIndex(next < slidesName.length ? next : 0);
  };

  const onPrev = () => {
    const prev = index + 1;
    setIndex(prev >= 0 ? prev : slidesName.length - 1);
  };

  useEffect(() => setSelectedSlide(slidesName[index]), [index]);

  return (
    <ContentLayout>
      <ProposalSlide
        approval={approval}
        onNext={onNext}
        onPrev={onPrev}
      >
      <ProposalSlide onNext={onNext} onPrev={onPrev}>
        <Slide />
      </ProposalSlide>
    </ContentLayout>
  );
};

export default ApprovalPage;

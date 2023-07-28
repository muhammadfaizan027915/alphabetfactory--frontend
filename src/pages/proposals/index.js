import { useState } from "react";
import ContentLayout from "../../components/contentLayout";
import DraftTable from "../../components/table/draftTable";
import ProposalTable from "../../components/table/proposalTable";
import Modal from "../../components/modal";
import NewProposal from "../../components/modal/newProposal";
import { useNavigate } from "react-router-dom";

const ProposalsPage = () => {
  const nvavigate = useNavigate()
  const [openCreateNew, setOpenCreateNew] = useState(false);
  const [openView, setOpenView] = useState(false);

  const onCraeteNewProposal = () => setOpenCreateNew((open) => !open);

  const onViewOrEdit = () => nvavigate('/proposals/1')

  return (
    <>
      <ContentLayout>
        <ProposalTable  onCraeteNew={onCraeteNewProposal} onView={onViewOrEdit} />
        <DraftTable onEdit={onViewOrEdit} />
      </ContentLayout>

      <Modal isOpen={openCreateNew} onOutsideClick={onCraeteNewProposal}>
        <NewProposal onCancel={onCraeteNewProposal} />
      </Modal>
    </>
  );
};

export default ProposalsPage;

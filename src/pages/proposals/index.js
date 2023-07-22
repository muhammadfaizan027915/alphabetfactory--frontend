import { useState } from "react";
import Header from "../../components/header";
import ContentLayout from "../../components/contentLayout";
import DraftTable from "../../components/table/draftTable";
import ProposalTable from "../../components/table/proposalTable";
import Modal from "../../components/modal";
import NewProposal from "../../components/modal/newProposal";
import ProposalInfo from "../../components/modal/proposalInfo";

const ProposalsPage = () => {
  const [openCreateNew, setOpenCreateNew] = useState(false);
  const [openView, setOpenView] = useState(false);

  const onCraeteNewProposal = () => setOpenCreateNew((open) => !open);
  const onVeiwProposal = () => setOpenView(open => !open)

  return (
    <>
      <ContentLayout>
        <Header />
        <ProposalTable  onCraeteNew={onCraeteNewProposal} onView={onVeiwProposal} />
        <DraftTable onEdit={onCraeteNewProposal} />
      </ContentLayout>

      <Modal isOpen={openCreateNew} onOutsideClick={onCraeteNewProposal}>
        <NewProposal onCancel={onCraeteNewProposal} />
      </Modal>

      <Modal isOpen={openView} onOutsideClick={onVeiwProposal}>
        <ProposalInfo onClose={onVeiwProposal} />
      </Modal>
    </>
  );
};

export default ProposalsPage;

import { useRef } from "react";
import SignaturePad from "react-signature-canvas";
const AcceptProposal = ({ onSave, onClose }) => {
  const signatureRef = useRef({});
  const onClear = () => signatureRef.current.clear();
  return (
    <div className="  lg:w-[900px] ml-[-0.5rem] p-4 md:p-8 rounded-2xl bg-white">
      <h1 className="mb-4 text-2xl font-semibold">Accept Proposal</h1>
      <p className="mb-4">
        We are thrilled that you have chosen our company to execute the order!
      </p>

      <div className="flex flex-col md:flex-row mb-2">
        <p className="md:w-1/4">Company Name:</p>
        <strong>Example Company</strong>
      </div>

      <div className="flex flex-col md:flex-row mb-2">
        <p className="md:w-1/4">Date:</p>
        <strong>{Date.now()}</strong>
      </div>

      <div className="flex flex-col md:flex-row mb-2">
        <p className="md:w-1/4">
          Name<span className="text-red-600">*</span>:
        </p>
        <input
          className="h-9 px-2 border-b-2 border-gray-400 w-full md:w-[60%] bg-gray-100"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col md:flex-row mb-2">
        <p className="md:w-1/4">
          Signature<span className="text-red-600">*</span>:
        </p>

        {/* 
        Refer given link for changings
        https://dev.to/ma7eer/create-a-signature-pad-in-react-3mmi 
        */}

        <SignaturePad
          ref={signatureRef}
          canvasProps={{
            className:
              "border-b-2 border-gray-400 bg-gray-100 h-[150px] w-full md:w-[60%]",
          }}
        />
      </div>
      <div className="flex flex-col md:flex-row mb-2">
        <p className="md:w-1/4"></p>
        <div className="w-full md:w-[70%]">
          <button className="text-red-600 text-sm" onClick={onClear}>
            Clear feild
          </button>

          <p className="text-justifyb mt-2">
            <label className="text-sm">
              <input type="checkbox" className="mr-2" />
              Yes, I agree with this proposal and the applicable terms and
              conditions.
            </label>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mb-2">
        <p className="md:w-1/4"></p>
        <div className="flex gap-2">
          <button
            className="px-6 h-[36px] bg-red-600 text-white rounded-3xl"
            onClick={onSave}
          >
            Save
          </button>
          <button
            className="px-4 h-[36px] bg-gray-200 rounded-3xl text-gray-500"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptProposal;

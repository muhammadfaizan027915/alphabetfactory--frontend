const Sidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return;
  return (
    <div className="w-80 h-full bg-white absolute top-0 left-0 py-4 z-[100] shadow-2xl animate-move-in">
      <div className="flex justify-between items-center">
        <div className=" px-4 pb-2 w-full">
          <h2 className="font-bold">Example</h2>
          <p className="text-xs font-semibold">29 jun. 2023 (23:53)</p>
        </div>

        <button className="p-4 hover:text-red-600" onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <div className="text-sm text-black ">
        <button className={`flex items-center gap-2 ${styles.navLink} w-full block sm:hidden`}>
          <span className="material-symbols-outlined">done</span>
          Accept Prooposal
        </button>

        <button className={`flex items-center gap-2 ${styles.navLink} w-full block sm:hidden`}>
          <span className="material-symbols-outlined">speaker_notes</span>
          <span>Question</span>
        </button>
        <p className={styles.navLink}>
          <a className="w-full">Cover</a>
        </p>
        <p className={styles.navLink}>
          <a className="w-full">Introduction</a>
        </p>
        <p className={styles.navLink}>
          <a className="w-full">The proposal</a>
        </p>
        <p className={styles.navLink}>
          <a className="w-full">Plan of action</a>
        </p>

        <p className={styles.navLink}>
          <a className="w-full">Investment</a>
        </p>

        <p className={styles.navLink}>
          <a className="w-full">About us</a>
        </p>

        <p className={styles.navLink}>
          <a className="w-full">Contacts</a>
        </p>

        <p className={styles.navLink}>
          <a className="w-full">Reviews</a>
        </p>

        <p className={styles.navLink}>
          <a className="w-full">Corporate Video</a>
        </p>

        <p className={styles.navLink}>
          <a className="w-full">Impression</a>
        </p>

        <p className={styles.navLink}>
          <a className="w-full">Closing</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  navLink:
    "py-2 px-4 border-b-[1px] border-b-gray-300 hover:bg-red-600 hover:text-white cursor-pointer",
};

export default Sidebar;

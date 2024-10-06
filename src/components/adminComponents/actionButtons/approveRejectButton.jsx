function ApproveRejectButton() {
  return (
    <>
      <button  className="[transition:all_.3s] bg-green-600 text-white py-1 px-3 rounded-full text-xs mr-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300">
        Aprovar
      </button>
      <button className="[transition:all_.3s] bg-red-600 text-white py-1 px-3 rounded-full text-xs hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300">
        Rejeitar
      </button>
    </>
  );
}

export default ApproveRejectButton;

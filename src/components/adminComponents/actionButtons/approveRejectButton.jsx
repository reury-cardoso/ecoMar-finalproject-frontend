/* eslint-disable react/prop-types */
import { useContext } from "react";
import { EventsContext } from "../../../context/eventsContext";

function ApproveRejectButton({ idEvent }) {
  const { updateEvent } = useContext(EventsContext);

  const eventUpdated = {
    approved: {
      status: "approved",
    },
    rejected: {
      status: "rejected",
    },
  };

  return (
    <>
      <button onClick={()=> updateEvent(idEvent, eventUpdated.approved)}  className="[transition:all_.3s] bg-green-600 text-white py-1 px-3 rounded-full text-xs mr-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300">
        Aprovar
      </button>
      <button onClick={()=> updateEvent(idEvent, eventUpdated.rejected)} className="[transition:all_.3s] bg-red-600 text-white py-1 px-3 rounded-full text-xs hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300">
        Rejeitar
      </button>
    </>
  );
}

export default ApproveRejectButton;

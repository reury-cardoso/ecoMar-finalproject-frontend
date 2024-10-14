/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { EventsContext } from "../../../context/eventsContext";
import { PointsContext } from "../../../context/pointsContext";
import loadingSvg from "../../../assets/tubeSpinner.svg";

function ApproveRejectButton({ theSection, idElement }) {
  const { updateEvent } = useContext(EventsContext);
  const { updatePoint } = useContext(PointsContext);
  const [isLoadingAp, setIsLoadingAp] = useState(false);
  const [isLoadingRe, setIsLoadingRe] = useState(false);

  const sectionUpdated = theSection === "events" ? updateEvent : updatePoint;

  const handleUpdateAp = async (id, status) => {
    setIsLoadingAp(true);
    await sectionUpdated(id, status);
    setIsLoadingAp(false);
  };

  const handleUpdateRe = async (id, status) => {
    setIsLoadingRe(true);
    await sectionUpdated(id, status);
    setIsLoadingRe(false);
  };

  const statusUpdated = {
    approved: {
      status: "approved",
    },
    rejected: {
      status: "rejected",
    },
  };

  return (
    <>
      <button
        onClick={() => handleUpdateAp(idElement, statusUpdated.approved)}
        className="[transition:all_.3s] bg-green-600 text-white py-1 px-3 rounded-full text-xs mr-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 max-h-[24px]"
      >
        {isLoadingAp ? (
          <img src={loadingSvg} alt="Loading" className="m-auto !h-[15px]" />
        ) : (
          "Aprovar"
        )}
      </button>
      <button
        onClick={() => handleUpdateRe(idElement, statusUpdated.rejected)}
        className="[transition:all_.3s] bg-red-600 text-white py-1 px-3 rounded-full text-xs hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 w-[60.94px] max-h-[24px] "
      >
        {isLoadingRe ? (
          <img src={loadingSvg} alt="Loading" className="m-auto !h-[15px]" />
        ) : (
          "Rejeitar"
        )}
      </button>
    </>
  );
}

export default ApproveRejectButton;

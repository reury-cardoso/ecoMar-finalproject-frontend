import { useContext } from "react";
import { EventsContext } from "../../../context/eventsContext";

/* eslint-disable react/prop-types */
function EditDeleteButton({idEvent}) {
  const { deleteEvent,  } = useContext(EventsContext);

  return (
    <>
      <button className="[transition:all_.3s] bg-blue-600 text-white py-1 px-3 rounded-full text-xs mr-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Editar
      </button>
      <button onClick={()=> deleteEvent(idEvent)} className="[transition:all_.3s] bg-red-600 text-white py-1 px-3 rounded-full text-xs hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300">
        Excluir
      </button>
    </>
  );
}

export default EditDeleteButton;

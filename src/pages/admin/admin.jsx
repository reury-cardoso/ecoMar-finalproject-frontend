import Header from "../../components/header/header";
import AdminLeftSection from "../../components/adminComponents/adminLeftSection";
import AdminRightSection from "../../components/adminComponents/adminRightSection";
import CurrentSectionProvider from "../../context/currentSectionContext";
import "./admin.css";
import { EventsProvider } from "../../context/eventsContext";
import { PointsProvider } from "../../context/PointsContext";

function Admin() {
  return (
    <>
      <Header isLogged={true} />
      <CurrentSectionProvider>
        <section id="sectionMain" className="w-full min-h-[89.5vh] flex">
          <EventsProvider>
            <PointsProvider>
              <AdminLeftSection />
              <AdminRightSection />
            </PointsProvider>
          </EventsProvider>
        </section>
      </CurrentSectionProvider>
    </>
  );
}

export default Admin;

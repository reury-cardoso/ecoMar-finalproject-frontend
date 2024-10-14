import Header from "../../components/header/header";
import AdminLeftSection from "../../components/adminComponents/adminLeftSection";
import AdminRightSection from "../../components/adminComponents/adminRightSection";
import CurrentSectionProvider from "../../context/currentSectionContext";
import { EventsProvider } from "../../context/eventsContext";
import { PointsProvider } from "../../context/pointsContext";
import { UsersProvider } from "../../context/usersContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function Admin() {
  const { isAdmin } = useContext(AuthContext);

  if (!isAdmin) {
    window.location.href = "/";
  }

  return (
    <>
      <Header />
      <CurrentSectionProvider>
        <section id="sectionMain" className="w-full min-h-[89.5vh] flex">
          <EventsProvider>
            <PointsProvider>
              <UsersProvider>
                <AdminLeftSection />
                <AdminRightSection />
              </UsersProvider>
            </PointsProvider>
          </EventsProvider>
        </section>
      </CurrentSectionProvider>
    </>
  );
}

export default Admin;

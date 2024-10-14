import Header from "../../components/header/header";
import AdminLeftSection from "../../components/adminComponents/adminLeftSection";
import AdminRightSection from "../../components/adminComponents/adminRightSection";
import CurrentSectionProvider from "../../context/CurrentSectionContext";
import { EventsProvider } from "../../context/EventsContext";
import { PointsProvider } from "../../context/PointsContext";
import { UsersProvider } from "../../context/UsersContext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

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

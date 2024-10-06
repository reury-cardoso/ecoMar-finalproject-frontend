import Header from "../../components/header/header";
import AdminLeftSection from "../../components/adminComponents/adminLeftSection";
import AdminRightSection from "../../components/adminComponents/adminRightSection";
import "./admin.css";

function Admin() {
  return (
    <>
      <Header isLogged={true}/>
      <section id="sectionMain" className="w-full min-h-[89.5vh] flex">
        <AdminLeftSection />
        <AdminRightSection />
      </section>
    </>
  );
}

export default Admin;

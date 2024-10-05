import Header from "../../components/header/header";
import AdminLeftSection from "../../components/adminLeftSection/adminLeftSection";
import AdminRightSection from "../../components/adminRightSection/adminRightSection";
import "./admin.css";

function Admin() {
  return (
    <>
      <Header isLogged={true}/>
      <section id="sectionMain" className="w-full h-[89.5vh] flex">
        <AdminLeftSection />
        <AdminRightSection />
      </section>
    </>
  );
}

export default Admin;

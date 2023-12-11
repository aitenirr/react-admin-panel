import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sideabar";
import Footer from "../components/Footer/Footer";
function MainLayout(props) {
  return (
    <div>
      <Header />
      <Sidebar />
      {props.children}
      <Footer />
    </div>
  );
}
export default MainLayout;

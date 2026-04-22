import Header from "../../module/common/Header";
import BodyPage from "./bodyPage";
import FooterPage from "../../module/common/footerPage";
 const HomePage = () => {
   return (
     <div className="flex flex-col items-start">
        <Header />
        <BodyPage />
        <FooterPage />
    </div>
   )
 }
 export default HomePage
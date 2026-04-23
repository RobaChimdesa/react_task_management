import { useNavigate } from "react-router-dom";
import { Pages_Routes } from "../utils/pages-routes";
import Button from "../component/ui/button";
import { useAuthStore } from "../store/authStore";
import userLogo from "./userLogo";
const UserHeader = () => {
  const navigate = useNavigate();
  

  const logout  = useAuthStore((state)=>state.logout)

  const handleLogout = () => {
  logout();
  navigate(Pages_Routes.sign_in);
};

  
  return (
    <div className="flex flex-row items-center justify-between w-full py-3 px-4 shadow-xl">
      {userLogo()}
     <div className=" flex flex-row items-center justify-center gap-6">
        <Button
        text="sign out"
        variant="tertiary"
        onHandleClick={handleLogout}
      />
       
     </div>
    </div>
  );
};

export default UserHeader;

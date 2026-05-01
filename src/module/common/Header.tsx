import Button from "../../component/ui/button";
import Logo from "./logo";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Pages_Routes } from "../../utils/pages-routes";
import ThemeToggle from "../../component/ui/ThemeToggle";

const Header = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate(Pages_Routes.sign_in);
    console.log("sign in clicked");
  };

  const HandleCreateAccount = () => {
    navigate(Pages_Routes.sign_up);
    console.log("signUp is clicked");
  };
  return (
    <div className="flex flex-row items-center justify-between w-full py-3 px-4 shadow-xl">
      <Logo />
      <ThemeToggle />
      <div className="bg-white dark:bg-black p-4">
        <h1 className="text-black dark:text-white">hello world</h1>
      </div>{" "}
      <div className=" flex flex-row items-center justify-center gap-6">
        <Button
          icon={<User />}
          text="sign in"
          variant="tertiary"
          onHandleClick={handleSignIn}
        />
        <Button
          text="Create Account"
          variant="primary"
          onHandleClick={HandleCreateAccount}
        />
      </div>
    </div>
  );
};

export default Header;

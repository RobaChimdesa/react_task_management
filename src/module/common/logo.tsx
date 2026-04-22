import { logo } from "../../assets/image";
import { Pages_Routes } from "../../utils/pages-routes";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <button onClick={()=>navigate(Pages_Routes.home)}>
      <div className="flex items-center gap-3 group cursor-pointer">
      <div className="w-12 h-12 md:w-14 md:h-14 relative overflow-hidden rounded-xl bg-linear-to-br from-blue-500 to-purple-600 p-0.5 transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:rotate-6"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-3xl md:text-sm  text-white font-bold tracking-wide">
          Task Manager
        </span>
        <span className="text-[10px] md:text-xs text-white font-bold">
          manage your daily tasks
        </span>
      </div>
    </div>
    </button>
  );
};

export default Logo;

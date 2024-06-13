import { Outlet } from "react-router-dom";
import { Navbar } from "./ui/components/Navbar";

export const AppPrueba = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-5 px-20 py-10">
        <Outlet />
      </div>
    </div>
  );
};

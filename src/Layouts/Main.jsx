import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import MobileHeader from "../Pages/Shared/Header/MobileHeader";

const Main = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <MobileHeader />
                <div className="lg:p-8 p-4">
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side shadow-lg shadow-sky-300">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <Header />
            </div>
        </div>
    );
};

export default Main;
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { Link } from "react-router-dom";

const MobileHeader = () => {
    return (
        <div className="flex items-center justify-between lg:hidden p-4">
            <Link to='/' className='text-xl font-bold uppercase'><span className='pr-2 border-r-4 border-double border-sky-400'>Travel</span> Talk</Link>
            <label htmlFor="my-drawer-2"><FaBars className="text-2xl" /></label>
        </div>
    );
};

export default MobileHeader;
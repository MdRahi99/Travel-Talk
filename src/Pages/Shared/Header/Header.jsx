import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <ul className="menu p-4 w-80 min-h-full bg-white gap-4 font-Ledger">
                <Link to='/' className='p-4 text-xl font-bold uppercase'><span className='pr-2 border-r-4 border-double border-sky-400'>Travel</span> Talk</Link>
                <li>
                    <Link className='font-semibold hover:bg-sky-200 rounded-none text-sm' to='/'>Home</Link>
                </li>
                <li>
                    <Link className='font-semibold hover:bg-sky-200 rounded-none text-sm' to='/blogs'>Blogs</Link>
                </li>
                <li>
                    <Link className='font-semibold hover:bg-sky-200 rounded-none text-sm' to='/add-blog'>Add Blog</Link>
                </li>
                <li>
                    <Link className='font-semibold hover:bg-sky-200 rounded-none text-sm' to='/favorites'>Favorites</Link>
                </li>
            </ul>
        </>
    );
};

export default Header;
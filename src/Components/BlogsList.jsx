/* eslint-disable react/prop-types */
import { FiDelete } from "@react-icons/all-files/fi/FiDelete";
import { MdFavorite } from "@react-icons/all-files/md/MdFavorite";
import { Link } from "react-router-dom";
import useFavorites from "../Hooks/useFavorites";

const BlogsList = ({ blog, handleDelete }) => {

    const [favorites, toggleFavorite] = useFavorites();
    const { _id, title } = blog;

    return (
        <>
            <div key={_id} className="px-4 py-2 border-l-4 rounded-xl border-sky-400 shadow-lg flex items-center justify-between">
                {
                    handleDelete &&
                    <button
                        onClick={() => toggleFavorite(_id)}
                        className={favorites.includes(_id) ? 'text-lg lg:text-xl uppercase py-1 rounded-lg text-orange-600 px-3 font-bold' : 'text-lg lg:text-xl uppercase py-1 hover:text-orange-600 rounded-lg px-3 font-bold'}
                        title={favorites.includes(_id) ? 'Remove Favorite' : 'Add Favorite'}
                    >
                        <MdFavorite />
                    </button>
                }

                <Link to={`/blogs/blog-details/${_id}`} className="text-sm lg:text-lg hover:text-sky-500 font-bold w-full line-clamp-1">
                    {title}
                </Link>

                <div className="flex items-center gap-4">
                    <Link to={`/blogs/blog-details/${_id}`}
                        className="text-xs lg:text-sm uppercase py-1 rounded-lg bg-sky-400 text-white hidden lg:flex hover:bg-sky-600 px-3 font-bold" >
                        View
                    </Link>

                    {
                        handleDelete &&
                        <button
                            onClick={() => handleDelete(_id)}
                            title="Delete"
                            className="text-xl lg:text-2xl uppercase rounded-lg hover:text-orange-700 text-orange-500 font-bold" >
                            <FiDelete />
                        </button>
                    }
                </div>
            </div>
        </>
    );
};

export default BlogsList;
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useBlogs from "../../Hooks/useBlogs";
import Loader from "../Shared/Loader/Loader";
import { FiDelete } from "@react-icons/all-files/fi/FiDelete";
import { MdFavorite } from "@react-icons/all-files/md/MdFavorite";
import { Zoom, toast } from "react-toastify";

const Blogs = () => {

    const [blogs, deleteBlog, , loading] = useBlogs();

    const handleDelete = async (id) => {
        try {
            await deleteBlog(id);
            toast.success('Blog Deleted Successfully!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Zoom,
            });
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    if(loading){
        return <Loader />
    }

    return (
        <>
            <div className="mb-8 flex items-center justify-between gap-4 border-b-2 pb-3 border-sky-300">
                <h1 className="w-4/6 lg:w-5/6 text-xl lg:text-2xl font-bold lg:text-center">Total Blogs: {blogs.length}</h1>
                <Link to='/add-blog' className="py-1 px-3 hover:bg-sky-300 bg-orange-400 rounded-lg lg:w-1/6 w-2/6 text-sm lg:text-lg font-bold text-center text-white uppercase">Add Blog</Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-8 items-center">
                {
                    blogs.map(blog => {
                        const { _id, title } = blog;
                        return <div key={_id} className="px-4 py-2 border-l-4 rounded-xl border-sky-400 shadow-lg flex items-center justify-between">

                            <button
                                title="Add Favorite"
                                className="text-lg lg:text-xl uppercase py-1 rounded-lg hover:text-orange-600 px-3 font-bold" >
                                <MdFavorite />
                            </button>
                            <Link to={`/blogs/blog-details/${_id}`} className="text-sm lg:text-lg hover:text-sky-500 font-bold w-full line-clamp-1">
                                {title}
                            </Link>

                            <div className="flex items-center gap-4">
                                <Link to={`/blogs/blog-details/${_id}`}
                                    className="text-xs lg:text-sm uppercase py-1 rounded-lg bg-sky-400 text-white hidden lg:flex hover:bg-sky-600 px-3 font-bold" >
                                    View
                                </Link>

                                <button
                                    onClick={() => handleDelete(_id)}
                                    title="Delete"
                                    className="text-xl lg:text-2xl uppercase rounded-lg hover:text-orange-700 text-orange-500 font-bold" >
                                    <FiDelete />
                                </button>
                            </div>
                        </div>
                    })
                }
            </div>
        </ >
    );
};

export default Blogs;
import { useNavigate } from "react-router";
import Loader from "../Shared/Loader/Loader";
import { FiDelete } from "@react-icons/all-files/fi/FiDelete";
import { MdFavorite } from "@react-icons/all-files/md/MdFavorite";
import { Link } from "react-router-dom";
import Comments from "../Comments/Comments";
import { Zoom, toast } from "react-toastify";
import useBlog from "../../Hooks/useBlog";

const BlogDetails = () => {

    const [blog, , , deleteBlog, loading] = useBlog();
    const navigate = useNavigate();

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
            navigate('/blogs');
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    if (loading) {
        return <Loader />
    }

    const { _id, title, body } = blog;

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center border-b-2 border-sky-400 p-4 shadow-lg justify-between">
                <h1 className="text-sm lg:text-xl font-semibold line-clamp-2">{title}</h1>

                <div className="flex items-center gap-2 lg:gap-4">
                    <button
                        title="Add Favorite"
                        className="text-lg lg:text-xl uppercase py-1 rounded-lg hover:text-orange-600 px-3 font-bold" >
                        <MdFavorite />
                    </button>

                    <button
                        onClick={() => handleDelete(_id)}
                        title="Delete"
                        className="text-xl lg:text-2xl uppercase rounded-lg hover:text-orange-700 text-orange-500 font-bold" >
                        <FiDelete />
                    </button>
                </div>
            </div>
            <p className="p-6 text-lg text-slate-600 text-justify shadow-2xl max-h-[70vh] overflow-y-auto">{body}</p>

            <Comments />

            <div className="w-full flex items-center gap-6">
                <Link to='/' className="w-1/2 text-xl font-bold bg-sky-400 hover:bg-sky-600 text-white text-center p-1">Back</Link>
                <Link to={`/blogs/update-blog/${_id}`} className="w-1/2 text-xl font-bold bg-sky-400 hover:bg-sky-600 text-white text-center p-1">Update</Link>
            </div>
        </div>
    );
};

export default BlogDetails;
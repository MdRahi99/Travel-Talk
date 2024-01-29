/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useBlogs from "../../Hooks/useBlogs";
import Loader from "../Shared/Loader/Loader";
import { Zoom, toast } from "react-toastify";
import BlogsList from "../../Components/BlogsList";

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

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <div className="mb-8 flex items-center justify-between gap-4 border-b-2 pb-3 border-sky-300">
                <h1 className="w-4/6 lg:w-5/6 text-xl lg:text-2xl font-bold lg:text-center">Total Blogs: {blogs.length}</h1>
                <Link to='/add-blog' className="py-1 px-3 hover:bg-sky-300 bg-orange-400 rounded-lg lg:w-1/6 w-2/6 text-sm lg:text-lg font-bold text-center text-white uppercase">Add Blog</Link>
            </div>
            {
                blogs.length > 0 ?
                    <div className="mt-6 grid grid-cols-1 gap-8 items-center">
                        {
                            blogs.map(blog => {
                                return <BlogsList key={blog._id}
                                    blog={blog}
                                    handleDelete={handleDelete} />
                            })
                        }
                    </div>
                    :
                    <div>
                        <h1 className='text-2xl text-center p-2 bg-sky-400 text-white my-44 w-full lg:w-1/3 mx-auto'>No Blog Found</h1>
                    </div>
            }
        </ >
    );
};

export default Blogs;
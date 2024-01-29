/* eslint-disable react/prop-types */

import { Zoom, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import BlogForm from "../../Components/BlogForm";
import useBlog from "../../Hooks/useBlog";
import Loader from "../Shared/Loader/Loader";

const AddBlog = () => {
    const [, addBlog, , , loading] = useBlog();
    const navigate = useNavigate();

    const onBlogSubmit = async (data) => {
        try {
            const response = await addBlog(data);
            toast.success('Blog Added Successfully!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Zoom
            });
            navigate('/blogs');
            return response.data;
        } catch (error) {
            console.error('Error adding new blog:', error);
            throw error;
        }
    };

    if(loading){
        return <Loader />
    }
    
    return (
        <>
            <div className="bg-white mx-auto w-full lg:w-2/3 shadow-lg p-8 shadow-sky-200 rounded-xl mt-12">
                <h2 className="text-2xl font-bold text-center border-b-2 border-black uppercase p-2 mb-12">Add Blog</h2>
                <BlogForm
                onBlogSubmit={onBlogSubmit} />
            </div>
        </>
    );
};

export default AddBlog;

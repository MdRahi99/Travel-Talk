/* eslint-disable react/prop-types */
import axios from "axios";
import { useForm } from "react-hook-form";
import useComments from "../Hooks/useComments";
import { Zoom, toast } from "react-toastify";

const CommentForm = ({blogId}) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [, refetch] = useComments();

    const onCommentSubmit = async (data) => {
        try {
            const response = await axios.post(`https://travel-talk-server.vercel.app/api/blogs/${blogId}/comments`, data);
            toast.success('Comment Added Successfully!', {
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
            refetch();
            reset();
            return response.data;
        } catch (error) {
            console.error('Error adding new comment:', error);
            throw error;
        }
    };

    return (
        <div className="flex flex-col gap-6 w-full shadow-2xl lg:w-2/4 bg-white p-8">
            <h1 className="text-lg font-bold text-center pb-3 border-b-2 border-sky-200">Add Comment</h1>
            <form onSubmit={handleSubmit(onCommentSubmit)} className='flex flex-col gap-4'>
                <div>
                    <h1 className="font-semibold text-lg mb-1">Name</h1>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name Here"
                        className={`input input-bordered w-full mx-auto rounded-lg focus:outline-none ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                        {...register("name", { required: 'Name Is Required', maxLength: { value: 50, message: 'Name must be at most 50 characters' } })}
                    />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                </div>

                <div>
                    <h1 className="font-semibold text-lg mb-1">Email</h1>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter Your Email Here"
                        className={`input input-bordered w-full mx-auto rounded-lg focus:outline-none ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                        {...register("email", { required: 'Email Is Required' })}
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>

                <div>
                    <h1 className="font-semibold text-lg mb-1">Message</h1>
                    <textarea
                        type="text"
                        name="body"
                        placeholder="Enter Comment Here"
                        className={`textarea textarea-bordered w-full mx-auto rounded-lg focus:outline-none ${errors.body ? 'border-red-500 focus:border-red-500' : ''}`}
                        {...register("body", { required: 'Body Is Required' })}
                    />
                    {errors.body && <span className="text-red-500">{errors.body.message}</span>}
                </div>
                <button type="submit" className="w-full rounded-xl p-2 shadow-md font-bold uppercase hover:bg-sky-600 hover:text-white">
                    Add
                </button>
            </form>
        </div>
    );
};

export default CommentForm;
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const BlogForm = ({onBlogSubmit, blog}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <>
            <form onSubmit={handleSubmit(onBlogSubmit)} className='flex flex-col gap-4'>
                <div>
                    <h1 className="font-semibold text-lg mb-1">Blog Title</h1>
                    <input
                        type="text"
                        name="title"
                        defaultValue={blog? blog.title : ''}
                        placeholder="Enter Blog Title Here"
                        className={`input input-bordered w-full mx-auto rounded-lg focus:outline-none ${errors.title ? 'border-red-500 focus:border-red-500' : ''}`}
                        {...register("title", { required: 'Blog Title Is Required', maxLength: { value: 80, message: 'Blog title must be at most 80 characters' } })}
                    />
                    {errors.title && <span className="text-red-500">{errors.title.message}</span>}
                </div>

                <div>
                    <h1 className="font-semibold text-lg mb-1">Blog Body</h1>
                    <textarea
                        type="text"
                        name="body"
                        defaultValue={blog ? blog.body : ''}
                        placeholder="Enter Blog Body Here"
                        className={`textarea textarea-bordered w-full mx-auto rounded-lg focus:outline-none ${errors.body ? 'border-red-500 focus:border-red-500' : ''}`}
                        {...register("body", { required: 'Blog Body Is Required' })}
                    />
                    {errors.body && <span className="text-red-500">{errors.body.message}</span>}
                </div>

                <div className="flex Products-center justify-between gap-4 lg:gap-8 mt-6">
                    <button type="submit" className="w-full lg:w-1/2 mx-auto rounded-xl p-2 shadow-md font-bold uppercase hover:bg-sky-600 hover:text-white">
                        Add
                    </button>
                    <Link
                        to='/blogs'
                        className="w-full text-center lg:w-1/2 mx-auto rounded-xl p-2 shadow-md font-bold uppercase hover:bg-sky-600 hover:text-white"
                    >
                        Back
                    </Link>
                </div>
            </form>
        </>
    );
};

export default BlogForm;
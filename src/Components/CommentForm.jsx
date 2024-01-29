/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const CommentForm = ({onCommentSubmit, closeModal}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className="flex flex-col gap-6 w-11/12 rounded-xl lg:w-2/4 bg-white h-fit p-8 mt-12">
            <h1 className="text-lg font-bold text-center pb-3 border-b-2 border-sky-200">Add Comment</h1>
            <form onSubmit={handleSubmit(onCommentSubmit)} className='flex flex-col gap-4'>
                <div>
                    <h1 className="font-semibold text-lg mb-1">Name</h1>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Blog name Here"
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
                        placeholder="Enter Email Here"
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
                        placeholder="Enter Blog Body Here"
                        className={`textarea textarea-bordered w-full mx-auto rounded-lg focus:outline-none ${errors.body ? 'border-red-500 focus:border-red-500' : ''}`}
                        {...register("body", { required: 'Body Is Required' })}
                    />
                    {errors.body && <span className="text-red-500">{errors.body.message}</span>}
                </div>

                <div className="flex Products-center justify-between gap-4 lg:gap-8 mt-6">
                    <button type="submit" className="w-full lg:w-1/2 mx-auto rounded-xl p-2 shadow-md font-bold uppercase hover:bg-sky-600 hover:text-white">
                        Add
                    </button>
                    <button
                        onClick={closeModal}
                        className="w-full text-center lg:w-1/2 mx-auto rounded-xl p-2 shadow-md font-bold uppercase hover:bg-sky-600 hover:text-white"
                    >
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CommentForm;
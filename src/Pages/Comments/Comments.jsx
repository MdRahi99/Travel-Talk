import { Zoom, toast } from "react-toastify";
import useComments from "../../Hooks/useComments";
import { FiDelete } from "@react-icons/all-files/fi/FiDelete";

const Comments = () => {

    const [comments, refetch, , deleteComment] = useComments();
    const handleDelete = async (id) => {
        try {
            await deleteComment(id);
            toast.success('Comment Deleted Successfully!', {
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
            refetch();
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    return (
        <>
            <div className="h-[82vh] shadow-2xl p-4 flex flex-col gap-8 w-full lg:w-4/6 overflow-y-auto">
                <h1 className="font-bold text-lg border-b-2 border-sky-400 pb-2">Users Comments</h1>
                {
                    comments.length > 0 ?
                        <div>
                            {
                                comments.map(comment => {
                                    return <div key={comment._id} className="shadow-lg border-b-2 border-sky-300 py-4 px-3 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <h1 className="font-bold text-sky-400">{comment.name.slice(0, 10)}...</h1>
                                            <p className="font-bold">{comment.body}</p>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(comment._id)}
                                            title="Delete"
                                            className="text-xl lg:text-2xl uppercase rounded-lg hover:text-orange-700 text-orange-500 font-bold" >
                                            <FiDelete />
                                        </button>
                                    </div>
                                })
                            }
                        </div>
                        :
                        <div>
                            <h1 className='text-2xl text-center p-2 bg-sky-400 text-white my-44 w-full mx-auto'>No Comments Added</h1>
                        </div>
                }
            </div>
        </>
    );
};

export default Comments;
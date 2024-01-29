/* eslint-disable react/prop-types */
import { Zoom, toast } from "react-toastify";
import CommentForm from "./CommentForm";
import axios from "axios";
import useComments from "../Hooks/useComments";

const CommentModal = ({ showModal, closeModal, blogId }) => {

    const [, refetch] = useComments();

    const onCommentSubmit = async (data) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/blogs/${blogId}/comments`, data);
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
            closeModal();
            return response.data;
        } catch (error) {
            console.error('Error adding new comment:', error);
            throw error;
        }
    };

    return (
        <>
            {
                showModal &&
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center">
                    <CommentForm
                        onCommentSubmit={onCommentSubmit}
                        closeModal={closeModal} />
                </div>
            }
        </>
    );
};

export default CommentModal;
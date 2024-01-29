import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const useComments = () => {

    const {blogId} = useParams();

    const { refetch, data: comments = [], loading } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            try {
                const res = await axios.get(`https://travel-talk-server.vercel.app/api/blogs/${blogId}/comments`);
                return res.data.data;
            } catch (error) {
                throw new Error('Failed to fetch comments');
            }
        }
    });

    const deleteComment = async (id) => {
        try {
            await axios.delete(`https://travel-talk-server.vercel.app/api/comments/${id}`);
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    return [ comments, refetch, loading, deleteComment ];
};

export default useComments;

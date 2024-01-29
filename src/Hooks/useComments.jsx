import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const useComments = () => {

    const {blogId} = useParams();

    const { refetch, data: comments = [], loading } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/blogs/${blogId}/comments`);
                return res.data.data;
            } catch (error) {
                throw new Error('Failed to fetch comments');
            }
        }
    });

    return [ comments, refetch, loading ];
};

export default useComments;

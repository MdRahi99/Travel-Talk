// useBlogs.js

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useBlogs = () => {
    const { refetch, data: blogs = [], loading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            try {
                const res = await axios.get('https://travel-talk-server.vercel.app/api/blogs');
                return res.data.data;
            } catch (error) {
                throw new Error('Failed to fetch blogs');
            }
        }
    });

    const deleteBlog = async (id) => {
        try {
            await axios.delete(`https://travel-talk-server.vercel.app/api/blogs/${id}`);
            refetch();
        } catch (error) {
            throw new Error('Failed to delete blog');
        }
    };

    return [ blogs, deleteBlog, refetch, loading ];
};

export default useBlogs;

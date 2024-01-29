// useBlog.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const useBlog = () => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const {blogId} = useParams();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/blogs/${blogId}`);
                setBlog(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog:', error);
                setLoading(false);
            }
        };

        fetchBlog();
    }, [blogId]);

    const addBlog = async (data) => {
        try {
            let userId = parseInt(localStorage.getItem('userId'), 10);
            if (!userId) {
                userId = generateUserId();
                localStorage.setItem('userId', userId);
            }
            await axios.post('http://localhost:5000/api/blogs', { ...data, userId });
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    const updateBlog = async (data) => {
        try {
            let userId = parseInt(localStorage.getItem('userId'), 10);
            await axios.put(`http://localhost:5000/api/blogs/${blogId}`, { ...data, userId });
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    const deleteBlog = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/blogs/${blogId}`);
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    const generateUserId = () => {
        return Math.floor(Math.random() * 9000) + 1000; 
    };

    return [ blog, addBlog, updateBlog, deleteBlog, loading ];
};

export default useBlog;

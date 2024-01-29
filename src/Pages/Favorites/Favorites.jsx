import BlogsList from '../../Components/BlogsList';
import useBlogs from '../../Hooks/useBlogs';

const Favorites = () => {
    const [blogs] = useBlogs();

    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const favoriteBlogs = blogs.filter(blog => storedFavorites.includes(blog._id));

    return (
        <div>
            <h1 className='text-xl border-b-2 border-sky-400 pb-2 font-bold'>Favorite Blogs</h1>
            {
                favoriteBlogs.length > 0 ?
                    <div className='mt-6 grid grid-cols-1 gap-8 items-center'>
                        {favoriteBlogs.map(blog => {
                            return <BlogsList key={blog._id}
                                blog={blog} />
                        })}
                    </div>
                    :
                    <div>
                        <h1 className='text-2xl text-center p-2 bg-sky-400 text-white my-44 w-full lg:w-1/3 mx-auto'>No Favorite Blogs Added</h1>
                    </div>
            }
        </div>
    );
};

export default Favorites;

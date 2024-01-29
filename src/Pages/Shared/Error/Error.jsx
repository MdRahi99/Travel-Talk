import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <h1 className="text-xl font-bold bg-sky-400 text-white py-12 px-4 mt-40 text-center w-2/3 mx-auto">404 Not Found</h1>
            <Link to='/' className="w-1/6 text-white text-xl font-bold mt-6 mx-auto p-2 bg-orange-600 flex items-center justify-center hover:bg-sky-400">Back</Link>
        </>
    );
};

export default Error;
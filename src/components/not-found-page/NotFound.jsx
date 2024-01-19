import { Link } from 'react-router-dom';
import { useRouteError } from "react-router-dom";

const NotFound = () => {

    const error = useRouteError();

    return (
        <div className='container mx-auto mt-8 p-8'>
            <div className="text-center">
                <img
                    src="/images/404_error_blog.png" // Placeholder image URL
                    alt="404 Image"
                    className="mx-auto -mb-40 rounded-xl"
                />
                <h1 className='text-2xl font-semibold'>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to="/" className="text-black-500 underline mt-4 block">
                    Go back to home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
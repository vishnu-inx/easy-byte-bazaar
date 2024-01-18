import { Link } from 'react-router-dom';
import { useRouteError } from "react-router-dom";

const NotFound = () => {

    const error = useRouteError();

    return (
        <div className='container'>
            <div className="text-center">
                <img
                    src="https://via.placeholder.com/800x400" // Placeholder image URL
                    alt="404 Image"
                    className="mx-auto mb-8"
                />
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to="/" className="text-blue-500 underline mt-4 block">
                    Go back to home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
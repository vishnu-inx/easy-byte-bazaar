import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonProduct() {
    return (
        <div className="relative bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105 transform duration-300 ease-in-out">
            <Skeleton height={160} />
            <p className="text-lg font-semibold mb-2 absolute top-8 right-8"><Skeleton width={40} /></p>
            <div className="mb-4">
                <p className="text-lg font-semibold mb-2"><Skeleton width={150} /></p>
                <div className="justify-between items-center flex-col">
                    <button className="text-blue-500 underline w-full mb-5"><Skeleton width={100} /></button>
                    <button className="bg-gray-200 w-full text-white px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300">
                        <Skeleton width={80} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SkeletonProduct;
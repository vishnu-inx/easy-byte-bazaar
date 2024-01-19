import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonProductDetail() {
    return (
        <div className="container mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image Column */}
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full h-64 mb-4 bg-gray-200 rounded-md shadow-md">
                        <Skeleton className="h-64" />
                    </div>
                    <h2 className="text-2xl font-semibold bg-gray-200 w-3/4 h-8 mb-2">
                        <Skeleton className="h-8" />
                    </h2>
                    <p className="text-lg font-semibold bg-gray-200 w-1/2 h-6 mt-2">
                        <Skeleton className="h-6" />
                    </p>
                </div>

                {/* Product Details Column */}
                <div className="text-left">
                    <p className="text-gray-600 mb-16 bg-gray-200 w-full h-12">
                        <Skeleton className="h-20" />
                    </p>

                    <div className="flex items-center mb-4 space-x-2 justify-end">
                        <button className="bg-gray-200 h-9 text-white px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300 w-20">
                            <Skeleton width={20} height={10} />
                        </button>
                        <span className="text-lg w-6 bg-gray-200 h-10">
                            <Skeleton width={6} height={10} />
                        </span>
                        <button className="bg-gray-200 h-10 text-white px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300 w-20">
                            <Skeleton width={20} height={10} />
                        </button>

                        <button className="bg-gray-200 h-10 text-white px-6 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300 w-full sm:w-full md:w-3/5">
                            <Skeleton width="100%" height={10} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonProductDetail;
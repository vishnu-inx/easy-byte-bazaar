import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonProductDetail() {
    return (
        <>
            <h2 className="text-3xl font-semibold mt-8 mb-6 text-center">
                <Skeleton width={200} />
            </h2>

            <div className="container mx-auto my-8 p-4 max-w-3xl flex flex-col items-center justify-center">

                {/* Product Name Skeleton */}


                {/* Product Image Skeleton */}
                <Skeleton width={384} height={256} style={{ marginBottom: '1rem' }} />

                {/* Product Price Skeleton */}
                <p className="text-xl font-semibold text-black-500 mb-2">
                    <Skeleton width={100} />
                </p>

                {/* Product Details Skeleton */}
                <p className="text-gray-700 w-96 max-[420px]:w-full mb-4">
                    <Skeleton count={3} />
                </p>

                {/* Buy Button Skeleton */}
                <button className="bg-gray-200 w-96 max-[420px]:w-full text-white px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300">
                    <Skeleton width={100} />
                </button>

            </div>
        </>
    )
}

export default SkeletonProductDetail;
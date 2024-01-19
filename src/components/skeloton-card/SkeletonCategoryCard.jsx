import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonCategoryCard() {
    return (
        <div className="relative bg-white p-6 rounded-lg shadow-md overflow-hidden cursor-pointer">
            <Skeleton height={160} className="w-full h-40 object-cover mb-4 rounded-md shadow-md" />
            <div className="absolute bottom-0 left-0 right-0 top-44 p-4 text-black">
                <h2 className="text-xl font-semibold">
                    <Skeleton width={100} />
                </h2>
            </div>
        </div>
    )
}

export default SkeletonCategoryCard;
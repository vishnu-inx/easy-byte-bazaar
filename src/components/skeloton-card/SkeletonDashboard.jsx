import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonDashboard() {
    return (
        <div className="bg-white p-4 shadow-md rounded-md cursor-pointer">
            <Skeleton height={160} style={{ marginBottom: '8px' }} />
            <Skeleton height={20} width={120} style={{ marginBottom: '4px' }} />
            <Skeleton height={18} width={80} />
        </div>
    )
}

export default SkeletonDashboard;
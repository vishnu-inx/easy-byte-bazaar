import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonDashboard } from "../../components/skeloton-card";
import { fetchProductByLimit } from "../../shared/service";

function Dashboard() {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const productList = await fetchProductByLimit(4);
                setProducts(productList);
                setIsLoading(false);

            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleImageError = (event) => {
        // Set a default image source when an image error occurs
        event.target.src = '/images/placeholder.jpg';
    };

    return (
        <div className="mt-4">
            {/* Top Banner */}
            <div className="p-4 text-black text-center">
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <p className="text-sm mb-4">Welcome</p>
                {isLoading ? (
                    <Skeleton height={384} style={{ marginBottom: '16px' }} />
                ) : (
                    <img
                        src="/images/banner-image.png"
                        alt="Dashboard Banner"
                        className="w-full h-96 object-cover mb-4 rounded-md"
                    />
                )}
            </div>

            {/* Product Grid */}
            <div className="container mx-auto my-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {isLoading
                        ? // Render skeleton when loading
                        Array.from({ length: 4 }).map((_, index) => <SkeletonDashboard key={index} />)
                        : // Render actual product data when not loading
                        products.map((product) => (
                            <Link key={product.id} to={`product/${product.id}`}>
                                <div className="bg-white p-4 shadow-md rounded-md cursor-pointer">
                                    <img
                                        src={product.image || '/images/placeholder.jpg'}
                                        alt={product.title}
                                        className="w-full h-40 object-contain mb-2 rounded-md"
                                        onError={handleImageError}
                                    />
                                    <p className="text-lg font-semibold mb-2">{product.title.slice(0, 12) + '...'}</p>
                                    <p className="text-gray-500">${product.price}</p>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
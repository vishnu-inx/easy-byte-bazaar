import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useParams } from "react-router-dom";
import { fetchProduct } from '../../shared/service/product-service';

function ProductDetail() {

    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const product = await fetchProduct(id);
                setProduct(product);
                setIsLoading(false);
                console.log("product ...", product);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleAdd = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleRemove = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleBuy = () => {
        // Add your buy logic here (e.g., redirect to a checkout page)
        alert(`Buying ${quantity} ${quantity === 1 ? 'product' : 'products'}`);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonProductDetail />
            ) : (
                <div className="container mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Product Image Column */}
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src={product.image ? 'https://via.placeholder.com/150' : 'https://via.placeholder.com/150'}
                                alt="Product title"
                                className="w-full h-64 object-cover mb-4 rounded-md shadow-md"
                            />
                            <h2 className="text-2xl font-semibold">{product.title}</h2>
                            <p className="text-lg font-semibold mt-2">Price: {product.price}</p>
                        </div>

                        {/* Product Details Column */}
                        <div className="text-left">
                            <p className="text-gray-600 mb-4">{product.description}</p>

                            <div className="flex items-center mb-4 space-x-2 justify-end">
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 w-20"
                                    onClick={handleRemove}
                                >
                                    -
                                </button>
                                <span className="text-lg">{quantity}</span>
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 w-20"
                                    onClick={handleAdd}
                                >
                                    +
                                </button>

                                <button
                                    className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 w-full sm:w-full md:w-3/5"
                                    onClick={handleBuy}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default ProductDetail;

const SkeletonProductDetail = () => {
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
                    <p className="text-gray-600 mb-4 bg-gray-200 w-full h-12">
                        <Skeleton className="h-12" />
                    </p>

                    <div className="flex items-center mb-4 space-x-2 justify-end">
                        <button className="bg-blue-500 h-9 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 w-20">
                            <Skeleton width={20} height={9} />
                        </button>
                        <span className="text-lg w-6 bg-gray-200 h-9">
                            <Skeleton width={6} height={9} />
                        </span>
                        <button className="bg-blue-500 h-9 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 w-20">
                            <Skeleton width={20} height={9} />
                        </button>

                        <button className="bg-green-500 h-9 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 w-full sm:w-full md:w-3/5">
                            <Skeleton width="100%" height={9} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

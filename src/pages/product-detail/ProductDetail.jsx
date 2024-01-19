import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { fetchProduct } from '../../shared/service/product-service';
import { SkeletonProductDetail } from '../../components/skeloton-card';

function ProductDetail() {

    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const product = await fetchProduct(id);
                setProduct(product);
                setIsLoading(false);
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

    const handleImageError = (event) => {
        // Set a default image source when an image error occurs
        event.target.src = '/images/placeholder.jpg';
    };

    return (
        <>
            <h2 className="text-3xl font-semibold mt-8 mb-6 text-center capitalize">{product.category ? product.category : ''} Product</h2>
            {isLoading ? (
                <SkeletonProductDetail />
            ) : (
                <div className="container mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Product Image Column */}
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src={product.image || '/images/placeholder.jpg'}
                                alt="Product title"
                                className="w-full h-64 object-contain mb-4 rounded-md shadow-md"
                                onError={handleImageError}
                            />
                            <h2 className="text-2xl font-semibold">{product.title}</h2>
                            <p className="text-lg font-semibold mt-2">Price: {product.price}</p>
                        </div>

                        {/* Product Details Column */}
                        <div className="text-left">
                            <p className="text-gray-600 mb-16">{product.description}</p>

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

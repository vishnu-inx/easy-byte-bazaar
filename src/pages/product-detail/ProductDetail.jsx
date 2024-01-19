import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { fetchProductById } from '../../shared/service/product-service';
import { SkeletonProductDetail } from '../../components/skeloton-card';

function ProductDetail() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const product = await fetchProductById(id);
                setProduct(product);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleBuy = () => {
        // Add your buy logic here (e.g., redirect to a checkout page)
        alert(`Buying product`);
    };

    const handleImageError = (event) => {
        // Set a default image source when an image error occurs
        event.target.src = '/images/placeholder.jpg';
    };

    return (
        <>
            {isLoading ? (
                <SkeletonProductDetail />
            ) : (
                <>
                    <h2 className="text-3xl font-semibold mt-8 mb-6 text-center">{product.title}</h2>
                    <div className="container mx-auto my-8 p-4 max-w-3xl flex flex-col items-center justify-center">
                        {/* Product Image */}
                        <img
                            src={product.image || '/images/placeholder.jpg'} // Replace with actual image source
                            alt="Product Image"
                            className="w-96 h-64 object-fill mb-4 rounded-md shadow-md"
                            onError={handleImageError}
                        />

                        {/* Product Price */}
                        <p className="text-xl font-semibold text-black-500 mb-2">$ {product.price}</p>

                        {/* Product Details */}
                        <p className="text-gray-700 w-96 max-[420px]:w-full mb-4">
                            {product.description}
                        </p>

                        {/* Buy Button */}
                        <button onClick={handleBuy} className="bg-blue-500 w-96 max-[420px]:w-full text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
                            Buy Now
                        </button>

                    </div>
                </>
            )}
        </>
    )
}

export default ProductDetail;

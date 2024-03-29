import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchProducts, fetchProductByCategory } from '../../shared/service';
import { SkeletonProduct } from '../../components/skeloton-card';

const Products = () => {

    const { category } = useParams(null);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                if (category) {
                    const productList = await fetchProductByCategory(category);
                    setProducts(productList);
                    setIsLoading(false);
                } else {
                    const productList = await fetchProducts();
                    setProducts(productList);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [category]);


    const handleImageError = (event) => {
        // Set a default image source when an image error occurs
        event.target.src = '/images/placeholder.jpg';
    };

    return (
        <div className="container mx-auto m-8">
            <h2 className="text-3xl font-semibold mb-6 text-center capitalize">
                {category ? category : 'Featured'} Products
            </h2>

            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, index) => (
                        <SkeletonProduct key={index} />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products && products.map((product) => (
                        <div key={product.id} className="relative bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105 transform duration-300 ease-in-out">
                            <img
                                src={product.image || '/images/placeholder.jpg'}
                                alt={product.title}
                                className="w-full h-40 object-contain mb-4 rounded-md shadow-md"
                                onError={handleImageError}
                            />
                            <p className="text-sm font-semibold mb-2 absolute top-2 right-2 p-2 bg-gray-500 text-white rounded-full">${product.price}</p>
                            <div className="mb-4">
                                <p className="text-lg font-semibold mb-2 cursor-pointer" title={product.title}>{product.title.slice(0, 15) + '...'}</p>
                                <div className="justify-between items-center flex-col">
                                    <Link to={`/product/${product.id}`}><button className="text-blue-500 underline w-full mb-5">View More</button></Link>
                                    <button className="bg-green-500 w-full text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
};

export default Products;
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { fetchProducts } from '../../shared/service/index';
import { Link } from 'react-router-dom';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const productList = await fetchProducts();
                setProducts(productList);
                setIsLoading(false);
                // console.log("products ...", productList);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);




    return (
        <div className="container mx-auto m-8">
            <h2 className="text-3xl font-semibold mb-6 text-center">Featured Products</h2>

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
                                src={product.image ? 'https://via.placeholder.com/150' : 'https://via.placeholder.com/150'}
                                alt={product.title}
                                className="w-full h-40 object-cover mb-4 rounded-md shadow-md"
                            />
                            <p className="text-lg font-semibold mb-2 absolute top-8 right-8">${product.price}</p>
                            <div className="mb-4">
                                <p className="text-lg font-semibold mb-2">{product.title.slice(0, 20) + '...'}</p>
                                <div className="justify-between items-center flex-col">
                                    <Link to={`/product/${product.id}`}><button className="text-blue-500 underline w-full mb-5">View More</button></Link>
                                    <button className="bg-green-500 w-full text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
                                        Add to Cart
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

const SkeletonProduct = () => (
    <div className="relative bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105 transform duration-300 ease-in-out">
        <Skeleton height={160} />
        <p className="text-lg font-semibold mb-2 absolute top-8 right-8"><Skeleton width={40} /></p>
        <div className="mb-4">
            <p className="text-lg font-semibold mb-2"><Skeleton width={150} /></p>
            <div className="justify-between items-center flex-col">
                <button className="text-blue-500 underline w-full mb-5"><Skeleton width={100} /></button>
                <button className="bg-green-500 w-full text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
                    <Skeleton width={80} />
                </button>
            </div>
        </div>
    </div>
);
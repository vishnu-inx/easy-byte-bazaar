import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { fetchCategories } from '../../shared/service/product-service';

function Category() {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                let categoryList = await fetchCategories();

                categoryList = await categoryList.map(category => {
                    let image = '';
                    let title = '';

                    switch (category) {
                        case 'electronics':
                            title = category;
                            image = 'electronics.jpeg';
                            break;
                        case 'jewelery':
                            title = category;
                            image = 'jewellery.jpeg';
                            break;
                        case "men's clothing":
                            title = category;
                            image = "man's-clothe.jpeg";
                            break;
                        case "women's clothing":
                            title = category;
                            image = "womens-clothe.jpeg";
                            break;
                        default:
                            image = "placeholder.jpg";
                            break;
                    }
                    return { title, image };
                });

                setCategories(categoryList);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-28">
            {isLoading ? (
                <>
                    {[...Array(4)].map((_, index) => (
                        <SkeletonCategoryCard key={index} />
                    ))}
                </>
            ) : (
                <>
                    {categories && categories.map((category) => (
                        <CategoryCard key={category.title} category={category} />
                    ))}
                </>
            )}
        </div>
    );
}

export default Category;

const CategoryCard = ({ category }) => {
    return (
        <div className="relative bg-white p-6 rounded-lg shadow-md overflow-hidden cursor-pointer">
            <img
                src={`/images/${category.image}`}
                alt={category.title}
                className="w-full h-40 object-cover mb-4 rounded-md shadow-md"
            />
            <div className="absolute bottom-0 left-0 right-0 top-44 p-4 text-black">
                <h2 className="text-xl font-semibold">{category.title}</h2>
            </div>
        </div>
    );
};

const SkeletonCategoryCard = () => {
    return (
        <div className="relative bg-white p-6 rounded-lg shadow-md overflow-hidden cursor-pointer">
            <Skeleton height={160} className="w-full h-40 object-cover mb-4 rounded-md shadow-md" />
            <div className="absolute bottom-0 left-0 right-0 top-44 p-4 text-black">
                <h2 className="text-xl font-semibold">
                    <Skeleton width={100} />
                </h2>
            </div>
        </div>
    );
};
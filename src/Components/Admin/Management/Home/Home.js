import { useNavigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Home() {
    const navigate = useNavigate();
    function handleSales() {
        navigate(`/admin/sales`);
    };
    function handleCategories() {
        navigate(`/admin/category`);
    };
    function handleCatalogues() {
    }
    function handleHome() {
        navigate(`/admin`);
    }
    return (
        <>
            <Navigation handleHome={handleHome}
                handleCatalogues={handleCatalogues}
                handleCategories={handleCategories}
                handleSales={handleSales} />
            <h1>Welcome To Admin Management</h1>
        </>
    );
}

export default Home;

import { faAddressBook, faHome, faListAlt, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
const Navigation = (props) => {
    const navigate = useNavigate();
    return (
        <div className='sidebar'>
            <div onClick={() => navigate(`/admin`)}><FontAwesomeIcon icon={faHome} /> Home</div>
            <div onClick={() => navigate(`/admin/sales`)}><FontAwesomeIcon icon={faSackDollar} /> Instore Sales</div>
            <div onClick={() => navigate(`/admin/category`)}><FontAwesomeIcon icon={faListAlt} /> Categories</div>
            <div onClick={() => navigate(`/admin/salesdata`)}><FontAwesomeIcon icon={faAddressBook} /> Sales Data</div>
        </div>
    )
}
export default Navigation;
import { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import './ProductsInventory.css';
import { useNavigate, useParams } from 'react-router-dom';
import { CatelogueContext } from '../../../Context/CatelogueContext/CatelogueContext';
import { getProductsByCategory } from '../../../server/catalogue-api';
import { deleteProductById } from '../../../server/admin-api';
import Navigation from '../Management/Navigation/Navigation';

const ProductsInventory = () => {
    const navigate = useNavigate();
    const { id } = useParams('id');
    const { state, setState } = useContext(CatelogueContext);
    const [page, setPage] = useState({ fetchpage: true });
    useEffect(() => {
        if (id) {
            getProductsByCategory(id)
                .then(products => setState((state) => ({
                    ...state,
                    products,
                    categoryId: id
                })), setPage({ fetchpage: false }))
        }
    }, [setState, id, page.fetchpage])

    const AddProductForm = () => {
        navigate(`/admin/category/${id}/add-product`)
    }
    const updateProductForm = (productid) => {
        navigate(`/admin/category/${id}/update-product/${productid}`)
    }
    const handleDeleteProduct = (id) => {
        deleteProductById(id).then(res => (setPage((...state) => ({ ...state, fetchpage: true }))));
    }
    return (
        <>
            <Navigation />
            <div className="mt-3 container-fluid">
                <div className='row'>
                    <div className="col-2"></div>
                    <div className='col-4'>
                        <h1>List of all Products</h1>
                    </div>
                    <div className='col-4 d-flex justify-content-end'>
                        <Button variant="outline-success" onClick={AddProductForm}>Add new Products</Button>
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th colSpan={3}>Product Name</th>
                                    <th>Quantity in Stock</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.products.map(p => (
                                    <tr key={p['_id']}>
                                        <td colSpan={3}>{p.name}</td>
                                        <td>{p.quantity === 0 ? 'Out of Stock' : p.quantity}</td>
                                        <td>
                                            <Button variant="primary" onClick={() => { updateProductForm(`${p._id}`) }}>Update</Button>
                                            <Button variant="danger" className="ms-3" onClick={() => handleDeleteProduct(p['_id'])}>Delete</Button>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div >
        </>
    )
}

export default ProductsInventory;
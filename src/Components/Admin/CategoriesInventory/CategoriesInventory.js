import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import "./CategoriesInventory.css";
import { Link } from "react-router-dom";
import { CatelogueContext } from "../../../Context/CatelogueContext/CatelogueContext";
import { getCategories } from "../../../server/catalogue-api";
import { deleteCategoryById } from "../../../server/admin-api";
import Navigation from "../Management/Navigation/Navigation";
import "../Styles/ManagementPagesStyles.css";

const CategoriesInventory = () => {
  const navigate = useNavigate();
  const { state, setState } = useContext(CatelogueContext);
  const [page, setPage] = useState({ fetchpage: true });
  useEffect(() => {
    getCategories().then(
      (categories) =>
        setState((state) => ({ ...state, categories, products: [] })),
      setPage({ fetchpage: false })
    );
  }, [setState, page.fetchpage]);
  const AddCategoryForm = (e) => {
    navigate("/admin/category/add");
  };
  const UpdateCategoryForm = (id) => {
    navigate(`/admin/category/update/${id}`);
  };
  const handleDeleteCategory = (id) => {
    deleteCategoryById(id).then((res) =>
      setPage((...state) => ({ ...state, fetchpage: true }))
    );
  };

  return (
    <>
      <Navigation />
      <div className="category-inventory-container">
        <div className="mt-3 container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-5">
              <h1>List of all Categories</h1>
            </div>
            <div className="col-5 d-flex justify-content-end">
              <Button variant="outline-success" onClick={AddCategoryForm}>
                Add new Category
              </Button>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <Table responsive>
                <thead>
                  <tr>
                    <th colSpan={3}>Category Name</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {state.categories.map((c) => (
                    <tr key={c["_id"]}>
                      <td colSpan={3}>
                        <Link
                          to={"/admin/category/" + c["_id"]}
                          className="no-highlight"
                        >
                          {c.name}
                        </Link>
                      </td>
                      <td>{c.description}</td>
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => UpdateCategoryForm(c["_id"])}
                        >
                          Update
                        </Button>
                        <Button
                          variant="danger"
                          className="ms-3"
                          onClick={() => handleDeleteCategory(c["_id"])}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesInventory;

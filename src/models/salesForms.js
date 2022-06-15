import sales from "../pages/SalesManagement/SalesManagement"
const Schema = mongoose.Schema;
let salesForms = [
    {
        FirstName : sales.FirstName,
        LastName : sales.LastName,
        Email : sales.Email,
        Phone : sales.Phone,
        Address : 
            {
                Street : sales.Street,
                Suite : sales.Suite,
                Postal : sales.Postal,
                Province : sales.Province
            },
        Item_Purchased : sales.Item_Purchased,
        Item_Number : sales.Item_Number,
        Payment_Type : sales.Payment_Type
    }
];

module.exports = salesForms;
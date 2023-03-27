
const AddProduct = ({setIsOpen}) => {
  return (
    <div>
        <button onClick={()=> setIsOpen(true)}>Add New Product</button>
    </div>
  )
}

export default AddProduct
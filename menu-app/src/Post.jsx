
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Post() {
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        price: "",
        image: null,
      });

      const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        const inputValue = type === "file" ? files[0] : value;
    
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: inputValue,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append("name", formData.name);
        form.append("category", formData.category);
        form.append("price", formData.price);
        form.append("image", formData.image);
      
        fetch("http://localhost:8000/api/menus", { // Make sure this URL matches the Laravel route
          method: "POST",
          mode:"cors",
          body: form,

        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok.");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Data sent to API:", data);
            // Redirect to /admin after successful submission
            // You can use the react-router-dom's useHistory hook for this
            navigate('/admin')
          })
          .catch((error) => {
            console.error("Error sending data to API:", error);
            // Handle the error here and show an appropriate error message to the user
          });
      };
      


  return (
    <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
      <div className="w-full px-16 py-20 mt-6 overflow-hidden bg-white rounded-lg lg:max-w-4xl">
        <div className="mb-4">
          <h1 className="text-3xl font-bold">Tambah Menu</h1>
        </div>

        <div className="w-full px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div>
              <label className="block text-sm font-bold text-gray-700 text-start" htmlFor="name">
                Nama Menu
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-bold text-gray-700 text-start" htmlFor="category">
                Choose Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>
                  Choose a category
                </option>
                <option value="minuman">Minuman</option>
                <option value="origin">Origin</option>
                <option value="bakaran">Bakaran</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-bold text-gray-700 text-start" htmlFor="price">
                Harga
              </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-bold text-gray-700 text-start" htmlFor="image">
                Upload file
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-2"
                aria-describedby="file_input_help"
              />
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                JPEG, PNG, JPG (MAX. 800x400px).
              </p>
            </div>

            <div className="flex items-center justify-start mt-4 gap-x-2">
              <button
                type="submit"
                className="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
              >
                Save
              </button>
              <Link to="/admin">
                <button
                  type="button"
                  className="px-6 py-2 text-sm font-semibold text-gray-100 bg-gray-400 rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Post
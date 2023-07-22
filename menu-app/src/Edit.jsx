import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function Edit() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [menuData, setMenuData] = useState({
    name: "",
    category: "",
    price: "",
    image: null,
  });

  useEffect(() => {
    fetch(`http://localhost:8000/api/menus/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMenuData(data); 
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMenuData((prevMenuData) => ({
      ...prevMenuData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setMenuData((prevMenuData) => ({
      ...prevMenuData,
      image: file,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", menuData.name);
    formData.append("category", menuData.category);
    formData.append("price", menuData.price);
    if (menuData.image) {
      formData.append("image", menuData.image);
    }

    fetch(`http://localhost:8000/api/menus/${id}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        
        console.log("Edit success:", data);
        navigate('/admin');
      })
      .catch((error) => {
        console.error("Edit error:", error);
      });
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
      <div className="w-full px-16 py-20 mt-6 overflow-hidden bg-white rounded-lg lg:max-w-4xl">
        <div className="mb-4">
          <h1 className="text-3xl font-bold">Edit Menu</h1>
        </div>

        <div className="w-full px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-sm font-bold text-gray-700 text-start"
                htmlFor="name"
              >
                Nama Menu
              </label>

              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="text"
                name="name"
                value={menuData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="category"
                className="block text-sm font-bold text-gray-700 text-start"
              >
                Choose Category
              </label>
              <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="category"
                value={menuData.category}
                onChange={handleChange}
              >
                <option value="minuman">Minuman</option>
                <option value="origin">Origin</option>
                <option value="bakaran">Bakaran</option>
              </select>
            </div>

            <div className="mt-4">
              <label
                className="block text-sm font-bold text-gray-700 text-start"
                htmlFor="price"
              >
                Harga
              </label>

              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="text"
                name="price"
                value={menuData.price}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label
                className="block text-sm font-bold text-gray-700 text-start"
                htmlFor="file_input"
              >
                Upload file
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-2"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                onChange={handleFileChange}
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

export default Edit;

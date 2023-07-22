import Soto from '../public/soto.jpeg';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react"
import axios from 'axios';

function Admin() {

    const [menus, setMenus] = useState([])

    const fetchMenusData = () => {
        fetch("http://localhost:8000/api/menus")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setMenus(data)
        })
    }

    useEffect(() => {
        fetchMenusData()
    }, [])

    const deletePost = async (id) => {

      //sending
      await axios.delete(`http://localhost:8000/api/menus/${id}`);
  
      //panggil function "fetchData"
      fetchMenusData();
  }


  return (
    <div>
        <div className="container max-w-7xl mx-auto mt-8">
    <div className="mb-4">
      <h1 className="text-3xl font-bold"> Daftar Menu</h1>
      <div className="flex justify-end">
        <Link to="/admin/post"><button className="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600">Create Post</button></Link>
        
      </div>
    </div>
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th
                  className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  No</th>
                <th
                  className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Nama</th>
                <th
                  className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Category</th>
                  <th
                  className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Image</th>
                <th
                  className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Price</th>
                <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50" colSpan="3">
                  Action</th>
              </tr>
            </thead>
  
            <tbody className="bg-white">
              {/* here mapping */}
              {menus.map((menu, index) => (
                <tr key={index}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex text-left">
                    {index + 1}
                  </div>
  
                </td>
  
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900 text-left">
                    {menu.name}
                  </div>
                </td>
  
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-left">
                  {menu.category}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <img className="w-20" src={`http://localhost:8000/${menu.image}`} alt="" />
                  </td>
  
                <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200 text-left">
                  <span>{menu.price}</span>
                </td>
  
                <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                  <Link to={`/admin/edit/${menu.id}`} className="text-indigo-600 hover:text-indigo-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </Link>

                </td>
                <td className="text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200 ">
                  <Link to="/admin"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600 hover:text-red-800 mr-4"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => deletePost(menu.id)}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg></Link>
  
                </td>
              </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default Admin
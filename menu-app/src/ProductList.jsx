import React from 'react';
import Soto from '../public/soto.jpeg';
import body from '../public/body.svg';
import myBody from '../public/myBody.svg';
import charge from '../public/charge.svg';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"

const ProductList = () => {
    const imageUrl = 'https://fakeimg.pl/112x102?text=Mi&font=noto';
    const [menus, setMenus] = useState([])
    const [selectedItems, setSelectedItems] = useState({});
    const [showModal, setShowModal] = useState(false);

    const minumanMenus = menus.filter((menu) => menu.category === "minuman");
    const originMenus = menus.filter((menu) => menu.category === "origin");
    const bakaranMenus = menus.filter((menu) => menu.category === "bakaran");

    const fetchMenusData = () => {
        fetch("http://localhost:8000/api/menus")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setMenus(data)
            console.log(data);
        })
    }

    useEffect(() => {
        fetchMenusData()
    }, [])

    const addToInvoice = (menuId) => {
        setSelectedItems((prevSelectedItems) => {
            const currentQuantity = prevSelectedItems[menuId] || 0;
            return {
                ...prevSelectedItems,
                [menuId]: currentQuantity + 1,
            };
        });
    };

    const renderInvoice = () => {
        let subtotal = 0;
        Object.keys(selectedItems).forEach((menuId) => {
          const quantity = selectedItems[menuId];
          const menu = menus.find((menu) => menu.id === parseInt(menuId));
          if (menu) {
            subtotal += menu.price * quantity;
          }
        });
    
        const total = subtotal; 
    
        return {
          subtotal,
          total,
        };
      };
    
      const { subtotal, total } = renderInvoice();
    
    const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const ModalWithSelectedItems = ({ showModal, toggleModal }) => {
    if (!showModal) {
      return null;
    }

    return (
      <div
        id="popup-modal"
        tabIndex="-1"
        className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Berhasil tersimpan</h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Yes, I'm sure
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  
  const ModalWithoutSelectedItems = ({ showModal, toggleModal }) => {
    if (!showModal) {
      return null;
    }

    return (
      <div
        id="popup-modal"
        tabIndex="-1"
        className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal"
            onClick={() => toggleModal()}
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Data Kamu Berhasil Tersimpan</h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                onClick={() => {
                    toggleModal();
                    window.location.reload(); 
                  }}
                
                >
                Yes, I'm Sure
                </button>

            </div>
          </div>
        </div>
      </div>
    );
  };

  function printInvoice()
  {
    window.print()
  }
    
  return (
    <div className="container mx-auto my-28 p-6 bg-gray-200">
      <div className="grid grid-cols-2">
        <div className="product-list -mt-4 non-print">
          <div className="grid grid-cols-4 mb-2">
            {minumanMenus.map((menu) => (
                <div key={menu.id} className="card flex flex-col w-34 cursor-pointer" onClick={() => addToInvoice(menu.id)}>
                    <img src={`http://localhost:8000/${menu.image}`} className="card-img-top w-full" alt="Product 1" />
                    <div className="card-body flex-grow flex items-center">
                        <h5 className="card-title truncate bg-white text-center text-sm w-full">{menu.name}</h5>
                    </div>
                </div>
            ))}
            
                <div className="card flex flex-col w-34 cursor-pointer">
                    <img src={imageUrl} className="card-img-top w-full" alt="Product 1" />
                    <div className="card-body flex-grow flex items-center">
                        <h5 className="card-title truncate bg-white text-center text-sm w-full">Minuman</h5>
                    </div>
                </div>
          </div>

          <div className="grid grid-cols-4 mb-2">
          {originMenus.map((menu) => (
                <div key={menu.id} className="card flex flex-col w-34 cursor-pointer" onClick={() => addToInvoice(menu.id)}>
                    <img src={`http://localhost:8000/${menu.image}`} className="card-img-top w-full" alt="Product 1" />
                    <div className="card-body flex-grow flex items-center">
                        <h5 className="card-title truncate bg-white text-center text-sm w-full">{menu.name}</h5>
                    </div>
                </div>
            ))}
               
                <div className="card flex flex-col w-34 cursor-pointer">
                    <img src={imageUrl} className="card-img-top w-full" alt="Product 1" />
                    <div className="card-body flex-grow flex items-center">
                        <h5 className="card-title truncate bg-white text-center text-sm w-full">Origin</h5>
                    </div>
                </div>
          </div>

          <div className="grid grid-cols-4 mb-2">
          {bakaranMenus.map((menu) => (
                <div key={menu.id} className="card flex flex-col w-34 cursor-pointer" onClick={() => addToInvoice(menu.id)}>
                    <img src={`http://localhost:8000/${menu.image}`} className="card-img-top w-full" alt="Product 1" />
                    <div className="card-body flex-grow flex items-center">
                        <h5 className="card-title truncate bg-white text-center text-sm w-full">{menu.name}</h5>
                    </div>
                </div>
            ))}
                
                <div className="card flex flex-col w-34 cursor-pointer">
                    <img src={imageUrl} className="card-img-top w-full" alt="Product 1" />
                    <div className="card-body flex-grow flex items-center">
                        <h5 className="card-title truncate bg-white text-center text-sm w-full">Bakaran</h5>
                    </div>
                </div>
          </div>
        </div>

        {/* Bagian Invoice */}
        <div className="invoice">
        <div className="title">

        </div>
        <div className="invoice-body">
            <div className="flex justify-between">
                <div className="w-14 h-14 bg-sky-500 rounded-lg flex justify-center items-center w-12 h-12">
                    <img className='w-8' src={body} alt="body" />
                </div>
                <div className="text-2xl font-bold">New Customer</div>
                <div className="w-14 h-14 bg-sky-500 rounded-lg flex justify-center items-center w-12 h-12">
                    <img className='w-8' src={myBody} alt="myBody" />
                </div>
            </div>
            <div className="card-invoice bg-white">
                <div className="rounded overflow-hidden shadow-lg grid grid-cols-1 divide-y">
                    <div className="card-title mt-6 text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="text-center">Dine in</span>
                        <svg
                            className="w-3 h-auto text-gray-500"
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 14 8"
                            style={{ marginLeft: '10px' }}
                        >
                            <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                            />
                        </svg>
                    </div>
                    
                    
                    <div className="px-6 py-4 text-end">
                  <Link className="text-xs text-blue-800 hover:underline decoration-1 non-print" to="/admin">View Table</Link>
                  <div className="p-0 text-start">
                    <div className="flex flex-col mx-0 mt-8">
                     <table className="min-w-full divide-y divide-gray-200">
                        <tbody>
                        {Object.keys(selectedItems).map((menuId) => {
                            const quantity = selectedItems[menuId];
                            const menu = menus.find((menu) => menu.id === parseInt(menuId));
                            console.log(menu)
                            if (!menu) {
                                console.warn(`Menu with id ${menuId} not found.`);
                                return null;
                            }
                        
                            const totalPrice = menu.price * quantity;
                        

                            return (
                                <tr key={menuId}>
                                    <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                                        <div className="name font-medium text-slate-700">
                                            {menu.name}
                                        </div>
                                    </td>
                                    <td className="quantity hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                        x{quantity}
                                    </td>
                                    <td className="price hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                        Rp{menu.price.toFixed(2)}
                                    </td>
                                    <td className="total-price py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                                        Rp{totalPrice.toFixed(2)}
                                    </td>
                                </tr>
                            );
                        })}


                        </tbody>
                
                        <tfoot>
                        <tr>
                            <th scope="row" colSpan="3" className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
                            Subtotal
                            </th>
                            <th scope="row" className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
                            Subtotal
                            </th>
                            <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                            Rp{subtotal.toFixed(2)}
                            </td>
                        </tr>
                        
                        <tr>
                        
                        </tr>
                        <tr>
                            <th scope="row" colSpan="3" className="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0">
                            Total
                            </th>
                            <th scope="row" className="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden">
                            Total
                            </th>
                            <td className="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                            Rp{total.toFixed(2)}
                            </td>
                        </tr>
                        </tfoot>
                        </table>
                        </div>
                    </div>
                    </div>
                    
                    <div className="px-6 pt-4 pb-2 text-center font-light non-print">
                    Clear Sale
                    </div>
                    <div className="px-6 py-6 text-center">
                    </div>
                    <div className="grid grid-cols-2 text-xl non-print">
                        <button
                            className="save mr-1 rounded-none bg-blue-200 p-4 font-semibold"
                            onClick={() => {
                                if (Object.keys(selectedItems).length > 0) {
                                toggleModal();
                                } else {
                                console.log("No items selected.");
                                }
                            }}
                            >
                            Save Bill
                            </button>
                        <button className="rounded-none bg-blue-200 p-4 font-semibold"
                        onClick={printInvoice}
                        >Print Bill</button>
                    </div>
                </div>
                <div className="fw-bold text-lg non-print">
                    <button className="bg-blue-800 hover:bg-grey text-white font-bold py-4 px-4 rounded inline-flex items-center w-full text-2xl">
                        <img className='w-6' src={charge} alt="charge" />
                        <span className="flex-1 text-center">Charge Rp. 104.000</span>
                    </button>
                </div>  
            </div>
        </div>
        </div>
      </div>
      <ModalWithSelectedItems showModal={showModal} toggleModal={toggleModal} />
      <ModalWithoutSelectedItems showModal={showModal} toggleModal={toggleModal} />

    </div>
  );
};

export default ProductList;

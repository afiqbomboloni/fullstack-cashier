import React from 'react';

const Invoice = () => {
  return (
    <div className="invoice">
      {/* Add the code for the invoice here */}
            <div className="title">

            </div>
            <div className="invoice-body">
                <div className="flex justify-between">
                    <div className="w-14 h-14 bg-sky-500 rounded-lg flex justify-center items-center w-12 h-12">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                        </svg>
                    </div>
                    <div className="text-2xl font-bold">New Customer</div>
                    <div className="w-14 h-14 bg-sky-500 rounded-lg flex justify-center items-center w-12 h-12">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"/>
                        </svg>
                    </div>
                  </div>
                <div className="card-invoice bg-white">
                    <div className="rounded overflow-hidden shadow-lg grid grid-cols-1 divide-y">
                        <div className="card-title mt-6 text-center" style="display: flex; align-items: center; justify-content: center;">
                            <span className="text-center">Dine in</span>
                            <svg className="w-3 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8" style="margin-left: 10px;">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                            </svg>
                        </div>
                        
                        
                        <div className="px-6 py-4 text-end">
                          <a className="text-xs text-blue-800 hover:underline decoration-1" href="#">View Table</a>
                          <div className="p-0 text-start">
                            <div className="flex flex-col mx-0 mt-8">
                             <table className="min-w-full divide-y divide-gray-200">
                              <tbody>
                               <tr>
                                <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                                 <div className="font-medium text-slate-700">Tesla Truck</div>
                                 <div className="mt-0.5 text-slate-500 sm:hidden">
                                  1 unit at $0.00
                                 </div>
                                </td>
                                <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                 48
                                </td>
                                <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                 $0.00
                                </td>
                                <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                                 $0.00
                                </td>
                               </tr>
                               <tr>
                                <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                                 <div className="font-medium text-slate-700">
                                  Tesla Charging Station
                                 </div>
                                 <div className="mt-0.5 text-slate-500 sm:hidden">
                                  1 unit at $75.00
                                 </div>
                                </td>
                                <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                 4
                                </td>
                                <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                 $0.00
                                </td>
                                <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                                 $0.00
                                </td>
                               </tr>
                       
 
                              </tbody>
                              <tfoot>
                               <tr>
                                <th scope="row" colspan="3" className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
                                 Subtotal
                                </th>
                                <th scope="row" className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
                                 Subtotal
                                </th>
                                <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                                 $0.00
                                </td>
                               </tr>
                              
                               <tr>
                               
                               </tr>
                               <tr>
                                <th scope="row" colspan="3" className="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0">
                                 Total
                                </th>
                                <th scope="row" className="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden">
                                 Total
                                </th>
                                <td className="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                                 $0.00
                                </td>
                               </tr>
                              </tfoot>
                             </table>
                            </div>
                           </div>
                        </div>
                        
                        <div className="px-6 pt-4 pb-2 text-center font-light">
                          Clear Sale
                        </div>
                        <div className="px-6 py-6 text-center">
                        </div>
                        <div className="grid grid-cols-2 text-xl">
                            <button className="mr-1 rounded-none bg-blue-200 p-4 font-semibold">Save Bill</button>
                            <button className="rounded-none bg-blue-200 p-4 font-semibold">Print Bill</button>
                        </div>
                      </div>
                      <div className="fw-bold text-lg">
                        <button className="bg-blue-800 hover:bg-grey text-white font-bold py-4 px-4 rounded inline-flex items-center w-full text-2xl">
                            <svg className="w-6 h-6 text-white mr-4 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
                            </svg>
                            <span className="flex-1 text-center">Charge Rp. 104.000</span>
                        </button>
                    </div>
  
                </div>
            </div>
    </div>
  );
};

export default Invoice;

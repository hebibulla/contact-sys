import React from 'react'

export default function Navbar({ toggleSidebar }) {
    return (
        <div className="h-16 bg-gray-700 shadow-xl px-4 flex items-center border-l border-gray-800">
            <div onClick={ () => toggleSidebar()} className="toggler">
                <i  className="fas fa-bars fa-lg text-gray-300 cursor-pointer"></i>
            </div>
            <div className="ml-auto user">
                <div className="avatar h-10 w-10 ml-auto my-auto bg-gray-300 border border-gray-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-gray-800 "></i>
                </div>
            </div>
        </div>
    )
}

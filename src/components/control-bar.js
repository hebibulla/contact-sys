import React from 'react'
import {Link} from 'react-router-dom'

export default function ControlBar({ PcSidebarStatus, hideSidebar }) {

    return (
        <div className="w-64 h-full left-0 ">
            <div className="fixed inset-0 bg-gray-900 opacity-75" onClick={ () => (hideSidebar()) } style={{zIndex: "-1"}}></div>
            {/* <SideBar show={ sidebarStatus } toggleSideBar={sidebarToggle} /> */}
            <div className="realtive z-50 control-bar h-full bg-gray-800 flex-col justify-start p-0 rounded-t w-full flex items-center">
                <div className="inline-flex items-center justify-center h-16 mb-10 w-64 bg-gray-700">
                    <h3 className="xl:text-3xl text-2xl text-gray-400 text-center m-0 p-0 ">
                        Contact SYS
                    </h3>
                </div>
                <Link to="/" className="w-full border-b border-gray-700">
                    <button className="my-1 text-gray-300 w-full py-4 px-8 hover:bg-gray-700 flex flex-row justify-start items-center">

                        <i className=" fas fa-home fa-lg xl:mr-4 mr-2"></i>
                        <span className="-my-1 text-xs">home</span>

                    </button>
                </Link>
                <Link to="/setting" className="w-full border-b border-gray-700">
                    <button 
                        className="my-1 text-gray-300 w-full py-4 px-8 hover:bg-gray-700 flex flex-row justify-start items-center">

                        <i className="fas fa-cog fa-lg xl:mr-4 mr-2"></i>
                        <span className="-my-1 text-xs">setting</span>

                    </button>
                </Link>
            </div>
        </div>
    )
}

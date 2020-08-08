import React from 'react'

export default function SideBar({ show, toggleSideBar }) {

    function sidebarToggle(){
        console.log("clicked");
        
        toggleSideBar();
    }

    // if(show){
        return(
            <>
                <div className="background fixed inset-0 bg-gray-900 opacity-50 z-0"
                    style={{
                        opacity: show ? 0.75 :0,
                        transition: "all ease .35s",
                        display: show ? 'block' : 'none'
                    }}
                    onClick={ sidebarToggle }></div>
                    <div className="flex fixed top-0 left-10 h-screen bg-gray-800 z-0 shadow-lg py-20 px-10" 
                        style={{ 
                            width: "70vw", 
                            left: show ? 0 : '-100%', 
                            transition: 'all ease-in-out .35s',
                            opacity: show ? 1 : 0 }}>
                        <ul className="side-bar-list text-white">
                            <li className="sidebar-ittem px-4 mb-8 border-l ">
                                <span className="text-lg">未処理一覧</span>
                            </li>
                            <li className="sidebar-ittem px-4 mb-8 border-l ">
                                <span className="text-lg">処理済み</span>
                            </li>
                        </ul>
                    </div>
            </>
        )

}

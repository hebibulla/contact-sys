import React,{useState,useEffect} from 'react'
// import { Link } from 'react-router-dom'

export default function SideBar(props) {

    // let [showSidebar, setShowSidebar] = useState(false)
    let sidebar = '';
    // const toggle = () => {
    //     if(showSidebar){
    //         sidebar = 
    //             <div className="side-bar-wrapper fixed w-full h-full z-50">
    //                 <div className="background absolute inset-0 bg-gray-900 opacity-50 z-10"></div>
    //                 <div className="absolute left-0 h-full bg-gray-800 z-20 shadow-lg py-20 px-10" style={{ width: "70vw" }}>
    //                     <ul className="side-bar-list text-white">
    //                         <li className="sidebar-ittem px-4 mb-8 border-l ">
    //                             {/* <Link to="/"> */}
    //                             <span className="text-lg">未処理一覧</span>
    //                             {/* </Link> */}
    //                         </li>
    //                         <li className="sidebar-ittem px-4 mb-8 border-l ">
    //                             {/* <Link to="/"> */}
    //                             <span className="text-lg">処理済み</span>
    //                             {/* </Link> */}
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //     }
    // }
    // useEffect(() => {
    //     toggle();
    // }, [showSidebar])

    if(props.show){
        sidebar = 
            <div className="side-bar-wrapper fixed w-full h-full z-50">
                <div className="background absolute inset-0 bg-gray-900 opacity-50 z-10"></div>
                <div className="absolute left-0 h-full bg-gray-800 z-20 shadow-lg py-20 px-10" style={{ width: "70vw" }}>
                    <ul className="side-bar-list text-white">
                        <li className="sidebar-ittem px-4 mb-8 border-l ">
                            {/* <Link to="/"> */}
                            <span className="text-lg">未処理一覧</span>
                            {/* </Link> */}
                        </li>
                        <li className="sidebar-ittem px-4 mb-8 border-l ">
                            {/* <Link to="/"> */}
                            <span className="text-lg">処理済み</span>
                            {/* </Link> */}
                        </li>
                    </ul>
                </div>
            </div>
    }else{
        sidebar = '';
    }

    return (
        <>
            {sidebar}
        </>
    )
}

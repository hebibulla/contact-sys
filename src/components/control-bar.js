import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import SideBar from './side-bar';
import {useTransition} from 'react-spring';
import { animated } from 'react-spring';

export default function ControlBar({ PcSidebarStatus, hideSidebar }) {


    // スマホの時のコントロールバー
    const [sidebarStatus, setSidebarStatus] = useState(false)
    function sidebarToggle(){
        setSidebarStatus(!sidebarStatus);
    }


    const transition = useTransition(PcSidebarStatus, null,{
        from:{ width: "0rem", overflow: 'hidden', position: 'relative', },
        enter:{ width: "16rem", position: 'fixed' },
        leave: { width: "0rem", overflow: 'hidden', position: 'fixed' }    
    })


    return transition.map(({item, key, props }) => 
        item && 
        <animated.div style={ props } key={ key } className="w-64 h-full left-0 ">
            <div className="fixed inset-0 bg-gray-900 opacity-75" onClick={ () => (hideSidebar()) } style={{zIndex: "-1"}}></div>
            {/* <SideBar show={ sidebarStatus } toggleSideBar={sidebarToggle} /> */}
            <div className="realtive z-50 control-bar h-full bg-gray-800 flex-col justify-start p-0 rounded-t w-full flex items-center">
                <div className="inline-flex items-center justify-center h-16 mb-10 w-64 bg-gray-700">
                    <h3 className="xl:text-3xl xl:block hidden text-lg text-gray-400 text-center m-0 p-0 ">
                        Contact SYS
                    </h3>
                </div>
                    {/* <button
                        onClick={ () => sidebarToggle() } 
                        className="my-1 xl:flex-row text-gray-300 w-full xl:bg-gray-700 py-4 px-8 xl:justify-start xl:hidden lg:hidden  flex flex-col justify-center items-center">

                        <i className="fas fa-bars fa-lg xl:mr-4"></i>
                        <span className="-my-1 text-xs">menu</span>

                    </button> */}
                <Link to="/" className="w-full border-b border-gray-700">
                    <button className="my-1 xl:flex-row text-gray-300 w-full py-4 px-8 xl:justify-start hover:bg-gray-700 flex flex-col justify-center items-center">

                        <i className=" fas fa-home fa-lg xl:mr-4"></i>
                        <span className="-my-1 text-xs">home</span>

                    </button>
                </Link>
                <Link to="/setting" className="w-full border-b border-gray-700">
                    <button 
                        className="my-1 xl:flex-row text-gray-300 w-full py-4 px-8 xl:justify-start hover:bg-gray-700 flex flex-col justify-center items-center">

                        <i className="fas fa-cog fa-lg xl:mr-4"></i>
                        <span className="-my-1 text-xs">setting</span>

                    </button>
                </Link>
            </div>
        </animated.div>

    )

    // return (
    //     <div className="xl:h-full xl:w-64" style={{ display: PcSidebarStatus ? 'block' : 'none' }}>
    //         <SideBar show={ sidebarStatus } toggleSideBar={sidebarToggle} />
    //         <div className="control-bar xl:h-full xl:bg-gray-800 xl:flex-col xl:justify-start xl:p-0 bg-white h-16 rounded-t w-full flex flex-row justify-between items-center py-1 px-10">
    //             <div className="xl:inline-flex xl:items-center xl:justify-center xl:h-16 xl:mb-10 hidden  bg-gray-700 w-full">
    //                 <h3 className="text-3xl text-gray-400 text-center  m-0 p-0">
    //                     Contact SYS
    //                 </h3>
    //             </div>
    //                 <button
    //                     onClick={ () => sidebarToggle() } 
    //                     className="xl:my-1 xl:flex-row xl:text-gray-300 xl:w-full xl:bg-gray-700 xl:py-4 xl:px-8 xl:justify-start xl:hidden lg:hidden  flex flex-col justify-center items-center">

    //                     <i className="xl:hidden lg:hidden block fas fa-bars fa-2x xl:mr-4"></i>
    //                     <i className="xl:block lg:block hidden fas fa-bars fa-lg xl:mr-4"></i>

    //                     <span className="-my-1 text-xs">menu</span>

    //                 </button>
    //             <Link to="/" className="xl:w-full border-b border-gray-700">
    //                 <button className="xl:my-1 xl:flex-row xl:text-gray-300 xl:w-full xl:py-4 xl:px-8 xl:justify-start hover:bg-gray-700 flex flex-col justify-center items-center">

    //                     <i className="xl:hidden lg:hidden block fas fa-home fa-2x xl:mr-4"></i>
    //                     <i className="xl:block lg:block hidden fas fa-home fa-lg xl:mr-4"></i>

    //                     <span className="-my-1 text-xs">home</span>

    //                 </button>
    //             </Link>
    //             <Link to="/setting" className="xl:w-full border-b border-gray-700">
    //                 <button 
    //                     className="xl:my-1 xl:flex-row xl:text-gray-300 xl:w-full xl:py-4 xl:px-8 xl:justify-start hover:bg-gray-700 flex flex-col justify-center items-center">

    //                     <i className=" xl:hidden lg:hidden block fas fa-cog fa-2x xl:mr-4"></i>
    //                     <i className="xl:block lg:block hidden fas fa-cog fa-lg xl:mr-4"></i>

    //                     <span className="-my-1 text-xs">setting</span>

    //                 </button>
    //             </Link>
    //         </div>
    //     </div>
    // )
}

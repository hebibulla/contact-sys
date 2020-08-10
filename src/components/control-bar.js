import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import SideBar from './side-bar';


export default function ControlBar(props) {

    const [sidebarStatus, setSidebarStatus] = useState(false)
    function sidebarToggle(){
        setSidebarStatus(!sidebarStatus);
    }

    return (
        <div>
            <SideBar show={ sidebarStatus } toggleSideBar={sidebarToggle} />
            <div className="control-bar bg-white h-16 rounded-t fixed bottom-0 w-full flex flex-row justify-between items-center py-1 px-10">
                    <button
                        onClick={ () => sidebarToggle() } 
                        className="flex flex-col justify-center items-center">
                        <i className="fas fa-bars fa-2x"></i>
                        <span className="-my-1 text-xs">menu</span>
                    </button>
                <Link to="/">
                        <button className="flex flex-col justify-center items-center">
                            <i className="fas fa-home fa-2x"></i>
                            <span className="-my-1 text-xs">home</span>
                        </button>
                </Link>
                <Link to="/setting">
                        <button 
                            className="flex flex-col justify-center items-center">
                            <i className="fas fa-cog fa-2x"></i>
                            <span className="-my-1 text-xs">setting</span>
                        </button>
                </Link>
            </div>
        </div>
    )
}

import React from 'react'
import {Link} from 'react-router-dom'

export default function ControlBar() {
    return (
        <div>
            <div className="control-bar bg-white h-16 rounded-t fixed bottom-0 w-full flex flex-row justify-between items-center py-1 px-10">
                <Link to="/menu">
                    <button className="flex flex-col justify-center items-center">
                        <i className="fas fa-bars fa-2x"></i>
                        <span className="-my-1 text-xs">menu</span>
                    </button>
                </Link>
                <Link to="/">
                    <button className="flex flex-col justify-center items-center">
                        <i className="fas fa-home fa-2x"></i>
                        <span className="-my-1 text-xs">home</span>
                    </button>
                </Link>
                <button className="flex flex-col justify-center items-center">
                    <i className="fas fa-cog fa-2x"></i>
                    <span className="-my-1 text-xs">setting</span>
                </button>
            </div>
        </div>
    )
}

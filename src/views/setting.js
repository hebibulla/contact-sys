import React from 'react'
import { Link } from 'react-router-dom'

export default function Setting() {
    return (
        <div className="flex flex-col justify-start items-start">
            <div className="page-title mb-4 pb-2">
                <h3 className="text-xl text-gray-300">
                    設定ページ
                </h3>
            </div>
            <ul className="flex xl:flex-row lg:flex-row md:flex-row flex-col ">
                <li className="mr-4 text-gray-400 border-gray-700 border rounded p-2">
                    <p className="text-xl">
                        <i className="fas fa-server mr-4"></i>
                        サーバーDNS設定
                    </p>
                </li>
                <li className="mr-4 text-gray-400 border-gray-700 border rounded p-2">
                    <Link to="/change-password">
                        <p className="text-xl">
                            <i className="fas fa-key mr-4"></i> パスワード変更
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

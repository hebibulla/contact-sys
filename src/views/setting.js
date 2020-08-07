import React from 'react'
import { Link } from 'react-router-dom'

export default function Setting() {
    return (
        <div className="h-full w-full flex justify-center items-center">
            <ul>
                <li className="mb-8">
                    <p className="text-white text-xl">
                        <i className="fas fa-server mr-4 text-white"></i>
                        サーバーDNS設定
                    </p>
                </li>
                <li>
                    <Link to="/change-password">
                            <p className="text-white text-xl">
                                <i className="fas fa-key mr-4 text-white"></i> パスワード変更
                            </p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

import React from 'react'

export default function Home() {
    return (
        <div className="home-content p-2">
            <div className="title-bar flex justify-between mx-1">
                <h1 className="text-white text-lg">
                    お問い合わせ一覧
                </h1>
                <div className="filter">
                    <i className="fas fa-sort-amount-up fa-lg text-white"></i>
                </div>
            </div>
            <main className="pt-3">
                <ul className="contact-list">
                    <li className="contact-list-item bg-white rounded flex flex-col mx-1 mb-2 p-2 overflow-hidden"
                        style={{height: "74px"}} >
                        <div className="top flex flex-row justify-between items-start">
                            <div className="name">
                                <span className="font-bold mr-2">佐藤 勝弘様</span><span className="text-sm">user@user.com</span>
                            </div>
                            
                            <div className="time">
                                <span className="text-xs text-gray-500">2020/07/20</span>
                            </div>
                        </div>
                        <div className="bottom h-10 overflow-hidden">
                            <p className="m-0 text-gray-600 text-xs leading-snug "
                            >お問い合わせありがとうございます。これからもよろしくお願いします、これからもよろしくお願いしますこれからもよろしくお願いしますこれからもよろしくお願いします、これからもよろしくお願いしますこれからもよろしくお願いしますこれからもよろしくお願いしま、、</p>
                        </div>
                    </li>
                    <li className="contact-list-item bg-white rounded flex flex-col mx-1 mb-2 p-2 overflow-hidden"
                        style={{height: "74px"}} >
                        <div className="top flex flex-row justify-between items-start">
                            <div className="name">
                                <span className="font-bold mr-2">佐藤 勝弘様</span><span className="text-sm">user@user.com</span>
                            </div>
                            
                            <div className="time">
                                <span className="text-xs text-gray-500">2020/07/20</span>
                            </div>
                        </div>
                        <div className="bottom h-10 overflow-hidden">
                            <p className="m-0 text-gray-600 text-xs leading-snug "
                            >お問い合わせありがとうございます。これからもよろしくお願いします、これからもよろしくお願いしますこれからもよろしくお願いしますこれからもよろしくお願いします、これからもよろしくお願いしますこれからもよろしくお願いしますこれからもよろしくお願いしま、、</p>
                        </div>
                    </li>
                    <li className="contact-list-item bg-white rounded flex flex-col mx-1 mb-2 p-2 overflow-hidden"
                        style={{height: "74px"}} >
                        <div className="top flex flex-row justify-between items-start">
                            <div className="name">
                                <span className="font-bold mr-2">佐藤 勝弘様</span><span className="text-sm">user@user.com</span>
                            </div>
                            
                            <div className="time">
                                <span className="text-xs text-gray-500">2020/07/20</span>
                            </div>
                        </div>
                        <div className="bottom h-10 overflow-hidden">
                            <p className="m-0 text-gray-600 text-xs leading-snug "
                            >お問い合わせありがとうございます。これからもよろしくお願いします、これからもよろしくお願いしますこれからもよろしくお願いしますこれからもよろしくお願いします、これからもよろしくお願いしますこれからもよろしくお願いしますこれからもよろしくお願いしま、、</p>
                        </div>
                    </li>
                </ul>
            </main>
            
        </div>
    )
}

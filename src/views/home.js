import React from 'react'
import ContactItem from '../components/home/contact-item'
import ReplayModal from '../components/home/replay-modal'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group';

export default function Home() {

    const [replayModalStatus, setReplayModalStatus] = useState(false)

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
                <div className="contact-list">
                    <ContactItem 
                        name="佐藤 浩二"
                        date="2020/07/20"
                        email="example@example.com"
                        subject="
                            お問い合わせありがとうございます。
                            これからもよろしくお願いします、
                            これからもよろしくお願いしますこれからもよろしくお願いしますこれからもよろしくお願いします、
                            これからもよろしくお願いしますこれからもよろしくお願いしますこれからもよろしくお願いしま、
                        "
                        switchReplayModal={ () => setReplayModalStatus(true)}
                    />
                </div>
                <button className="text-white" onClick={()=>(setReplayModalStatus(true))}>show modal</button>
                    <CSSTransition in={replayModalStatus} timeout={300} classNames="fade" unmountOnExit>
                <React.StrictMode>
                            <ReplayModal
                                hideModal={ () =>  setReplayModalStatus(false) } 
                            />
                </React.StrictMode>
                    </CSSTransition>

            </main>
            
        </div>
    )
}

import React from 'react'
import {useSpring, animated } from 'react-spring';

export default function SideBar({ show, toggleSideBar }) {

    function sidebarToggle(){
        console.log("clicked");
        
        toggleSideBar();
    }

    const animate = useSpring(show ? { left: '0%', opacity: 0 } : { left: '-100%', opacity: 1 })
    // const transitions = useTransition(show, null, {

        // from:  { left: '-100px'  },
        // enter: { left: '0'},
        // leave: { left: '-100px'}

        // from:  { opacity: 0, left: '-100%' },
        // enter: { opacity: 1, left: 0 },
        // leave: { opacity: 0, left: '-100%' },
    // })
    // if(show){
        return(
            <>
            {/* <animated.div style={animate}> */}
                {/* {transitions.map(({ item, key, props }) =>  
                    item && <animated.div key={key} style={props} > */}
                    {/* <div className="side-bar-wrapper fixed w-full h-full z-100 inset-0"> */}
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
                    {/* </div> */}
                {/* </animated.div> */}
                {/* )} */}
            </>
        )
    // }else{
    //     return(
    //         <>
    //         </>
    //     )
    // } 

}

import React,{useState} from 'react'

export default function ContactItem({ name, date, email, subject, switchReplayModal }) {

    const [toggled, setToggled] = useState(false)

    // let itemHeight = {height: "74px"};

    // useEffect(() => {
    //     toggled ? (itemHeight = {height: "150px"}) : (itemHeight = {height: "74px"});
    //     console.log(itemHeight);
    // }, [toggled])
    
    function accordion(e){

        if(toggled){
            e.preventDefault();
        }else{
            setToggled(true)
        }

    }

    function replay(){

        // setToggled(false);
        return switchReplayModal();

    }


    return (
        <div onClick={(event) => accordion(event)} className="contact-list-item bg-white rounded flex flex-col justify-between mx-1 mb-2 p-2 overflow-hidden"
            style={{ height: toggled ? "300px" : "75px", transition: 'all ease-in-out .15s' }} >
            <div className="top flex flex-row justify-between items-start">
                <div className={"flex " + (toggled ? " flex-col mb-3 " : " flex-row")}>
                    <span className="font-bold mr-2">{name}様</span><span className="text-sm">{ email }</span>
                </div>
                <div className="time">
                    <span className="text-xs text-gray-500">{ date }</span>
                </div>
            </div>
            <div className={"bottom bg-gray-100 " + ( toggled ? ' leading-6 border rounded-md p-4 overflow-auto max-h-70-screen mb-2 flex-grow ' : ' overflow-hidden ')}>
                <p className="m-0 text-gray-600 text-xs"
                >{ subject }</p>
            </div>
            <div className="footer flex justify-between py-1" 
                style={
                    toggled ? ({
                        height: "auto", 
                        overflow: "visible"
                    }):({
                        padding: "0px",
                        margin: "0px",
                        height: "0%", 
                        overflow: "hidden"
                    })
                    }>
                <div className="w-1/2 pr-2">
                    <button className="py-2 px-3 rounded-full text-gray-500 bg-gray-300 text-sm w-full" onClick={() => setToggled(false)}>閉じる</button>
                </div>

                <div className="w-1/2 pl-2">
                    <button className="py-2 px-3 rounded-full bg-gray-800 border-gray-900 text-white text-sm w-full" onClick={ () => replay() }>返信する</button>
                </div>
            </div>
        </div>
    )
}

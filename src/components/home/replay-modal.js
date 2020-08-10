import React from 'react'


export default function ReplayModal({ hideModal }) {

    const customStyle = {
        top: "50%",
        left: "50%",
        transform: "translate3d(-50%,-50%,0)",
        width: "95vw",
        height: "450px",
    }

    function hide() {
        return hideModal();
    }

    return (
        <>
            <div style={customStyle} className="modal-dialog fixed flex flex-col bg-white shadow-xl rounded-lg z-50">
                <div className="modal-header p-3 border-b bg-gray-100 rounded-t-lg">
                    <h1 className="text-xl">返信</h1>
                </div>
                <div className="modal-body px-4 pt-4 flex-grow">
                    <form>
                        <div className="form-row flex items-center mb-3">
                            <div className="left w-1/6">
                                <span className="text-gray-600 text-sm">出差人：</span>
                            </div>
                            <div className="right w-5/6">
                                <input type="text" className="rounded-lg py-2 px-3 bg-gray-300 w-full text-sm text-gray-600" value="example@example.com" disabled/>
                            </div>
                        </div>

                        <div className="form-row flex items-center mb-3">
                            <div className="left w-1/6">
                                <span className="text-gray-600 text-sm">宛先：</span>
                            </div>
                            <div className="right w-5/6">
                                <input type="text" className="rounded-lg py-2 px-3 bg-gray-300 w-full text-sm text-gray-600" value="example2@example.com" disabled/>
                            </div>
                        </div>
                        <div className="form-row w-full">
                            <label htmlFor="replay_form_subject" className="block text-gray-600 mb-2">内容：</label>
                            <textarea className="px-3 py-2 bg-gray-100 border rounded-lg w-full" id="replay_form_subject" rows="6"></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer flex justify-between p-3 bg-gray-100 rounded-b-lg border-t">
                    <div className="w-1/2 pr-2">
                        <button className="py-2 px-3 rounded-full text-gray-500 bg-gray-300 text-sm w-full" onClick={ () => hide() }>閉じる</button>
                    </div>
                    <div className="w-1/2 pl-2">
                        <button className="py-2 px-3 rounded-full bg-gray-800 border-gray-900 text-white text-sm w-full">送信</button>
                    </div>
                </div>
            </div>
        </>
    )

}

import { useState } from "react";


const DynamicAddListing = () => {


    const [item, setItem] = useState("");
    const [itembox, setItemBox] = useState([]);
    const [text, setText] = useState("");
    const addItem = (e) => {
        setItem(e.target.value);
    };

    const itemList = () => {
        setItemBox((newData) => {
            return [...newData, item];
        });
    };

    const cloneText = (e) => {
        setText(e.target.value)
    }
    return (
        <>
            <div className='font-bold text-3xl p-4 border border-y-8 text-center text-gray-500'>Dynamic Add Listing Page</div>
            <div className="p-8">
                <div className="mb-2">Add List</div>
                <div className="relative grid grid-cols-2">
                    <input type="text" className="col-12 py-2.2 pr-8 mr-8 border border-2 border-gray-400 p-2" placeholder="add the Destination" onChange={addItem} />
                    <div className="font-bold relative right-7 ml-2 w-10 h-10 bg-black px-2 hover:bg-green-500 rounded-3xl mr-8 text-3xl ">
                        <button onClick={itemList} className="text-white items-center noborder">
                            +
                        </button>
                    </div>
                </div>
                <ul className="items-left mt-4">
                    {itembox.map((myList) => {
                        return <li>{myList}</li>;
                    })}
                </ul>
            </div>
            <div className="p-8">
                <div className="mb-2">Clone text</div>
                <div className="relative grid grid-cols-2">
                    <input type="text" className="col-12 py-2.2 pr-8 mr-8 border border-2 border-gray-400 p-2" placeholder="add the Destination" onChange={cloneText} />
                </div>
                <div>{text}</div>
            </div>
        </>
    );
}

export default DynamicAddListing;
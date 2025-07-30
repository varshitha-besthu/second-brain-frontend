import { useRef } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

export const SearchPage = ({open, onClose} : {open:any, onClose: any}) => {

    const dropdownRef = useRef<HTMLDivElement| null>(null);
        useOutsideClick(dropdownRef, () => {
            onClose();
    });

    return <div>
            {open && 
            <div>
                <div className="w-screen h-screen fixed top-0 left-0 bg-black opacity-60 flex justify-center ">
                    <div className="text-white" ref={dropdownRef}>
                        <input type="text" placeholder="Search here"/>
                    </div>
                </div>
            </div>}
    </div>
}
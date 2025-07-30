export const Input = ({placeholder, ref} : {
    placeholder: string,
    ref ?: any,
    nextRef ?: any
}) => {
    return (
        <div >
            <input placeholder={placeholder} type={"text"} ref = {ref} className = "px-4 py-2 border rounded m-2"/> 
        </div>
    )
}
export const Input = ({placeholder, ref, handleKeyDown, nextRef} : {
    placeholder: string,
    ref ?: any,
    nextRef ?: any
    handleKeyDown : (e : React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent<HTMLDivElement>, nextInputRef: React.RefObject<HTMLInputElement>) => void
}) => {
    return (
        <div onKeyDown={(e) => handleKeyDown(e, nextRef)}>
            <input placeholder={placeholder} type={"text"} ref = {ref} className = "px-4 py-2 border rounded m-2"/> 
        </div>
    )
}
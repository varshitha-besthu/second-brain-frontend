import { useRef } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const SignUp = () => {
    const usernameRef = useRef<HTMLInputElement >(null);
    const passwordRef = useRef<HTMLInputElement >(null);
    const submitRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                username : username,
                password : password
            }
        )
        navigate("/signin")
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent<HTMLDivElement>, nextInputRef: React.RefObject<HTMLInputElement>) => {
        if(e.key == "Enter"){
            e.preventDefault();
            nextInputRef.current.focus();
        }
    }
    return <div className="h-screen w-screen  bg-gray-200 flex justify-center items-center ">
        <div className="bg-white roundedborder min-w-48 p-8 rounded-xl ">
            <div className="text-xl font-bold ">Sign up : </div>
                <Input placeholder = "Username" ref = {usernameRef} handleKeyDown={handleKeyDown} nextRef={passwordRef}/>
                <Input placeholder = "Password" ref = {passwordRef}  handleKeyDown={handleKeyDown} nextRef={submitRef}/>
            <div className="flex justify-center pt-4">
                <Button loading = {false} variant="primary" text="signup" fullWidth = {true} onClick={signup} ref = {submitRef}/>
            </div>
        </div>
    </div>
}


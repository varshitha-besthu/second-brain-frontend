import { useRef } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const SignUp = () => {
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
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
    return <div className="h-screen w-screen  bg-gray-200 flex justify-center items-center ">
        <div className="bg-white roundedborder min-w-48 p-8 rounded-xl ">
            <div className="text-xl font-bold ">Sign up : </div>
            <Input placeholder = "Username" ref = {usernameRef}/>
            <Input placeholder = "Password" ref = {passwordRef} />
            <div className="flex justify-center pt-4">
                <Button loading = {false} variant="primary" text="signup" fullWidth = {true} onClick={signup}/>
            </div>
        </div>
    </div>
}


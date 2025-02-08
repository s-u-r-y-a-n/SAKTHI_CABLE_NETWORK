import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    axios.defaults.withCredentials = true;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate();

    const [inputValues, setInputValues] = useState({});

    function handleChange(event) {
        const { name, value } = event.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
        // console.log(inputValues);
    };

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            // To send the cookies with the request
            axios.defaults.withCredentials = true;
            const { data } = await axios.post(`${backendUrl}/api/auth/login`, inputValues)
            if (data.success) {
                localStorage.setItem("authToken", data.token); 
                navigate("/home");
                setInputValues({ email: "", password: "" });
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            if (error.response && error.response.data) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An error occurred. Please try again.");
            }
        }

    }


    const value = {
        inputValues, setInputValues,
        handleChange, handleSubmit
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );

}
import API from "@/utils/axios";
import Router from "next/router";

const signUpHandlerClient = async (body, reset, setIsPosting) => {
    try {
        setIsPosting(true)
        const res = await API.post("/api/auth/sign-up", body)

        if (reset) {
            reset()
        }

        alert(res.data.message)
        Router.push("/")
    } catch (err) {
        console.log(err)

    } 
}

export { signUpHandlerClient }
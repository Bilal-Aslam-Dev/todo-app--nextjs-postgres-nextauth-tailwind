import { createUser } from "@/backend/services/auth/createUser"

const createUserController = (_req, _res) => {
    try {
        const { fullName, email, password } = _req.body
        if (!fullName || !email || !password) {
            return _res.status(401).send("Credentials Not Provided!")
        }

        createUser(_req, _res)

    } catch (err) {
        _res.status(501).send(err.message)
    }
}

export default createUserController
import createUserController from "@/backend/controllers/auth/createUserController";

export default async function signUp(_req, _res) {
    if (_req.method !== 'POST') {
        return _res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        await createUserController(_req, _res);
      } catch (error) {
        _res.status(500).json({ message: 'Internal Server Error' });
      }
}
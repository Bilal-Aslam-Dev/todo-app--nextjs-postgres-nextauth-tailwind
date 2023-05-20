import { signIn } from 'next-auth/react'

const signInHandlerClient = async (credentials, setIsPosting) => {
    try {
        setIsPosting(true)
        const result = await signIn('credentials', { redirect: false, ...credentials });

        if (result?.error) {
            console.error('Sign-in failed:', result.error);
            alert(result.error)
        } else {
            console.log('Sign-in successful:', result);
        }
    } catch (error) {
        console.error('Error during sign-in:', error);
        alert(error.message)
    } finally {
        setIsPosting(false)
    }
};

export { signInHandlerClient }
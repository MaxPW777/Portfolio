"use client";
import { useAuth } from '@/providers/auth-context';

function LoginForm() {
    const { login } = useAuth();

    const onSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const username = form.username.value;
        const password = form.password.value;
        loginUser({ username, password });
    };

    const loginUser = async ({ username, password }: { username: string; password: string }) => {
        try {
            await login({ username, password });
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className="abs-center flex flex-col items-center justify-center text-black bg-[rgba(0,0,0,0.5)]">
            <form onSubmit={onSubmitLogin} className="flex flex-col gap-4 mx-auto p-6 text-white rounded-lg">
                <h2 className="text-xl mb-4">Login</h2>
                <label className="flex flex-col text-sm">
                    Username:
                    <input className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="username" required />
                </label>
                <label className="flex flex-col text-sm">
                    Password:
                    <input className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" name="password" required />
                </label>
                <button className="mt-4 p-2 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;

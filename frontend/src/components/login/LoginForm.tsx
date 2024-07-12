"use client";
import {useAuth} from '@/providers/auth-context';
import {SubmitHandler, useForm} from "react-hook-form";

type LoginInputs = {
    username: string,
    password: string
}

function LoginForm() {
    const {
        register, handleSubmit,
        formState: {errors}
    } = useForm<LoginInputs>()
    const {login} = useAuth();

    const onSubmit: SubmitHandler<LoginInputs> = (data) => loginUser(data)

    const loginUser = async ({username, password}: {
        username: string;
        password: string
    }) => {
        try {
            await login({username, password});
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div
            className="abs-center flex flex-col items-center justify-center text-primary bg-[rgba(0,0,0,0.2)] rounded">
            <form onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4 mx-auto p-6 rounded-lg">
                <h2 className="text-xl mb-4">Login</h2>
                {errors.username && <span>Please enter your username</span>}
                <label className="flex flex-col text-sm">
                    Username:
                    <input
                        {...register("username", {required: true})}
                        className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text" name="username" required/>
                </label>
                {errors.password && <span>Please enter your password</span>}
                <label className="flex flex-col text-sm">
                    Password:
                    <input
                        {...register("password", {required: true})}
                        className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="password" name="password" required/>
                </label>
                <button
                    className="mt-4 p-2 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="submit">Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm;

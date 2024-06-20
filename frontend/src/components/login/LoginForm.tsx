"use client";
import {useState} from 'react';
import {useLoginMutation} from "@/services/user";

function LoginForm() {
    const loginMutation = useLoginMutation();

    const onSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const username = form.username.value;
        const password = form.password.value;
        loginUser({username, password}).then(r => console.log(r));
    };

    const loginUser = async ({username, password}: {
        username: string,
        password: string
    }) => {
        loginMutation.mutate({username, password});
    };

    if (loginMutation.data && "access_token" in loginMutation.data) {
        localStorage.setItem('access_token', loginMutation.data.access_token);
        window.location.href = '/';
    }

    return (
        <div className="abs-center flex flex-col items-center justify-center text-black bg-[rgba(0,0,0,0.5)]">
            <form onSubmit={onSubmitLogin} className="flex flex-col gap-4 mx-auto p-6 text-white rounded-lg ">
                <h2 className="text-xl mb-4">Login</h2>
                <label className={'flex flex-col text-sm'}>
                    Username:
                    <input className={'mt-1 p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'} type="text" name="username" required/>
                </label>
                <label className={'flex flex-col text-sm'}>
                    Password:
                    <input className={'mt-1 p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'} type="password" name="password" required/>
                </label>
                <button className={'mt-4 p-2 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'} type="submit">Login</button>
            </form>

        </div>
    );
}

export default LoginForm;

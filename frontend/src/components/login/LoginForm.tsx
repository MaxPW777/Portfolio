"use client";
import {useAuth} from '@/providers/auth-context';
import {SubmitHandler, useForm} from "react-hook-form";
import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel, FormMessage
} from '@/components/ui/form';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

type LoginInputs = {
    username: string,
    password: string
}

function LoginForm() {
    const form = useForm<LoginInputs>()
    const {login} = useAuth();

    const onSubmit: SubmitHandler<LoginInputs> = (data) => loginUser(data)

    const loginUser = async ({username, password}: {
        username: string;
        password: string
    }) => {
        try {
            await login({username, password})
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <Card className={'abs-center p-4 '}>
            <CardHeader>
                <CardTitle>Login</CardTitle>
            </CardHeader>
            <Form {...form}>
                <form className={'space-y-4'} onSubmit={form.handleSubmit(loginUser)}>
                    <FormField
                        control={form.control}
                        name={'username'}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder={'username'} {...field}></Input>
                                </FormControl>
                            <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={'password'}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder={'password'} {...field}></Input>
                                </FormControl>
                            <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Login</Button>
                </form>
            </Form>
        </Card>
    );
}

export default LoginForm;

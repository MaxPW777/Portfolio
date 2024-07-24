"use client";
import { useForm } from "react-hook-form";
import { useCreateContactMutation } from "@/services/contact";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IContactRequestDto } from "@common/dto/IContactRequestDto";

export function ContactForm() {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const mutation = useCreateContactMutation();

    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });

    const onSubmit = (data: IContactRequestDto) => {
        mutation.mutate(data);
        form.reset();
    };

    return (
        <Card className="shadow-lg p-4 h-fit">
            <CardHeader>
                <CardTitle>Contact Me</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="name"
                        rules={{ required: "Name is required" }}
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Name" {...field} />
                                </FormControl>
                                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        rules={{
                            required: "Email is required",
                            pattern: { value: emailRegex, message: "Please enter a valid email address" }
                        }}
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        rules={{ required: "Message is required" }}
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Message" {...field} />
                                </FormControl>
                                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full mt-4">Submit</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}

export default ContactForm;

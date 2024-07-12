"use client"
import {useForm} from "react-hook-form";
import {IContactRequestDto} from "@common/dto/IContactRequestDto";
import {useCreateContactMutation} from "@/services/contact";
import './contact-form.css';

function ContactForm() {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const mutation = useCreateContactMutation();
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IContactRequestDto>();

    const onSubmit = (data: IContactRequestDto) => {
        mutation.mutate(data);
    };

    return (
        <form className={'contact'} onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-xl mb-4">Contact Me</h2>
            <label className={'contact-label'}>Name
                <input className={'contact-input'} type="text"
                       placeholder="Name" {...register('name', {required: true})}/>
                {errors.name && <span>Name is required</span>}
            </label>
            <label className={'contact-label'}>Email
                <input className={'contact-input'} type="email"
                       placeholder="Email" {...register('email', {
                    required: true,
                    pattern: emailRegex
                })}/>
                {errors.email && <span>Please enter a valid email address</span>}
            </label>
            <label className={'contact-label'}>Message
                <textarea
                    className={'w-full border border-gray-300 rounded-lg p-2'}
                    placeholder="Message" {...register('message', {required: true})}/>
                {errors.message && <span>Message is required</span>}
            </label>
            <button
                className={'bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-700'}
                type="submit">Submit
            </button>
        </form>
    )
}

export default ContactForm;

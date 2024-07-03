"use client"
import {useForm} from "react-hook-form";
import {IContactRequestDto} from "@common/dto/IContactRequestDto";
import {useCreateContactMutation} from "@/services/contact";

function ContactForm() {
    const mutation = useCreateContactMutation();
    const {register, handleSubmit, formState: {errors}} = useForm<IContactRequestDto>();

    const onSubmit = (data: IContactRequestDto) => {
        mutation.mutate(data);
    };

    return (
        <form className={'flex flex-col'} onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name" {...register('name', {required: true})}/>
            {errors.name && <span>Name is required</span>}
            <input type="email" placeholder="Email" {...register('email', {required: true})}/>
            {errors.email && <span>Email is required</span>}
            <textarea placeholder="Message" {...register('message', {required: true})}/>
            {errors.message && <span>Message is required</span>}
            <button type="submit">Submit</button>
        </form>
    )
}

export default ContactForm;

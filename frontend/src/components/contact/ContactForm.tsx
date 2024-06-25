import {useForm} from "react-hook-form";
import {IContactRequestDto} from "@common/dto/IContactRequestDto";

function ContactForm() {
    const {register, handleSubmit, formState: {errors}} = useForm<IContactRequestDto>();
    return <div>Contact form</div>
}

export default ContactForm;

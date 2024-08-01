"use client"
import {useCreateExperienceMutation} from "@/services/experience";
import {useForm} from "react-hook-form";
import {ICreateExperienceDto} from "@common/dto/ICreateExperienceDto";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {useAuth} from "@/providers/auth-context";

function ExperienceButton() {
    const form = useForm<ICreateExperienceDto>({defaultValues: {} as ICreateExperienceDto});
    const mutation = useCreateExperienceMutation();
    const {isAuthenticated} = useAuth()

    if (!isAuthenticated) return


    const onSubmit = async (data: ICreateExperienceDto) => {
        // Convert image field to File if it's not already
        const imageFile = data.image instanceof FileList ? data.image[0] : data.image;
        const experienceDto: ICreateExperienceDto = {...data, image: imageFile};

        try {
            await mutation.mutateAsync(experienceDto);
            form.reset();
        } catch (error) {
            console.error('Failed to create post', error);
        }
    }


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='absolute right-5 top-5 z-30'>+ New
                    Experience</Button>
            </DialogTrigger>
            <DialogContent className={'min-w-[600px]'}>
                <DialogHeader>
                    <DialogTitle>Add a New Experience</DialogTitle>
                    <DialogDescription>Use this form to add a new Experience to
                        the database</DialogDescription>
                </DialogHeader>
                <Form {...form} >
                    <form className={'gap-y-2.5 flex flex-col'}
                          onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField control={form.control}
                                   rules={{required: "company is required"}}
                                   name="company"
                                   render={({field, fieldState}) => (
                                       <FormItem>
                                           <FormLabel>Title</FormLabel>
                                           <FormControl>
                                               <Input
                                                   placeholder='Really cool title' {...field} />
                                           </FormControl>
                                           <FormMessage>
                                               {fieldState.error?.message}
                                           </FormMessage>
                                       </FormItem>
                                   )}/>
                        <FormField control={form.control}
                                   rules={{required: "description is required"}}
                                   name="description"
                                   render={({field, fieldState}) => (
                                       <FormItem>
                                           <FormLabel>Content</FormLabel>
                                           <FormControl>
                                               <Textarea className={'h-[400px]'}
                                                         placeholder='Lorem Ipsum Content' {...field} />
                                           </FormControl>
                                           <FormMessage>
                                               {fieldState.error?.message}
                                           </FormMessage>
                                       </FormItem>
                                   )}/>
                        <FormField control={form.control} name="image"
                                   rules={{required: "image is required"}}
                                   render={({field, fieldState}) => (
                                       <FormItem>
                                           <FormLabel>Image</FormLabel>
                                           <FormControl>
                                               <Input type='file'
                                                      onChange={(e) => field.onChange(e.target.files?.[0])}/>
                                           </FormControl>
                                           <FormMessage>
                                               {fieldState.error?.message}
                                           </FormMessage>
                                       </FormItem>
                                   )}/>
                        <FormField control={form.control} name={"startDate"}
                                   rules={{required: "start date is required"}}
                                   render={({field, fieldState}) => (
                                       <FormItem>
                                           <FormLabel>Start Date</FormLabel>
                                           <FormControl>
                                               {/* add date component */}
                                           </FormControl>
                                           <FormMessage>
                                               {fieldState.error?.message}
                                           </FormMessage>
                                       </FormItem>
                                   )}
                        />
                        <FormField control={form.control} name={"endDate"}
                                   render={({field}) => (
                                       <FormItem>
                                           <FormLabel>End Date</FormLabel>
                                           <FormControl>
                                               {/* add date component */}
                                           </FormControl>
                                       </FormItem>
                                   )}
                        />
                        <DialogClose asChild>
                            <Button type='submit'>Submit</Button>
                        </DialogClose>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default ExperienceButton

"use client";
import {useForm} from "react-hook-form";
import {DialogClose,} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {ICreateProjectDto} from '@common/dto/ICreateProjectDto';
import {IProject} from "@common/types/IProject";

interface NewProjectFormProps {
    projectData: IProject[]
    setProjectData: (data: IProject[]) => void
}

function NewProjectForm({projectData, setProjectData}: NewProjectFormProps) {
    const form = useForm<ICreateProjectDto>({defaultValues: {} as ICreateProjectDto});

    const onSubmit = (data: ICreateProjectDto) => {
        data.languages = data.languages?.map((language) => language.trim()) || [];
        const newData = projectData
        newData.push(data)
        setProjectData(newData);
    };

    return (
        <Form {...form}>
            <form className="gap-y-2.5 flex flex-col"
                  onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="name"
                    rules={{required: "Company is required"}}
                    render={({field, fieldState}) => (
                        <FormItem>
                            <FormLabel>Name*</FormLabel>
                            <FormControl>
                                <Input placeholder="Project Name" {...field} />
                            </FormControl>
                            <FormMessage>{fieldState.error?.message}</FormMessage>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    rules={{required: "Description is required"}}
                    render={({field, fieldState}) => (
                        <FormItem>
                            <FormLabel>Description*</FormLabel>
                            <FormControl>
                                <Textarea className="h-[200px]"
                                          placeholder="Job Description" {...field} />
                            </FormControl>
                            <FormMessage>{fieldState.error?.message}</FormMessage>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="link"
                    rules={{required: "Link is required"}}
                    render={({field, fieldState}) => (
                        <FormItem>
                            <FormLabel>Link to project*</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Url (non requise)" {...field} />
                            </FormControl>
                            <FormMessage>{fieldState.error?.message}</FormMessage>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="languages"
                    render={({field, fieldState}) => (
                        <FormItem>
                            <FormLabel>Langues du projet</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Langues du projet (non requis)" {...field} />
                            </FormControl>
                            <FormMessage>{fieldState.error?.message}</FormMessage>
                        </FormItem>
                    )}
                />

                <DialogClose asChild>
                    <Button type='submit'>Submit</Button>
                </DialogClose>
            </form>
        </Form>
    );
}

export default NewProjectForm;

"use client";
import {useForm} from "react-hook-form";
import {ICreateExperienceDto} from "@common/dto/ICreateExperienceDto";
import {useCreateExperienceMutation} from "@/services/experience";
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
import {Calendar} from "@/components/ui/calendar";
import {cn} from "@/lib/utils";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {CalendarIcon} from "lucide-react";
import {IExperience} from "@common/types/IExperience";
interface NewExperienceFormProps {
    experienceData: IExperience[]
    setExperienceData: (data: any) => void
}
function NewExperienceForm({experienceData, setExperienceData}: NewExperienceFormProps) {
    const form = useForm<ICreateExperienceDto>({defaultValues: {} as ICreateExperienceDto});
    const experiencelinkregex = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
    const onSubmit = async (data: ICreateExperienceDto) => {
        try {
            experienceData.push(data);
            setExperienceData((prev: any) => [...prev]);
            form.reset();
        } catch (error) {
            console.error("Failed to create experience", error);
        }
    };

    return (
        <Form {...form}>
            <form className="gap-y-2.5 flex flex-col"
                  onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="company"
                    rules={{required: "Company is required"}}
                    render={({field, fieldState}) => (
                        <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                                <Input placeholder="Company Name" {...field} />
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
                            <FormLabel>Description</FormLabel>
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
                    name="image"
                    rules={{pattern: {value: experiencelinkregex, message: "Invalid URL"}}}
                    render={({field, fieldState}) => (
                        <FormItem>
                            <FormLabel>Image</FormLabel>
                            <FormControl>
                                <Input placeholder="Image Url" {...field}/>
                            </FormControl>
                            <FormMessage>{fieldState.error?.message}</FormMessage>
                        </FormItem>
                    )}
                />
                <div className="flex w-full justify-between items-center">
                    <FormField
                        control={form.control}
                        name="startDate"
                        rules={{required: "Start date is required"}}
                        render={({field, fieldState}) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Start Date</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[240px] pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? field.value.toLocaleDateString() :
                                                    <span>Pick a date</span>}
                                                <CalendarIcon
                                                    className="ml-auto h-4 w-4 opacity-50"/>
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 z-50"
                                                    align="start">
                                        <Calendar
                                            mode={"single"}
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date: Date) => date > new Date() || date < new Date("2004-07-27")}
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage>{fieldState.error?.message}</FormMessage>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="endDate"
                        render={({field}) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>End Date</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[240px] pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? field.value.toLocaleDateString() : "Pick a date"}
                                                <CalendarIcon
                                                    className="ml-auto h-4 w-4 opacity-50"/>
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 z-50"
                                                    align="start">
                                        <Calendar
                                            mode={"single"}
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date: Date) => date > new Date()}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </FormItem>
                        )}
                    />
                </div>

                <DialogClose asChild>
                    <Button type='submit'>Submit</Button>
                </DialogClose>
            </form>
        </Form>
    );
}

export default NewExperienceForm;

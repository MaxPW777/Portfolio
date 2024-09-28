"use client";
import {useForm} from "react-hook-form";
import {ICreatePostDto} from "@common/dto/ICreatePostDto";
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
import { ICreateProjectDto } from '@common/dto/ICreateProjectDto';
import { useCreateProjectMutation } from '@/services/projects';

function NewProjectForm() {
  const form = useForm<ICreateProjectDto>({defaultValues: {} as ICreateProjectDto});
  const mutation = useCreateProjectMutation();

  const onSubmit = async (data: ICreateProjectDto) => {
    mutation.mutate(data);
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
              <FormLabel>Name</FormLabel>
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
        name="link"
        rules={{required: "link is required"}}
        render={({field, fieldState}) => (
          <FormItem>
            <FormLabel>Link to project</FormLabel>
            <FormControl>
              <Input placeholder="Url" {...field} />
            </FormControl>
            <FormMessage>{fieldState.error?.message}</FormMessage>
          </FormItem>
        )}
      />
        <FormField
          control={form.control}
          name="languages"
          rules={{required: "Languages required"}}
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

        <DialogClose asChild>
          <Button type='submit'>Submit</Button>
        </DialogClose>
      </form>
    </Form>
  );
}

export default NewProjectForm;

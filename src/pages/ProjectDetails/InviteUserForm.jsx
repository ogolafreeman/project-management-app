import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const InviteUserForm = () => {
    const form=useForm({
        defaultValues:{
            emai:"",
            description:"",
            category:"",
            tags:["javascript","react"],
        },
    });
    const onSubmit=(data)=>{
        console.log("Create Project data", data);
    }
  return (
    <di>
        <Form {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control} name="email" render={({field})=><FormItem>
                    <FormControl>
                        <Input {...field}
                        type="text"
                        className="border w-full border-gray-700 py-5 px-5"
                        placeholder="Enter User email."
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>}/>
                <DialogClose>
                 <Button type="submit" className="w-full my-5">
                            Invite User
                            </Button>
                </DialogClose>
            </form>
            </Form>
    </di>

  )
}

export default InviteUserForm
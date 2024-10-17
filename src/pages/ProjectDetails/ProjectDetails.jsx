import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PlusIcon } from "@radix-ui/react-icons"
import InviteUserForm from "./InviteUserForm"
import IssueList from "./IssueList"
import ChatBox from "./ChatBox"

const ProjectDetails = () => {
    const handleProjectInvitation=()=>
    {

    }
  return (
    
    <>
    <div className="mt-5 lg:px-10">
        <div className="lg:flex gap-5 justify-between pb-4">
            <ScrollArea className="h-screen lg:w-[69%] pr-2">
                <div className="text-gray-400 pb-10 w-full">
                    <h1 className="text-lg font-semibold pb-5">Create Ecommerce Web Application using React</h1>
                    <div className="space-y-5 pb-10">
                    <p className="w-full md:max-w-lg lg:max-w-xl">
                    Ecommerce is the electronic buying and selling of goods and services, usually via the internet. 
                    Businesses can build their own ecommerce website, 
                    set up an ecommerce storefront on an established selling site like Amazon, 
                    or do it all for a multi-channel approach.
                    </p>
                    <div className="flex">
                        <p className="w-36">Project Lead: </p>
                        <p>Brunell Atemba</p>

                    </div>
                    <div className="flex">
                        <p className="w-36">Members: </p>
                    <div className="flex items-center gap-2">
                        {[1,1,1,1].map((item)=><Avatar className="cursor-pointer" key={item}>
                            <AvatarFallback>
                                B
                            </AvatarFallback>
                        </Avatar>)}
                    </div>
                    <Dialog>
                        <DialogTrigger>
                            <DialogClose>
                                <Button className="ml-2" size="sm" variant="outline" onClick={handleProjectInvitation}>
                                    <span>
                                        Invite
                                        <PlusIcon className="w-3 h-3"/>
                                    </span>
                                </Button>
                            </DialogClose>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>Invite User</DialogHeader>
                            <InviteUserForm/>
                        </DialogContent>
                    </Dialog>
                    </div>
                    <div className="flex">
                        <p className="w-36">Category: </p>
                        <p>Full-stack</p>

                    </div>
                    <div className="flex">
                        <p className="w-36">Status: </p>
                        <Badge>Brunell</Badge>

                    </div>
                </div>
                <section>
                    <p className="py-5 border-b text-lg -tracking-wider">Taks</p>
                    <div className="lg:flex md:flex gap-2 justify-between py-5">
                        <IssueList status="pending" title="To do List"/>
                        <IssueList status="in_progress" title="In Progress"/>
                        <IssueList status="done" title="Done"/>
                    </div>
                </section>
                </div>
            </ScrollArea>
            <div className="lg:w-[30%] rounded-md stick right-5 top-10">
                <ChatBox/>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProjectDetails
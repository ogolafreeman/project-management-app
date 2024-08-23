import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
const ProjectCard = () => {
    const navigate=useNavigate()
    return(
        <Card className="p-5 w-full lg:max-w3xl">
            <div className="space-y-5">
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-5">
                            <h1 onClick={()=>navigate("/project/3")} className="cursor-pointer font-bold text-lg">
                                Craate Ecommerce Project
                            </h1>
                            <DotFilledIcon/>
                            <p className="text-sm text-gray-400">Full-stack</p>
                        </div>
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button className="rounded-full" variant="ghost" size="icon">
                                        <DotsVerticalIcon/>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        Update
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <p className="text-gar-50 text-sm">
                    Ecommerce is the electronic buying and selling of goods and services, usually via the internet. 
                    Businesses can build their own ecommerce website, 
                    set up an ecommerce storefront on an established selling site like Amazon, or do it all for a multi-channel approach.
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                    {
                        [1,1,1,1].map((item)=><Badge key={item} variant="outline">{"Full-stack"}</Badge>)
                    }

                </div>
            </div>
        </Card>
    )
}
export default ProjectCard
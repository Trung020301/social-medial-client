import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Image as ImageIcon, Smile, Video } from 'lucide-react'
import React from 'react'

export default function CreatePost() {
    return (
        <div className="bg-white rounded-lg p-3">
            <div className="flex items-center gap-2 ">
                <Avatar>
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <input
                    className="px-4 py-2 rounded-3xl w-full bg-slate-100 focus:outline-none hover:bg-slate-200 cursor-pointer ease-in duration-200"
                    placeholder={`Trung ơi, bạn đang nghĩ gì?`}
                />
            </div>
            <Separator className="my-2" />
            <div className="flex items-center justify-around">
                <Button
                    variant="ghost"
                    className="flex items-center gap-1 w-full"
                >
                    <Video color="red" />
                    <span>Trục tiếp</span>
                </Button>
                <Button
                    variant="ghost"
                    className="flex items-center gap-1 w-full"
                >
                    <ImageIcon color="green" />
                    <span>Ảnh/video</span>
                </Button>
                <Button
                    variant="ghost"
                    className="flex items-center gap-1 w-full"
                >
                    <Smile color="yellow" />
                    <span>Cảm xúc/hoạt động</span>
                </Button>
            </div>
        </div>
    )
}

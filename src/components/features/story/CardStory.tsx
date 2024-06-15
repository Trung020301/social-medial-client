import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'

interface CardStoryProps {
    avatar: string
    username: string
    background: string
}

const CardStory: React.FC<CardStoryProps> = ({
    avatar,
    username,
    background,
}) => {
    return (
        <Card
            style={{ backgroundImage: `url(${background})` }}
            className="cursor-pointer p-2 w-[140px] h-[242px] bg-cover flex flex-col justify-between hover:opacity-80 duration-300"
        >
            <div className="w-[42px] h-[42px]  border-2 rounded-full border-sky-700 flex items-center justify-center">
                <Avatar>
                    <AvatarImage src={avatar} alt={username} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <span className="text-xs font-sans font-bold text-secondary">
                {username}
            </span>
        </Card>
    )
}

export default CardStory

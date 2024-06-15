import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

interface CustomeAvatarProps {
    imageUrl: string
    username: string
    alt: string
    status?: 'active' | 'offline' | string
    hasStory?: boolean
}

export default function CustomeAvatar({
    imageUrl,
    username,
    hasStory,
    alt,
    status,
}: CustomeAvatarProps) {
    return (
        <div
            className={`relative cursor-pointer w-[42px] h-[42px]  ${
                hasStory && 'border-2 rounded-full border-sky-700'
            } flex items-center justify-center`}
        >
            <Avatar>
                <AvatarImage src={imageUrl} alt={alt} />
                <AvatarFallback>{username}</AvatarFallback>
            </Avatar>
            {status === 'active' && (
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-600 border-2 border-white"></span>
            )}
        </div>
    )
}

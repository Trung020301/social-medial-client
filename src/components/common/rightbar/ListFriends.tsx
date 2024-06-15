import CustomeAvatar from '@/components/features/avatar/CustomeAvatar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { UserListFriendItemType } from '@/lib/type'
import Image from 'next/image'
import React from 'react'

const fakeData = [
    {
        avatar: '/images/avt4.jpg',
        name: 'Nguyễn Văn A',
        status: 'active',
    },
    {
        avatar: '/images/avt4.jpg',
        name: 'Nguyễn Văn B',
        status: 'active',
    },
    {
        avatar: '/images/avt4.jpg',
        name: 'Nguyễn Văn C',
        status: 'offline',
    },
]

function ListFriendItem({
    name,
    avatar,
    status,
    hasStory,
}: UserListFriendItemType) {
    return (
        <li className="flex items-center gap-3 cursor-pointer h-12 pl-2 hover:bg-slate-100  rounded-xl">
            <div className="relative cursor-pointer">
                <CustomeAvatar
                    imageUrl={avatar}
                    username={name}
                    alt={name}
                    status={status}
                    hasStory={hasStory}
                />
            </div>
            <p className="font-sm font-medium">Nguyễn Văn A</p>
        </li>
    )
}

export default function ListFriends() {
    return (
        <div>
            <p className="font-semibold mb-2">Người liên hệ</p>
            <ul className="">
                {fakeData.map((item, index) => (
                    <ListFriendItem key={index} {...item} />
                ))}
            </ul>
        </div>
    )
}

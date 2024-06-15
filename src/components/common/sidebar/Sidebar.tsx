import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BookMarked, Clapperboard, SquareUser, Users } from 'lucide-react'
import React from 'react'
import SidebarItem from './SidebarItem'
import Link from 'next/link'

const listItemsSidebar = [
    {
        Icon: Users,
        children: 'Bạn bè',
    },
    {
        Icon: Clapperboard,
        children: 'Reef',
    },
    {
        Icon: SquareUser,
        children: 'Nhóm',
    },
    {
        Icon: BookMarked,
        children: 'Đã lưu',
    },
]

export default function Sidebar() {
    return (
        <section className="w-[400px]">
            <ul>
                <Link href="/trung19586/posts">
                    <li className="flex items-center gap-3 h-12 pl-2 hover:bg-slate-100 rounded-xl">
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <strong>Trần Đình Trung</strong>
                    </li>
                </Link>
                {listItemsSidebar.map((item, index) => (
                    <SidebarItem key={index} Icon={item.Icon}>
                        {item.children}
                    </SidebarItem>
                ))}
            </ul>
        </section>
    )
}

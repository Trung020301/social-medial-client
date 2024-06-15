import { headerSizeIcon, pathRoutes } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Search from '../search'
import { Button } from '@/components/ui/button'
import {
    Bell,
    Clapperboard,
    Home,
    MessageSquareMore,
    SquareUser,
    UserCircle,
    UserPlus,
    Users,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Header() {
    return (
        <header className="px-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] sticky top-0 bg-white z-50">
            <div className="h-14 flex items-center gap-4">
                <div className="flex-[1] flex items-center gap-1  ">
                    <div className="flex items-center">
                        <Link href={pathRoutes.home}>
                            <Image
                                className="w-[40px] h-[40px]"
                                src="/images/logo.png"
                                alt="Logo"
                                width={40}
                                height={40}
                                quality={100}
                            />
                        </Link>
                    </div>
                    <Search />
                </div>
                <div className="flex-[2]">
                    <div className="h-14 flex items-center justify-center">
                        <Tabs defaultValue={pathRoutes.home}>
                            <TabsList className="w-auto h-auto bg-transparent gap-2">
                                <Link href={pathRoutes.home}>
                                    <TabsTrigger
                                        className="nav-header__item"
                                        value={pathRoutes.home}
                                    >
                                        <Home />
                                    </TabsTrigger>
                                </Link>
                                <Link href={pathRoutes.reels}>
                                    <TabsTrigger
                                        value="reels"
                                        className="nav-header__item"
                                    >
                                        <Clapperboard />
                                    </TabsTrigger>
                                </Link>
                                <Link href={pathRoutes.groups}>
                                    <TabsTrigger
                                        value="groups"
                                        className="nav-header__item"
                                    >
                                        <SquareUser />
                                    </TabsTrigger>
                                </Link>
                                <Link href={pathRoutes.login}>
                                    <TabsTrigger
                                        value="friends"
                                        className="nav-header__item"
                                    >
                                        <Users />
                                    </TabsTrigger>
                                </Link>
                                <TabsTrigger
                                    value="profile"
                                    className="nav-header__item"
                                >
                                    <UserCircle />
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                </div>
                <div className="flex-[1] flex items-center gap-4 justify-end">
                    <div className="relative">
                        <Button
                            size="icon"
                            className="rounded-full"
                            variant="outline"
                            title="Request add friends"
                        >
                            <UserPlus
                                fill="primary"
                                size={headerSizeIcon.desktop}
                            />
                        </Button>
                        <span className="dot-notification"></span>
                    </div>
                    <div className="relative">
                        <Button
                            size="icon"
                            className="rounded-full"
                            variant="outline"
                            title="Messages"
                        >
                            <MessageSquareMore
                                fill="primary"
                                size={headerSizeIcon.desktop}
                            />
                        </Button>
                        <span className="dot-notification"></span>
                    </div>

                    <div className="relative">
                        <Button
                            size="icon"
                            className="rounded-full"
                            variant="outline"
                            title="Notifications"
                        >
                            <Bell
                                fill="primary"
                                size={headerSizeIcon.desktop}
                            />
                        </Button>
                        <span className="dot-notification"></span>
                    </div>
                    <div className="relative cursor-pointer">
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-600 border-2 border-white"></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

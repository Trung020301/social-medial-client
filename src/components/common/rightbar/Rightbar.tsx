import React from 'react'
import Advertistment from './Advertistment'
import { Separator } from '@/components/ui/separator'
import ListFriends from './ListFriends'

export default function Rightbar() {
    return (
        <div className="w-[400px] -mt-4 pt-4 ">
            <Advertistment />
            <Separator className="my-2" />
            <p className="font-semibold">Trang và trang cá nhân của bạn</p>
            <Separator className="my-2" />
            <ListFriends />
        </div>
    )
}

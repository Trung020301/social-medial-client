import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Advertistment() {
    return (
        <div className="flex flex-col gap-2">
            <h4 className="font-semibold">Được tài trợ</h4>
            <Link href="/reels">
                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-100">
                    <Image
                        className="w-[100px] min-w-[100px] h-[100px] object-cover rounded-xl"
                        src="/images/avt4.jpg"
                        width={100}
                        height={100}
                        priority
                        alt="Advertistment"
                    />
                    <div className="flex flex-col gap-1 truncate">
                        <strong className="">Rủ bạn chia thưởng</strong>
                        <span className="text-xs">open.linkmomo.vn</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

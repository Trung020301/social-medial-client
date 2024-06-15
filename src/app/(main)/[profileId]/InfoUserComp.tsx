'use client'
import { useState } from 'react'
import Image from 'next/image'
import { MoreHorizontal, Rss } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import TabsField from './TabsField'

export default function InfoUserComp() {
    const checkIsFollow = false
    const [isFollow, setIsFollow] = useState(checkIsFollow)

    const handleFollow = () => {
        setIsFollow(!isFollow)
    }

    return (
        <div className="bg-white h-[71vh] flex flex-col items-center relative border-b-2">
            <div className="flex flex-col items-center ">
                <Image
                    className={`w-[1200px] h-[486px] rounded-xl object-cover`}
                    src="/images/wall.jpg"
                    alt="cover"
                    width={1200}
                    height={486}
                    loading="eager"
                />
            </div>
            <div className="w-[1200px] px-8 absolute top-2/3">
                <div className=" flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="border-4 rounded-full border-white">
                            <Image
                                className={`w-[164px] h-[164px] rounded-full object-cover`}
                                src="/images/avt4.jpg"
                                alt="avatar"
                                width={164}
                                height={164}
                                loading="eager"
                            />
                        </div>
                        <div>
                            <h1 className="font-bold text-2xl">
                                Trần Đình Trung
                            </h1>
                            <span className="text-gray-400 text-sm">
                                300 người theo dõi
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {isFollow ? (
                            <Button onClick={handleFollow}>
                                <span>Đang theo dõi</span>
                            </Button>
                        ) : (
                            <Button
                                variant="outline"
                                className="bg-sky-400 text-white gap-1"
                                onClick={handleFollow}
                            >
                                <Rss size={16} />
                                <span>Theo dõi</span>
                            </Button>
                        )}

                        <Button variant="outline">
                            <span>Nhắn tin</span>
                        </Button>
                        <Button variant="secondary">
                            <MoreHorizontal size={16} />
                        </Button>
                    </div>
                </div>
                <Separator className="mt-3" />
                <TabsField />
            </div>
        </div>
    )
}

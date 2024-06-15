'use client'
import React, { useState } from 'react'
import CustomeAvatar from '../avatar/CustomeAvatar'
import { Globe, MessageSquare, Share2, ThumbsUp, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

const fakeUser = {
    avatar: '/images/avt4.jpg',
    name: 'Nguyễn Văn A',
    alt: 'Nguyễn Van A',
    status: 'active',
    hasStory: false,
}

interface CardPostProps {
    
}

export default function CardPost() {
    const [isLiked, setIsLiked] = useState(false)

    const handleLike = () => {
        setIsLiked((prev) => !prev)
    }

    let share: string[] = ['asdasda']
    const images = ['/images/avt4.jpg', '/images/avt4.jpg', '/images/avt4.jpg']
    return (
        <Card className="flex flex-col gap-2 bg-white rounded-xl">
            <div className="p-3 flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2">
                    <CustomeAvatar
                        imageUrl={fakeUser.avatar}
                        username={fakeUser.name}
                        alt={fakeUser.alt}
                        status={fakeUser.status}
                        hasStory={fakeUser.hasStory}
                    />
                    <div>
                        <p className="font-semibold">Nguyễn Văn A</p>
                        <div className="flex items-center text-xs gap-2">
                            <time className="font-sans">1 ngày trước</time>
                            <span>
                                <Globe size={16} />
                            </span>
                        </div>
                    </div>
                </div>
                <Button size="icon" className="rounded-full" variant="ghost">
                    <X size={16} />
                </Button>
            </div>
            <p className="px-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Itaque, qui tempore expedita alias provident aliquid est magnam
                accusantium numquam nihil. Fuga eum maiores sapiente ullam. Eum
                atque accusantium neque officia.
            </p>
            <div className="grid grid-cols-3 gap-1">
                {images.map((image, index) => {
                    const isLastImage = index === images.length - 1
                    return (
                        <div
                            key={index}
                            className={`relative ${
                                isLastImage ? 'overlay' : ''
                            }`}
                        >
                            <Image
                                quality={100}
                                src={image}
                                width={100}
                                height={100}
                                loading="lazy"
                                alt={`image-${index}`}
                                className="w-full h-full object-cover"
                            />
                            {isLastImage && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <span className="text-white">{`+${
                                        images.length - index
                                    } more`}</span>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
            <Separator />
            <ul className="flex items-center justify-between text-sm text-gray-600 font-sans px-2">
                <li className="flex items-center gap-2">
                    <ThumbsUp size={12} color="blue" fill="blue" />
                    <span>{isLiked && 'Bạn và '}12 người đã thích</span>
                </li>
                <li className="flex items-center gap-2">
                    <div>
                        <span>12</span>
                        <span className="ml-1">bình luận</span>
                    </div>
                    {share.length > 0 && (
                        <div>
                            <span>12</span>
                            <span className="ml-1">chia sẻ</span>
                        </div>
                    )}
                </li>
            </ul>
            <div className="px-2 mt-1">
                <Separator />
            </div>
            <div className="flex items-center justify-around text-sm text-gray-600 font-sans pb-1 px-2">
                <Button
                    variant="ghost"
                    className="flex items-center gap-1 w-full"
                    onClick={handleLike}
                >
                    <ThumbsUp className={`${isLiked && 'text-blue-600'} `} />
                    <span className={`${isLiked && 'text-blue-600'} `}>
                        Thích
                    </span>
                </Button>
                <Button
                    variant="ghost"
                    className="flex items-center gap-1 w-full"
                >
                    <MessageSquare />
                    <span>Bình luận</span>
                </Button>
                <Button
                    variant="ghost"
                    className="flex items-center gap-1 w-full"
                >
                    <Share2 />
                    <span>Chia sẻ</span>
                </Button>
            </div>
        </Card>
    )
}

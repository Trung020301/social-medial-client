import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import dayjs from 'dayjs'
import { Clock4, Home, MapPin, Rss } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface InformationUserProfilePageProps {
    bio?: string
    live?: string
    whereFrom?: string
    followers?: string[]
    createdAt?: string
}

interface Photo {
    id?: string | number
    url: string
}

export default function InformationUserProfilePage({
    bio,
    live,
    whereFrom,
    followers,
    createdAt,
}: InformationUserProfilePageProps) {
    const fakeApi: Photo[] = [
        {
            id: 1,
            url: 'https://i.imgur.com/1.jpg',
        },
        {
            id: 2,
            url: 'https://i.imgur.com/2.jpg',
        },
        {
            id: 3,
            url: 'https://i.imgur.com/3.jpg',
        },
        {
            id: 4,
            url: 'https://i.imgur.com/4.jpg',
        },
        {
            id: 5,
            url: 'https://i.imgur.com/5.jpg',
        },
        {
            id: 6,
            url: 'https://i.imgur.com/6.jpg',
        },
        {
            id: 7,
            url: 'https://i.imgur.com/7.jpg',
        },
        {
            id: 8,
            url: 'https://i.imgur.com/8.jpg',
        },
        {
            id: 9,
            url: 'https://i.imgur.com/9.jpg',
        },
    ]
    const time = dayjs(createdAt).format('DD/MM/YYYY')
    return (
        <div className="flex flex-col gap-4">
            <Card className="p-3">
                <p className="font-semibold text-xl">Giới thiệu</p>
                <p className="text-gray-500 text-sm font-mono text-center my-1">
                    {bio || 'Chưa có tiểu sử nào để hiển thị'}
                </p>
                <Separator className="my-2" />
                <div className="flex flex-col gap-2">
                    {live && (
                        <div className="flex items-center gap-2 text-sm">
                            <Home size={18} />
                            <p>
                                Sống tại <strong>{live}</strong>
                            </p>
                        </div>
                    )}
                    {whereFrom && (
                        <div className="flex items-center gap-2 text-sm">
                            <MapPin size={18} />
                            <p>
                                Đến từ <strong>{whereFrom}</strong>
                            </p>
                        </div>
                    )}
                    {followers && (
                        <div className="flex items-center gap-2 text-sm">
                            <Rss size={18} />
                            <p>
                                Có{' '}
                                <strong>
                                    {followers.length} người theo dõi
                                </strong>
                            </p>
                        </div>
                    )}
                    {createdAt && (
                        <div className="flex items-center gap-2 text-sm">
                            <Clock4 size={18} />
                            <p>
                                Tham gia vào <strong> {time}</strong>
                            </p>
                        </div>
                    )}
                </div>
            </Card>
            <Card className="p-3">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-xl mb-2">Ảnh</p>
                    <Link href="/photos">
                        <span className="text-sm text-sky-500">
                            Xem tất cả ảnh
                        </span>
                    </Link>
                </div>
                <div>
                    <div className="grid grid-cols-3 gap-2">
                        {fakeApi.splice(0, 6).map((photo) => (
                            <div
                                key={photo.id}
                                className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-md"
                            >
                                <Image
                                    src="/images/avt4.jpg"
                                    alt="Avatar"
                                    width={150}
                                    height={150}
                                    quality={100}
                                    className="rounded-md object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    )
}

import React from 'react'
import InformationUserProfilePage from '../sidebar/Information'
import CreatePost from '@/components/features/createPost/CreatePost'
import CardPost from '@/components/features/cardPost/CardPost'

const fakeAPI = {
    bio: '"The biggest adventure you can take is to live the life of your dreams."',
    live: 'Hà Nội',
    whereFrom: 'Hà Nội',
    followers: ['1', '2', '3'],
    createdAt: '2024-06-12T12:25:36.000Z',
}

export default function page() {
    return (
        <div className="flex justify-center mt-4">
            <div className="w-[1200px] grid grid-cols-5 gap-4">
                <div className=" rounded-sm col-span-2 h-[60vh] sticky top-16">
                    <InformationUserProfilePage {...fakeAPI} />
                </div>
                <div className="flex flex-col gap-4 rounded-sm col-span-3">
                    <CreatePost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                </div>
            </div>
        </div>
    )
}

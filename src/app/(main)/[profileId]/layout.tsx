import { Metadata } from 'next'
import React from 'react'
import InfoUserComp from './InfoUserComp'

export const metadata: Metadata = {
    title: 'Profile ',
}

export default function ProfileUserPage({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <InfoUserComp />
            <div className="flex justify-center mt-4">
                <div className="w-[1200px] px-8 grid ">
                    <div className="">{children}</div>
                </div>
            </div>
        </div>
    )
}

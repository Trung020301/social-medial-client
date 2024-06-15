export type IconType = {
    name: string
    color: string
    size: number
}

export type UserListFriendItemType = {
    avatar: string
    name: string
    status?: 'active' | 'offline' | string
    hasStory?: boolean
}

export interface UserProps {
    username: string
    imageUrl: string
    hasStory?: boolean
    
}
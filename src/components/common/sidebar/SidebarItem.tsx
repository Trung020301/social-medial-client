import React from 'react'

interface ListItemProps {
    Icon: React.ElementType
    children: React.ReactNode
}

const SidebarItem: React.FC<ListItemProps> = ({ Icon, children }) => {
    return (
        <li className="flex items-center gap-3 cursor-pointer h-12 pl-2 hover:bg-slate-100  rounded-xl">
            <div className="w-[40px] flex items-center justify-center">
                <Icon />
            </div>
            <strong>{children}</strong>
        </li>
    )
}

export default SidebarItem

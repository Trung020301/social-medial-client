import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { listTabsProfileUser } from '@/lib/constants'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

export default function TabsField() {
    const { profileId } = useParams()
    const pathname = usePathname()
    const pathValue = pathname.split('/').pop()

    return (
        <Tabs defaultValue={listTabsProfileUser[0].value} value={pathValue}>
            <TabsList className="bg-transparentx">
                {listTabsProfileUser.map((item) => (
                    <Link key={item.value} href={`/${profileId}/${item.value}`}>
                        <TabsTrigger
                            className="font-semibold text-base text-gray-500 border-transparent cursor-pointer px-4"
                            value={item.value}
                        >
                            {item.label}
                        </TabsTrigger>
                    </Link>
                ))}
            </TabsList>
        </Tabs>
    )
}

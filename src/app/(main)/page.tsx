import Rightbar from '@/components/common/rightbar/Rightbar'
import Sidebar from '@/components/common/sidebar'
import CardPost from '@/components/features/cardPost/CardPost'
import CreatePost from '@/components/features/createPost/CreatePost'
import Story from '@/components/features/story/Story'

export default function HomePage() {
    return (
        <main className="flex gap-4 mt-4 pl-2 overscroll-contain">
            <div className="flex-[1] h-[90vh] sticky top-20 overflow-scroll scrollbar-none">
                <Sidebar />
            </div>
            <div className="flex-[2] max-w-[600px] flex flex-col gap-4 overflow-hidden">
                <Story />
                <CreatePost />
                <div className="flex flex-col gap-2">
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                </div>
            </div>
            <div className="flex-[1] flex justify-end h-[90vh] sticky top-20 overflow-scroll scrollbar-none">
                <Rightbar />
            </div>
        </main>
    )
}

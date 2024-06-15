import React from 'react'
import CardStory from '@/components/features/story/CardStory'
import {
    Carousel,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    CarouselContent,
} from '@/components/ui/carousel'

const fakeAPIStories = [
    {
        id: 1,
        username: 'Content story 1',
        avatar: 'https://source.unsplash.com/random/800x600',
        background: 'https://source.unsplash.com/random/800x600',
    },
    {
        id: 2,
        username: 'Content story 2',
        avatar: 'https://source.unsplash.com/random/800x600',
        background: 'https://source.unsplash.com/random/800x600',
    },
    {
        id: 3,
        username: 'Content story 3',
        avatar: 'https://source.unsplash.com/random/800x600',
        background: 'https://source.unsplash.com/random/800x600',
    },
    {
        id: 4,
        username: 'Content story 4',
        avatar: 'https://source.unsplash.com/random/800x600',
        background: 'https://source.unsplash.com/random/800x600',
    },
    {
        id: 5,
        username: 'Content story 5',
        avatar: 'https://source.unsplash.com/random/800x600',
        background: 'https://source.unsplash.com/random/800x600',
    },
    {
        id: 6,
        username: 'Content story 6',
        avatar: 'https://source.unsplash.com/random/800x600',
        background: 'https://source.unsplash.com/random/800x600',
    },
    {
        id: 7,
        username: 'Content story 7',
        avatar: 'https://source.unsplash.com/random/800x600',
        background: 'https://source.unsplash.com/random/800x600',
    },
    {
        id: 8,
        username: 'Content story 8',
        avatar: 'https://source.unsplash.com/random/800x600',
        background: 'https://source.unsplash.com/random/800x600',
    },
    {
        id: 9,
        username: 'Content story 9',
        avatar: 'https://source.unsplash.com/random/800x600',
        background: 'https://source.unsplash.com/random/800x600',
    },
    {
        id: 10,
        username: 'Content story 10',
        avatar: 'https://source.unsplash.com/random/800x600',
        background: 'https://source.unsplash.com/random/800x600',
    },
]

export default function Story() {
    return (
        <div className="overflow-hidden">
            <Carousel>
                <CarouselPrevious />
                <CarouselNext />
                <CarouselContent className="-ml-1">
                    {fakeAPIStories.map((story, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/4 pl-1"
                        >
                            <CardStory {...story} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

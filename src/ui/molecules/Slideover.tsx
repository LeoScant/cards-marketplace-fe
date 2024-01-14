import { Fragment, useMemo, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ICard } from '@/src/interfaces/card.interface'
import Image from 'next/image';
import Button from '../atoms/Button';

interface ISlideover {
    open: boolean
    setOpen: (open: boolean) => void
    card: ICard
}


export default function Slideover({ open, setOpen, card }: ISlideover) {

    // If the image url is not a valid url, use a default image
    const url = useMemo(() => {
        try {
            new URL(card.imageurl);
            return card.imageurl;
        } catch (_) {
            return "https://i.pinimg.com/originals/ed/c7/c6/edc7c6437653ab73346c7bf08c884077.jpg";
        }
    }, [card.imageurl]);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                        <div className="px-4 sm:px-6 space-y-4">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-2xl font-bold leading-6 text-gray-900">
                                                    {card?.title}
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="absolute -inset-2.5" />
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                        <Button label='Offer Trade' onClick={() => { }} />
                                            <Image
                                                src={url}
                                                className="w-full object-cover"
                                                width={600}
                                                height={100}
                                                alt='card image'
                                            />
                                            <p className="text-black mt-2">Title: {card.title}</p>
                                            <p className="text-black mt-2">Description: {card.description}</p>
                                            
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

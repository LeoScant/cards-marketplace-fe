import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Input from '../atoms/Input'
import { ICard } from '@/src/interfaces/card.interface'

export default function AddCardModal({isOpen, closeModal, card, setCard, onConfirm}: {isOpen: boolean, closeModal: any, card: ICard, setCard: any, onConfirm: any}) {
  
  const setTitle = (title: string) => {
    setCard({...card, title})
  }

    const setDescription = (description: string) => {
        setCard({...card, description})
    }

    const setImageUrl = (imageurl: string) => {
        setCard({...card, imageurl})
    }

  return (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add card
                  </Dialog.Title>
                  <div className="my-2 space-y-2">
                    <Input label='Title' name='Title' placeholder='Card name...' value={card.title} setValue={setTitle}  />
                    <Input label='Description' name='Description' placeholder='Card description...' value={card.description} setValue={setDescription}  />
                    <Input label='Url' name='Url' placeholder='Card image url..' value={card.imageurl} setValue={setImageUrl}  />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onConfirm}
                    >
                      Confirm
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  )
}

'use client';
import Wrapper from "@/src/config/wrapper";
import { ICard } from "@/src/interfaces/card.interface";
import { createCard, deleteCard } from "@/src/services/cards.api";
import useStore from "@/src/store/store"
import AddCardModal from "@/src/ui/molecules/AddCardModal";
import CardsList from "@/src/ui/molecules/CardsList";
import ProfileData from "@/src/ui/molecules/ProfileData";
import { useState } from "react";

export default function User() {
    const user = useStore((state: any) => state.user)

    const [openAddCardModal, setOpenAddCardModal] = useState(false)
    const [card, setCard] = useState({title: '', description: '', imageurl: ''} as ICard)
    console.log(user)

    const addCardConfirm = async () => {
        await createCard(card)
        setOpenAddCardModal(false)
    }

    return (
        <Wrapper>
            <div className="mx-10 mt-5">
                <ProfileData user={user} title="Your Profile" />
                <CardsList
                    cards={user?.ownedCards}
                    likedCards={user?.likedCards}
                    title="Your Cards"
                    canEdit={true}
                    onDeleteCard={(cardId: number) => {deleteCard(cardId)}}
                    canAdd={true}
                    onAddCard={()=>{setOpenAddCardModal(true)}}
                />
                <CardsList
                    cards={user?.likedCards}
                    likedCards={user?.likedCards}
                    title="Liked Cards"
                />
            </div>
            <AddCardModal isOpen={openAddCardModal} closeModal={() => setOpenAddCardModal(false)} card={card} setCard={setCard} onConfirm={addCardConfirm}  />
        </Wrapper>
    )
}
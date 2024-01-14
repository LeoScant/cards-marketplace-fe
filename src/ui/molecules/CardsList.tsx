// Import necessary dependencies
import { ICard } from "@/src/interfaces/card.interface"
import Card from "@/src/ui/Card"
import { likeCard } from "@/src/services/cards.api"
import Icon from "../atoms/Icon"

interface ICardsListProps {
    cards: ICard[],
    likedCards: ICard[],
    title: string,
    canEdit?: boolean,
    canAdd?: boolean,
    onDeleteCard?: (id: number) => void
    openDetails?: (card: ICard) => void
    onAddCard?: () => void
}

const CardsList = ({ cards, likedCards, title, canEdit=false, canAdd=false, onDeleteCard=()=>{}, openDetails=()=>{}, onAddCard }: ICardsListProps) => {
    return (
        <>
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex h-min flex-wrap">
                {cards && cards?.length > 0 ?
                    cards?.map((card: ICard) => (
                        <Card
                            key={card.id}
                            imageUrl={card.imageurl}
                            title={card.title}
                            description={card.description}
                            like={likedCards?.map((c: ICard) => c.id).includes(card.id)}
                            onClickLike={() => { likeCard(card.id) }}
                            canEdit={canEdit}
                            onClickCard={() => openDetails(card)}
                            onDelete={() => onDeleteCard(card.id)}
                        />
                    )) :
                    <div className="w-full h-40 flex justify-center items-center">
                        <p className="text-xl">No cards found</p>
                    </div>
                }
                {canAdd && <div className="m-4 flex flex-col w-[300px] justify-center items-center bg-white rounded-lg cursor-pointer space-y-2" onClick={onAddCard}>
                    <Icon type='add' onClick={()=>{}} />
                    <h1 className="text-lg text-black">Add Card</h1>
                </div>}
            </div>
        </>
    )
}

export default CardsList;
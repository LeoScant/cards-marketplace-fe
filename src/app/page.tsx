'use client';
import useStore from '../store/store';
import { useEffect, useState } from 'react';
import { getCards } from '../services/cards.api';
import Wrapper from '../config/wrapper';
import CardsList from '../ui/molecules/CardsList';
import Slideover from '../ui/molecules/Slideover';
import { ICard } from '../interfaces/card.interface';

export default function Home() {
  const cards = useStore((state: any) => state.cards)
  const user = useStore((state: any) => state.user)
  const [selectedCard, setSelectedCard] = useState<ICard | null>();
  const [openDetails, setOpenDetails] = useState(false);

  const onOpenDetails = (card: ICard) => {
    setSelectedCard(card);
    setOpenDetails(true);
  }

  useEffect(() => {
    getCards();
  }, [])

  return (
    <Wrapper>
      <main className="p-10 h-min flex-wrap">
        <CardsList
          cards={cards}
          likedCards={user?.likedCards}
          title="All Cards"
          openDetails={onOpenDetails}
        />
        {selectedCard && <Slideover open={openDetails} setOpen={setOpenDetails} card={selectedCard} />}
      </main>
    </Wrapper>
  )
}

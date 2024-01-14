import { create } from 'zustand'
import { ICard, IUser } from '../interfaces/card.interface';

interface UserState {
  token?: string;
  user?: IUser;
  isLoggedIn?: boolean;
  setUser: (user: IUser | undefined) => void;
  setToken: (token: string | undefined) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setLikedCards: (likedCards: ICard[]) => void;
}

interface CardsState {
  cards: ICard[];
  setCards: (cards: ICard[]) => void;
  addCard: (card: ICard) => void;
  deleteCard: (cardId: number) => void;
}

type StoreState = CardsState & UserState;

const useStore: any = create<StoreState>(set => ({
  cards: [],
  token: undefined,
  isLoggedIn: false,
  setCards: (cards: ICard[]) => set(() => ({ cards: cards })),
  addCard: (card: ICard) => set(() => ({ cards: [...useStore.getState().cards, card] })),
  deleteCard: (cardId: number) => set(() => ({ cards: useStore.getState().cards.filter((card: ICard) => card.id !== cardId) })),
  setToken: (token: string | undefined) => set(() => ({ token: token })),
  setIsLoggedIn: (isLoggedIn: boolean) => set(() => ({ isLoggedIn: isLoggedIn })),
  setUser: (user: IUser | undefined) => set(() => ({ user: user })),
  setLikedCards: (likedCards: ICard[]) => set(() => ({ user: { ...useStore.getState().user, likedCards: likedCards } })),
}));

export default useStore;

import { ICard, IUser } from "@/src/interfaces/card.interface";
import Button from "../atoms/Button";
import { useState } from "react";
import AddCardModal from "./AddCardModal";
import { createCard } from "@/src/services/cards.api";

export default function ProfileData({ user, title }: { user: IUser, title: string }) {
    return (
        <div className="my-4 space-y-2">
            <h1 className="text-2xl font-bold mb-3">{title}</h1>
            <div className="flex space-x-2 items-center"><h1 className="text-lg">Wallet:</h1> <p>{user?.walletAddress}</p></div>
            <div className="flex space-x-2 items-center"><h1 className="text-lg">Name:</h1> <p>{user?.username}</p></div>
            <div className="flex space-x-2 items-center"><h1 className="text-lg">Email:</h1> <p>{user?.email}</p></div>
        </div>
    )
}

import { config } from "../config/wagmi";
import useStore from "../store/store";
import api from "./api";
import { getTrades } from "./trades.api";

export const handleLogin = async (address: string, signMessage: any) => {
    const nonce = await getNonce(address);
    if (nonce) {
        const signature = await signMessage(config, { message: nonce.toString() });
        const response = await api.post(`/users/login`, { walletAddress: address, signature: signature });
        useStore.getState().setToken(response.data.token);
        useStore.getState().setUser(response.data.user);
        useStore.getState().setIsLoggedIn(true);
        await getTrades();
    }else {
        console.log("Nonce not found");
    }
}

export const handleLogout = async () => {
    useStore.getState().setToken("");
    useStore.getState().setUser({});
    useStore.getState().setIsLoggedIn(false);
}


const getNonce = async (address: string): Promise<number | undefined> => {
    try {
        const response = await api.get(`/users/getNonce`, { params: { walletAddress: address } });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

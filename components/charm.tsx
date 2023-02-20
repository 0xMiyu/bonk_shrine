import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction, PublicKey } from "@solana/web3.js";
import { FC, useCallback, useState, useRef, createElement } from "react";
import { getAssociatedTokenAddress, createTransferCheckedInstruction } from "@solana/spl-token";
import styles from '../styles/Home.module.css'
import { createRoot } from 'react-dom/client'
import { FortuneElement } from "./fortune";
import { Torii } from "./torii";
import { toast } from "react-toastify";

interface Props {
    charmType: string
}

interface Charm {
    price: number;
    name: string;
}

const charmTypes: {[id : string] : Charm;} = {
    "luck": {
        price: 2,
        name: "Good Luck"
    },
    "health": {
        price: 1,
        name: "Good Health"
    }
};

export const Charm: FC<Props> = (props: {charmType: string}) => {

    let key = props.charmType!
    
    return(<div>{props.charmType} - {charmTypes[key].price}</div>);
}
// import { keyObjects } from './keybord';
// import { KeyRowProps } from './inteface';
import { Dispatch, SetStateAction } from 'react';

export interface post {
    _id: string;
    title: string;
    text: string;
    tags: string[];
}

export interface PostsState {
    items: post[];
    loading: boolean;
}

export interface isActive {
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}


export interface keys {
    [key: string]: {
        bool: boolean;
        unbool: boolean;
        text: string;
        sc: string;
    };
}


export interface User {
    _id: string;
    fullName: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    [key: string]: string | number;
}

export interface register {
    email: string
    password: string
    fullName?: string
}

export interface shortState {
    items: { short: [], path: string }[];
}
export type kes = string[]

export interface setKeys {
    keys: keys;
    setKeys: Dispatch<SetStateAction<keys>>;
}


export interface keyObjects {
    [key: string]: {
        bool: boolean;
        unbool: boolean;
        text: string;
        sc: string;
    }
}

export interface KeyRowProps {
    keyObjects: keyObjects[]
    keys: keys;
    setKeys: Dispatch<SetStateAction<keys>>;
}
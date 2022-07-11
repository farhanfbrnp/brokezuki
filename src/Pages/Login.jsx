import React from 'react';
import { ethers } from 'ethers';

const Login = () => {

const handleLogin = async () => {
    const provider = new ethers.providers.Web3Provider(Window.ethereum);
    try {
        await provider.send("eth_requestAccounts", []);
        const myAddress = await provider.getSigner().getAddress();   
    } catch (error) {
        console.log(error)
        }
    }
}

export default Login
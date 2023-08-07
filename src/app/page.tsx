"use client"
import { getZeroDevSigner, getRPCProviderOwner } from '@zerodevapp/sdk'
import { ZeroDevWeb3Auth, ZeroDevWeb3AuthWithModal } from '@zerodevapp/web3auth';
import { Web3Provider } from '@ethersproject/providers';
import { useState, useMemo } from 'react';

//------

let defaultProjectId = "11926ef6-bfa1-4e40-8454-bd55ddb95f5d";

//-------
export default function Home() {

  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)

  const setWallet = async (provider:Web3Provider) => {
    const signer = await getZeroDevSigner({
      projectId: defaultProjectId,
      owner: await getRPCProviderOwner(provider)
    })
    setAddress(await signer.getAddress())
  }

  const zeroDevWeb3Auth = useMemo(() => {
    const instance = new ZeroDevWeb3AuthWithModal([defaultProjectId])
    instance.init({onConnect: async () => {
      setLoading(true)
      setWallet(zeroDevWeb3Auth.provider)
      setLoading(false)
    }})
    return instance
  }, [])

  const disconnect = async () => {
    await zeroDevWeb3Auth.logout()
    setAddress('')
  }

  const handleClick = async () => {
    setLoading(true)
    zeroDevWeb3Auth.connect('social').then((provider: Web3Provider) => {
      setWallet(provider)
    }).finally(() => {
      setLoading(false)
    })
  }

  const connected = !!address
  return (
    <div className='flex justify-center mt-28'>
      {connected && 
        <div className=''>
          <label>Wallet: {address}</label>
        </div>
      }
      <div className='w-36 h-12 bg-blue-500 text-white font-semibold flex justify-center'>
        {!connected && <button onClick={handleClick} disabled={loading}>{ loading ? 'loading...' : 'Create Wallet'}</button>}
        {connected && 
          <button onClick={disconnect} disabled={loading}>Disconnect</button>
        }
      </div>
    </div>
  )
   
  
}

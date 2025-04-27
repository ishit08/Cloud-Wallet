import './App.css'
import {Transaction, Connection, PublicKey, SystemProgram, LAMPORTS_PER_SOL} from '@solana/web3.js'
import axios from 'axios'

// Put the RPC URL below
const connection = new Connection(" ")
// Put Public Key of the sender below
const fromPubkey = new PublicKey(" ")
function App() {
  
  async function sendSol(){
    const ix = SystemProgram.transfer({
      fromPubkey: fromPubkey,
      // Put Public Key of the reciever below
      toPubkey: new PublicKey(" "),  
      lamports: 0.001 * LAMPORTS_PER_SOL,
    })
    const tx = new Transaction().add(ix);

    const {blockhash} =  await connection.getLatestBlockhash();
    tx.recentBlockhash = blockhash
    tx.feePayer = fromPubkey

    const serializedTx = tx.serialize({
      requireAllSignatures: false,
      verifySignatures: false,
    })

    await axios.post("http://localhost:3000/api/v1/txn/sign", {
      message: serializedTx,
      retry: false
    })
  }

  return (
    <div>
      <input type="text" placeholder="Amount" />
      <input type="password" placeholder="Address" />
      <button onClick={sendSol}>Submit</button>
    </div>
  )
}

export default App

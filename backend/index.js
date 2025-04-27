require("dotenv");
const express = require("express");
// const {userModel} = require("./models");
const {Keypair, Transaction, Connection} = require("@solana/web3.js");
const jwt = require("jsonwebtoken");
const bs58 = require("bs58");
const cors = require("cors");

// Put the RPC URL below
const connection = new Connection(" ")

const app = express();
app.use(express.json());
app.use(cors());
const JWT_SECRET = "123456";

// app.post("/api/v1/signup", async (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     const keypair = new Keypair();

//     await userModel.create({
//         username, 
//         password,
//         publicKey: keypair.publicKey.toString(),
//         privateKey: keypair.secretKey.toString()
//     })
//     res.json({
//         message: keypair.publicKey.toString()
//     })
// })

// app.post("/api/v1/signin", async (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
    
//     const user = await userModel.findOne({
//         username: username, 
//         password: password
//     });
// if(user){
//     const token = jwt.sign({
//         id: user
//     }, JWT_SECRET)
//     res.json({
//         token
//     })

// } else {
//     res.status(403).json({
//         message: "Credentials are incorrect"
//     })
// }
// })


app.post("/api/v1/txn/sign", async (req, res) => {
    const serializedTransaction = req.body.message;

    console.log("before serialise")
    console.log(serializedTransaction);

    const tx = Transaction.from(Buffer.from(serializedTransaction))
    console.log("after serialise")

    console.log(bs58)
    const keyPair = Keypair.fromSecretKey(bs58.default.decode(process.env.PRIVATE_KEY));

    const {blockhash} = await connection.getLatestBlockhash();
    tx.blockhash = blockhash
    tx.feePayer = keyPair.publicKey

    tx.sign(keyPair)

    const signature = await connection.sendTransaction(tx, [keyPair])
    console.log(signature)

    res.json({
        message: "Signed Transaction",
        signature: signature
    })
})

app.get("/api/v1/txn", (req, res) => {
    res.json({
        message: "Get Transaction"
    })
})



app.listen(3000)
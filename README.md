# Cloud Wallet

A modern Solana wallet application that allows users to send SOL tokens securely.

## Features

- Send SOL tokens to any Solana address
- Modern and responsive UI
- Input validation and error handling
- Secure transaction signing
- Real-time transaction status updates

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Solana CLI tools (optional)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ishit08/Cloud-Wallet.git
cd Cloud-Wallet
```

2. Install dependencies for both backend and frontend:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Create a `.env` file in the backend directory with your Solana private key:
```
PRIVATE_KEY=your_private_key_here
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server:
```bash
cd client
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
Cloud-Wallet/
├── backend/           # Backend server code
│   ├── index.js      # Main server file
│   └── .env          # Environment variables
├── client/           # Frontend React application
│   ├── src/          # Source files
│   └── public/       # Static files
└── README.md         # Project documentation
```

## Security Notes

- Never commit your `.env` file or private keys to version control
- Use testnet for development
- Keep your private keys secure

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
# PACTORA

Global on-chain escrow platform built on Robinhood Chain.

**Tagline:** AGREEMENTS THAT SETTLE.

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- wagmi + viem (Ethereum/Robinhood Chain)
- RainbowKit (wallet connection)
- Supabase (off-chain agreement metadata)
- Solidity + Foundry (smart contracts)

## Getting Started

1. Install Node.js (v18+) and npm.
2. `npm install`
3. Copy `.env.example` to `.env.local` and fill in values.
4. `npm run dev`
5. Open `http://localhost:3000`

## Smart Contracts

Foundry-based. Contracts live in `/contracts`.

- `forge build`
- `forge test`

## Important

This prototype is unaudited. Do not use with real funds. No token addresses,
contract addresses, or transaction hashes are fabricated in this repository.

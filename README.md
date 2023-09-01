# NFT Marketplace Backend

-   This is a solidity code of the marketplace contract having 2 contracts basicnft and marketplace contract itself.
-   It is non costodial in nature means NFT'S will not be transfered until someone buyes it from the Marketplace contract

## Acknowledgements

-   [Free Code Camp](https://www.freecodecamp.org/)

## Authors

-   [@krishnadude98](https://www.github.com/krishnadude98)

## Installation

Install packages

Yarn

```bash
  yarn install
```

Npm

```bash
    npm install
```

## Running Tests

To run tests, run the following command

Yarn

```bash
  yarn hardhat test
```

Npm

```bash
  npx hardhat test
```

## Environment Variables

To run this project, you may want to add the following environment variables to your .env file

`ETHERSCAN_API_KEY`="YOUR_ETHERSCAN_KEY" (Optional)

## Deployment

To deploy the contract run

Yarn

```bash
  yarn hardhat deploy --network [sepolia/goreli/localhost/polygon_mumbai]
```

Npm

```bash
  npx harhdta deploy --network [sepolia/goreli/localhost/polygon_mumbai]
```

## Scripts

helper scripts to easily mint or mint and list in marketplace

```bash
    yarn hardhat run scripts/mint.js --network [NETWORK]
```

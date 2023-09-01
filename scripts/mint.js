const { ethers } = require("hardhat");

async function mint() {
    const basicNft = await ethers.getContract("BasicNft");
    console.log("MInting...");
    const mintTx = await basicNft.mintNft();
    const mintTxReceipt = await mintTx.wait(1);
    const tokenId = mintTxReceipt.logs[0].args.tokenId;
    console.log(tokenId);
    console.log(await basicNft.getAddress());
}
mint()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

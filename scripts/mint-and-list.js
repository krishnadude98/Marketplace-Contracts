const { ethers } = require("hardhat");

async function mintAndList() {
    const nftMarketPlace = await ethers.getContract("NftMarketplace");
    const basicNft = await ethers.getContract("BasicNft");
    console.log("MInting...");
    const mintTx = await basicNft.mintNft();
    const mintTxReceipt = await mintTx.wait(1);
    const tokenId = mintTxReceipt.logs[0].args.tokenId;
    console.log("approving nft.........");
    const approvalTx = await basicNft.approve(nftMarketPlace.getAddress(), tokenId);
    await approvalTx.wait(1);
    console.log("Listing NFT...");
    const addr = await basicNft.getAddress();
    console.log(addr, tokenId, ethers.parseEther("0.01"));
    // const tx = await nftMarketPlace.listItem(
    //     basicNft.getAddress(),
    //     tokenId,
    //     ethers.parseEther("0.01"),
    // );
    // tx.wait(1);
    console.log("Listed.........");
}
mintAndList()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

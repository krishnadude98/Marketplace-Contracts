// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract BasicNft is ERC721 {
    string public constant TOKEN_URI =
        "ipfs://QmP51JZmTFt6d3T1hGrRCxCgrqb7VGirKqsZThm5fPv7WD/?filename=shiba.json";
        // "ipfs://QmRMyxWmArz1zL39TPEtExjf2hBjxaFnBG7YGNB31gMuNH/?filename=Bernad.json";
    uint256 private s_tokenCounter;

    constructor() ERC721("DOGEY", "DOG") {}

    function mintNft() public returns (uint256) {
        _safeMint(msg.sender, s_tokenCounter);
        s_tokenCounter++;
        return s_tokenCounter;
    }

    function tokenURI(uint256 tokenId /*tokenId*/) public view override returns (string memory) {
        return TOKEN_URI;
    }

    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }
}
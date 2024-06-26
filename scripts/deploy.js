const hre = require("hardhat");

async function main() {
  const Assessment = await hre.ethers.getContractFactory("wallet");
  const assessment = await Assessment.deploy();
  await assessment.deployed();

  console.log(`A contract with deployed to ${assessment.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

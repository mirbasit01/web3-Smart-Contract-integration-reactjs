async function main() {
  const transaction = await ethers.deployContract("Transaction");
  console.log("Transaction Address: ", await transaction.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x623563Dd6A663c9a6aD2ADC8E67d54539d053693

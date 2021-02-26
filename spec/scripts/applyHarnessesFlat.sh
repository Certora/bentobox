# SafeTransfer simplification
sed -i 's/safeT/t/g' spec/harness/bentoboxflat.sol
sed -i 's/safeT/t/g' contracts/LendingPair.sol
# Virtualize functions
perl -0777 -i -pe 's/\) public allowed\(from\)/\) virtual public allowed\(from\)/g' spec/harness/bentoboxflat.sol
perl -0777 -i -pe 's/\) public \{/\) virtual public \{ /g' spec/harness/bentoboxflat.sol
# De-virtualize constructor
perl -0777 -i -pe 's/constructor\(IERC20 wethToken_\) virtual public/constructor\(IERC20 wethToken_\) public/g' spec/harness/bentoboxflat.sol

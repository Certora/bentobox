	certoraRun.py spec/harness/BentoBoxFlatHarness.sol spec/harness/DummyERC20A.sol spec/harness/DummyWeth.sol spec/harness/SymbolicStrategy.sol spec/harness/Owner.sol  spec/harness/Borrower.sol\
    --link  SymbolicStrategy:owner=BentoBoxFlatHarness Borrower:bentoBox=BentoBoxFlatHarness \
	--settings -copyLoopUnroll=4,-b=4,-ignoreViewFunctions,-enableStorageAnalysis=true,-assumeUnwindCond,-ciMode=true,-optimisticReturnsize=true,-recursionEntryLimit=8 \
	--verify BentoBoxFlatHarness:spec/bentobox.spec \
	--staging \
	--msg "BentoBox flat without optimize with optimisticReturnsize and recursive" \
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Transaction {
    struct TransactionStructure {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
    }

    TransactionStructure[] transactions;
    event TransferEth(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp
    );

    function sendEth(
        address payable _receiver,
        uint256 amount,
        string memory _message
    ) public {
        transactions.push(
            TransactionStructure(
                msg.sender,
                _receiver,
                amount,
                _message,
                block.timestamp
            )
        );
        emit TransferEth(
            msg.sender,
            _receiver,
            amount,
            _message,
            block.timestamp
        );
    }

    function getTransactions()
        public
        view
        returns (TransactionStructure[] memory)
    {
        return transactions;
    }
}

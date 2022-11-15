// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title PasswordManager
 * @dev Store & retrieve key and password's hash in a struct
 */
contract PasswordManager {
    struct password {
        string key;
        string value;
    }

    mapping(address => password[]) myPassword;

    function createNew(string memory _key, string memory _value) public {
        uint l = myPassword[msg.sender].length;
        for (uint i = 0; i < l; i++) {
            require(
                keccak256(abi.encodePacked(myPassword[msg.sender][i].key)) !=
                    keccak256(abi.encodePacked(_key)),
                "Key already present"
            );
        }
        myPassword[msg.sender].push(password(_key, _value));
    }

    function getMyPassword() external view returns (password[] memory) {
        return myPassword[msg.sender];
    }

    function deleteKey(string memory _key) public {
        uint l = myPassword[msg.sender].length;
        for (uint i = 0; i < l; i++) {
            if (
                keccak256(abi.encodePacked(myPassword[msg.sender][i].key)) ==
                keccak256(abi.encodePacked(_key))
            ) {
                myPassword[msg.sender][i] = myPassword[msg.sender][l - 1];
                myPassword[msg.sender].pop();
                return;
            }
        }
    }

    function updateKey(string memory _key, string memory _value) public {
        uint l = myPassword[msg.sender].length;
        for (uint i = 0; i < l; i++) {
            if (
                keccak256(abi.encodePacked(myPassword[msg.sender][i].key)) ==
                keccak256(abi.encodePacked(_key))
            ) {
                myPassword[msg.sender][i].value = _value;
                return;
            }
        }
        require(1 == 0, "No key found");
    }
}

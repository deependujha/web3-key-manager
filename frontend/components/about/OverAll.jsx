import React from 'react';

const OverAll = () => {
	return (
		<div>
			<ul className="list-disc">
				<li>Connect with your metamask wallet.</li>
				<li>Create new project & the password associated with it.</li>
				<li>Save securely on the BlockChain.</li>
				<li>The password will be first encrypted using the LIT protocol.</li>
				<li>
					Encrypting the password will return us with "encrypted string blob"
					and "encrypted symmetric key". They will be uploaded on the IPFS using
					Pinata API.
				</li>
				<li>
					Uploading on the IPFS will return with the CID/ hash. We will then
					call the createNewKey() function of the smart-contract which is
					deployed on the Polygon testnet (Mumbai).
				</li>
				<li>
					When you click on 'Your password', the data is first fetched from the
					smart-contract using the function getMyPassword(), and then the we
					will get the content uploaded on the IPFS, and the LIT protocol will
					decrypt it for us if we satisfy the access-control-list condition.
				</li>
			</ul>
		</div>
	);
};

export default OverAll;

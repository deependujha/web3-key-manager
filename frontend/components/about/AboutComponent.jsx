import React from 'react';
import Abstract from './Abstract';
import SourceCode from './SourceCode';
import TechStack from './TechStack';

const AboutComponent = () => {
	return (
		<div>
			<div className="text-xl font-bold mt-5 mb-1"> Abstract</div>
			<Abstract />
			<div className="text-xl font-bold mt-5 mb-1">Tech stack 👨‍💻🚀</div>
			<TechStack />
			<div className="text-xl font-bold mt-5 mb-1">Overall flow</div>
			<div className="text-xl font-bold mt-5 mb-1">Source code 👨‍💻🤖 </div>
			<SourceCode />
			<div className="text-xl font-bold mt-5 mb-1">About the team</div>
		</div>
	);
};

export default AboutComponent;

import React from 'react';
import Abstract from './Abstract';
import OverAll from './OverAll';
import SourceCode from './SourceCode';
import Team from './Team';
import TechStack from './TechStack';

const AboutComponent = () => {
	return (
    <div className='px-10 lg:px-20'>
      <div className="text-2xl font-bold mt-12 mb-1 text-lime-900"> Abstract 🔥🚀</div>
			<Abstract />
			<hr className='my-4'></hr>
      <div className="text-2xl font-bold mt-5 mb-1 text-lime-900">Tech stack 👨‍💻🚀</div>
			<TechStack />
			<hr className='my-4'></hr>
			
      <div className="text-2xl font-bold mt-5 mb-1 text-lime-900">Overall flow 🤠🥳</div>
			<OverAll />
			<hr className='my-4'></hr>
			
      <div className="text-2xl font-bold mt-5 mb-1 text-lime-900">Source code 👨‍💻🤖 </div>
			<SourceCode />
			<hr className='my-4'></hr>
			
      <div className="text-2xl font-bold mt-5 mb-1 text-lime-900">The team 😎😎</div>
      <Team />
    </div>
  );
};

export default AboutComponent;

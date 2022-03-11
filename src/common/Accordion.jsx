import React, { useState } from 'react';

const Accordion = (props) => {
const [isOpen, toggleAccordion] = useState(false);	
	return (
		<div>
			<h3 className="accordion-title" onClick={() => toggleAccordion(!isOpen)}>
				{props.title} <i className={`fas ${ isOpen?'fa-angle-up':'fa-angle-down'}`}></i>
			</h3>
			<div className={`accordion-content ${ isOpen?'showContent':'hideContent'}`}>{props.content}</div>
		</div>
		);
}

export default Accordion;

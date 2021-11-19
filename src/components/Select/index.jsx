import React, { useState, useRef } from 'react';

import { Arrow } from '..';

import { useClickAway } from '../../hooks';

import './index.css';

export default function Select({
	className = '',
	title,
	options,
	defaultSelectedValue,
	onChange = value => console.log(`Select changed: ${value}`),
}) {
	const [selectedIdx, setSelectedIdx] = useState(
		options.findIndex(option => option.value === defaultSelectedValue),
	);
	const [optionsListVisible, setOptionsListVisible] = useState(false);

	const handleOnClick = (value, idx) => {
		setSelectedIdx(idx);
		onChange(value);
	};

	const optionsListRef = useRef(null);
	useClickAway(optionsListRef, () => setOptionsListVisible(false));

	return (
		<div className={`select-wrap ${className}`}>
			<h5 className="title">{title}</h5>
			<div
				className="select"
				onClick={e => {
					e.stopPropagation();
					setOptionsListVisible(!optionsListVisible);
				}}>
				<p className="selected-text" title={options[selectedIdx].text}>
					{options[selectedIdx].text}
				</p>
				<Arrow
					className={`arrow-icon ${
						optionsListVisible ? 'options--collapsed' : ''
					}`}
					color={'#f02132'}
				/>

				<ul
					className={`options ${
						optionsListVisible ? 'options--collapsed' : ''
					} custom-scroll`}
					ref={optionsListRef}>
					{options.map((option, idx) => (
						<li
							key={option.text}
							className={`option ${
								selectedIdx === idx ? 'option--selected' : ''
							}`}
							title={option.text}
							onClick={() => handleOnClick(option.value, idx)}>
							{option.text}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

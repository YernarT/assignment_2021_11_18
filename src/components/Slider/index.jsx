import React, { useState, useEffect } from 'react';

import { Arrow } from '..';

import './index.css';

export default function Slider({
	className,
	items,
	onChange = idx => console.log(`Slider changed: ${idx}`),
}) {
	const [activeItemIdx, setActiveItemIdx] = useState(0);

	useEffect(() => {
		setActiveItemIdx(0);
		onChange(0);
	}, [items, onChange]);

	const handleClick = direction => {
		if (direction === 'left' && activeItemIdx !== 0) {
			setActiveItemIdx(activeItemIdx - 1);
			onChange(activeItemIdx - 1);
		}

		if (direction === 'right' && activeItemIdx !== items.length - 1) {
			setActiveItemIdx(activeItemIdx + 1);
			onChange(activeItemIdx + 1);
		}
	};

	return (
		<div className={`slider ${className}`}>
			<ul className="slider-list">
				{items.map((item, idx) => (
					<li
						className={`item ${activeItemIdx === idx ? 'item--active' : ''}`}
						key={idx}>
						<img
							src={item.img}
							alt={item?.alt ?? 'slider image'}
							className="image"
						/>
					</li>
				))}
			</ul>

			<div className="controller">
				<Arrow
					size={20}
					onClick={() => handleClick('left')}
					className="left-arrow"
				/>
				<Arrow
					size={20}
					onClick={() => handleClick('right')}
					className="right-arrow"
				/>
			</div>
		</div>
	);
}

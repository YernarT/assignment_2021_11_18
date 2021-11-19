import React from 'react';

import './index.css';

export default function Arrow({
	className = '',
	size = 10,
	color = '#fff',
	...props
}) {
	return (
		<div
			className={`arrow ${className}`}
			style={{ width: size, height: size }}
			{...props}>
			<div
				className="line-1"
				style={{
					width: ((size / 2 + 1.5) ** 2 + (size / 2) ** 2) ** 0.5,
					backgroundColor: color,
				}}></div>
			<div
				className="line-2"
				style={{
					width: ((size / 2 + 2) ** 2 + (size / 2) ** 2) ** 0.5,
					backgroundColor: color,
				}}></div>
		</div>
	);
}

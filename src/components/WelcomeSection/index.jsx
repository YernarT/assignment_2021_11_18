import React from 'react';

import './index.css';

export default function WelcomeSection() {
	return (
		<section className="welcome-section">
			<div className="left">
				<h1 className="title">Галерея проектов</h1>

				<p className="desc">
					Сумма эконмии рассчиатнана в сравнении с суммой цен этого же перечня
					товаров по отдельности
				</p>

				<button className="select-design-btn">ВЫБРАТЬ ДИЗАЙН</button>
			</div>
			<div className="right">
				<HorizontalDots />
				<div className="statistic-info">
					<VerticalDots className="v-dots" />
					<h2>
						Мы успешно завершили уже <span className="data">более 450</span>{' '}
						ремонтов
					</h2>
				</div>
			</div>
		</section>
	);
}

function Dot() {
	return <div className="dot" />;
}

function HorizontalDots() {
	return (
		<div className="horizontal-dots">
			<div className="line-1">
				{[...Array(20).keys()].map(el => (
					<Dot key={el} />
				))}
			</div>
			<div className="line-2">
				{[...Array(20).keys()].map(el => (
					<Dot key={el} />
				))}
			</div>
		</div>
	);
}

function VerticalDots({ className = '' }) {
	return (
		<div className={`vertical-dots ${className}`}>
			{[...Array(9).keys()].map(el => (
				<Dot key={el} />
			))}
		</div>
	);
}

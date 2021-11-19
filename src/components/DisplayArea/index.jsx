import React, { useMemo, useCallback, useState } from 'react';

import { Select, Slider } from '..';

import { useWindowSize } from '../../hooks';

import { repairs, repairTypes } from '../../data';

import './index.css';

export default function DisplayArea() {
	// type options
	const typeSelectOptions = useMemo(
		() => repairTypes.map(type => ({ value: type.id, text: type.name })),
		[],
	);
	const handleRepairTypeChange = value => {
		setSelectedRepairsList(repairs.filter(repair => repair.typeId === value));
		setSelectedRepairIdx(0);
	};

	const [selectedRepairsList, setSelectedRepairsList] = useState(
		repairs.filter(repair => repair.typeId === typeSelectOptions[0].value),
	);
	const [selectedRepairIdx, setSelectedRepairIdx] = useState(0);

	const [sliderCurrentNumber, setSliderCurrentNumber] = useState(1);

	const handleSliderChange = useCallback(
		idx => setSliderCurrentNumber(idx + 1),
		[],
	);

	return (
		<section className="display-area">
			<div className="left">
				<div className="types">
					<Select
						className="types-select"
						title="ТИП РЕМОНТА"
						defaultSelectedValue={typeSelectOptions[0].value}
						/**
						 * options list => [ { value: text } ]
						 */
						options={typeSelectOptions}
						onChange={handleRepairTypeChange}
					/>
				</div>
				<ShowRepairs
					className="result"
					repairs={selectedRepairsList}
					selectedRepairIdx={selectedRepairIdx}
					onChange={idx => setSelectedRepairIdx(idx)}
				/>
			</div>
			<div className="right">
				<Slider
					className="repair-slider"
					/**
					 * items list => [ { img: 'example.png', alt='slider-image' } ]
					 */
					items={selectedRepairsList[selectedRepairIdx].imgs}
					onChange={handleSliderChange}
				/>

				<div className="repair-infos">
					<div className="head">
						<div className="left">
							<h3 className="name">
								{selectedRepairsList[selectedRepairIdx].name}
							</h3>
							<div className="split-line"></div>
							<div className="address">
								{selectedRepairsList[selectedRepairIdx].address}
							</div>
						</div>
						<div className="right">
							<p>
								<span>{sliderCurrentNumber}</span> /{' '}
								{selectedRepairsList[selectedRepairIdx].imgs.length}
							</p>
						</div>
					</div>

					<p className="desc">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
						ducimus quae vitae illum quidem commodi sequi a maiores obcaecati,
						voluptate totam pariatur delectus tenetur beatae soluta iusto error!
						Expedita, et. Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Impedit ducimus quae vitae illum quidem commodi sequi a
						maiores obcaecati, voluptate totam pariatur delectus tenetur beatae
						soluta iusto error! Expedita, et. Lorem ipsum dolor sit, amet
						consectetur adipisicing elit. Impedit ducimus quae vitae illum
						quidem commodi sequi a maiores obcaecati, voluptate totam pariatur
						delectus tenetur beatae soluta iusto error! Expedita, et.
					</p>
				</div>
			</div>
		</section>
	);
}

function ShowRepairs({
	repairs,
	selectedRepairIdx,
	className = '',
	onChange = idx => console.log(`repair changed: ${idx}`),
}) {
	const { width } = useWindowSize();

	const repairSelectOptions = useMemo(
		() => repairs.map((repair, idx) => ({ value: idx, text: repair.name })),
		[repairs],
	);

	return (
		<div className={`show-repairs ${className}`}>
			{width > 694 ? (
				<>
					<p className="help-text">Найдено {repairs.length} объекта: </p>
					<ul className="repairs-list custom-scroll">
						{repairs.map((repair, idx) => (
							<li
								key={repair.id}
								onClick={() => onChange(idx)}
								className={`repair 
					${selectedRepairIdx === idx ? 'repair--selected' : ''}
					`}
								title={repair.name}>
								{repair.name}
							</li>
						))}
					</ul>
				</>
			) : (
				<Select
					className="repair-select"
					title="СДЕЛАННЫЕ РЕМОНТЫ"
					defaultSelectedValue={repairSelectOptions[0].value}
					/**
					 * options list => [ { value: text } ]
					 */
					options={repairSelectOptions}
					onChange={value => onChange(value)}
				/>
			)}
		</div>
	);
}

import React from 'react';

import { WelcomeSection, DisplayArea } from './components';

import './assets/styles/customize.css';
import './assets/styles/variables.css';
import './assets/styles/App.css';

export default function App() {
	return (
		<div className="app">
			<WelcomeSection />
			<DisplayArea />
		</div>
	);
}

import { useEffect } from 'react';

export default function useClickAway(
	ref,
	callback = () => console.log('clcik outside me'),
) {
	useEffect(() => {
		const handleClickOutside = e => {
			if (ref.current && !ref.current.contains(e.target)) {
				callback();
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [ref, callback]);
}

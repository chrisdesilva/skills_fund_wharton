import React, { useState } from 'react';

const CookieBanner = () => {
	const [ isPopupVisible, showPopup ] = useState(true);

	return (
		<div className={isPopupVisible ? 'popup p-2 w-full text-sm' : 'popup hidePopup'}>
			<p className="m-0">
				By clicking OK, you agree to the use of cookies while visiting this site. Some cookies are essential to
				make our site work; others help us improve the user experience. Read our{' '}
				<a
					href="https://skills.fund/privacy-policy"
					target="_blank"
					rel="noreferrer noopener"
					className="font-bold text-primary"
				>
					{' '}
					privacy notice
				</a>{' '}
				to learn more.
			</p>
			<button className="bg-white text-black rounded-full w-12 mt-1 lg:mt-0" onClick={() => showPopup(false)}>
				OK
			</button>
		</div>
	);
};

export default CookieBanner;

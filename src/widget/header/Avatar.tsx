import { SVGProps } from 'react';
const Avatar = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 40 40'
		{...props}
	>
		<rect width={40} height={40} fill='#fff' rx={20} />
		<path
			fill='#333'
			fillRule='evenodd'
			d='M14.25 15c0 3.17 2.58 5.75 5.75 5.75s5.75-2.58 5.75-5.75S23.17 9.25 20 9.25s-5.75 2.58-5.75 5.75Zm1.5 0A4.26 4.26 0 0 1 20 10.75 4.26 4.26 0 0 1 24.25 15 4.26 4.26 0 0 1 20 19.25 4.26 4.26 0 0 1 15.75 15Zm12.09 15c0 .41.34.75.75.75s.75-.34.75-.75c0-4.27-4.19-7.75-9.34-7.75-5.15 0-9.34 3.48-9.34 7.75 0 .41.34.75.75.75s.75-.34.75-.75c0-3.45 3.52-6.25 7.84-6.25s7.84 2.8 7.84 6.25Z'
			clipRule='evenodd'
		/>
	</svg>
);
export default Avatar;

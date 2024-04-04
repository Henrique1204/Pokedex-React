import React from 'react';
import '../css/Footer.css';

export default () => {
	return (
		<footer>
			<h1>Workshop React - SENAI Suíço-Brasileira</h1>
			<ul className='container'>
				<li className='col-4'>
					<span>Paulo Henrique</span>{' '}
					<a href='https://github.com/henrique1204'>
						<span>Henrique1204</span>
					</a>
				</li>
				<li className='col-4'>
					<span>Rebecca Ramos</span>{' '}
					<a href='https://github.com/ramos-r'>
						<span>ramos-r</span>
					</a>
				</li>
				<li className='col-4'>
					<span>José Carlos</span>{' '}
					<a href='https://github.com/JoseCarlos69'>
						<span>JoseCarlos69</span>
					</a>
				</li>
				<li className='col-4'>
					<span>Felipe Braga</span>{' '}
					<a href='https://github.com/obragaa'>
						<span>obragaa</span>
					</a>
				</li>
				<li className='col-4'>
					<span>Geovanna Caserta</span>{' '}
					<a href='https://github.com/gkslima'>
						<span>gkslima</span>
					</a>
				</li>
				<li className='col-4'>
					<span>Geovanne Sousa</span>{' '}
					<a href='https://github.com/Neutro17'>
						<span>Neutro17</span>
					</a>
				</li>
			</ul>
		</footer>
	);
};

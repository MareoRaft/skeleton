import React from 'react';
import styles from './Char.module.scss';

const Char = props => (
	<div
		className={styles.Char}
		onClick={props.onClick}
	>
		{props.char}
	</div>
);

export default Char;

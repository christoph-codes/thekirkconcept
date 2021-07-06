import React, { useEffect } from 'react';
import PropTypes, { string } from 'prop-types';
import styles from './WordRiver.module.scss';

const WordRiver = ({ words, colors, maxRows, className, ...rest }) => {
	const wordBuilder = (word, color, index) => {
		return (
			<span
				key={index}
				className="fs-4xl"
				style={{ color, fontWeight: 'bold' }}
			>
				{word}
			</span>
		);
	};
	const wordLooper = () => {
		const pairs = [];
		for (let i = 0; i < words.length; i++) {
			// console.log('word: ',words[i]);
			const color = colors[i % colors.length];
			pairs.push({ word: words[i], color });
		}
		return pairs;
	};

	return (
		<article className={`${styles.WordRiver} ${className}`} {...rest}>
			<div className="river-container">
				{wordLooper().map((group, index) => {
					return wordBuilder(group.word, group.color, index);
				})}
			</div>
		</article>
	);
};

export default WordRiver;

WordRiver.propTypes = {
	words: PropTypes.arrayOf(string),
	colors: PropTypes.arrayOf(string),
	className: PropTypes.string,
};

WordRiver.defaultProps = {
	words: [''],
	colors: [''],
	className: '',
};

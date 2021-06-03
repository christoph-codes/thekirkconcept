import React from 'react';
import PropTypes from 'prop-types';
import CaseStudy from '../../templates/CaseStudy';
import fng from '../../utilities/caseStudies/fng';

const CaseStudyFNG = () => {
	return <CaseStudy caseStudy={fng} className="CaseStudyFNG" />;
};

export default CaseStudyFNG;

CaseStudyFNG.propTypes = {
	className: PropTypes.string,
};

CaseStudyFNG.defaultProps = {
	className: '',
};

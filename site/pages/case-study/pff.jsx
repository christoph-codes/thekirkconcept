import React from 'react';
import PropTypes from 'prop-types';
import CaseStudy from '../../templates/CaseStudy';
import pff from '../../utilities/caseStudies/pff';

const CaseStudyPFF = () => {
	return <CaseStudy caseStudy={pff} className="CaseStudyPFF" />;
};

export default CaseStudyPFF;

CaseStudyPFF.propTypes = {
	className: PropTypes.string,
};

CaseStudyPFF.defaultProps = {
	className: '',
};

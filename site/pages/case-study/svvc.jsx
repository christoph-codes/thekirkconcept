import React from 'react';
import PropTypes from 'prop-types';
import CaseStudy from '../../templates/CaseStudy';
import svvc from '../../utilities/caseStudies/svvc';

const CaseStudySVVC = () => {
	return <CaseStudy caseStudy={svvc} className="CaseStudySVVC" />;
};

export default CaseStudySVVC;

CaseStudySVVC.propTypes = {
	className: PropTypes.string,
};

CaseStudySVVC.defaultProps = {
	className: '',
};

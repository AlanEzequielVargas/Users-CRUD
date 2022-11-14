import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icons = ({ icon, css }) => {
	return <FontAwesomeIcon icon={icon} className={css} />;
};

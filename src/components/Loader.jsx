import React from "react";

// HOCs
import withDisplay from "HOCs/withDisplay";

import "../styles/components/Loader.css";

const Loader = () => (
  <>
    <div className="Loader">
      <div className="Loader__child">Loading...</div>
    </div>
  </>
);

Loader.displayName = "Loader";


export default withDisplay(Loader);

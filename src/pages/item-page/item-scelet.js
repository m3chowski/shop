import React from "react";
import ContentLoader from "react-content-loader";

import "./item-scelet.css";

const ItemScelet = (props) => (
  <ContentLoader
    className="item-scelet"
    speed={2}
    width={1000}
    height={221.03}
    viewBox="0 0 1000 221.03"
    backgroundColor="#707070"
    foregroundColor="#5e5e5e"
    {...props}
  >
    <rect x="14" y="242" rx="11" ry="11" width="76" height="19" />
    <rect x="146" y="240" rx="10" ry="10" width="90" height="28" />
    <rect x="0" y="13" rx="5" ry="5" width="79" height="93" />
    <rect x="118" y="16" rx="5" ry="5" width="219" height="8" />
    <rect x="119" y="40" rx="5" ry="5" width="412" height="38" />
    <rect x="118" y="91" rx="5" ry="5" width="107" height="10" />
  </ContentLoader>
);

export default ItemScelet;

import React from "react";
import ContentLoader from "react-content-loader";
import "./scelet.css";

const MyLoader = (props) => (
  <ContentLoader
    className="scelet"
    speed={2}
    width={245}
    height={280}
    viewBox="0 0 245 280"
    backgroundColor="#707070"
    foregroundColor="#2b2b2b"
    {...props}
  >
    <rect x="512" y="153" rx="3" ry="3" width="140" height="11" />
    <rect x="15" y="16" rx="17" ry="17" width="74" height="71" />
    <rect x="12" y="107" rx="10" ry="10" width="218" height="36" />
    <rect x="14" y="242" rx="11" ry="11" width="76" height="19" />
    <rect x="146" y="240" rx="10" ry="10" width="90" height="28" />
  </ContentLoader>
);

export default MyLoader;

import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="129" cy="129" r="129" />
    <rect x="0" y="275" rx="10" ry="10" width="280" height="20" />
    <rect x="0" y="315" rx="10" ry="10" width="280" height="67" />
    <rect x="0" y="405" rx="10" ry="10" width="95" height="38" />
    <rect x="122" y="405" rx="10" ry="10" width="153" height="38" />
  </ContentLoader>
);

export default Skeleton;

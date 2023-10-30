import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props: any) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="145" cy="134" r="125" />
    <rect x="0" y="278" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="330" rx="20" ry="20" width="287" height="88" />
    <rect x="1" y="433" rx="10" ry="10" width="95" height="30" />
    <rect x="129" y="426" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;

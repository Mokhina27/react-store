import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => {
  return (
    <>
    <ContentLoader 
        speed={1}
        width="100%"
        height="100%"
        viewBox="0 0 1410 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="18" ry="18" width="300" height="300" /> 
        <rect x="0" y="325" rx="18" ry="18" width="300" height="44" /> 
        <rect x="0" y="385" rx="18" ry="18" width="300" height="44" />
        <rect x="370" y="0" rx="18" ry="18" width="300" height="300" /> 
        <rect x="370" y="325" rx="18" ry="18" width="300" height="44" /> 
        <rect x="370" y="385" rx="18" ry="18" width="300" height="44" />
        <rect x="740" y="0" rx="18" ry="18" width="300" height="300" /> 
        <rect x="740" y="325" rx="18" ry="18" width="300" height="44" /> 
        <rect x="740" y="385" rx="18" ry="18" width="300" height="44" />
        <rect x="1110" y="0" rx="18" ry="18" width="300" height="300" /> 
        <rect x="1110" y="325" rx="18" ry="18" width="300" height="44" /> 
        <rect x="1110" y="385" rx="18" ry="18" width="300" height="44" />
    </ContentLoader>
    </>
  )
}

export default Skeleton
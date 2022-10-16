import React, { ReactNode } from 'react';
import { DocumentConfig, MetaTags } from '../../types/DefaultPage';

/**
 * Try to get meta tags from a component data
 */
export const tryGetMetaTags = (
  metaTags?: DocumentConfig['metaTags']
): ReactNode[] | undefined => {
  if (!metaTags) {
    return undefined;
  }
  return metaTags?.map((tag, index) => <meta {...tag} key={index} />);
};

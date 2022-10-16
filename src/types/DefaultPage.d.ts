interface MetaTags {
  content?: string;
  name?: string;
}

export interface DocumentConfig {
  /**
   * The title of the page
   */
  title?: string;
  /**
   * The description of the page
   */
  description?: string;
  /**
   * The keywords of the page
   */
  metaTags?: MetaTags[];
  /**
   * The canonical url of the page
   */
  canonical?: string;
}

interface DefaultPage<T> {
  documentConfig: DocumentConfig;
  /**
   * The page content data (if any)
   */
  layoutData: T;
}

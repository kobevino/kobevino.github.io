export interface RootData {
  site: {
    siteMetadata: SiteMetaData
  }
  socialIcons: any;
}

export interface SiteMetaData {
  siteUrl: string;
  title: string;
  social: Social[];
}

export interface Social {
  name: string;
  image: string;
  url: string;
}
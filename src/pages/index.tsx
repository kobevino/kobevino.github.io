import Contact from "components/Contact";
import FrontendArt from "components/FrontendArt";
import Scratch from "components/Scratch/indext";
import Swipe from "components/Swipe/Index";
import Technology from "components/Technology";
import { graphql, PageProps } from "gatsby";
import Layout from "layout";
import { RootData } from "models/siteInfo";

const index = ({ data }: PageProps) => {
  const { site, socialIcons } = (data as RootData);
  const { social } = site.siteMetadata;
  
  return (
    <Layout>
      <FrontendArt />
      {/* <Technology />
      <Scratch />
      <Swipe /> */}
      {/* <Contact social={social} icons={socialIcons.edges} /> */}
    </Layout>
  )
};

export default index;

export const pageQuery = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        social {
          name
          url          
        }
      }
    }
    socialIcons: allFile(filter: {relativeDirectory: {eq: "social"}}) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

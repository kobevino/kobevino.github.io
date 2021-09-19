import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { Social } from 'models/siteInfo';
import styles from './style';

interface Props {
  social: Social[];
  icons: any;
}

const Contact = ({ social, icons }: Props) => { 
  return (
    <section css={styles.section}>
      <div css={styles.container}>
        {
          social.map((item, idx) => {
            const image = getImage(icons[idx].node) as IGatsbyImageData;
            return (
              <div key={item.name} css={[styles.round]}>
                <a css={styles.link} href={item.url} target="_blank">
                  <GatsbyImage image={image} alt={item.name} />
                </a>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Contact;

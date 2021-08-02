import styles from './index.style';
import { Global } from '@emotion/react';
import common from 'styles/common';

const Layout: React.FC = ({ children }) => {
  return (
    <div css={styles.wrapper}>
      <Global 
        styles={[common]}
      />
      {children}
    </div>
  )
};

export default Layout;
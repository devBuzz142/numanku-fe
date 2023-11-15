import { useEffect } from 'react';
import * as S from './PageTemplate.style';

const PageTemplate = ({ children }) => {
  useEffect(() => {
    // zoom out as viwe port
    document.body.style.zoom = 0.7;
  }, []);

  return <S.PageTemplateContainer>{children}</S.PageTemplateContainer>;
};

export default PageTemplate;

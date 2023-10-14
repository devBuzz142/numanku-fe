import * as S from "./PageTemplate.style";

const PageTemplate = ({ children }) => {
  return (
    <S.PageTemplateContainer>
      <h1>PageTemplate</h1>
      {children}
    </S.PageTemplateContainer>
  );
};

export default PageTemplate;

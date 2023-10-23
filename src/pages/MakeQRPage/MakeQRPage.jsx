import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { generateQR } from '../../utils/generateQR';

const Container = styled.div`
  button {
    padding: 8px;
    border: 2px solid black;
    background-color: white;
  }
`;

const TEMP_URL_01 = 'https://www.naver.com';
const TEMP_URL_02 = 'https://www.google.com';

const MakeQRPage = () => {
  const [qrs, setQrs] = useState({
    view: '',
    make: '',
  });

  useEffect(() => {
    const initQRs = async () => {
      const view = await generateQR(TEMP_URL_01);
      const make = await generateQR(TEMP_URL_02);

      setQrs({
        view,
        make,
      });
    };

    initQRs();
  }, []);

  const handleDownloadClick = () => {
    for (const role of ['view', 'make']) {
      // download qr imgae
      const link = document.createElement('a');
      link.href = qrs[role];
      link.download = `${role}.png`;
      link.click();
    }
  };

  return (
    <Container>
      <h1>MakeQRPage</h1>
      <br />
      <img id="view" src={qrs.view} alt="qr" />
      <br />
      <img id="make" src={qrs.make} alt="qr" />
      <br />
      <button type="submit" onClick={handleDownloadClick}>
        DOWNLOAD
      </button>
    </Container>
  );
};

export default MakeQRPage;

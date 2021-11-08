import React from 'react';
import PDFViewDocument from 'components/organisms/PDFViewDocument';

// Create Document Component
const PreviewDocumentWithoutBgImage = () => {
  return <PDFViewDocument isShowBGImage={false} />;
};

export default PreviewDocumentWithoutBgImage;

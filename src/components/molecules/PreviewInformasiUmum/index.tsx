import { Typography } from '@material-ui/core';
import { IStateFormInformasiUmum } from 'interfaces/IStateFormInformasiUmum';
import React, { ReactElement } from 'react';
import IconCheck from 'components/atoms/IconCheck';

interface IProps {
  data?: IStateFormInformasiUmum;
}

const PreviewInformasiUmum: React.FC<IProps> = (props): ReactElement => {
  return (
    <div>
      <div>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data?.tanggal.position.top}px`,
            left: `${props.data?.tanggal.position.left}px`,
            bottom: `${props.data?.tanggal.position.bottom}px`,
            right: `${props.data?.tanggal.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.tanggal.value}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data?.jenisTransaksi.position.top}px`,
            left: `${props.data?.jenisTransaksi.position.left}px`,
            bottom: `${props.data?.jenisTransaksi.position.bottom}px`,
            right: `${props.data?.jenisTransaksi.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.jenisTransaksi.value && <IconCheck />}
        </Typography>
      </div>
    </div>
  );
};

export default PreviewInformasiUmum;

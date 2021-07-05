import { Typography } from '@material-ui/core';
import { IStateFormInformasiTransaksi } from 'interfaces/IStateFormInformasiTransaksi';
import React, { ReactElement } from 'react';
import IconCheck from 'components/atoms/IconCheck';
interface IProps {
  data?: IStateFormInformasiTransaksi;
}

const PreviewInformasiTransaksi: React.FC<IProps> = (props): ReactElement => {
  return (
    <div>
      <div>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data?.tujuanTransaksi.position.top}px`,
            left: `${props.data?.tujuanTransaksi.position.left}px`,
            bottom: `${props.data?.tujuanTransaksi.position.bottom}px`,
            right: `${props.data?.tujuanTransaksi.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.tujuanTransaksi.value && <IconCheck />}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data?.beritaTransaksi.position.top}px`,
            left: `${props.data?.beritaTransaksi.position.left}px`,
            bottom: `${props.data?.beritaTransaksi.position.bottom}px`,
            right: `${props.data?.beritaTransaksi.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.beritaTransaksi.value}
        </Typography>
      </div>
    </div>
  );
};

export default PreviewInformasiTransaksi;

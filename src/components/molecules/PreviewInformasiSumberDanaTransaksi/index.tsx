import { Typography } from '@material-ui/core';
import { IStateFormInformasiSumberDanaTransaksi } from 'interfaces/IStateFormInformasiSumberDanaTransaksi';
import React, { ReactElement } from 'react';

interface IProps {
  data?: IStateFormInformasiSumberDanaTransaksi;
}

const PreviewInformasiSumberDanaTransaksi: React.FC<IProps> = (
  props
): ReactElement => {
  return (
    <div>
      <div>
        <Typography
          style={{
            position: 'relative',
            top: `${props.data?.sumberDanaTransaksi.position.top}px`,
            left: `${props.data?.sumberDanaTransaksi.position.left}px`,
            bottom: `${props.data?.sumberDanaTransaksi.position.bottom}px`,
            right: `${props.data?.sumberDanaTransaksi.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.sumberDanaTransaksi.value}
        </Typography>
      </div>
    </div>
  );
};

export default PreviewInformasiSumberDanaTransaksi;

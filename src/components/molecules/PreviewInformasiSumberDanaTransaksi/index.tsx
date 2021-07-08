import { Typography } from '@material-ui/core';
import { IStateFormInformasiSumberDanaTransaksi } from 'interfaces/IStateFormInformasiSumberDanaTransaksi';
import React, { ReactElement } from 'react';
import IconCheck from 'components/atoms/IconCheck';
interface IProps {
  data?: IStateFormInformasiSumberDanaTransaksi;
}

const PreviewInformasiSumberDanaTransaksi: React.FC<IProps> = (
  props
): ReactElement => {
  return (
    <div>
      <div>
        {props.data?.sumberDanaTransaksi.value && (
          <Typography
            style={{
              position: 'absolute',
              top: props.data?.sumberDanaTransaksi.position[
                props.data.sumberDanaTransaksi.value
              ].top,
              left: props.data.sumberDanaTransaksi.position[
                props.data.sumberDanaTransaksi.value
              ].left,
              bottom:
                props.data.sumberDanaTransaksi.position[
                  props.data.sumberDanaTransaksi.value
                ].bottom,
              right:
                props.data.sumberDanaTransaksi.position[
                  props.data.sumberDanaTransaksi.value
                ].right,
            }}
            className='textPreviewForm'
          >
            <IconCheck />
          </Typography>
        )}
      </div>
    </div>
  );
};

export default PreviewInformasiSumberDanaTransaksi;

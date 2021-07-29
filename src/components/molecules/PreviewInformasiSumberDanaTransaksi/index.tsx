import { Typography } from '@material-ui/core';
import { IStateFormInformasiSumberDanaTransaksi } from 'interfaces/IStateFormInformasiSumberDanaTransaksi';
import React, { ReactElement } from 'react';
import IconCheck from 'components/atoms/IconCheck';
import { MINLEFT, MINTOP } from 'constant';
interface IProps {
  data: IStateFormInformasiSumberDanaTransaksi;
  isPrint?: boolean;
}

const PreviewInformasiSumberDanaTransaksi: React.FC<IProps> = (
  props
): ReactElement => {
  let topMin = props.isPrint ? MINTOP : 0;
  let leftMin = props.isPrint ? MINLEFT : 0;

  return (
    <div>
      <div>
        {props.data.sumberDanaTransaksi.value && (
          <Typography
            style={{
              position: 'absolute',
              top:
                props.data.sumberDanaTransaksi.position[
                  props.data.sumberDanaTransaksi.value
                ].top + topMin,
              left:
                props.data.sumberDanaTransaksi.position[
                  props.data.sumberDanaTransaksi.value
                ].left + leftMin,
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

import { Typography } from '@material-ui/core';
import { IStateFormInformasiTransaksi } from 'interfaces/IStateFormInformasiTransaksi';
import React, { ReactElement } from 'react';
import IconCheck from 'components/atoms/IconCheck';
import { MINLEFT, MINTOP } from 'constant';
interface IProps {
  data: IStateFormInformasiTransaksi;
  isPrint?: boolean;
}

const PreviewInformasiTransaksi: React.FC<IProps> = (props): ReactElement => {
  let topMin = props.isPrint ? MINTOP : 0;
  let leftMin = props.isPrint ? MINLEFT : 0;

  return (
    <div>
      <div>
        {props.data.tujuanTransaksi.value && (
          <Typography
            style={{
              position: 'absolute',
              top: props.data.tujuanTransaksi.value
                ? props.data.tujuanTransaksi.position[
                    props.data.tujuanTransaksi.value
                  ].top + topMin
                : props.data.tujuanTransaksi.position.bisnis.top +
                  topMin +
                  'px',
              left: props.data.tujuanTransaksi.value
                ? props.data.tujuanTransaksi.position[
                    props.data.tujuanTransaksi.value
                  ].left + leftMin
                : props.data.tujuanTransaksi.position.bisnis.left +
                  leftMin +
                  'px',
              bottom: props.data.tujuanTransaksi.value
                ? props.data.tujuanTransaksi.position[
                    props.data.tujuanTransaksi.value
                  ].bottom
                : props.data.tujuanTransaksi.position.bisnis.bottom + 'px',
              right: props.data.tujuanTransaksi.value
                ? props.data.tujuanTransaksi.position[
                    props.data.tujuanTransaksi.value
                  ].right
                : props.data.tujuanTransaksi.position.bisnis.right + 'px',
            }}
            className='textPreviewForm'
          >
            <IconCheck />
          </Typography>
        )}

        <Typography
          style={{
            position: 'absolute',
            top: `${props.data.beritaTransaksi.position.top + topMin}px`,
            left: `${props.data.beritaTransaksi.position.left + leftMin}px`,
            bottom: `${props.data.beritaTransaksi.position.bottom}px`,
            right: `${props.data.beritaTransaksi.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data.beritaTransaksi.value}
        </Typography>
      </div>
    </div>
  );
};

export default PreviewInformasiTransaksi;

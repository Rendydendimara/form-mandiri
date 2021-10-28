import { Typography } from '@material-ui/core';
import { IStateInformasiBiayaTransaksi } from 'interfaces/IStateInformasiBiayaTransaksi';
import React, { ReactElement } from 'react';
import IconCheck from 'components/atoms/IconCheck';
import { MINLEFT, MINTOP } from 'constant';

interface IProps {
  data: IStateInformasiBiayaTransaksi;
  isPrint?: boolean;
}

const PreviewInformasBiayaTransaksi: React.FC<IProps> = (
  props
): ReactElement => {
  let topMin = props.isPrint ? MINTOP : 0;
  let leftMin = props.isPrint ? MINLEFT : 0;

  return (
    <div>
      <div>
        {props.data.jenisTransaksi.value && (
          <Typography
            style={{
              position: 'absolute',
              top:
                props.data.jenisTransaksi.position[
                  props.data.jenisTransaksi.value
                ].top + topMin,
              left:
                props.data.jenisTransaksi.position[
                  props.data.jenisTransaksi.value
                ].left + leftMin,
              bottom:
                props.data.jenisTransaksi.position[
                  props.data.jenisTransaksi.value
                ].bottom,
              right:
                props.data.jenisTransaksi.position[
                  props.data.jenisTransaksi.value
                ].right,
            }}
            className='textPreviewForm'
          >
            <IconCheck />
          </Typography>
        )}

        <Typography
          style={{
            position: 'absolute',
            top: `${props.data.totalBiayaTransaksi.position.top + topMin}px`,
            left: `${props.data.totalBiayaTransaksi.position.left + leftMin}px`,
            bottom: `${props.data.totalBiayaTransaksi.position.bottom}px`,
            right: `${props.data.totalBiayaTransaksi.position.right}px`,
            letterSpacing: 9.4,
          }}
          className='textPreviewForm'
        >
          {props.data.totalBiayaTransaksi.value}
        </Typography>
        {props.data.biayaBankKoresponden.value && (
          <Typography
            style={{
              position: 'absolute',
              top:
                props.data.biayaBankKoresponden.position[
                  props.data.biayaBankKoresponden.value
                ].top + topMin,
              left:
                props.data.biayaBankKoresponden.position[
                  props.data.biayaBankKoresponden.value
                ].left + leftMin,
              bottom:
                props.data.biayaBankKoresponden.position[
                  props.data.biayaBankKoresponden.value
                ].bottom,
              right:
                props.data.biayaBankKoresponden.position[
                  props.data.biayaBankKoresponden.value
                ].right,
            }}
            className='textPreviewForm'
          >
            <IconCheck />
          </Typography>
        )}
        {props.data.lainnya.value && (
          <Typography
            style={{
              position: 'absolute',
              top: `${props.data.lainnya.position.top + topMin}px`,
              left: `${props.data.lainnya.position.left + leftMin}px`,
              bottom: `${props.data.lainnya.position.bottom}px`,
              right: `${props.data.lainnya.position.right}px`,
            }}
            className='textPreviewForm'
          >
            {props.data.lainnya.value}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default PreviewInformasBiayaTransaksi;

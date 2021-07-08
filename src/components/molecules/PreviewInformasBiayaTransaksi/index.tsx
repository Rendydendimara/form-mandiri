import { Typography } from '@material-ui/core';
import { IStateInformasiBiayaTransaksi } from 'interfaces/IStateInformasiBiayaTransaksi';
import React, { ReactElement } from 'react';
import IconCheck from 'components/atoms/IconCheck';

interface IProps {
  data?: IStateInformasiBiayaTransaksi;
}

const PreviewInformasBiayaTransaksi: React.FC<IProps> = (
  props
): ReactElement => {
  return (
    <div>
      <div>
        {props.data?.jenisTransaksi.value && (
          <Typography
            style={{
              position: 'absolute',
              top: props.data?.jenisTransaksi.position[
                props.data.jenisTransaksi.value
              ].top,
              left: props.data.jenisTransaksi.position[
                props.data.jenisTransaksi.value
              ].left,
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
            top: `${props.data?.totalBiayaTransaksi.position.top}px`,
            left: `${props.data?.totalBiayaTransaksi.position.left}px`,
            bottom: `${props.data?.totalBiayaTransaksi.position.bottom}px`,
            right: `${props.data?.totalBiayaTransaksi.position.right}px`,
            letterSpacing: 9.4,
          }}
          className='textPreviewForm'
        >
          {props.data?.totalBiayaTransaksi.value}
        </Typography>
        {props.data?.biayaBankKoresponden.value && (
          <Typography
            style={{
              position: 'absolute',
              top: props.data?.biayaBankKoresponden.position[
                props.data.biayaBankKoresponden.value
              ].top,
              left: props.data.biayaBankKoresponden.position[
                props.data.biayaBankKoresponden.value
              ].left,
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
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data?.lainnya.position.top}px`,
            left: `${props.data?.lainnya.position.left}px`,
            bottom: `${props.data?.lainnya.position.bottom}px`,
            right: `${props.data?.lainnya.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.lainnya.value}
        </Typography>
      </div>
    </div>
  );
};

export default PreviewInformasBiayaTransaksi;

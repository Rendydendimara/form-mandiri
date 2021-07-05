import { Typography } from '@material-ui/core';
import { IStateInformasiPengirim } from 'interfaces/IStateInformasiPengirim';
import React, { ReactElement } from 'react';
import IconCheck from 'components/atoms/IconCheck';

interface IProps {
  data?: IStateInformasiPengirim;
}

const PreviewInformasiPengirim: React.FC<IProps> = (props): ReactElement => {
  return (
    <div>
      <div>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data?.tipePengirim.position.top}px`,
            left: `${props.data?.tipePengirim.position.left}px`,
            bottom: `${props.data?.tipePengirim.position.bottom}px`,
            right: `${props.data?.tipePengirim.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.tipePengirim.value && <IconCheck />}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data?.jenisPengirim.position.top}px`,
            left: `${props.data?.jenisPengirim.position.left}px`,
            bottom: `${props.data?.jenisPengirim.position.bottom}px`,
            right: `${props.data?.jenisPengirim.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.jenisPengirim.value && <IconCheck />}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data?.statusKependudukan.position.top}px`,
            left: `${props.data?.statusKependudukan.position.left}px`,
            bottom: `${props.data?.statusKependudukan.position.bottom}px`,
            right: `${props.data?.statusKependudukan.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.statusKependudukan.value && <IconCheck />}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data?.nikOrPassporOrNpwpPerusahaan.position.top}px`,
            left: `${props.data?.nikOrPassporOrNpwpPerusahaan.position.left}px`,
            bottom: `${props.data?.nikOrPassporOrNpwpPerusahaan.position.bottom}px`,
            right: `${props.data?.nikOrPassporOrNpwpPerusahaan.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.nikOrPassporOrNpwpPerusahaan.value}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data?.namaPengirim.position.top}px`,
            left: `${props.data?.namaPengirim.position.left}px`,
            bottom: `${props.data?.namaPengirim.position.bottom}px`,
            right: `${props.data?.namaPengirim.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.namaPengirim.value}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data?.alamatDanNomorTelepon.position.top}px`,
            left: `${props.data?.alamatDanNomorTelepon.position.left}px`,
            bottom: `${props.data?.alamatDanNomorTelepon.position.bottom}px`,
            right: `${props.data?.alamatDanNomorTelepon.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.alamatDanNomorTelepon.value}
        </Typography>
      </div>
    </div>
  );
};

export default PreviewInformasiPengirim;

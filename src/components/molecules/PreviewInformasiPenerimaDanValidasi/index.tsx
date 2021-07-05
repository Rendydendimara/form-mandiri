import { Typography } from '@material-ui/core';
import IconCheck from 'components/atoms/IconCheck';
import { IInformasiPenerimaDanValidasi } from 'interfaces/IInformasiPenerimaDanValidasi';
import React, { ReactElement } from 'react';

interface IProps {
  data?: IInformasiPenerimaDanValidasi;
}

const PreviewInformasiPenerimaDanValidasi: React.FC<IProps> = (
  props
): ReactElement => {
  return (
    <div>
      <div>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data?.validasi.position.top}px`,
            left: `${props.data?.validasi.position.left}px`,
            bottom: `${props.data?.validasi.position.bottom}px`,
            right: `${props.data?.validasi.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.validasi.value}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data?.namaPenerima.position.top}px`,
            left: `${props.data?.namaPenerima.position.left}px`,
            bottom: `${props.data?.namaPenerima.position.bottom}px`,
            right: `${props.data?.namaPenerima.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.namaPenerima.value}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data?.noRekening.position.top}px`,
            left: `${props.data?.noRekening.position.left}px`,
            bottom: `${props.data?.noRekening.position.bottom}px`,
            right: `${props.data?.noRekening.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.noRekening.value}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data?.bank.position.top}px`,
            left: `${props.data?.bank.position.left}px`,
            bottom: `${props.data?.bank.position.bottom}px`,
            right: `${props.data?.bank.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.bank.value}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data?.alamatDanTelepon.position.top}px`,
            left: `${props.data?.alamatDanTelepon.position.left}px`,
            bottom: `${props.data?.alamatDanTelepon.position.bottom}px`,
            right: `${props.data?.alamatDanTelepon.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.alamatDanTelepon.value}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data?.jenisDanNomorIdentitas.position.top}px`,
            left: `${props.data?.jenisDanNomorIdentitas.position.left}px`,
            bottom: `${props.data?.jenisDanNomorIdentitas.position.bottom}px`,
            right: `${props.data?.jenisDanNomorIdentitas.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.jenisDanNomorIdentitas.value}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data?.jenisPenerima.position.top}px`,
            left: `${props.data?.jenisPenerima.position.left}px`,
            bottom: `${props.data?.jenisPenerima.position.bottom}px`,
            right: `${props.data?.jenisPenerima.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.jenisPenerima.value && <IconCheck />}
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
      </div>
    </div>
  );
};

export default PreviewInformasiPenerimaDanValidasi;

import { Typography } from '@material-ui/core';
import IconCheck from 'components/atoms/IconCheck';
import { IInformasiPenerimaDanValidasi } from 'interfaces/IInformasiPenerimaDanValidasi';
import React, { ReactElement } from 'react';
import { MINLEFT, MINTOP } from 'constant';

interface IProps {
  data: IInformasiPenerimaDanValidasi;
  isPrint?: boolean;
}

const PreviewInformasiPenerimaDanValidasi: React.FC<IProps> = (
  props
): ReactElement => {
  let topMin = props.isPrint ? MINTOP : 0;
  let leftMin = props.isPrint ? MINLEFT : 0;

  return (
    <div>
      <div>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data.validasi.position.top + topMin}px`,
            left: `${props.data.validasi.position.left + leftMin}px`,
            bottom: `${props.data.validasi.position.bottom}px`,
            right: `${props.data.validasi.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data.validasi.value}
        </Typography>
        {props.data.jenisPenerima.value && (
          <Typography
            style={{
              position: 'absolute',
              top: props.data.jenisPenerima.value
                ? props.data.jenisPenerima.position[
                    props.data.jenisPenerima.value
                  ].top
                : props.data.jenisPenerima.position.perorangan + 'px',
              left: props.data.jenisPenerima.value
                ? props.data.jenisPenerima.position[
                    props.data.jenisPenerima.value
                  ].left
                : props.data.jenisPenerima.position.perorangan + 'px',
              bottom: props.data.jenisPenerima.value
                ? props.data.jenisPenerima.position[
                    props.data.jenisPenerima.value
                  ].bottom
                : props.data.jenisPenerima.position.perorangan + 'px',
              right: props.data.jenisPenerima.value
                ? props.data.jenisPenerima.position[
                    props.data.jenisPenerima.value
                  ].right
                : props.data.jenisPenerima.position.perorangan + 'px',
            }}
            className='textPreviewForm'
          >
            <IconCheck />
          </Typography>
        )}
        {props.data.statusKependudukan.value && (
          <Typography
            style={{
              position: 'absolute',
              top: props.data.statusKependudukan.value
                ? props.data.statusKependudukan.position[
                    props.data.statusKependudukan.value
                  ].top
                : props.data.statusKependudukan.position.bukan_penduduk + 'px',
              left: props.data.statusKependudukan.value
                ? props.data.statusKependudukan.position[
                    props.data.statusKependudukan.value
                  ].left
                : props.data.statusKependudukan.position.bukan_penduduk + 'px',
              bottom: props.data.statusKependudukan.value
                ? props.data.statusKependudukan.position[
                    props.data.statusKependudukan.value
                  ].bottom
                : props.data.statusKependudukan.position.bukan_penduduk + 'px',
              right: props.data.statusKependudukan.value
                ? props.data.statusKependudukan.position[
                    props.data.statusKependudukan.value
                  ].right
                : props.data.statusKependudukan.position.bukan_penduduk + 'px',
            }}
            className='textPreviewForm'
          >
            <IconCheck />
          </Typography>
        )}
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data.namaPenerima.position.top + topMin}px`,
            left: `${props.data.namaPenerima.position.left + leftMin}px`,
            bottom: `${props.data.namaPenerima.position.bottom}px`,
            right: `${props.data.namaPenerima.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data.namaPenerima.value}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data.noRekening.position.top + topMin}px`,
            left: `${props.data.noRekening.position.left + leftMin}px`,
            bottom: `${props.data.noRekening.position.bottom}px`,
            right: `${props.data.noRekening.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data.noRekening.value}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data.bank.position.top + topMin}px`,
            left: `${props.data.bank.position.left + leftMin}px`,
            bottom: `${props.data.bank.position.bottom}px`,
            right: `${props.data.bank.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data.bank.value}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data.alamatDanTelepon.position.top + topMin}px`,
            left: `${props.data.alamatDanTelepon.position.left + leftMin}px`,
            bottom: `${props.data.alamatDanTelepon.position.bottom}px`,
            right: `${props.data.alamatDanTelepon.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data.alamatDanTelepon.value}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data.jenisDanNomorIdentitas.position.top + topMin}px`,
            left: `${
              props.data.jenisDanNomorIdentitas.position.left + leftMin
            }px`,
            bottom: `${props.data.jenisDanNomorIdentitas.position.bottom}px`,
            right: `${props.data.jenisDanNomorIdentitas.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data.jenisDanNomorIdentitas.value}
        </Typography>
      </div>
    </div>
  );
};

export default PreviewInformasiPenerimaDanValidasi;

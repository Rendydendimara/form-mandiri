import { Typography } from '@material-ui/core';
import IconCheck from 'components/atoms/IconCheck';
import { IStateInformasiPengirim } from 'interfaces/IStateInformasiPengirim';
import React, { ReactElement } from 'react';
import { MINLEFT, MINTOP } from 'constant';

interface IProps {
  data: IStateInformasiPengirim;
  isPrint?: boolean;
}

const PreviewInformasiPengirim: React.FC<IProps> = (props): ReactElement => {
  let topMin = props.isPrint ? MINTOP : 0;
  let leftMin = props.isPrint ? MINLEFT : 0;

  return (
    <div>
      <div>
        {props.data?.tipePengirim.value && (
          <Typography
            style={{
              position: 'absolute',
              top:
                props.data?.tipePengirim.position[props.data.tipePengirim.value]
                  .top + topMin,
              left:
                props.data.tipePengirim.position[props.data.tipePengirim.value]
                  .left + leftMin,
              bottom:
                props.data.tipePengirim.position[props.data.tipePengirim.value]
                  .bottom,
              right:
                props.data.tipePengirim.position[props.data.tipePengirim.value]
                  .right,
            }}
            className='textPreviewForm'
          >
            <IconCheck />
          </Typography>
        )}
        {props.data?.jenisPengirim.value && (
          <Typography
            style={{
              position: 'absolute',
              top: props.data?.jenisPengirim.value
                ? props.data.jenisPengirim.position[
                    props.data.jenisPengirim.value
                  ].top + topMin
                : props.data.jenisPengirim.position.perorangan.top +
                  topMin +
                  'px',
              left: props.data?.jenisPengirim.value
                ? props.data.jenisPengirim.position[
                    props.data.jenisPengirim.value
                  ].left + leftMin
                : props.data.jenisPengirim.position.perorangan.left +
                  leftMin +
                  'px',
              bottom: props.data?.jenisPengirim.value
                ? props.data.jenisPengirim.position[
                    props.data.jenisPengirim.value
                  ].bottom
                : props.data.jenisPengirim.position.perorangan.bottom + 'px',
              right: props.data?.jenisPengirim.value
                ? props.data.jenisPengirim.position[
                    props.data.jenisPengirim.value
                  ].right
                : props.data.jenisPengirim.position.perorangan.right + 'px',
            }}
            className='textPreviewForm'
          >
            <IconCheck />
          </Typography>
        )}
        {props.data?.statusKependudukan.value && (
          <Typography
            style={{
              position: 'absolute',
              top: props.data?.statusKependudukan.value
                ? props.data.statusKependudukan.position[
                    props.data.statusKependudukan.value
                  ].top + topMin
                : props.data.statusKependudukan.position.penduduk.top +
                  topMin +
                  'px',
              left: props.data?.statusKependudukan.value
                ? props.data.statusKependudukan.position[
                    props.data.statusKependudukan.value
                  ].left + leftMin
                : props.data.statusKependudukan.position.penduduk.left +
                  leftMin +
                  'px',
              bottom: props.data?.statusKependudukan.value
                ? props.data.statusKependudukan.position[
                    props.data.statusKependudukan.value
                  ].bottom
                : props.data.statusKependudukan.position.penduduk.bottom + 'px',
              right: props.data?.statusKependudukan.value
                ? props.data.statusKependudukan.position[
                    props.data.statusKependudukan.value
                  ].right
                : props.data.statusKependudukan.position.penduduk.right + 'px',
            }}
            className='textPreviewForm'
          >
            <IconCheck />
          </Typography>
        )}

        <Typography
          style={{
            position: 'absolute',
            top: `${
              props.data?.nikOrPassporOrNpwpPerusahaan.position.top + topMin
            }px`,
            left: `${
              props.data?.nikOrPassporOrNpwpPerusahaan.position.left + leftMin
            }px`,
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
            top: `${props.data?.namaPengirim.position.top + topMin}px`,
            left: `${props.data?.namaPengirim.position.left + leftMin}px`,
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
            top: `${props.data?.alamatDanNomorTelepon.position.top + topMin}px`,
            left: `${
              props.data?.alamatDanNomorTelepon.position.left + leftMin
            }px`,
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

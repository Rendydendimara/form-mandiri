import { Typography } from '@material-ui/core';
import {
  IDataTabelInformasiMetodeTransaksi,
  IStateInformasiMetodeTransaksi,
} from 'interfaces/IStateInformasiMetodeTransaksi';
import React, { ReactElement } from 'react';
import IconCheck from 'components/atoms/IconCheck';
import { MINLEFT, MINTOP } from 'constant';

interface IProps {
  data: IStateInformasiMetodeTransaksi;
  isPrint?: boolean;
}

const PreviewInformasiMetodeTransaksi: React.FC<IProps> = (
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
            top: `${props.data.cekGiro.position.top + topMin}px`,
            left: `${props.data.cekGiro.position.left + leftMin}px`,
            bottom: `${props.data.cekGiro.position.bottom}px`,
            right: `${props.data.cekGiro.position.right}px`,
            letterSpacing: 11,
          }}
          className='textPreviewForm'
        >
          {props.data.cekGiro.value}
        </Typography>
        {props.data.dataTabel.map(
          (data: IDataTabelInformasiMetodeTransaksi, index: number) => (
            <div key={index}>
              <Typography
                style={{
                  position: 'absolute',
                  top: `${data.bankTarik.position.top + topMin}px`,
                  left: `${data.bankTarik.position.left + leftMin}px`,
                  bottom: `${data.bankTarik.position.bottom}px`,
                  right: `${data.bankTarik.position.right}px`,
                }}
                className='textPreviewForm'
              >
                {data.bankTarik.value}
              </Typography>
              <Typography
                style={{
                  position: 'absolute',
                  top: `${data.noCekAtauBg.position.top + topMin}px`,
                  left: `${data.noCekAtauBg.position.left + leftMin}px`,
                  bottom: `${data.noCekAtauBg.position.bottom}px`,
                  right: `${data.noCekAtauBg.position.right}px`,
                }}
                className='textPreviewForm'
              >
                {data.noCekAtauBg.value}
              </Typography>
              <Typography
                style={{
                  position: 'absolute',
                  top: `${data.valuta.position.top + topMin}px`,
                  left: `${data.valuta.position.left + leftMin}px`,
                  bottom: `${data.valuta.position.bottom}px`,
                  right: `${data.valuta.position.right}px`,
                }}
                className='textPreviewForm'
              >
                {data.valuta.value}
              </Typography>
              <Typography
                style={{
                  position: 'absolute',
                  top: `${data.nominal.position.top + topMin}px`,
                  left: `${data.nominal.position.left + leftMin}px`,
                  bottom: `${data.nominal.position.bottom}px`,
                  right: `${data.nominal.position.right}px`,
                }}
                className='textPreviewForm'
              >
                {data.nominal.value}
              </Typography>
            </div>
          )
        )}
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data.jumlahSetoran.position.top + topMin}px`,
            left: `${props.data.jumlahSetoran.position.left + leftMin}px`,
            bottom: `${props.data.jumlahSetoran.position.bottom}px`,
            right: `${props.data.jumlahSetoran.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data.jumlahSetoran.value}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            top: `${props.data.terbilang.position.top + topMin}px`,
            left: `${props.data.terbilang.position.left + leftMin}px`,
            bottom: `${props.data.terbilang.position.bottom}px`,
            right: `${props.data.terbilang.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data.terbilang.value}
        </Typography>
      </div>
    </div>
  );
};

export default PreviewInformasiMetodeTransaksi;

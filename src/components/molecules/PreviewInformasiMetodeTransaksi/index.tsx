import { Typography } from '@material-ui/core';
import {
  IDataTabelInformasiMetodeTransaksi,
  IStateInformasiMetodeTransaksi,
} from 'interfaces/IStateInformasiMetodeTransaksi';
import React, { ReactElement } from 'react';

interface IProps {
  data?: IStateInformasiMetodeTransaksi;
}

const PreviewInformasiMetodeTransaksi: React.FC<IProps> = (
  props
): ReactElement => {
  return (
    <div>
      <div>
        <Typography
          style={{
            position: 'relative',
            top: `${props.data?.jenisTransaksi.position.top}px`,
            left: `${props.data?.jenisTransaksi.position.left}px`,
            bottom: `${props.data?.jenisTransaksi.position.bottom}px`,
            right: `${props.data?.jenisTransaksi.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.jenisTransaksi.value}
        </Typography>
        <Typography
          style={{
            position: 'relative',
            top: `${props.data?.cekGiro.position.top}px`,
            left: `${props.data?.cekGiro.position.left}px`,
            bottom: `${props.data?.cekGiro.position.bottom}px`,
            right: `${props.data?.cekGiro.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.cekGiro.value}
        </Typography>
        {props.data?.dataTabel.map(
          (data: IDataTabelInformasiMetodeTransaksi, index: number) => (
            <div key={index}>
              <Typography
                style={{
                  position: 'relative',
                  top: `${data.bankTarik.position.top}px`,
                  left: `${data.bankTarik.position.left}px`,
                  bottom: `${data.bankTarik.position.bottom}px`,
                  right: `${data.bankTarik.position.right}px`,
                }}
                className='textPreviewForm'
              >
                {data.bankTarik.value}
              </Typography>
              <Typography
                style={{
                  position: 'relative',
                  top: `${data.noCekAtauBg.position.top}px`,
                  left: `${data.noCekAtauBg.position.left}px`,
                  bottom: `${data.noCekAtauBg.position.bottom}px`,
                  right: `${data.noCekAtauBg.position.right}px`,
                }}
                className='textPreviewForm'
              >
                {data.noCekAtauBg.value}
              </Typography>
              <Typography
                style={{
                  position: 'relative',
                  top: `${data.valuta.position.top}px`,
                  left: `${data.valuta.position.left}px`,
                  bottom: `${data.valuta.position.bottom}px`,
                  right: `${data.valuta.position.right}px`,
                }}
                className='textPreviewForm'
              >
                {data.valuta.value}
              </Typography>
              <Typography
                style={{
                  position: 'relative',
                  top: `${data.nominal.position.top}px`,
                  left: `${data.nominal.position.left}px`,
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
            position: 'relative',
            top: `${props.data?.jumlahSetoran.position.top}px`,
            left: `${props.data?.jumlahSetoran.position.left}px`,
            bottom: `${props.data?.jumlahSetoran.position.bottom}px`,
            right: `${props.data?.jumlahSetoran.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.jumlahSetoran.value}
        </Typography>
        <Typography
          style={{
            position: 'relative',
            top: `${props.data?.terbilang.position.top}px`,
            left: `${props.data?.terbilang.position.left}px`,
            bottom: `${props.data?.terbilang.position.bottom}px`,
            right: `${props.data?.terbilang.position.right}px`,
          }}
          className='textPreviewForm'
        >
          {props.data?.terbilang.value}
        </Typography>
      </div>
    </div>
  );
};

export default PreviewInformasiMetodeTransaksi;

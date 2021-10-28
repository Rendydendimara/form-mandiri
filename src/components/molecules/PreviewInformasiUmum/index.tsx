import { IStateFormInformasiUmum } from 'interfaces/IStateFormInformasiUmum';
import React, { Fragment, ReactElement } from 'react';
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';
import { IPosition } from 'pages/Print';

interface IProps {
  data: IStateFormInformasiUmum;
  isPrint?: boolean;
  valueMin?: IPosition;
}
const PreviewInformasiUmum: React.FC<IProps> = (props): ReactElement => {
  let topMin = props.isPrint && props.valueMin ? props.valueMin.top : 0;
  let leftMin = props.isPrint && props.valueMin ? props.valueMin.left : 0;
  let rigthMin = props.isPrint && props.valueMin ? props.valueMin.right : 0;

  let top = props.data.tanggal.position.top + topMin;
  let right = props.data.tanggal.position.right + rigthMin;
  let bottom = props.data.tanggal.position.bottom;
  let left = props.data.tanggal.position.left + leftMin;

  return (
    <Fragment>
      <div
        style={{
          position: 'absolute',
          width: 'fit-content',
          left: right,
          top: top,
          right: left,
          bottom: bottom,
        }}
        // className='tanggal'
      >
        {props.data.tanggal.value}
      </div>
      {props.data.jenisTransaksi.value && (
        <CheckIcon
          style={{
            width: 16,
            height: 16,
            position: 'absolute',
            top: props.data.jenisTransaksi.value
              ? props.data.jenisTransaksi.position[
                  props.data.jenisTransaksi.value
                ].top + topMin
              : props.data.jenisTransaksi.position.rtgs.top + topMin,
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
              ].right + rigthMin,
          }}
          // className='tanggal'
        />
      )}

      {/* <IconCheck
          style={{
            width: 'fit-content',
            position: 'absolute',
            top: props.data.jenisTransaksi.value
              ? props.data.jenisTransaksi.position[
                  props.data.jenisTransaksi.value
                ].top + topMin
              : props.data.jenisTransaksi.position.rtgs.top + topMin,
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
        /> */}
      {/* )} */}
    </Fragment>
  );
};
PreviewInformasiUmum.defaultProps = {
  isPrint: false,
};
export default PreviewInformasiUmum;

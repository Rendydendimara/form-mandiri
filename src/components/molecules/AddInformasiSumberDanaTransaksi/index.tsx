import { Collapse } from '@material-ui/core';
import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/CalenderIcon.svg';
import { Button, DropDown } from 'components/atoms';
import { INITIAL_STATE, optionsSelectSumberDanaTransaksi } from 'constant';
import { EnumSumberDanaTransaksi } from 'enum';
import { IStateFormInformasiSumberDanaTransaksi } from 'interfaces/IStateFormInformasiSumberDanaTransaksi';
import React, { ReactElement, useState } from 'react';
import InputPositionComponent from 'components/molecules/InputPositionComponent';
import { getLocal } from 'local/localStorage';
import { IDataGlobal } from 'interfaces/IDataGlobal';

interface IProps {
  changeInformasiSumberDanaTransaksi: (
    data: IStateFormInformasiSumberDanaTransaksi
  ) => void;
}

const AddInformasiSumberDanaTransaksi: React.FC<IProps> = (
  props
): ReactElement => {
  const DATA_COOKIE_FORM_MANDIRI: IDataGlobal = getLocal('DataCookieForm');
  const [
    stateInformasiSumberDanaTransaksi,
    setStateInformasiSumberDanaTransaksi,
  ] = useState<any>({
    sumberDanaTransaksi: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiSumberDanaTransaksi
          .sumberDanaTransaksi
      : INITIAL_STATE,
  });
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);

  const handleToogleForm = (): void => {
    setIsOpenForm(!isOpenForm);
  };

  const handleChangeSelectSumberDanaTransaksi = async (
    event: React.ChangeEvent<{
      value:
        | EnumSumberDanaTransaksi.DANA_PEMERINTAH
        | EnumSumberDanaTransaksi.GAJI_PENGHASILAN
        | EnumSumberDanaTransaksi.HASIL_USAHA
        | EnumSumberDanaTransaksi.HIBAH_HADIAH
        | EnumSumberDanaTransaksi.PENJUALAN_ASSET
        | EnumSumberDanaTransaksi.SUMBANGAN
        | EnumSumberDanaTransaksi.TABUNGAN_HASIL_INVESTASI
        | EnumSumberDanaTransaksi.WARISAN;
    }>
  ): Promise<void> => {
    setStateInformasiSumberDanaTransaksi({
      ...stateInformasiSumberDanaTransaksi,
      sumberDanaTransaksi: {
        ...stateInformasiSumberDanaTransaksi.sumberDanaTransaksi,
        value: event.target.value,
      },
    });
    let cloneStateInformasiSumberDanaTransaksi: IStateFormInformasiSumberDanaTransaksi =
      {
        ...stateInformasiSumberDanaTransaksi,
      };
    await setStateInformasiSumberDanaTransaksi(
      (prevState: IStateFormInformasiSumberDanaTransaksi) => {
        cloneStateInformasiSumberDanaTransaksi = prevState;
        return prevState;
      }
    );
    props.changeInformasiSumberDanaTransaksi(
      cloneStateInformasiSumberDanaTransaksi
    );
  };
  const onChangePositionSumberDanaTransaksi = (
    key: string,
    positionName: string,
    value: number
  ) => {
    const category: any = {
      ...stateInformasiSumberDanaTransaksi[String(key)],
    };
    category['position'] = {
      ...category['position'],
      [positionName]: value,
    };
    setStateInformasiSumberDanaTransaksi({
      ...stateInformasiSumberDanaTransaksi,
      [key]: category,
    });

    const tempStatePositionInformasiBiayaTransaksi: IStateFormInformasiSumberDanaTransaksi =
      {
        ...stateInformasiSumberDanaTransaksi,
        [key]: category,
      };
    props.changeInformasiSumberDanaTransaksi(
      tempStatePositionInformasiBiayaTransaksi
    );
  };
  return (
    <div>
      <Button
        startIcon={<CalenderIcon />}
        endIcon={<AddIcon />}
        styleType='btn-aside'
        onClick={handleToogleForm}
      >
        Informasi Sumber Dana Transaksi
      </Button>
      <Collapse in={isOpenForm} timeout='auto' unmountOnExit>
        <div className='GlobalContainerSidebarForm'>
          <DropDown
            label='Sumber Dana Transaksi'
            onChange={handleChangeSelectSumberDanaTransaksi}
            options={optionsSelectSumberDanaTransaksi}
            value={stateInformasiSumberDanaTransaksi.sumberDanaTransaksi.value}
          />
          <InputPositionComponent
            dataPosition={
              stateInformasiSumberDanaTransaksi.sumberDanaTransaksi.position
            }
            handleChange={onChangePositionSumberDanaTransaksi}
            name='sumberDanaTransaksi'
          />
        </div>
      </Collapse>
    </div>
  );
};

export default AddInformasiSumberDanaTransaksi;

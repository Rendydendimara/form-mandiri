import Collapse from '@material-ui/core/Collapse';
import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/CalenderIcon.svg';
import { Button, DropDown, Textfield } from 'components/atoms';
import { INITIAL_STATE, optionsStatusKependudukan } from 'constant';
import { EnumSelectTujuanTransaksi } from 'enum';
import { IStateFormInformasiTransaksi } from 'interfaces/IStateFormInformasiTransaksi';
import React, { Fragment, ReactElement, useState } from 'react';
import InputPositionComponent from 'components/molecules/InputPositionComponent';
import { getLocal } from 'local/localStorage';
import { IDataGlobal } from 'interfaces/IDataGlobal';

interface IProps {
  changeInformasiTransaksi: (data: IStateFormInformasiTransaksi) => void;
}

const AddInformasiTransaksi: React.FC<IProps> = (props): ReactElement => {
  const DATA_COOKIE_FORM_MANDIRI: IDataGlobal = getLocal('DataCookieForm');
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const [stateInformasiTransaksi, setStateInformasiTransaksi] = useState<any>({
    tujuanTransaksi:
      DATA_COOKIE_FORM_MANDIRI.informasiTransaksi.tujuanTransaksi ||
      INITIAL_STATE,
    beritaTransaksi:
      DATA_COOKIE_FORM_MANDIRI.informasiTransaksi.beritaTransaksi ||
      INITIAL_STATE,
  });

  const handleChangeStateInformasiTransaksi = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): Promise<void> => {
    const category: any = {
      ...stateInformasiTransaksi[String(event.target.name)],
    };
    category['value'] = event.target.value;
    setStateInformasiTransaksi({
      ...stateInformasiTransaksi,
      [event.target.name]: category,
    });

    let cloneStateInformasiTransaksi: IStateFormInformasiTransaksi = {
      ...stateInformasiTransaksi,
    };
    await setStateInformasiTransaksi(
      (prevState: IStateFormInformasiTransaksi) => {
        cloneStateInformasiTransaksi = prevState;
        return prevState;
      }
    );
    props.changeInformasiTransaksi(cloneStateInformasiTransaksi);
  };

  const handleToogleForm = (): void => {
    setIsOpenForm(!isOpenForm);
  };

  const handleChangeSelectTujuanTransaksi = async (
    event: React.ChangeEvent<{
      value:
        | EnumSelectTujuanTransaksi.BIAYA_HIDUP
        | EnumSelectTujuanTransaksi.BISNIS
        | EnumSelectTujuanTransaksi.DONASI_ATAU_AMAL
        | EnumSelectTujuanTransaksi.PEMBAYARAN
        | EnumSelectTujuanTransaksi.PEMBELIAN_BARANG_ATAU_JASA
        | EnumSelectTujuanTransaksi.TABUNGAN_ATAU_INVESTASI;
    }>
  ): Promise<void> => {
    setStateInformasiTransaksi({
      ...stateInformasiTransaksi,
      tujuanTransaksi: {
        ...stateInformasiTransaksi.tujuanTransaksi,
        value: event.target.value,
      },
    });
    let cloneStateInformasiTransaksi: IStateFormInformasiTransaksi = {
      ...stateInformasiTransaksi,
    };
    await setStateInformasiTransaksi(
      (prevState: IStateFormInformasiTransaksi) => {
        cloneStateInformasiTransaksi = prevState;
        return prevState;
      }
    );
    props.changeInformasiTransaksi(cloneStateInformasiTransaksi);
  };

  const onChangePositionComponent = (
    key: string,
    positionName: string,
    value: number
  ) => {
    const category: any = {
      ...stateInformasiTransaksi[String(key)],
    };
    category['position'] = {
      ...category['position'],
      [positionName]: value,
    };
    setStateInformasiTransaksi({
      ...stateInformasiTransaksi,
      [key]: category,
    });
    const cloneStateInformasiTransaksi: IStateFormInformasiTransaksi = {
      ...stateInformasiTransaksi,
      [key]: category,
    };
    props.changeInformasiTransaksi(cloneStateInformasiTransaksi);
  };

  return (
    <div>
      <Button
        startIcon={<CalenderIcon />}
        endIcon={<AddIcon />}
        styleType='btn-aside'
        onClick={handleToogleForm}
      >
        Informasi Transaksi
      </Button>
      <Collapse in={isOpenForm} timeout='auto' unmountOnExit>
        <div className='GlobalContainerSidebarForm'>
          <Fragment>
            <DropDown
              label='Tujuan Transaksi'
              onChange={handleChangeSelectTujuanTransaksi}
              options={optionsStatusKependudukan}
              value={stateInformasiTransaksi.tujuanTransaksi.value}
            />
            <InputPositionComponent
              dataPosition={stateInformasiTransaksi.tujuanTransaksi.position}
              handleChange={onChangePositionComponent}
              name='tujuanTransaksi'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='Berita Transaksi'
              placeholder='Berita transaksi'
              value={stateInformasiTransaksi.beritaTransaksi.value}
              name='beritaTransaksi'
              onChange={handleChangeStateInformasiTransaksi}
            />
            <InputPositionComponent
              dataPosition={stateInformasiTransaksi.beritaTransaksi.position}
              handleChange={onChangePositionComponent}
              name='beritaTransaksi'
            />
          </Fragment>
        </div>
      </Collapse>
    </div>
  );
};

export default AddInformasiTransaksi;

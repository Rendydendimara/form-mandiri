import { Collapse } from '@material-ui/core';
import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/CalenderIcon.svg';
import { Button, DropDown, Textfield } from 'components/atoms';
import {
  INITIAL_STATE,
  optionsJenisPengirim,
  optionsStatusKependudukan,
  optionsTipePengirim,
} from 'constant';
import {
  EnumSelectJenisPengirim,
  EnumStatusKependudukan,
  EnumTipePengirim,
} from 'enum';
import { IStateInformasiPengirim } from 'interfaces/IStateInformasiPengirim';
import React, { Fragment, ReactElement, useState } from 'react';
import InputPositionComponent from 'components/molecules/InputPositionComponent';
import { getLocal } from 'local/localStorage';
import { IDataGlobal } from 'interfaces/IDataGlobal';

interface IProps {
  changeInformasiPengirim: (data: IStateInformasiPengirim) => void;
}

const AddInformasiPengirima: React.FC<IProps> = (props): ReactElement => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const DATA_COOKIE_FORM_MANDIRI: IDataGlobal = getLocal('DataCookieForm');
  const [stateInformasiPengirim, setStateInformasiPengirim] = useState<any>({
    tipePengirim: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiPengirim.tipePengirim
      : INITIAL_STATE,
    nikOrPassporOrNpwpPerusahaan: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiPengirim.nikOrPassporOrNpwpPerusahaan
      : INITIAL_STATE,
    jenisPengirim: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiPengirim.jenisPengirim
      : INITIAL_STATE,
    statusKependudukan: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiPengirim.statusKependudukan
      : INITIAL_STATE,
    namaPengirim: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiPengirim.namaPengirim
      : INITIAL_STATE,
    alamatDanNomorTelepon: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiPengirim.alamatDanNomorTelepon
      : INITIAL_STATE,
  });

  const handleToogleForm = (): void => {
    setIsOpenForm(!isOpenForm);
  };

  const handleChangeStateInformasiPengirima = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): Promise<void> => {
    const category: any = {
      ...stateInformasiPengirim[String(event.target.name)],
    };
    category['value'] = event.target.value;
    setStateInformasiPengirim({
      ...stateInformasiPengirim,
      [event.target.name]: category,
    });
    let cloneStateInformasiPengirim: IStateInformasiPengirim = {
      ...stateInformasiPengirim,
    };
    await setStateInformasiPengirim((prevState: IStateInformasiPengirim) => {
      cloneStateInformasiPengirim = prevState;
      return prevState;
    });
    props.changeInformasiPengirim(cloneStateInformasiPengirim);
  };

  const handleChangeSelectJenisPengirim = async (
    event: React.ChangeEvent<{
      value:
        | EnumSelectJenisPengirim.PERORANGAN
        | EnumSelectJenisPengirim.PERUSAHAAN
        | EnumSelectJenisPengirim.PEMERINTAH;
    }>
  ): Promise<void> => {
    setStateInformasiPengirim({
      ...stateInformasiPengirim,
      jenisPengirim: {
        ...stateInformasiPengirim.jenisPengirim,
        value: event.target.value,
      },
    });
    let cloneStateInformasiPengirim: IStateInformasiPengirim = {
      ...stateInformasiPengirim,
    };
    await setStateInformasiPengirim((prevState: IStateInformasiPengirim) => {
      cloneStateInformasiPengirim = prevState;
      return prevState;
    });
    props.changeInformasiPengirim(cloneStateInformasiPengirim);
  };

  const handleChangeSelectTipePengirim = async (
    event: React.ChangeEvent<{
      value: EnumTipePengirim.NASABAH | EnumTipePengirim.NONSABAH;
    }>
  ): Promise<void> => {
    setStateInformasiPengirim({
      ...stateInformasiPengirim,
      tipePengirim: {
        ...stateInformasiPengirim.tipePengirim,
        value: event.target.value,
      },
    });
    let cloneStateInformasiPengirim: IStateInformasiPengirim = {
      ...stateInformasiPengirim,
    };
    await setStateInformasiPengirim((prevState: IStateInformasiPengirim) => {
      cloneStateInformasiPengirim = prevState;
      return prevState;
    });
    props.changeInformasiPengirim(cloneStateInformasiPengirim);
  };

  const handleChangeSelectStatusKependudukan = async (
    event: React.ChangeEvent<{
      value:
        | EnumStatusKependudukan.PENDUDUK
        | EnumStatusKependudukan.BUKAN_PENDUDUK;
    }>
  ): Promise<void> => {
    setStateInformasiPengirim({
      ...stateInformasiPengirim,
      statusKependudukan: {
        ...stateInformasiPengirim.statusKependudukan,
        value: event.target.value,
      },
    });
    let cloneStateInformasiPengirim: IStateInformasiPengirim = {
      ...stateInformasiPengirim,
    };
    await setStateInformasiPengirim((prevState: IStateInformasiPengirim) => {
      cloneStateInformasiPengirim = prevState;
      return prevState;
    });
    props.changeInformasiPengirim(cloneStateInformasiPengirim);
  };

  const onChangePositionComponent = (
    key: string,
    positionName: string,
    value: number
  ) => {
    const category: any = {
      ...stateInformasiPengirim[String(key)],
    };
    category['position'] = {
      ...category['position'],
      [positionName]: value,
    };
    setStateInformasiPengirim({
      ...stateInformasiPengirim,
      [key]: category,
    });
    const tempStatePositionInformasiPengirim: IStateInformasiPengirim = {
      ...stateInformasiPengirim,
      [key]: category,
    };
    props.changeInformasiPengirim(tempStatePositionInformasiPengirim);
  };

  return (
    <div>
      <Button
        startIcon={<CalenderIcon />}
        endIcon={<AddIcon />}
        styleType='btn-aside'
        onClick={handleToogleForm}
      >
        Informasi Pengirim
      </Button>
      <Collapse in={isOpenForm} timeout='auto' unmountOnExit>
        <div className='GlobalContainerSidebarForm'>
          <Fragment>
            <DropDown
              label='Tipe Pengirim'
              onChange={handleChangeSelectTipePengirim}
              options={optionsTipePengirim}
              value={stateInformasiPengirim.tipePengirim.value}
            />
            <InputPositionComponent
              dataPosition={stateInformasiPengirim.tipePengirim.position}
              handleChange={onChangePositionComponent}
              name='tipePengirim'
            />
          </Fragment>
          <Fragment>
            <DropDown
              label='Jenis Pengirim'
              onChange={handleChangeSelectJenisPengirim}
              options={optionsJenisPengirim}
              value={stateInformasiPengirim.jenisPengirim.value}
            />
            <InputPositionComponent
              dataPosition={stateInformasiPengirim.jenisPengirim.position}
              handleChange={onChangePositionComponent}
              name='jenisPengirim'
            />
          </Fragment>
          <Fragment>
            <DropDown
              label='Status Kependudukan'
              onChange={handleChangeSelectStatusKependudukan}
              options={optionsStatusKependudukan}
              value={stateInformasiPengirim.statusKependudukan.value}
            />
            <InputPositionComponent
              dataPosition={stateInformasiPengirim.statusKependudukan.position}
              handleChange={onChangePositionComponent}
              name='statusKependudukan'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='NIK / Paspor (WNA) / NPWP (Perusahaan)'
              placeholder='NIK / Paspor (WNA) / NPWP (Perusahaan)'
              value={stateInformasiPengirim.nikOrPassporOrNpwpPerusahaan.value}
              name='nikOrPassporOrNpwpPerusahaan'
              onChange={handleChangeStateInformasiPengirima}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiPengirim.nikOrPassporOrNpwpPerusahaan.position
              }
              handleChange={onChangePositionComponent}
              name='nikOrPassporOrNpwpPerusahaan'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='Nama'
              placeholder='Nama'
              value={stateInformasiPengirim.namaPengirim.value}
              name='namaPengirim'
              onChange={handleChangeStateInformasiPengirima}
            />
            <InputPositionComponent
              dataPosition={stateInformasiPengirim.namaPengirim.position}
              handleChange={onChangePositionComponent}
              name='namaPengirim'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='Alamat & nomor telepon'
              placeholder='Alamat & nomor telepon'
              value={stateInformasiPengirim.alamatDanNomorTelepon.value}
              name='alamatDanNomorTelepon'
              onChange={handleChangeStateInformasiPengirima}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiPengirim.alamatDanNomorTelepon.position
              }
              handleChange={onChangePositionComponent}
              name='alamatDanNomorTelepon'
            />
          </Fragment>
        </div>
      </Collapse>
    </div>
  );
};

export default AddInformasiPengirima;

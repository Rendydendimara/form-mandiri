import { Collapse } from '@material-ui/core';
import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as UserIcon } from 'assets/icons/UserIcon.svg';
import { Button, DropDown, Textfield } from 'components/atoms';
import {
  INITIAL_STATE,
  INITIAL_STATE_JENIS_PENERIMA,
  optionsSelectJenisPenerima,
  optionsSelectStatusKependudukan,
  VERSION_LOCAL_STORAGE_FORM_MANDIRI,
} from 'constant';
import { EnumSelectJenisPenerima, EnumStatusKependudukan } from 'enum';
import { IInformasiPenerimaDanValidasi } from 'interfaces/IInformasiPenerimaDanValidasi';
import React, { Fragment, ReactElement, useState } from 'react';
import InputPositionComponent from 'components/molecules/InputPositionComponent';
import { getLocal } from 'local/localStorage';
import { IDataGlobal } from 'interfaces/IDataGlobal';

interface IProps {
  changeInformasiPenerimaDanValidasi: (
    data: IInformasiPenerimaDanValidasi
  ) => void;
}

const AddInformasiPenerimaDanValidasi: React.FC<IProps> = (
  props
): ReactElement => {
  const DATA_COOKIE_FORM_MANDIRI: IDataGlobal = getLocal(
    VERSION_LOCAL_STORAGE_FORM_MANDIRI
  );
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const [
    stateInformasiPenerimaDanValidas,
    setStateInformasiPenerimaDanValidas,
  ] = useState<any>({
    validasi: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiPenerimaDanValidasi.validasi
      : INITIAL_STATE,
    namaPenerima: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiPenerimaDanValidasi.namaPenerima
      : INITIAL_STATE,
    noRekening: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiPenerimaDanValidasi.noRekening
      : INITIAL_STATE,
    bank: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiPenerimaDanValidasi.bank
      : INITIAL_STATE,
    alamatDanTelepon: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiPenerimaDanValidasi.alamatDanTelepon
      : INITIAL_STATE,
    jenisDanNomorIdentitas: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiPenerimaDanValidasi
          .jenisDanNomorIdentitas
      : INITIAL_STATE,
    jenisPenerima: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiPenerimaDanValidasi.jenisPenerima
      : INITIAL_STATE_JENIS_PENERIMA,
    statusKependudukan: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiPenerimaDanValidasi.statusKependudukan
      : INITIAL_STATE,
  });

  const handleChangeStateInformasiPenerimaDanValidas = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): Promise<void> => {
    const category: any = {
      ...stateInformasiPenerimaDanValidas[String(event.target.name)],
    };
    category['value'] = event.target.value;
    setStateInformasiPenerimaDanValidas({
      ...stateInformasiPenerimaDanValidas,
      [event.target.name]: category,
    });
    let cloneStateInformasiPenerimaDanValidas: IInformasiPenerimaDanValidasi = {
      ...stateInformasiPenerimaDanValidas,
    };
    await setStateInformasiPenerimaDanValidas(
      (prevState: IInformasiPenerimaDanValidasi) => {
        cloneStateInformasiPenerimaDanValidas = prevState;
        return prevState;
      }
    );
    props.changeInformasiPenerimaDanValidasi(
      cloneStateInformasiPenerimaDanValidas
    );
  };

  const handleChangeSelectJenisPenerima = async (
    event: React.ChangeEvent<{
      value:
        | EnumSelectJenisPenerima.PERORANGAN
        | EnumSelectJenisPenerima.PERUSAHAAN
        | EnumSelectJenisPenerima.PEMERINTAH;
    }>
  ): Promise<void> => {
    setStateInformasiPenerimaDanValidas({
      ...stateInformasiPenerimaDanValidas,
      jenisPenerima: {
        ...stateInformasiPenerimaDanValidas.jenisPenerima,
        value: event.target.value,
      },
    });
    let cloneStateInformasiPenerimaDanValidas: IInformasiPenerimaDanValidasi = {
      ...stateInformasiPenerimaDanValidas,
    };
    await setStateInformasiPenerimaDanValidas(
      (prevState: IInformasiPenerimaDanValidasi) => {
        cloneStateInformasiPenerimaDanValidas = prevState;
        return prevState;
      }
    );
    props.changeInformasiPenerimaDanValidasi(
      cloneStateInformasiPenerimaDanValidas
    );
  };

  const handleChangeSelectStatusKependudukan = async (
    event: React.ChangeEvent<{
      value:
        | EnumStatusKependudukan.PENDUDUK
        | EnumStatusKependudukan.BUKAN_PENDUDUK;
    }>
  ): Promise<void> => {
    setStateInformasiPenerimaDanValidas({
      ...stateInformasiPenerimaDanValidas,
      statusKependudukan: {
        ...stateInformasiPenerimaDanValidas.statusKependudukan,
        value: event.target.value,
      },
    });
    let cloneStateInformasiPenerimaDanValidas: IInformasiPenerimaDanValidasi = {
      ...stateInformasiPenerimaDanValidas,
    };
    await setStateInformasiPenerimaDanValidas(
      (prevState: IInformasiPenerimaDanValidasi) => {
        cloneStateInformasiPenerimaDanValidas = prevState;
        return prevState;
      }
    );
    props.changeInformasiPenerimaDanValidasi(
      cloneStateInformasiPenerimaDanValidas
    );
  };

  const handleToogleForm = (): void => {
    setIsOpenForm(!isOpenForm);
  };

  const onChangePositionComponent = (
    key: string,
    positionName: string,
    value: number
  ) => {
    if (key === 'jenisPenerima' || key === 'statusKependudukan') {
      setStateInformasiPenerimaDanValidas({
        ...stateInformasiPenerimaDanValidas,
        [key]: {
          ...stateInformasiPenerimaDanValidas[key],
          position: {
            ...stateInformasiPenerimaDanValidas[key].position,

            [stateInformasiPenerimaDanValidas[key].value]: {
              ...stateInformasiPenerimaDanValidas[key].position[
                stateInformasiPenerimaDanValidas[key].value
              ],
              [positionName]: value,
            },
          },
        },
      });
      const tempStatePositionInformasiBiayaTransaksi: IInformasiPenerimaDanValidasi =
        {
          ...stateInformasiPenerimaDanValidas,
          [key]: {
            ...stateInformasiPenerimaDanValidas[key],
            position: {
              ...stateInformasiPenerimaDanValidas[key].position,

              [stateInformasiPenerimaDanValidas[key].value]: {
                ...stateInformasiPenerimaDanValidas[key].position[
                  stateInformasiPenerimaDanValidas[key].value
                ],
                [positionName]: value,
              },
            },
          },
        };
      props.changeInformasiPenerimaDanValidasi(
        tempStatePositionInformasiBiayaTransaksi
      );
    } else {
      const category: any = {
        ...stateInformasiPenerimaDanValidas[String(key)],
      };
      category['position'] = {
        ...category['position'],
        [positionName]: value,
      };
      setStateInformasiPenerimaDanValidas({
        ...stateInformasiPenerimaDanValidas,
        [key]: category,
      });
      const tempStatePositionInformasiBiayaTransaksi: IInformasiPenerimaDanValidasi =
        {
          ...stateInformasiPenerimaDanValidas,
          [key]: category,
        };
      props.changeInformasiPenerimaDanValidasi(
        tempStatePositionInformasiBiayaTransaksi
      );
    }
  };

  return (
    <div>
      <Button
        startIcon={<UserIcon />}
        endIcon={<AddIcon />}
        styleType='btn-aside'
        onClick={handleToogleForm}
      >
        Informasi Penerima dan Validasi
      </Button>
      <Collapse in={isOpenForm} timeout='auto' unmountOnExit>
        <div className='GlobalContainerSidebarForm'>
          <Fragment>
            <Textfield
              label='Validasi'
              placeholder='harap ditulis dengan huruf cetak'
              value={stateInformasiPenerimaDanValidas.validasi.value}
              name='validasi'
              multiline
              onChange={handleChangeStateInformasiPenerimaDanValidas}
            />

            <InputPositionComponent
              dataPosition={stateInformasiPenerimaDanValidas.validasi.position}
              handleChange={onChangePositionComponent}
              name='validasi'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='Nama Penerima'
              placeholder='Nama penerima'
              value={stateInformasiPenerimaDanValidas.namaPenerima.value}
              name='namaPenerima'
              onChange={handleChangeStateInformasiPenerimaDanValidas}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiPenerimaDanValidas.namaPenerima.position
              }
              handleChange={onChangePositionComponent}
              name='namaPenerima'
            />
          </Fragment>
          {/* NANTI HANDLE CUMAN ANGAKA */}
          <Fragment>
            <Textfield
              label='No Rekening'
              placeholder='No rekening'
              value={stateInformasiPenerimaDanValidas.noRekening.value}
              name='noRekening'
              onChange={handleChangeStateInformasiPenerimaDanValidas}
              // isNumber={true}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiPenerimaDanValidas.noRekening.position
              }
              handleChange={onChangePositionComponent}
              name='noRekening'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='Bank'
              placeholder='bank'
              value={stateInformasiPenerimaDanValidas.bank.value}
              name='bank'
              onChange={handleChangeStateInformasiPenerimaDanValidas}
            />
            <InputPositionComponent
              dataPosition={stateInformasiPenerimaDanValidas.bank.position}
              handleChange={onChangePositionComponent}
              name='bank'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='Alamat & Telepon Penerima'
              placeholder='Alamat & telepon penerima'
              value={stateInformasiPenerimaDanValidas.alamatDanTelepon.value}
              name='alamatDanTelepon'
              onChange={handleChangeStateInformasiPenerimaDanValidas}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiPenerimaDanValidas.alamatDanTelepon.position
              }
              handleChange={onChangePositionComponent}
              name='alamatDanTelepon'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='Jenis Dan Nomor Identitas'
              placeholder='Jenis dan nomor identitas'
              value={
                stateInformasiPenerimaDanValidas.jenisDanNomorIdentitas.value
              }
              name='jenisDanNomorIdentitas'
              onChange={handleChangeStateInformasiPenerimaDanValidas}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiPenerimaDanValidas.jenisDanNomorIdentitas.position
              }
              handleChange={onChangePositionComponent}
              name='jenisDanNomorIdentitas'
            />
          </Fragment>
          <Fragment>
            <DropDown
              label='Jenis Penerima'
              onChange={handleChangeSelectJenisPenerima}
              options={optionsSelectJenisPenerima}
              value={stateInformasiPenerimaDanValidas.jenisPenerima.value}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiPenerimaDanValidas.jenisPenerima.position
              }
              handleChange={onChangePositionComponent}
              name='jenisPenerima'
              type='jenisPenerima'
              keyActive={stateInformasiPenerimaDanValidas.jenisPenerima.value}
            />
          </Fragment>
          <Fragment>
            <DropDown
              label='Status Kependudukan'
              onChange={handleChangeSelectStatusKependudukan}
              options={optionsSelectStatusKependudukan}
              value={stateInformasiPenerimaDanValidas.statusKependudukan.value}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiPenerimaDanValidas.statusKependudukan.position
              }
              handleChange={onChangePositionComponent}
              name='statusKependudukan'
              keyActive={
                stateInformasiPenerimaDanValidas.statusKependudukan.value
              }
            />
          </Fragment>
        </div>
      </Collapse>
    </div>
  );
};

export default AddInformasiPenerimaDanValidasi;

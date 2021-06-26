import { Collapse } from '@material-ui/core';
import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as UserIcon } from 'assets/icons/UserIcon.svg';
import { Button, DropDown, Textfield } from 'components/atoms';
import {
  optionsSelectJenisPenerima,
  optionsSelectStatusKependudukan,
} from 'constant';
import { EnumSelectJenisPenerima, EnumStatusKependudukan } from 'enum';
import { IInformasiPenerimaDanValidasi } from 'interfaces/IInformasiPenerimaDanValidasi';
import React, { ReactElement, useState } from 'react';

interface IProps {
  changeInformasiPenerimaDanValidasi: (
    data: IInformasiPenerimaDanValidasi
  ) => void;
}

const AddInformasiPenerimaDanValidasi: React.FC<IProps> = (
  props
): ReactElement => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const [
    stateInformasiPenerimaDanValidas,
    setStateInformasiPenerimaDanValidas,
  ] = useState<IInformasiPenerimaDanValidasi>({
    validasi: '',
    namaPenerima: '',
    noRekening: '',
    bank: '',
    alamatDanTelepon: '',
    jenisDanNomorIdentitas: '',
    jenisPenerima: '',
    statusKependudukan: '',
  });

  const handleChangeStateInformasiPenerimaDanValidas = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): Promise<void> => {
    setStateInformasiPenerimaDanValidas({
      ...stateInformasiPenerimaDanValidas,
      [event.target.name]: String(event.target.value),
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
      jenisPenerima: event.target.value,
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
      statusKependudukan: event.target.value,
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
          <Textfield
            label='Validasi'
            placeholder='harap ditulis dengan huruf cetak'
            value={stateInformasiPenerimaDanValidas.validasi}
            name='validasi'
            multiline
            onChange={handleChangeStateInformasiPenerimaDanValidas}
          />
          <Textfield
            label='Nama Penerima'
            placeholder='Nama penerima'
            value={stateInformasiPenerimaDanValidas.namaPenerima}
            name='namaPenerima'
            onChange={handleChangeStateInformasiPenerimaDanValidas}
          />
          {/* NANTI HANDLE CUMAN ANGAKA */}
          <Textfield
            label='No Rekening'
            placeholder='No rekening'
            value={stateInformasiPenerimaDanValidas.noRekening}
            name='noRekening'
            onChange={handleChangeStateInformasiPenerimaDanValidas}
            // isNumber={true}
          />
          <Textfield
            label='Bank'
            placeholder='bank'
            value={stateInformasiPenerimaDanValidas.bank}
            name='bank'
            onChange={handleChangeStateInformasiPenerimaDanValidas}
          />
          <Textfield
            label='Alamat & Telepon Penerima'
            placeholder='Alamat & telepon penerima'
            value={stateInformasiPenerimaDanValidas.alamatDanTelepon}
            name='alamatDanTelepon'
            onChange={handleChangeStateInformasiPenerimaDanValidas}
          />
          <Textfield
            label='Jenis Dan Nomor Identitas'
            placeholder='Jenis dan nomor identitas'
            value={stateInformasiPenerimaDanValidas.jenisDanNomorIdentitas}
            name='jenisDanNomorIdentitas'
            onChange={handleChangeStateInformasiPenerimaDanValidas}
          />
          <DropDown
            label='Jenis Penerima'
            onChange={handleChangeSelectJenisPenerima}
            options={optionsSelectJenisPenerima}
            value={stateInformasiPenerimaDanValidas.jenisPenerima}
          />
          <DropDown
            label='Status Kependudukan'
            onChange={handleChangeSelectStatusKependudukan}
            options={optionsSelectStatusKependudukan}
            value={stateInformasiPenerimaDanValidas.statusKependudukan}
          />
        </div>
      </Collapse>
    </div>
  );
};

export default AddInformasiPenerimaDanValidasi;

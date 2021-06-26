import { Collapse } from '@material-ui/core';
import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/CalenderIcon.svg';
import { Button, DropDown, Textfield } from 'components/atoms';
import {
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
import React, { ReactElement, useState } from 'react';

interface IProps {
  changeInformasiPengirim: (data: IStateInformasiPengirim) => void;
}

const AddInformasiPengirima: React.FC<IProps> = (props): ReactElement => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const [stateInformasiPengirim, setStateInformasiPengirim] =
    useState<IStateInformasiPengirim>({
      tipePengirim: '',
      nikOrPassporOrNpwpPerusahaan: '',
      jenisPengirim: '',
      statusKependudukan: '',
      namaPengirim: '',
      alamatDanNomorTelepon: '',
    });

  const handleToogleForm = (): void => {
    setIsOpenForm(!isOpenForm);
  };

  const handleChangeStateInformasiPengirima = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): Promise<void> => {
    setStateInformasiPengirim({
      ...stateInformasiPengirim,
      [event.target.name]: String(event.target.value),
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
      jenisPengirim: event.target.value,
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
      tipePengirim: event.target.value,
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
      statusKependudukan: event.target.value,
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
          <DropDown
            label='Tipe Pengirim'
            onChange={handleChangeSelectTipePengirim}
            options={optionsTipePengirim}
            value={stateInformasiPengirim.tipePengirim}
          />
          <DropDown
            label='Jenis Pengirim'
            onChange={handleChangeSelectJenisPengirim}
            options={optionsJenisPengirim}
            value={stateInformasiPengirim.jenisPengirim}
          />
          <DropDown
            label='Status Kependudukan'
            onChange={handleChangeSelectStatusKependudukan}
            options={optionsStatusKependudukan}
            value={stateInformasiPengirim.statusKependudukan}
          />
          <Textfield
            label='NIK / Paspor (WNA) / NPWP (Perusahaan)'
            placeholder='NIK / Paspor (WNA) / NPWP (Perusahaan)'
            value={stateInformasiPengirim.nikOrPassporOrNpwpPerusahaan}
            name='nikOrPassporOrNpwpPerusahaan'
            onChange={handleChangeStateInformasiPengirima}
          />
          <Textfield
            label='Nama'
            placeholder='Nama'
            value={stateInformasiPengirim.namaPengirim}
            name='namaPengirim'
            onChange={handleChangeStateInformasiPengirima}
          />
          <Textfield
            label='Alamat & nomor telepon'
            placeholder='Alamat & nomor telepon'
            value={stateInformasiPengirim.alamatDanNomorTelepon}
            name='alamatDanNomorTelepon'
            onChange={handleChangeStateInformasiPengirima}
          />
        </div>
      </Collapse>
    </div>
  );
};

export default AddInformasiPengirima;

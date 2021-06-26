import { Collapse } from '@material-ui/core';
import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/CalenderIcon.svg';
import { Button, DropDown, Textfield } from 'components/atoms';
import {
  optionsSelectBiayaKoresponded,
  optionsSelectJenisTransaksi,
} from 'constant';
import { EnumJenisTransaksi } from 'enum';
import { IStateInformasiBiayaTransaksi } from 'interfaces/IStateInformasiBiayaTransaksi';
import React, { ReactElement, useState } from 'react';

interface IProps {
  changeInformasiBiayaTransaksi: (data: IStateInformasiBiayaTransaksi) => void;
}

const AddInformasiBiayaTransaksi: React.FC<IProps> = (props): ReactElement => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const [isDisableFieldLainnya, setIsDisableFieldLainnya] =
    useState<boolean>(false);
  const [stateInformasiBiayaTransaksi, setStateInformasiBiayaTransaksi] =
    useState<IStateInformasiBiayaTransaksi>({
      jenisTransaksi: '',
      totalBiayaTransaksi: '',
      biayaBankKoresponden: '',
      lainnya: '',
    });

  const handleToogleForm = (): void => {
    setIsOpenForm(!isOpenForm);
  };

  const handleChangeStateInformasiBiayaTransaksi = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setStateInformasiBiayaTransaksi({
      ...stateInformasiBiayaTransaksi,
      [event.target.name]: event.target.value,
    });
    const tempStateInformasiBiayaTransaksi: IStateInformasiBiayaTransaksi = {
      ...stateInformasiBiayaTransaksi,
      [event.target.name]: event.target.value,
    };
    props.changeInformasiBiayaTransaksi(tempStateInformasiBiayaTransaksi);
  };

  const handleChangeSelectBiayaBankKorenponded = (
    event: React.ChangeEvent<{
      value: any;
    }>
  ): void => {
    if (event.target.value === 'lainnya') {
      setIsDisableFieldLainnya(!isDisableFieldLainnya);
    }
    isDisableFieldLainnya && setIsDisableFieldLainnya(false);
    setStateInformasiBiayaTransaksi({
      ...stateInformasiBiayaTransaksi,
      biayaBankKoresponden: event.target.value,
    });
    const tempStateInformasiBiayaTransaksi: IStateInformasiBiayaTransaksi = {
      ...stateInformasiBiayaTransaksi,
      biayaBankKoresponden: event.target.value,
    };
    props.changeInformasiBiayaTransaksi(tempStateInformasiBiayaTransaksi);
  };

  const handleChangeSelectJenisTransaksi = (
    event: React.ChangeEvent<{
      value: EnumJenisTransaksi.DEBIT_REKENING | EnumJenisTransaksi.TUNAI;
    }>
  ): void => {
    setStateInformasiBiayaTransaksi({
      ...stateInformasiBiayaTransaksi,
      jenisTransaksi: event.target.value,
    });
    const tempStateInformasiBiayaTransaksi: IStateInformasiBiayaTransaksi = {
      ...stateInformasiBiayaTransaksi,
      jenisTransaksi: event.target.value,
    };
    props.changeInformasiBiayaTransaksi(tempStateInformasiBiayaTransaksi);
  };

  return (
    <div>
      <Button
        startIcon={<CalenderIcon />}
        endIcon={<AddIcon />}
        onClick={handleToogleForm}
        styleType='btn-aside'
      >
        Informasi Biaya Transaksi
      </Button>
      <Collapse in={isOpenForm} timeout='auto' unmountOnExit>
        <div className='GlobalContainerSidebarForm'>
          <DropDown
            label='Jenis Transaksi'
            onChange={handleChangeSelectJenisTransaksi}
            options={optionsSelectJenisTransaksi}
            value={stateInformasiBiayaTransaksi.jenisTransaksi}
          />
          <Textfield
            label='Cek / bilyet giro'
            placeholder='Cek / bilyet giro'
            value={stateInformasiBiayaTransaksi.totalBiayaTransaksi}
            name='totalBiayaTransaksi'
            onChange={handleChangeStateInformasiBiayaTransaksi}
          />
          <DropDown
            label='Biaya Bank Koresponden'
            onChange={handleChangeSelectBiayaBankKorenponded}
            options={optionsSelectBiayaKoresponded}
            value={stateInformasiBiayaTransaksi.biayaBankKoresponden}
          />
          {isDisableFieldLainnya && (
            <Textfield
              label='Lainnya'
              placeholder='Lainnya'
              value={stateInformasiBiayaTransaksi.lainnya}
              name='lainnya'
              onChange={handleChangeStateInformasiBiayaTransaksi}
            />
          )}
        </div>
      </Collapse>
    </div>
  );
};

export default AddInformasiBiayaTransaksi;

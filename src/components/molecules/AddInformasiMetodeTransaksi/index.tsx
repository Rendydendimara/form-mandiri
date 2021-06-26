import { Collapse } from '@material-ui/core';
import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/CalenderIcon.svg';
import { Button, DropDown, Textfield } from 'components/atoms';
import { optionsSelectJenisTransaksi } from 'constant';
import { EnumJenisTransaksi } from 'enum';
import { IStateInformasiMetodeTransaksi } from 'interfaces/IStateInformasiMetodeTransaksi';
import React, { ReactElement, useState } from 'react';

interface IProps {
  changeInformasiMetodeTransaksi: (
    data: IStateInformasiMetodeTransaksi
  ) => void;
}

const AddInformasiMetodeTransaksi: React.FC<IProps> = (props): ReactElement => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const [stateInformasiMetodeTransaksi, setStateInformasiMetodeTransaksi] =
    useState<IStateInformasiMetodeTransaksi>({
      jenisTransaksi: '',
      cekGiro: '',
      dataTabel: [
        {
          bankTarik: '',
          noCekAtauBg: '',
          valuta: '',
          nominal: '',
        },
        {
          bankTarik: '',
          noCekAtauBg: '',
          valuta: '',
          nominal: '',
        },
      ],
      jumlahSetoran: '',
      terbilang: '',
    });

  const handleToogleForm = (): void => {
    setIsOpenForm(!isOpenForm);
  };

  const handleChangeSelectJenisTransaksi = async (
    event: React.ChangeEvent<{
      value: EnumJenisTransaksi.DEBIT_REKENING | EnumJenisTransaksi.TUNAI | '';
    }>
  ): Promise<void> => {
    if (
      event.target.value === EnumJenisTransaksi.TUNAI ||
      event.target.value === EnumJenisTransaksi.DEBIT_REKENING
    ) {
      setStateInformasiMetodeTransaksi({
        ...stateInformasiMetodeTransaksi,
        jenisTransaksi: event.target.value,
      });
      let cloneStateInformasiMetodeTransaksi: IStateInformasiMetodeTransaksi = {
        ...stateInformasiMetodeTransaksi,
      };
      await setStateInformasiMetodeTransaksi(
        (prevState: IStateInformasiMetodeTransaksi) => {
          cloneStateInformasiMetodeTransaksi = prevState;
          return prevState;
        }
      );
      props.changeInformasiMetodeTransaksi(cloneStateInformasiMetodeTransaksi);
    }
  };

  const handleChangeStateInformasiMetodeTransaksi = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): Promise<void> => {
    const arrayInputName = event.target.name.split(' ');
    if (arrayInputName.length > 1) {
      if (arrayInputName[1] === '1') {
        setStateInformasiMetodeTransaksi({
          ...stateInformasiMetodeTransaksi,
          dataTabel: [
            {
              ...stateInformasiMetodeTransaksi.dataTabel[0],
              [arrayInputName[0]]: String(event.target.value),
            },
            stateInformasiMetodeTransaksi.dataTabel[1],
          ],
        });
      } else if (arrayInputName[1] === '2') {
        setStateInformasiMetodeTransaksi({
          ...stateInformasiMetodeTransaksi,
          dataTabel: [
            stateInformasiMetodeTransaksi.dataTabel[0],
            {
              ...stateInformasiMetodeTransaksi.dataTabel[1],
              [arrayInputName[0]]: String(event.target.value),
            },
          ],
        });
      }
    } else {
      setStateInformasiMetodeTransaksi({
        ...stateInformasiMetodeTransaksi,
        [event.target.name]: String(event.target.value),
      });
    }
    let cloneStateInformasiMetodeTransaksi: IStateInformasiMetodeTransaksi = {
      ...stateInformasiMetodeTransaksi,
    };
    await setStateInformasiMetodeTransaksi(
      (prevState: IStateInformasiMetodeTransaksi) => {
        cloneStateInformasiMetodeTransaksi = prevState;
        return prevState;
      }
    );
    props.changeInformasiMetodeTransaksi(cloneStateInformasiMetodeTransaksi);
  };

  return (
    <div>
      <Button
        startIcon={<CalenderIcon />}
        endIcon={<AddIcon />}
        styleType='btn-aside'
        onClick={handleToogleForm}
      >
        Informasi Metode Transaksi
      </Button>
      <Collapse in={isOpenForm} timeout='auto' unmountOnExit>
        <div className='GlobalContainerSidebarForm'>
          <DropDown
            label='Jenis Transaksi'
            onChange={handleChangeSelectJenisTransaksi}
            options={optionsSelectJenisTransaksi}
            value={stateInformasiMetodeTransaksi.jenisTransaksi}
          />
          <Textfield
            label='Cek/Bilyet Giro'
            placeholder='Cek/bilyet giro'
            value={stateInformasiMetodeTransaksi.cekGiro}
            name='cekGiro'
            onChange={handleChangeStateInformasiMetodeTransaksi}
          />
          <Textfield
            label='Bank Tarik 1'
            placeholder='Bank tarik 1'
            value={stateInformasiMetodeTransaksi.dataTabel[0].bankTarik}
            name='bankTarik 1'
            onChange={handleChangeStateInformasiMetodeTransaksi}
          />
          <Textfield
            label='No.cek/BG 1'
            placeholder='No.cek/BG 1'
            value={stateInformasiMetodeTransaksi.dataTabel[0].noCekAtauBg}
            name='noCekAtauBg 1'
            onChange={handleChangeStateInformasiMetodeTransaksi}
          />
          <Textfield
            label='Valuta 1'
            placeholder='Valuta1'
            value={stateInformasiMetodeTransaksi.dataTabel[0].valuta}
            name='valuta 1'
            onChange={handleChangeStateInformasiMetodeTransaksi}
          />
          <Textfield
            label='Nominal 1'
            placeholder='Nominal 1'
            value={stateInformasiMetodeTransaksi.dataTabel[0].nominal}
            name='nominal 1'
            onChange={handleChangeStateInformasiMetodeTransaksi}
          />
          <Textfield
            label='Bank Tarik 2'
            placeholder='Bank tarik 2'
            value={stateInformasiMetodeTransaksi.dataTabel[1].bankTarik}
            name='bankTarik 2'
            onChange={handleChangeStateInformasiMetodeTransaksi}
          />
          <Textfield
            label='No.cek/BG 2'
            placeholder='No.cek/BG 2'
            value={stateInformasiMetodeTransaksi.dataTabel[1].noCekAtauBg}
            name='noCekAtauBg 2'
            onChange={handleChangeStateInformasiMetodeTransaksi}
          />
          <Textfield
            label='Valuta 2'
            placeholder='Valuta 2'
            value={stateInformasiMetodeTransaksi.dataTabel[1].valuta}
            name='valuta 2'
            onChange={handleChangeStateInformasiMetodeTransaksi}
          />
          <Textfield
            label='Nominal 2'
            placeholder='Nominal 2'
            value={stateInformasiMetodeTransaksi.dataTabel[1].nominal}
            name='nominal 2'
            onChange={handleChangeStateInformasiMetodeTransaksi}
          />
          <Textfield
            label='Jumlah Setoran/Transfer/Kliring/Inkaso'
            placeholder='Jumlah setoran/transfer/kliring/inkaso'
            value={stateInformasiMetodeTransaksi.jumlahSetoran}
            name='jumlahSetoran'
            onChange={handleChangeStateInformasiMetodeTransaksi}
          />
          <Textfield
            label='Terbilang'
            placeholder='Terbilang'
            value={stateInformasiMetodeTransaksi.terbilang}
            name='terbilang'
            onChange={handleChangeStateInformasiMetodeTransaksi}
          />
        </div>
      </Collapse>
    </div>
  );
};

export default AddInformasiMetodeTransaksi;

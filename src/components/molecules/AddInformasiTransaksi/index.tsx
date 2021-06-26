import Collapse from '@material-ui/core/Collapse';
import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/CalenderIcon.svg';
import { Button, DropDown, Textfield } from 'components/atoms';
import { optionsStatusKependudukan } from 'constant';
import { EnumSelectTujuanTransaksi } from 'enum';
import { IStateFormInformasiTransaksi } from 'interfaces/IStateFormInformasiTransaksi';
import React, { ReactElement, useState } from 'react';

interface IProps {
  changeInformasiTransaksi: (data: IStateFormInformasiTransaksi) => void;
}

const AddInformasiTransaksi: React.FC<IProps> = (props): ReactElement => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const [stateInformasiTransaksi, setStateInformasiTransaksi] =
    useState<IStateFormInformasiTransaksi>({
      tujuanTransaksi: '',
      beritaTransaksi: '',
    });

  const handleChangeStateInformasiTransaksi = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): Promise<void> => {
    setStateInformasiTransaksi({
      ...stateInformasiTransaksi,
      [event.target.name]: String(event.target.value),
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
      tujuanTransaksi: event.target.value,
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
          <DropDown
            label='Tujuan Transaksi'
            onChange={handleChangeSelectTujuanTransaksi}
            options={optionsStatusKependudukan}
            value={stateInformasiTransaksi.tujuanTransaksi}
          />
          <Textfield
            label='Berita Transaksi'
            placeholder='Berita transaksi'
            value={stateInformasiTransaksi.beritaTransaksi}
            name='beritaTransaksi'
            onChange={handleChangeStateInformasiTransaksi}
          />
        </div>
      </Collapse>
    </div>
  );
};

export default AddInformasiTransaksi;

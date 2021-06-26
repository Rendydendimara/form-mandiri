import { Collapse } from '@material-ui/core';
import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/CalenderIcon.svg';
import { Button, DropDown } from 'components/atoms';
import { optionsSelectSumberDanaTransaksi } from 'constant';
import { EnumSumberDanaTransaksi } from 'enum';
import { IStateFormInformasiSumberDanaTransaksi } from 'interfaces/IStateFormInformasiSumberDanaTransaksi';
import React, { ReactElement, useState } from 'react';
interface IProps {
  changeInformasiSumberDanaTransaksi: (
    data: IStateFormInformasiSumberDanaTransaksi
  ) => void;
}

const AddInformasiSumberDanaTransaksi: React.FC<IProps> = (
  props
): ReactElement => {
  const [
    stateInformasiSumberDanaTransaksi,
    setStateInformasiSumberDanaTransaksi,
  ] = useState<IStateFormInformasiSumberDanaTransaksi>({
    sumberDanaTransaksi: '',
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
      sumberDanaTransaksi: event.target.value,
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
            value={stateInformasiSumberDanaTransaksi.sumberDanaTransaksi}
          />
        </div>
      </Collapse>
    </div>
  );
};

export default AddInformasiSumberDanaTransaksi;

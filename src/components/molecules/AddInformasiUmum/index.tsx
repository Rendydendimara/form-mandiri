import Collapse from '@material-ui/core/Collapse';
import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/CalenderIcon.svg';
import { Button, Textfield } from 'components/atoms';
import React, { ReactElement, useState } from 'react';
import useStyles from './styles';

interface IProps {
  changeInformasiUmum: (data: any) => void;
}
interface IStateFormInformasiUmum {
  tanggal: string;
  jenisTransaksi: string;
}

const AddInformasiUmum: React.FC<IProps> = (): ReactElement => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const [stateInformasiUmum, setStateInformasiUmum] =
    useState<IStateFormInformasiUmum>({
      tanggal: '',
      jenisTransaksi: '',
    });
  const classes = useStyles();

  const handleClickBtnInformasiUmum = (): void => {
    setIsOpenForm(!isOpenForm);
  };

  const handleChangeStateInformasiUmum = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setStateInformasiUmum({
      ...stateInformasiUmum,
      [event.target.name]: String(event.target.value),
    });
  };

  return (
    <div>
      <Button
        startIcon={<CalenderIcon />}
        endIcon={<AddIcon />}
        styleType='btn-aside'
        onClick={handleClickBtnInformasiUmum}
      >
        Informasi Umum
      </Button>{' '}
      <Collapse in={isOpenForm} timeout='auto' unmountOnExit>
        <div className={classes.containerFormInformasiUmum}>
          <Textfield
            label='Tanggal'
            placeholder='DD/MM/YYYY'
            value={stateInformasiUmum.tanggal}
            name='tanggal'
            onChange={handleChangeStateInformasiUmum}
          />
          <Textfield
            label='Transaksi'
            placeholder='Jenis transaksi'
            value={stateInformasiUmum.jenisTransaksi}
            name='jenisTransaksi'
            onChange={handleChangeStateInformasiUmum}
          />
        </div>
      </Collapse>
    </div>
  );
};

export default AddInformasiUmum;

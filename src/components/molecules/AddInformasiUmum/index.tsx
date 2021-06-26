import Collapse from '@material-ui/core/Collapse';
import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/CalenderIcon.svg';
import { Button, Textfield } from 'components/atoms';
import { IStateFormInformasiUmum } from 'interfaces/IStateFormInformasiUmum';
import React, { ReactElement, useState } from 'react';
import useStyles from './styles';

interface IProps {
  changeInformasiUmum: (data: IStateFormInformasiUmum) => void;
}

const AddInformasiUmum: React.FC<IProps> = (props): ReactElement => {
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

  const handleChangeStateInformasiUmum = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): Promise<void> => {
    setStateInformasiUmum({
      ...stateInformasiUmum,
      [event.target.name]: String(event.target.value),
    });
    let cloneStateInformasiUmum: IStateFormInformasiUmum = {
      ...stateInformasiUmum,
    };
    await setStateInformasiUmum((prevState: IStateFormInformasiUmum) => {
      cloneStateInformasiUmum = prevState;
      return prevState;
    });
    props.changeInformasiUmum(cloneStateInformasiUmum);
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
            name='tanggal'
            type='date'
            onChange={handleChangeStateInformasiUmum}
            defaultValue={
              new Date().getDate() +
              '/' +
              `${Number(new Date().getMonth()) + 1}` +
              '/' +
              new Date().getFullYear()
            }
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

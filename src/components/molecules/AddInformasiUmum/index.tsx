import Collapse from '@material-ui/core/Collapse';
import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/CalenderIcon.svg';
import { Button, Textfield } from 'components/atoms';
import InputPositionComponent from 'components/molecules/InputPositionComponent';
import { INITIAL_STATE } from 'constant';
import { IStateFormInformasiUmum } from 'interfaces/IStateFormInformasiUmum';
import React, { ReactElement, useState } from 'react';
import useStyles from './styles';
import { getLocal } from 'local/localStorage';

interface IProps {
  changeInformasiUmum: (data: IStateFormInformasiUmum) => void;
}

const AddInformasiUmum: React.FC<IProps> = (props): ReactElement => {
  const DATA_COOKIE_FORM_MANDIRI = getLocal('DataCookieForm');

  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const [stateInformasiUmum, setStateInformasiUmum] = useState<any>({
    tanggal: DATA_COOKIE_FORM_MANDIRI.informasiUmum.tanggal || INITIAL_STATE,
    jenisTransaksi:
      DATA_COOKIE_FORM_MANDIRI.informasiUmum.jenisTransaksi || INITIAL_STATE,
  });
  const classes = useStyles();

  const handleClickBtnInformasiUmum = (): void => {
    setIsOpenForm(!isOpenForm);
  };

  const handleChangeStateInformasiUmum = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): Promise<void> => {
    const category: any = {
      ...stateInformasiUmum[String(event.target.name)],
    };
    category['value'] = event.target.value;
    setStateInformasiUmum({
      ...stateInformasiUmum,
      [event.target.name]: category,
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

  const onChangePositionInformasiUmum = (
    key: string,
    positionName: string,
    value: number
  ) => {
    const category: any = {
      ...stateInformasiUmum[String(key)],
    };
    category['position'] = {
      ...category['position'],
      [positionName]: value,
    };
    setStateInformasiUmum({
      ...stateInformasiUmum,
      [key]: category,
    });

    const tempStatePositionInformasiBiayaTransaksi: IStateFormInformasiUmum = {
      ...stateInformasiUmum,
      [key]: category,
    };
    props.changeInformasiUmum(tempStatePositionInformasiBiayaTransaksi);
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
          <div>
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

            <InputPositionComponent
              dataPosition={stateInformasiUmum.tanggal.position}
              handleChange={onChangePositionInformasiUmum}
              name='tanggal'
            />
          </div>
          <div>
            <Textfield
              label='Transaksi'
              placeholder='Jenis transaksi'
              value={stateInformasiUmum.jenisTransaksi.value}
              name='jenisTransaksi'
              onChange={handleChangeStateInformasiUmum}
            />
            <InputPositionComponent
              dataPosition={stateInformasiUmum.jenisTransaksi.position}
              handleChange={onChangePositionInformasiUmum}
              name='jenisTransaksi'
            />
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default AddInformasiUmum;

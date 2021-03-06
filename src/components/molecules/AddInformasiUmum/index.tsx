import Collapse from '@material-ui/core/Collapse';
import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/CalenderIcon.svg';
import { Button, Textfield } from 'components/atoms';
import InputPositionComponent from 'components/molecules/InputPositionComponent';
import {
  INITIAL_STATE,
  optionsSelectTransaksi,
  INITIAL_STATE_JENIS_TRANSAKSI,
  VERSION_LOCAL_STORAGE_FORM_MANDIRI,
} from 'constant';
import { IStateFormInformasiUmum } from 'interfaces/IStateFormInformasiUmum';
import React, { ReactElement, useState } from 'react';
import useStyles from './styles';
import { getLocal } from 'local/localStorage';
import { EnumTransaksi } from 'enum';
import Dropdown from 'components/atoms/DropDown';

interface IProps {
  changeInformasiUmum: (data: IStateFormInformasiUmum) => void;
}

const AddInformasiUmum: React.FC<IProps> = (props): ReactElement => {
  const DATA_COOKIE_FORM_MANDIRI = getLocal(VERSION_LOCAL_STORAGE_FORM_MANDIRI);
  console.log('DATA_COOKIE_FORM_MANDIRI', DATA_COOKIE_FORM_MANDIRI);
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const [stateInformasiUmum, setStateInformasiUmum] = useState<any>({
    tanggal: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiUmum.tanggal
      : INITIAL_STATE,
    jenisTransaksi: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiUmum.jenisTransaksi
      : INITIAL_STATE_JENIS_TRANSAKSI,
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
    if (key !== 'jenisTransaksi') {
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

      const tempStatePositionInformasiBiayaTransaksi: IStateFormInformasiUmum =
        {
          ...stateInformasiUmum,
          [key]: category,
        };
      props.changeInformasiUmum(tempStatePositionInformasiBiayaTransaksi);
    } else {
      setStateInformasiUmum({
        ...stateInformasiUmum,
        jenisTransaksi: {
          ...stateInformasiUmum.jenisTransaksi,
          position: {
            ...stateInformasiUmum.jenisTransaksi.position,
            [stateInformasiUmum.jenisTransaksi.value]: {
              ...stateInformasiUmum.jenisTransaksi.position[
                stateInformasiUmum.jenisTransaksi.value
              ],
              [positionName]: value,
            },
          },
        },
      });

      const tempStatePositionInformasiBiayaTransaksi: IStateFormInformasiUmum =
        {
          ...stateInformasiUmum,
          jenisTransaksi: {
            ...stateInformasiUmum.jenisTransaksi,
            position: {
              ...stateInformasiUmum.jenisTransaksi.position,
              [stateInformasiUmum.jenisTransaksi.value]: {
                ...stateInformasiUmum.jenisTransaksi.position[
                  stateInformasiUmum.jenisTransaksi.value
                ],
                [positionName]: value,
              },
            },
          },
        };
      props.changeInformasiUmum(tempStatePositionInformasiBiayaTransaksi);
    }
  };

  const handleChangeSelectTransaksi = async (
    event: React.ChangeEvent<{
      value:
        | EnumTransaksi.BANK_DRAF
        | EnumTransaksi.KLIRING_INKASO
        | EnumTransaksi.RTGS
        | EnumTransaksi.SETORAN
        | EnumTransaksi.SKNBI
        | EnumTransaksi.TT;
    }>
  ): Promise<void> => {
    setStateInformasiUmum({
      ...stateInformasiUmum,
      jenisTransaksi: {
        ...stateInformasiUmum.jenisTransaksi,
        value: event.target.value,
      },
    });
    const tempStatePositionInformasiBiayaTransaksi: IStateFormInformasiUmum = {
      ...stateInformasiUmum,
      jenisTransaksi: {
        ...stateInformasiUmum.jenisTransaksi,
        value: event.target.value,
      },
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
            <Dropdown
              label='Transaksi'
              onChange={handleChangeSelectTransaksi}
              options={optionsSelectTransaksi}
              value={stateInformasiUmum.jenisTransaksi.value}
            />

            <InputPositionComponent
              dataPosition={stateInformasiUmum.jenisTransaksi.position}
              handleChange={onChangePositionInformasiUmum}
              name='jenisTransaksi'
              type='jenisTransaksi'
              keyActive={stateInformasiUmum.jenisTransaksi.value}
            />
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default AddInformasiUmum;

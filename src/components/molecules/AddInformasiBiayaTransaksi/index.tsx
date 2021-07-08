import { Collapse } from '@material-ui/core';
import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/CalenderIcon.svg';
import { Button, DropDown, Textfield } from 'components/atoms';
import {
  INITIAL_STATE,
  INTIAL_JENIS_TRANSAKSI_METODE_TRANSAKSI,
  optionsSelectBiayaKoresponded,
  optionsSelectJenisTransaksi,
  INITIAL_BIAYA_BANK_KORESPONDEN,
  VERSION_LOCAL_STORAGE_FORM_MANDIRI,
} from 'constant';
import { EnumJenisTransaksi } from 'enum';
import { IStateInformasiBiayaTransaksi } from 'interfaces/IStateInformasiBiayaTransaksi';
import React, { Fragment, ReactElement, useState } from 'react';
import InputPositionComponent from 'components/molecules/InputPositionComponent';
import { getLocal } from 'local/localStorage';
import { IDataGlobal } from 'interfaces/IDataGlobal';

interface IProps {
  changeInformasiBiayaTransaksi: (data: IStateInformasiBiayaTransaksi) => void;
}

const AddInformasiBiayaTransaksi: React.FC<IProps> = (props): ReactElement => {
  const DATA_COOKIE_FORM_MANDIRI: IDataGlobal = getLocal(
    VERSION_LOCAL_STORAGE_FORM_MANDIRI
  );
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const [isDisableFieldLainnya, setIsDisableFieldLainnya] =
    useState<boolean>(false);

  const [stateInformasiBiayaTransaksi, setStateInformasiBiayaTransaksi] =
    useState<any>({
      jenisTransaksi: DATA_COOKIE_FORM_MANDIRI
        ? DATA_COOKIE_FORM_MANDIRI.informasiBiayaTransaksi.jenisTransaksi
        : INTIAL_JENIS_TRANSAKSI_METODE_TRANSAKSI,
      totalBiayaTransaksi: DATA_COOKIE_FORM_MANDIRI
        ? DATA_COOKIE_FORM_MANDIRI.informasiBiayaTransaksi.totalBiayaTransaksi
        : INITIAL_STATE,
      biayaBankKoresponden: DATA_COOKIE_FORM_MANDIRI
        ? DATA_COOKIE_FORM_MANDIRI.informasiBiayaTransaksi.biayaBankKoresponden
        : INITIAL_BIAYA_BANK_KORESPONDEN,
      lainnya: DATA_COOKIE_FORM_MANDIRI
        ? DATA_COOKIE_FORM_MANDIRI.informasiBiayaTransaksi.lainnya
        : INITIAL_STATE,
    });

  const handleToogleForm = (): void => {
    setIsOpenForm(!isOpenForm);
  };

  const handleChangeStateInformasiBiayaTransaksi = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const category: any = {
      ...stateInformasiBiayaTransaksi[String(event.target.name)],
    };
    category['value'] = event.target.value;
    setStateInformasiBiayaTransaksi({
      ...stateInformasiBiayaTransaksi,
      [event.target.name]: category,
    });
    const tempStateInformasiBiayaTransaksi: IStateInformasiBiayaTransaksi = {
      ...stateInformasiBiayaTransaksi,
      [event.target.name]: category,
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
      biayaBankKoresponden: {
        ...stateInformasiBiayaTransaksi.biayaBankKoresponden,
        value: event.target.value,
      },
    });
    const tempStateInformasiBiayaTransaksi: IStateInformasiBiayaTransaksi = {
      ...stateInformasiBiayaTransaksi,
      biayaBankKoresponden: {
        ...stateInformasiBiayaTransaksi.biayaBankKoresponden,
        value: event.target.value,
      },
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
      jenisTransaksi: {
        ...stateInformasiBiayaTransaksi.jenisTransaksi,
        value: event.target.value,
      },
    });
    const tempStateInformasiBiayaTransaksi: any = {
      ...stateInformasiBiayaTransaksi,
      jenisTransaksi: {
        ...stateInformasiBiayaTransaksi.jenisTransaksi,
        value: event.target.value,
      },
    };
    props.changeInformasiBiayaTransaksi(tempStateInformasiBiayaTransaksi);
  };

  const onChangePositionBiayaTransaksi = (
    key: string,
    positionName: string,
    value: number
  ) => {
    if (key === 'jenisTransaksi' || key === 'biayaBankKoresponden') {
      setStateInformasiBiayaTransaksi({
        ...stateInformasiBiayaTransaksi,
        [key]: {
          ...stateInformasiBiayaTransaksi[key],
          position: {
            ...stateInformasiBiayaTransaksi[key].position,

            [stateInformasiBiayaTransaksi[key].value]: {
              ...stateInformasiBiayaTransaksi[key].position[
                stateInformasiBiayaTransaksi[key].value
              ],
              [positionName]: value,
            },
          },
        },
      });
      const tempStatePositionInformasiBiayaTransaksi: IStateInformasiBiayaTransaksi =
        {
          ...stateInformasiBiayaTransaksi,
          [key]: {
            ...stateInformasiBiayaTransaksi[key],
            position: {
              ...stateInformasiBiayaTransaksi[key].position,

              [stateInformasiBiayaTransaksi[key].value]: {
                ...stateInformasiBiayaTransaksi[key].position[
                  stateInformasiBiayaTransaksi[key].value
                ],
                [positionName]: value,
              },
            },
          },
        };
      props.changeInformasiBiayaTransaksi(
        tempStatePositionInformasiBiayaTransaksi
      );
    } else {
      const category: any = {
        ...stateInformasiBiayaTransaksi[String(key)],
      };
      category['position'] = {
        ...category['position'],
        [positionName]: value,
      };
      setStateInformasiBiayaTransaksi({
        ...stateInformasiBiayaTransaksi,
        [key]: category,
      });

      const tempStatePositionInformasiBiayaTransaksi: IStateInformasiBiayaTransaksi =
        {
          ...stateInformasiBiayaTransaksi,
          [key]: category,
        };
      props.changeInformasiBiayaTransaksi(
        tempStatePositionInformasiBiayaTransaksi
      );
    }
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
          <Fragment>
            <DropDown
              label='Jenis Transaksi'
              onChange={handleChangeSelectJenisTransaksi}
              options={optionsSelectJenisTransaksi}
              value={stateInformasiBiayaTransaksi.jenisTransaksi.value}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiBiayaTransaksi.jenisTransaksi.position
              }
              handleChange={onChangePositionBiayaTransaksi}
              name='jenisTransaksi'
              keyActive={stateInformasiBiayaTransaksi.jenisTransaksi.value}
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='Cek / bilyet giro'
              placeholder='Cek / bilyet giro'
              value={stateInformasiBiayaTransaksi.totalBiayaTransaksi.value}
              name='totalBiayaTransaksi'
              onChange={handleChangeStateInformasiBiayaTransaksi}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiBiayaTransaksi.totalBiayaTransaksi.position
              }
              handleChange={onChangePositionBiayaTransaksi}
              name='totalBiayaTransaksi'
            />
          </Fragment>
          <Fragment>
            <DropDown
              label='Biaya Bank Koresponden'
              onChange={handleChangeSelectBiayaBankKorenponded}
              options={optionsSelectBiayaKoresponded}
              value={stateInformasiBiayaTransaksi.biayaBankKoresponden.value}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiBiayaTransaksi.biayaBankKoresponden.position
              }
              handleChange={onChangePositionBiayaTransaksi}
              name='biayaBankKoresponden'
              keyActive={
                stateInformasiBiayaTransaksi.biayaBankKoresponden.value
              }
            />
          </Fragment>
          {isDisableFieldLainnya && (
            <Fragment>
              <Textfield
                label='Lainnya'
                placeholder='Lainnya'
                value={stateInformasiBiayaTransaksi.lainnya.value}
                name='lainnya'
                onChange={handleChangeStateInformasiBiayaTransaksi}
              />
              <InputPositionComponent
                dataPosition={stateInformasiBiayaTransaksi.lainnya.position}
                handleChange={onChangePositionBiayaTransaksi}
                name='lainnya'
              />
            </Fragment>
          )}
        </div>
      </Collapse>
    </div>
  );
};

export default AddInformasiBiayaTransaksi;

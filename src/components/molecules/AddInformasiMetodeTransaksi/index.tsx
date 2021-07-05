import { Collapse } from '@material-ui/core';
import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/CalenderIcon.svg';
import { Button, DropDown, Textfield } from 'components/atoms';
import { INITIAL_STATE, optionsSelectJenisTransaksi } from 'constant';
import { EnumJenisTransaksi } from 'enum';
import { IStateInformasiMetodeTransaksi } from 'interfaces/IStateInformasiMetodeTransaksi';
import React, { Fragment, ReactElement, useState } from 'react';
import InputPositionComponent from 'components/molecules/InputPositionComponent';
import { getLocal } from 'local/localStorage';
import { IDataGlobal } from 'interfaces/IDataGlobal';

interface IProps {
  changeInformasiMetodeTransaksi: (
    data: IStateInformasiMetodeTransaksi
  ) => void;
}

const AddInformasiMetodeTransaksi: React.FC<IProps> = (props): ReactElement => {
  const DATA_COOKIE_FORM_MANDIRI: IDataGlobal = getLocal('DataCookieForm');
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const [stateInformasiMetodeTransaksi, setStateInformasiMetodeTransaksi] =
    useState<any>({
      jenisTransaksi: DATA_COOKIE_FORM_MANDIRI
        ? DATA_COOKIE_FORM_MANDIRI.informasiMetodeTransaksi.jenisTransaksi
        : INITIAL_STATE,
      cekGiro: DATA_COOKIE_FORM_MANDIRI
        ? DATA_COOKIE_FORM_MANDIRI.informasiMetodeTransaksi.cekGiro
        : INITIAL_STATE,
      dataTabel: [
        {
          bankTarik: DATA_COOKIE_FORM_MANDIRI
            ? DATA_COOKIE_FORM_MANDIRI.informasiMetodeTransaksi.dataTabel[0]
                .bankTarik
            : INITIAL_STATE,
          noCekAtauBg: DATA_COOKIE_FORM_MANDIRI
            ? DATA_COOKIE_FORM_MANDIRI.informasiMetodeTransaksi.dataTabel[0]
                .noCekAtauBg
            : INITIAL_STATE,
          valuta: DATA_COOKIE_FORM_MANDIRI
            ? DATA_COOKIE_FORM_MANDIRI.informasiMetodeTransaksi.dataTabel[0]
                .valuta
            : INITIAL_STATE,
          nominal: DATA_COOKIE_FORM_MANDIRI
            ? DATA_COOKIE_FORM_MANDIRI.informasiMetodeTransaksi.dataTabel[0]
                .nominal
            : INITIAL_STATE,
        },
        {
          bankTarik: DATA_COOKIE_FORM_MANDIRI
            ? DATA_COOKIE_FORM_MANDIRI.informasiMetodeTransaksi.dataTabel[1]
                .bankTarik
            : INITIAL_STATE,
          noCekAtauBg: DATA_COOKIE_FORM_MANDIRI
            ? DATA_COOKIE_FORM_MANDIRI.informasiMetodeTransaksi.dataTabel[1]
                .noCekAtauBg
            : INITIAL_STATE,
          valuta: DATA_COOKIE_FORM_MANDIRI
            ? DATA_COOKIE_FORM_MANDIRI.informasiMetodeTransaksi.dataTabel[1]
                .valuta
            : INITIAL_STATE,
          nominal: DATA_COOKIE_FORM_MANDIRI
            ? DATA_COOKIE_FORM_MANDIRI.informasiMetodeTransaksi.dataTabel[1]
                .nominal
            : INITIAL_STATE,
        },
      ],
      jumlahSetoran: DATA_COOKIE_FORM_MANDIRI
        ? DATA_COOKIE_FORM_MANDIRI.informasiMetodeTransaksi.jumlahSetoran
        : INITIAL_STATE,
      terbilang: DATA_COOKIE_FORM_MANDIRI
        ? DATA_COOKIE_FORM_MANDIRI.informasiMetodeTransaksi.terbilang
        : INITIAL_STATE,
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
        jenisTransaksi: {
          ...stateInformasiMetodeTransaksi.jenisTransaksi,
          value: event.target.value,
        },
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
              [arrayInputName[0]]: {
                ...stateInformasiMetodeTransaksi.dataTabel[0][
                  arrayInputName[0]
                ],
                value: String(event.target.value),
              },
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
              [arrayInputName[0]]: {
                ...stateInformasiMetodeTransaksi.dataTabel[1][
                  arrayInputName[0]
                ],
                value: String(event.target.value),
              },
            },
          ],
        });
      }
    } else {
      const category: any = {
        ...stateInformasiMetodeTransaksi[String(event.target.name)],
      };
      category['value'] = event.target.value;
      setStateInformasiMetodeTransaksi({
        ...stateInformasiMetodeTransaksi,
        [event.target.name]: category,
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

  const onChangePositionComponent = async (
    key: string,
    positionName: string,
    value: number
  ) => {
    const arrayInputName = key.split(' ');
    if (arrayInputName.length > 1) {
      if (arrayInputName[1] === '1') {
        const category: any = {
          ...stateInformasiMetodeTransaksi.dataTabel[0][
            String(arrayInputName[0])
          ],
        };
        category['position'] = {
          ...category['position'],
          [positionName]: value,
        };
        setStateInformasiMetodeTransaksi({
          ...stateInformasiMetodeTransaksi,
          dataTabel: [
            {
              ...stateInformasiMetodeTransaksi.dataTabel[0],
              [arrayInputName[0]]: category,
            },
            stateInformasiMetodeTransaksi.dataTabel[1],
          ],
        });
      } else if (arrayInputName[1] === '2') {
        const category: any = {
          ...stateInformasiMetodeTransaksi.dataTabel[1][
            String(arrayInputName[0])
          ],
        };
        category['position'] = {
          ...category['position'],
          [positionName]: value,
        };
        setStateInformasiMetodeTransaksi({
          ...stateInformasiMetodeTransaksi,
          dataTabel: [
            stateInformasiMetodeTransaksi.dataTabel[0],
            {
              ...stateInformasiMetodeTransaksi.dataTabel[1],
              [arrayInputName[0]]: category,
            },
          ],
        });
      }
    } else {
      const category: any = {
        ...stateInformasiMetodeTransaksi[String(key)],
      };
      category['position'] = {
        ...category['position'],
        [positionName]: value,
      };
      setStateInformasiMetodeTransaksi({
        ...stateInformasiMetodeTransaksi,
        [key]: category,
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
          <Fragment>
            <DropDown
              label='Jenis Transaksi'
              onChange={handleChangeSelectJenisTransaksi}
              options={optionsSelectJenisTransaksi}
              value={stateInformasiMetodeTransaksi.jenisTransaksi.value}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiMetodeTransaksi.jenisTransaksi.position
              }
              handleChange={onChangePositionComponent}
              name='jenisTransaksi'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='Cek/Bilyet Giro'
              placeholder='Cek/bilyet giro'
              value={stateInformasiMetodeTransaksi.cekGiro.value}
              name='cekGiro'
              onChange={handleChangeStateInformasiMetodeTransaksi}
            />
            <InputPositionComponent
              dataPosition={stateInformasiMetodeTransaksi.cekGiro.position}
              handleChange={onChangePositionComponent}
              name='cekGiro'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='Bank Tarik 1'
              placeholder='Bank tarik 1'
              value={stateInformasiMetodeTransaksi.dataTabel[0].bankTarik.value}
              name='bankTarik 1'
              onChange={handleChangeStateInformasiMetodeTransaksi}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiMetodeTransaksi.dataTabel[0].bankTarik.position
              }
              handleChange={onChangePositionComponent}
              name='bankTarik 1'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='No.cek/BG 1'
              placeholder='No.cek/BG 1'
              value={
                stateInformasiMetodeTransaksi.dataTabel[0].noCekAtauBg.value
              }
              name='noCekAtauBg 1'
              onChange={handleChangeStateInformasiMetodeTransaksi}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiMetodeTransaksi.dataTabel[0].noCekAtauBg.position
              }
              handleChange={onChangePositionComponent}
              name='noCekAtauBg 1'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='Valuta 1'
              placeholder='Valuta1'
              value={stateInformasiMetodeTransaksi.dataTabel[0].valuta.value}
              name='valuta 1'
              onChange={handleChangeStateInformasiMetodeTransaksi}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiMetodeTransaksi.dataTabel[0].valuta.position
              }
              handleChange={onChangePositionComponent}
              name='valuta 1'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='Nominal 1'
              placeholder='Nominal 1'
              value={stateInformasiMetodeTransaksi.dataTabel[0].nominal.value}
              name='nominal 1'
              onChange={handleChangeStateInformasiMetodeTransaksi}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiMetodeTransaksi.dataTabel[0].nominal.position
              }
              handleChange={onChangePositionComponent}
              name='nominal 1'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='Bank Tarik 2'
              placeholder='Bank tarik 2'
              value={stateInformasiMetodeTransaksi.dataTabel[1].bankTarik.value}
              name='bankTarik 2'
              onChange={handleChangeStateInformasiMetodeTransaksi}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiMetodeTransaksi.dataTabel[1].bankTarik.position
              }
              handleChange={onChangePositionComponent}
              name='bankTarik 2'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='No.cek/BG 2'
              placeholder='No.cek/BG 2'
              value={
                stateInformasiMetodeTransaksi.dataTabel[1].noCekAtauBg.value
              }
              name='noCekAtauBg 2'
              onChange={handleChangeStateInformasiMetodeTransaksi}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiMetodeTransaksi.dataTabel[1].noCekAtauBg.position
              }
              handleChange={onChangePositionComponent}
              name='noCekAtauBg 2'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='Valuta 2'
              placeholder='Valuta 2'
              value={stateInformasiMetodeTransaksi.dataTabel[1].valuta.value}
              name='valuta 2'
              onChange={handleChangeStateInformasiMetodeTransaksi}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiMetodeTransaksi.dataTabel[1].valuta.position
              }
              handleChange={onChangePositionComponent}
              name='valuta 2'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='Nominal 2'
              placeholder='Nominal 2'
              value={stateInformasiMetodeTransaksi.dataTabel[1].nominal.value}
              name='nominal 2'
              onChange={handleChangeStateInformasiMetodeTransaksi}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiMetodeTransaksi.dataTabel[1].nominal.position
              }
              handleChange={onChangePositionComponent}
              name='nominal 2'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='Jumlah Setoran/Transfer/Kliring/Inkaso'
              placeholder='Jumlah setoran/transfer/kliring/inkaso'
              value={stateInformasiMetodeTransaksi.jumlahSetoran.value}
              name='jumlahSetoran'
              onChange={handleChangeStateInformasiMetodeTransaksi}
            />
            <InputPositionComponent
              dataPosition={
                stateInformasiMetodeTransaksi.jumlahSetoran.position
              }
              handleChange={onChangePositionComponent}
              name='jumlahSetoran'
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='Terbilang'
              placeholder='Terbilang'
              value={stateInformasiMetodeTransaksi.terbilang.value}
              name='terbilang'
              onChange={handleChangeStateInformasiMetodeTransaksi}
            />
            <InputPositionComponent
              dataPosition={stateInformasiMetodeTransaksi.terbilang.position}
              handleChange={onChangePositionComponent}
              name='terbilang'
            />
          </Fragment>
        </div>
      </Collapse>
    </div>
  );
};

export default AddInformasiMetodeTransaksi;

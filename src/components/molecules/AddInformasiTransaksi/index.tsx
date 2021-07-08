import Collapse from '@material-ui/core/Collapse';
import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/CalenderIcon.svg';
import { Button, DropDown, Textfield } from 'components/atoms';
import InputPositionComponent from 'components/molecules/InputPositionComponent';
import {
  INITIAL_STATE,
  INITIAL_STATE_TUJUAN_TRANSAKSI,
  optionsSelecteTujuanTransaksi,
  VERSION_LOCAL_STORAGE_FORM_MANDIRI,
} from 'constant';
import { IDataGlobal } from 'interfaces/IDataGlobal';
import { IStateFormInformasiTransaksi } from 'interfaces/IStateFormInformasiTransaksi';
import { getLocal } from 'local/localStorage';
import React, { Fragment, ReactElement, useState } from 'react';

interface IProps {
  changeInformasiTransaksi: (data: IStateFormInformasiTransaksi) => void;
}

const AddInformasiTransaksi: React.FC<IProps> = (props): ReactElement => {
  const DATA_COOKIE_FORM_MANDIRI: IDataGlobal = getLocal(
    VERSION_LOCAL_STORAGE_FORM_MANDIRI
  );
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const [stateInformasiTransaksi, setStateInformasiTransaksi] = useState<any>({
    tujuanTransaksi: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiTransaksi.tujuanTransaksi
      : INITIAL_STATE_TUJUAN_TRANSAKSI,
    beritaTransaksi: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiTransaksi.beritaTransaksi
      : INITIAL_STATE,
  });

  const handleChangeStateInformasiTransaksi = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): Promise<void> => {
    const category: any = {
      ...stateInformasiTransaksi[String(event.target.name)],
    };
    category['value'] = event.target.value;
    setStateInformasiTransaksi({
      ...stateInformasiTransaksi,
      [event.target.name]: category,
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
        | 'biaya_hidup'
        | 'bisnis'
        | 'donasi_atau_amal'
        | 'pembayaran'
        | 'pembelian_barang_atau_jasa'
        | 'tabungan_atau_investasi';
    }>
  ): Promise<void> => {
    setStateInformasiTransaksi({
      ...stateInformasiTransaksi,
      tujuanTransaksi: {
        ...stateInformasiTransaksi.tujuanTransaksi,
        value: event.target.value,
      },
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

  const onChangePositionComponent = (
    key: string,
    positionName: string,
    value: number
  ) => {
    if (key === 'tujuanTransaksi') {
      setStateInformasiTransaksi({
        ...stateInformasiTransaksi,
        [key]: {
          ...stateInformasiTransaksi[key],
          position: {
            ...stateInformasiTransaksi[key].position,

            [stateInformasiTransaksi[key].value]: {
              ...stateInformasiTransaksi[key].position[
                stateInformasiTransaksi[key].value
              ],
              [positionName]: value,
            },
          },
        },
      });
      const tempStatePositionInformasiBiayaTransaksi: IStateFormInformasiTransaksi =
        {
          ...stateInformasiTransaksi,
          [key]: {
            ...stateInformasiTransaksi[key],
            position: {
              ...stateInformasiTransaksi[key].position,

              [stateInformasiTransaksi[key].value]: {
                ...stateInformasiTransaksi[key].position[
                  stateInformasiTransaksi[key].value
                ],
                [positionName]: value,
              },
            },
          },
        };
      props.changeInformasiTransaksi(tempStatePositionInformasiBiayaTransaksi);
    } else {
      const category: any = {
        ...stateInformasiTransaksi[String(key)],
      };
      category['position'] = {
        ...category['position'],
        [positionName]: value,
      };
      setStateInformasiTransaksi({
        ...stateInformasiTransaksi,
        [key]: category,
      });
      const cloneStateInformasiTransaksi: IStateFormInformasiTransaksi = {
        ...stateInformasiTransaksi,
        [key]: category,
      };
      props.changeInformasiTransaksi(cloneStateInformasiTransaksi);
    }
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
          <Fragment>
            <DropDown
              label='Tujuan Transaksi'
              onChange={handleChangeSelectTujuanTransaksi}
              options={optionsSelecteTujuanTransaksi}
              value={stateInformasiTransaksi.tujuanTransaksi.value}
            />
            <InputPositionComponent
              dataPosition={stateInformasiTransaksi.tujuanTransaksi.position}
              handleChange={onChangePositionComponent}
              name='tujuanTransaksi'
              keyActive={stateInformasiTransaksi.tujuanTransaksi.value}
            />
          </Fragment>
          <Fragment>
            <Textfield
              label='Berita Transaksi'
              placeholder='Berita transaksi'
              value={stateInformasiTransaksi.beritaTransaksi.value}
              name='beritaTransaksi'
              onChange={handleChangeStateInformasiTransaksi}
            />
            <InputPositionComponent
              dataPosition={stateInformasiTransaksi.beritaTransaksi.position}
              handleChange={onChangePositionComponent}
              name='beritaTransaksi'
            />
          </Fragment>
        </div>
      </Collapse>
    </div>
  );
};

export default AddInformasiTransaksi;

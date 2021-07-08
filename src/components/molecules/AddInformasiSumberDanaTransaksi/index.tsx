import { Collapse } from '@material-ui/core';
import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/CalenderIcon.svg';
import { Button, DropDown } from 'components/atoms';
import InputPositionComponent from 'components/molecules/InputPositionComponent';
import {
  INITIAL_STATE_SUMBER_DANA_TRANKSASI,
  optionsSelectSumberDanaTransaksi,
  VERSION_LOCAL_STORAGE_FORM_MANDIRI,
} from 'constant';
import { IDataGlobal } from 'interfaces/IDataGlobal';
import { IStateFormInformasiSumberDanaTransaksi } from 'interfaces/IStateFormInformasiSumberDanaTransaksi';
import { getLocal } from 'local/localStorage';
import React, { ReactElement, useState } from 'react';

interface IProps {
  changeInformasiSumberDanaTransaksi: (
    data: IStateFormInformasiSumberDanaTransaksi
  ) => void;
}

const AddInformasiSumberDanaTransaksi: React.FC<IProps> = (
  props
): ReactElement => {
  const DATA_COOKIE_FORM_MANDIRI: IDataGlobal = getLocal(
    VERSION_LOCAL_STORAGE_FORM_MANDIRI
  );
  const [
    stateInformasiSumberDanaTransaksi,
    setStateInformasiSumberDanaTransaksi,
  ] = useState<any>({
    sumberDanaTransaksi: DATA_COOKIE_FORM_MANDIRI
      ? DATA_COOKIE_FORM_MANDIRI.informasiSumberDanaTransaksi
          .sumberDanaTransaksi
      : INITIAL_STATE_SUMBER_DANA_TRANKSASI,
  });
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);

  const handleToogleForm = (): void => {
    setIsOpenForm(!isOpenForm);
  };

  const handleChangeSelectSumberDanaTransaksi = async (
    event: React.ChangeEvent<{
      value:
        | 'dana_pemerintah'
        | 'gaji_penghasilan'
        | 'hasil_usaha'
        | 'hibah_hadiah'
        | 'penjualan_asset'
        | 'sumbangan'
        | 'tabungan_hasil_investasi'
        | 'warisan';
    }>
  ): Promise<void> => {
    setStateInformasiSumberDanaTransaksi({
      ...stateInformasiSumberDanaTransaksi,
      sumberDanaTransaksi: {
        ...stateInformasiSumberDanaTransaksi.sumberDanaTransaksi,
        value: event.target.value,
      },
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
  const onChangePositionSumberDanaTransaksi = (
    key: string,
    positionName: string,
    value: number
  ) => {
    setStateInformasiSumberDanaTransaksi({
      ...stateInformasiSumberDanaTransaksi,
      [key]: {
        ...stateInformasiSumberDanaTransaksi[key],
        position: {
          ...stateInformasiSumberDanaTransaksi[key].position,

          [stateInformasiSumberDanaTransaksi[key].value]: {
            ...stateInformasiSumberDanaTransaksi[key].position[
              stateInformasiSumberDanaTransaksi[key].value
            ],
            [positionName]: value,
          },
        },
      },
    });
    const tempStatePositionInformasiBiayaTransaksi: IStateFormInformasiSumberDanaTransaksi =
      {
        ...stateInformasiSumberDanaTransaksi,
        [key]: {
          ...stateInformasiSumberDanaTransaksi[key],
          position: {
            ...stateInformasiSumberDanaTransaksi[key].position,

            [stateInformasiSumberDanaTransaksi[key].value]: {
              ...stateInformasiSumberDanaTransaksi[key].position[
                stateInformasiSumberDanaTransaksi[key].value
              ],
              [positionName]: value,
            },
          },
        },
      };
    props.changeInformasiSumberDanaTransaksi(
      tempStatePositionInformasiBiayaTransaksi
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
            value={stateInformasiSumberDanaTransaksi.sumberDanaTransaksi.value}
          />
          <InputPositionComponent
            dataPosition={
              stateInformasiSumberDanaTransaksi.sumberDanaTransaksi.position
            }
            handleChange={onChangePositionSumberDanaTransaksi}
            name='sumberDanaTransaksi'
            keyActive={
              stateInformasiSumberDanaTransaksi.sumberDanaTransaksi.value
            }
          />
        </div>
      </Collapse>
    </div>
  );
};

export default AddInformasiSumberDanaTransaksi;

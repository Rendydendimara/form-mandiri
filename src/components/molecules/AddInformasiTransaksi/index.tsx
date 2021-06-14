import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/CalenderIcon.svg';
import { Button } from 'components/atoms';
import React, { ReactElement } from 'react';

interface IProps {
  changeInformasiTransaksi: (data: any) => void;
}

const AddInformasiTransaksi: React.FC<IProps> = (props): ReactElement => {
  return (
    <div>
      <Button
        startIcon={<CalenderIcon />}
        endIcon={<AddIcon />}
        styleType='btn-aside'
      >
        Informasi Transaksi
      </Button>
    </div>
  );
};

export default AddInformasiTransaksi;

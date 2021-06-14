import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as UserIcon } from 'assets/icons/UserIcon.svg';
import { Button } from 'components/atoms';
import React, { ReactElement } from 'react';

interface IProps {
  changeInformasiPenerimaDanValidasi: (data: any) => void;
}

const AddInformasiPenerimaDanValidasi: React.FC<IProps> = (
  props
): ReactElement => {
  return (
    <div>
      <Button
        startIcon={<UserIcon />}
        endIcon={<AddIcon />}
        styleType='btn-aside'
      >
        Informasi Penerima dan Validasi
      </Button>
    </div>
  );
};

export default AddInformasiPenerimaDanValidasi;

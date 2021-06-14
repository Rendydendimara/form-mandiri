import { ReactComponent as AddIcon } from 'assets/icons/AddIcon.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/CalenderIcon.svg';
import { Button } from 'components/atoms';
import React, { ReactElement } from 'react';

interface IProps {
  changeInformasiTujuan: (data: any) => void;
}

const AddInformasiTujuan: React.FC<IProps> = (props): ReactElement => {
  return (
    <div>
      <Button
        startIcon={<CalenderIcon />}
        endIcon={<AddIcon />}
        styleType='btn-aside'
      >
        Informasi Umum
      </Button>
    </div>
  );
};

export default AddInformasiTujuan;

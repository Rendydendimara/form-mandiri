import { Button } from 'components/atoms';
import PreviewInformasBiayaTransaksi from 'components/molecules/PreviewInformasBiayaTransaksi';
import PreviewInformasiMetodeTransaksi from 'components/molecules/PreviewInformasiMetodeTransaksi';
import PreviewInformasiPenerimaDanValidasi from 'components/molecules/PreviewInformasiPenerimaDanValidasi';
import PreviewInformasiPengirim from 'components/molecules/PreviewInformasiPengirim';
import PreviewInformasiSumberDanaTransaksi from 'components/molecules/PreviewInformasiSumberDanaTransaksi';
import PreviewInformasiTransaksi from 'components/molecules/PreviewInformasiTransaksi';
import PreviewInformasiUmum from 'components/molecules/PreviewInformasiUmum';
import { VERSION_LOCAL_STORAGE_FORM_MANDIRI } from 'constant';
import { IDataGlobal } from 'interfaces/IDataGlobal';
import { getLocal } from 'local/localStorage';
import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { classNames } from 'utils/classnames';
import useStyles from './styles';
import ImageBG from 'assets/images/form-paper-blueprint.jpg';

interface IProps {}
export interface IPosition {
  left: number;
  right: number;
  bottom: number;
  top: number;
}
export interface IPaper {
  width: number;
  heigth: number;
}
const Print: React.FC<IProps> = (): ReactElement => {
  const classes = useStyles();
  const history = useHistory();
  const DATA_COOKIE_FORM_MANDIRI: IDataGlobal | undefined | null = getLocal(
    VERSION_LOCAL_STORAGE_FORM_MANDIRI
  );
  const [valueMin, setValueMin] = useState<IPosition>({
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  });
  const [widhtPaper, setWidhtPaper] = useState<number>(19.5);
  const [heigthPaper, setHeigthPaper] = useState<number>(17.5);

  const handlePrint = (position: IPaper) => {
    // setValueMin(position);
    setWidhtPaper(position.width);
    setHeigthPaper(position.heigth);
    setTimeout(() => {
      window.print();
    }, 500);
  };
  const gotoBack = () => {
    history.goBack();
  };

  // useEffect(() => {
  //   // window.print();
  // }, []);

  return (
    <div className={classes.root}>
      {DATA_COOKIE_FORM_MANDIRI && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={ImageBG}
            id='imgBGPrint'
            style={{
              width: `${widhtPaper}cm`,
              height: `${heigthPaper}cm`,
            }}
          />
        </div>
      )}
      {/* <div id='previewFormPrint'>
            <div
              // className={classes.containerPrintPage}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridTemplateRows: 'repeat(2, 100px)',
              }}
            >
              <div>
                 <PreviewInformasiUmum
              data={DATA_COOKIE_FORM_MANDIRI?.informasiUmum}
              isPrint={true}
              valueMin={valueMin}
            /> 
                 <PreviewInformasiPenerimaDanValidasi
              data={DATA_COOKIE_FORM_MANDIRI?.informasiPenerimaDanValidasi}
              isPrint={true}
            />
            <PreviewInformasiTransaksi
              data={DATA_COOKIE_FORM_MANDIRI?.informasiTransaksi}
              isPrint={true}
            /> 
              </div>
              <div>
                 <PreviewInformasiPengirim
              data={DATA_COOKIE_FORM_MANDIRI?.informasiPengirim}
              isPrint={true}
            />
            <PreviewInformasiMetodeTransaksi
              data={DATA_COOKIE_FORM_MANDIRI?.informasiMetodeTransaksi}
              isPrint={true}
            />
            <PreviewInformasiSumberDanaTransaksi
              data={DATA_COOKIE_FORM_MANDIRI?.informasiSumberDanaTransaksi}
              isPrint={true}
            />
            <PreviewInformasBiayaTransaksi
              data={DATA_COOKIE_FORM_MANDIRI?.informasiBiayaTransaksi}
              isPrint={true}
            /> 
              </div>
            </div>
          </div> 
        </div>
      )} */}
      <div className={classes.containerActionButton}>
        <Button
          classsNameLabel={classes.labelBtnPrint}
          className={classNames('hideOnPrint')}
          onClick={gotoBack}
        >
          Back
        </Button>
        <div
          style={{
            display: 'flex',
            gap: 10,
          }}
        >
          <Button
            classsNameLabel={classes.labelBtnPrint}
            className={classNames('hideOnPrint', classes.btnPrint)}
            onClick={() => handlePrint({ width: 19.5, heigth: 17.5 })}
          >
            Print 1
          </Button>
          {/* <Button
            classsNameLabel={classes.labelBtnPrint}
            className={classNames('hideOnPrint', classes.btnPrint)}
            onClick={() => handlePrint({ width: 24.5, heigth: 20 })}
          >
            Print 2
          </Button>
          <Button
            classsNameLabel={classes.labelBtnPrint}
            className={classNames('hideOnPrint', classes.btnPrint)}
            onClick={() => handlePrint({ width: 25, heigth: 19.5 })}
          >
            Print 3
          </Button>
          <Button
            classsNameLabel={classes.labelBtnPrint}
            className={classNames('hideOnPrint', classes.btnPrint)}
            onClick={() => handlePrint({ width: 26, heigth: 17.5 })}
          >
            Print 4
          </Button>
          <Button
            classsNameLabel={classes.labelBtnPrint}
            className={classNames('hideOnPrint', classes.btnPrint)}
            onClick={() => handlePrint({ width: 27, heigth: 19 })}
          >
            Print 5
          </Button> */}
          {/* <Button
            classsNameLabel={classes.labelBtnPrint}
            className={classNames('hideOnPrint', classes.btnPrint)}
            onClick={() => handlePrint({ width: 28.3, heigth: 21 })}
          >
            Print 6
          </Button>
          <Button
            classsNameLabel={classes.labelBtnPrint}
            className={classNames('hideOnPrint', classes.btnPrint)}
            onClick={() => handlePrint({ width: 28, heigth: 19.5 })}
          >
            Print 7
          </Button>
          <Button
            classsNameLabel={classes.labelBtnPrint}
            className={classNames('hideOnPrint', classes.btnPrint)}
            onClick={() => handlePrint({ width: 28, heigth: 19 })}
          >
            Print 8
          </Button>
          <Button
            classsNameLabel={classes.labelBtnPrint}
            className={classNames('hideOnPrint', classes.btnPrint)}
            onClick={() => handlePrint({ width: 28, heigth: 18.5 })}
          >
            Print 9
          </Button>
          <Button
            classsNameLabel={classes.labelBtnPrint}
            className={classNames('hideOnPrint', classes.btnPrint)}
            onClick={() => handlePrint({ width: 28.5, heigth: 21.3 })}
          >
            Print 10
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Print;

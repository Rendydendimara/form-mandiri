import { IPositionCompoent } from './IPositionComponent';

export interface IStateInformasiPengirim {
  tipePengirim: {
    value: 'nasabah' | 'non_nasabah' | '';
    position: {
      nasabah: IPositionCompoent;
      non_nasabah: IPositionCompoent;
    };
  };
  nikOrPassporOrNpwpPerusahaan: {
    value: string;
    position: IPositionCompoent;
  };
  jenisPengirim: {
    value: 'pemerintah' | 'perorangan' | 'perusahaan' | '';
    position: {
      pemerintah: IPositionCompoent;
      perorangan: IPositionCompoent;
      perusahaan: IPositionCompoent;
    };
  };
  statusKependudukan: {
    value: 'penduduk' | 'bukan_penduduk' | '';
    position: {
      penduduk: IPositionCompoent;
      bukan_penduduk: IPositionCompoent;
    };
  };
  namaPengirim: {
    value: string;
    position: IPositionCompoent;
  };
  alamatDanNomorTelepon: {
    value: string;
    position: IPositionCompoent;
  };
}

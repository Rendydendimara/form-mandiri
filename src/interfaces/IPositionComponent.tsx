export interface IPositionCompoent {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export type IPositionJenisTransaksiCompoent =
  | {
      top: number;
      right: number;
      bottom: number;
      left: number;
    }
  | {
      bank_draf: IPositionCompoent;
      kliring_inkaso: IPositionCompoent;
      rtgs: IPositionCompoent;
      setoran: IPositionCompoent;
      sknbi: IPositionCompoent;
      tt: IPositionCompoent;
    };

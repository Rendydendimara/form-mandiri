import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
// import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';
import ImageBG from 'assets/images/form-paper-blueprint.jpg';
import CheckImg from 'assets/icons/check.png';
import { IDataGlobal } from 'interfaces/IDataGlobal';
import { getLocal } from 'local/localStorage';
import { VERSION_LOCAL_STORAGE_FORM_MANDIRI } from 'constant';
import { IDataTabelInformasiMetodeTransaksi } from 'interfaces/IStateInformasiMetodeTransaksi';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
  },
  section: {
    flexGrow: 1,
    width: 'auto',
  },
  image: {
    position: 'absolute',
  },
  text: {
    fontSize: 11,
  },
});
let pivot = 220;
// Create Document Component
const PreviewDocument = () => {
  const DATA_COOKIE_FORM_MANDIRI: IDataGlobal = getLocal(
    VERSION_LOCAL_STORAGE_FORM_MANDIRI
  );

  return (
    <PDFViewer>
      <Document>
        <Page
          debug={false}
          size={{ width: 793, height: 605 }}
          style={styles.page}
        >
          <View style={styles.section}>
            <Image
              src={ImageBG}
              style={{
                width: '793px',
                position: 'absolute',
                height: '605px',
                zIndex: -1,
              }}
            />
          </View>
          {/* Section Informasi Umum */}
          <View style={styles.section}>
            <Text
              style={{
                fontSize: 11,
                position: 'absolute',
                top: 50,
                left: 210, // pakai right
              }}
            >
              {DATA_COOKIE_FORM_MANDIRI.informasiUmum.tanggal.value}
            </Text>
            <Image
              src={CheckImg}
              style={{
                width: '14px',
                position: 'absolute',
                left: 106,
                top: 75,
              }}
            />
          </View>

          {/* Section Informasi Penerima Dan Validasi */}
          <View style={styles.section}>
            <Text
              style={{
                fontSize: 11,
                position: 'absolute',
                top: 140,
                left: -175,
              }}
            >
              {
                DATA_COOKIE_FORM_MANDIRI.informasiPenerimaDanValidasi.validasi
                  .value
              }
            </Text>
            <Image
              src={CheckImg}
              style={{
                width: '14px',
                position: 'absolute',
                left: 13,
                top: 224,
              }}
            />
            <Image
              src={CheckImg}
              style={{
                width: '14px',
                position: 'absolute',
                left: 13,
                top: 243,
              }}
            />
            <Text
              style={{
                fontSize: 11,
                position: 'absolute',
                top: 265,
                left: -63,
              }}
            >
              {
                DATA_COOKIE_FORM_MANDIRI.informasiPenerimaDanValidasi
                  .namaPenerima.value
              }
            </Text>
            <Text
              style={{
                fontSize: 11,
                position: 'absolute',
                top: 282,
                left: -63,
              }}
            >
              {
                DATA_COOKIE_FORM_MANDIRI.informasiPenerimaDanValidasi.noRekening
                  .value
              }
            </Text>
            <Text
              style={{
                fontSize: 11,
                position: 'absolute',
                top: 298,
                left: -63,
              }}
            >
              {DATA_COOKIE_FORM_MANDIRI.informasiPenerimaDanValidasi.bank.value}
            </Text>
            <Text
              style={{
                fontSize: 11,
                position: 'absolute',
                top: 311,
                left: -63,
                width: '1000px',
              }}
            >
              {
                DATA_COOKIE_FORM_MANDIRI.informasiPenerimaDanValidasi
                  .alamatDanTelepon.value
              }
            </Text>
            <Text
              style={{
                fontSize: 11,
                position: 'absolute',
                top: 326,
                left: -63,
              }}
            >
              {
                DATA_COOKIE_FORM_MANDIRI.informasiPenerimaDanValidasi
                  .jenisDanNomorIdentitas.value
              }
            </Text>
          </View>

          {/* Section Informasi Transaksi */}
          <View style={styles.section}>
            <Image
              src={CheckImg}
              style={{
                width: '14px',
                position: 'absolute',
                left: -98,
                top: 352,
              }}
            />
            <Text
              style={{
                fontSize: 11,
                position: 'absolute',
                left: -195,
                top: 390,
              }}
            >
              {
                DATA_COOKIE_FORM_MANDIRI.informasiTransaksi.beritaTransaksi
                  .value
              }
            </Text>
          </View>

          {/* Section Informasi Pengirim */}
          <View style={styles.section}>
            <Image
              src={CheckImg}
              style={{
                width: '14px',
                position: 'absolute',
                left: 103,
                top: 58,
              }}
            />
            <Text
              style={{
                fontSize: 11,
                position: 'absolute',
                left: 131,
                top: 79,
              }}
            >
              {
                DATA_COOKIE_FORM_MANDIRI.informasiPengirim
                  .nikOrPassporOrNpwpPerusahaan.value
              }
            </Text>
            <Image
              src={CheckImg}
              style={{
                width: '14px',
                position: 'absolute',
                left: 103,
                top: 98,
              }}
            />
            <Image
              src={CheckImg}
              style={{
                width: '14px',
                position: 'absolute',
                left: 103,
                top: 115,
              }}
            />
            <Text
              style={{
                fontSize: 11,
                position: 'absolute',
                left: 105,
                top: 137,
              }}
            >
              {DATA_COOKIE_FORM_MANDIRI.informasiPengirim.namaPengirim.value}
            </Text>
            <Text
              style={{
                fontSize: 11,
                position: 'absolute',
                width: '1000px',
                left: 105,
                top: 153,
              }}
            >
              {
                DATA_COOKIE_FORM_MANDIRI.informasiPengirim.alamatDanNomorTelepon
                  .value
              }
            </Text>
          </View>

          {/* Section Informasi Metode Transaksi */}
          <View style={styles.section}>
            <Image
              src={CheckImg}
              style={{
                width: '14px',
                position: 'absolute',
                left: -102,
                top: 204,
              }}
            />
            <View
              style={{
                marginLeft: '43px',
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
              }}
            >
              {DATA_COOKIE_FORM_MANDIRI.informasiMetodeTransaksi.cekGiro.value
                .split('')
                .map((num: string, index: number) => (
                  <Text
                    style={{
                      fontSize: 11,
                      position: 'absolute',
                      width: '1000px',
                      marginRight: '10px',
                      left: 15 * index,
                      top: 204,
                    }}
                    key={index}
                  >
                    {num}
                  </Text>
                ))}
            </View>

            {DATA_COOKIE_FORM_MANDIRI.informasiMetodeTransaksi.dataTabel.map(
              (tabel: IDataTabelInformasiMetodeTransaksi, index) => {
                pivot += 18;
                return (
                  <View key={index}>
                    <Text
                      style={{
                        fontSize: 11,
                        position: 'absolute',
                        width: '1000px',
                        left: -70,
                        top: pivot,
                      }}
                    >
                      {tabel.bankTarik.value}
                    </Text>
                    <Text
                      style={{
                        fontSize: 11,
                        position: 'absolute',
                        width: '1000px',
                        left: 50,
                        top: pivot,
                      }}
                    >
                      {tabel.noCekAtauBg.value}
                    </Text>
                    <Text
                      style={{
                        fontSize: 11,
                        position: 'absolute',
                        width: '1000px',
                        left: 145,
                        top: pivot,
                      }}
                    >
                      {tabel.valuta.value}
                    </Text>
                    <Text
                      style={{
                        fontSize: 11,
                        position: 'absolute',
                        width: '1000px',
                        left: 220,
                        top: pivot,
                      }}
                    >
                      {tabel.nominal.value}
                    </Text>
                  </View>
                );
              }
            )}
            <Text
              style={{
                fontSize: 11,
                position: 'absolute',
                width: '1000px',
                left: 82,
                top: 274,
              }}
            >
              {
                DATA_COOKIE_FORM_MANDIRI.informasiMetodeTransaksi.jumlahSetoran
                  .value
              }
            </Text>
            <Text
              style={{
                fontSize: 11,
                position: 'absolute',
                width: '1000px',
                left: -40,
                top: 292,
              }}
            >
              {
                DATA_COOKIE_FORM_MANDIRI.informasiMetodeTransaksi.terbilang
                  .value
              }
            </Text>
          </View>

          {/* Section Informasi Sumber Dana Transaksi */}
          <View style={styles.section}>
            <Image
              src={CheckImg}
              style={{
                width: '14px',
                position: 'absolute',
                left: -211,
                top: 360,
              }}
            />
          </View>

          {/* Section Informas Biaya Transaksi */}
          <View style={styles.section}>
            <Image
              src={CheckImg}
              style={{
                width: '14px',
                position: 'absolute',
                left: -305,
                top: 435,
              }}
            />
            <View
              style={{
                marginLeft: '43px',
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
              }}
            >
              {DATA_COOKIE_FORM_MANDIRI.informasiBiayaTransaksi.totalBiayaTransaksi.value
                .split('')
                .map((num: string, index: number) => (
                  <Text
                    style={{
                      fontSize: 11,
                      position: 'absolute',
                      width: '1000px',
                      marginRight: '10px',
                      left: -14.5 * index,
                      top: 437,
                    }}
                    key={index}
                  >
                    {num}
                  </Text>
                ))}
            </View>
            <Image
              src={CheckImg}
              style={{
                width: '14px',
                position: 'absolute',
                left: -149,
                top: 470,
              }}
            />
            <Text
              style={{
                fontSize: 11,
                position: 'absolute',
                width: '1000px',
                left: -95,
                top: 470,
              }}
            >
              {DATA_COOKIE_FORM_MANDIRI.informasiBiayaTransaksi.lainnya.value}
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PreviewDocument;

import { P, type Localized } from "./locales";

export type Office = {
  id: string;
  hq: boolean;
  lat: number;
  lng: number;
  short: Localized;
  name: Localized;
  city: Localized;
  address: string;
  phone: string;
  fax: string;
  email: string;
  labelSide: "asia" | "america";
  stack: number;
  pulse?: boolean;
};

export const offices: Office[] = [
  {
    id: "tokyo",
    hq: false,
    lat: 35.6702,
    lng: 139.7764,
    short: P("Tokyo", "東京", "東京", "Tokyo"),
    name: P("Tokyo Office", "東京辦公室", "東京オフィス", "Văn phòng Tokyo"),
    city: P("Tokyo, Japan", "東京，日本", "東京、日本", "Tokyo, Nhật Bản"),
    address: "104-0041 6FL., Gran+Ginza-East 1-5-1 Shintomi, Chuo-Ku, Tokyo City, Japan",
    phone: "+81-3-6260-3944",
    fax: "+81-3-6260-3945",
    email: "info.tyo@northgo.com",
    labelSide: "asia",
    stack: 0,
  },
  {
    id: "osaka",
    hq: false,
    lat: 34.6994,
    lng: 135.4972,
    short: P("Osaka", "大阪", "大阪", "Osaka"),
    name: P("Osaka Office", "大阪辦公室", "大阪オフィス", "Văn phòng Osaka"),
    city: P("Osaka, Japan", "大阪，日本", "大阪、日本", "Osaka, Nhật Bản"),
    address: "530-0002 3FL., -B MF Sakura-Bashi Build, 2-6-23 Sonezaki Shinchi, kita-ku, Osaka City, Japan",
    phone: "+81-6-6676-8395",
    fax: "+81-6-6676-8397",
    email: "info.osa@northgo.com",
    labelSide: "asia",
    stack: 1,
  },
  {
    id: "taipei",
    hq: true,
    lat: 25.0579,
    lng: 121.5445,
    short: P("Taipei", "台北", "台北", "Đài Bắc"),
    name: P("Taipei Office (Head Office)", "台北辦公室（總部）", "台北オフィス（本社）", "Văn phòng Đài Bắc (trụ sở)"),
    city: P("Taipei, Taiwan", "台北，台灣", "台北、台湾", "Đài Bắc, Đài Loan"),
    address: "7F., No. 10, Sec. 3, Minsheng E. Rd., Taipei City 104511, Taiwan",
    phone: "+886-2-2531-8677",
    fax: "+886-2-2531-8577",
    email: "info.tpe@northgo.com",
    labelSide: "asia",
    stack: 2,
  },
  {
    id: "taichung",
    hq: false,
    lat: 24.2475,
    lng: 120.5568,
    short: P("Taichung", "台中", "台中", "Đài Trung"),
    name: P("Taichung Office", "台中辦公室", "台中オフィス", "Văn phòng Đài Trung"),
    city: P("Taichung, Taiwan", "台中，台灣", "台中、台湾", "Đài Trung, Đài Loan"),
    address: "No. 4, Zhongheng 11th Rd., Taichung City 435058, Taiwan",
    phone: "+886-4-2326-2580",
    fax: "+886-4-2326-0308",
    email: "info.txg@northgo.com",
    labelSide: "asia",
    stack: 3,
  },
  {
    id: "kaohsiung",
    hq: false,
    lat: 22.6193,
    lng: 120.2788,
    short: P("Kaohsiung", "高雄", "高雄", "Cao Hùng"),
    name: P("Kaohsiung Office", "高雄辦公室", "高雄オフィス", "Văn phòng Cao Hùng"),
    city: P("Kaohsiung, Taiwan", "高雄，台灣", "高雄、台湾", "Cao Hùng, Đài Loan"),
    address: "19F-2, No.31 Hai-Pien Rd., Kaohsiung City 802609, Taiwan",
    phone: "+886-7-335-0730",
    fax: "+886-7-336-4536",
    email: "info.khh@northgo.com",
    labelSide: "asia",
    stack: 4,
  },
  {
    id: "hcmc",
    hq: false,
    lat: 10.7964,
    lng: 106.7191,
    short: P("Ho Chi Minh City", "胡志明市", "ホーチミン", "TP. Hồ Chí Minh"),
    name: P("Ho Chi Minh Office", "胡志明市辦公室", "ホーチミンオフィス", "Văn phòng TP. Hồ Chí Minh"),
    city: P("Ho Chi Minh City, Vietnam", "胡志明市，越南", "ホーチミン、ベトナム", "TP. Hồ Chí Minh, Việt Nam"),
    address: "5th Floor, No. 92D Nguyen Huu Canh Street, Ward 22, Binh Thanh District, Ho Chi Minh City, Vietnam",
    phone: "+84-28-9995-7368",
    fax: "",
    email: "info.hcmc@northgo.com",
    labelSide: "asia",
    stack: 5,
  },
  {
    id: "lax",
    hq: false,
    lat: 34.0626,
    lng: -118.1229,
    short: P("Los Angeles", "洛杉磯", "ロサンゼルス", "Los Angeles"),
    name: P("Los Angeles Office", "洛杉磯辦公室", "ロサンゼルスオフィス", "Văn phòng Los Angeles"),
    city: P("Monterey Park, USA", "蒙市，美國", "モンテレーパーク、米国", "Monterey Park, Hoa Kỳ"),
    address: "119 S. Atlantic Blvd, Ste#301, Monterey Park, CA 91754, USA",
    phone: "+1-714-853-1088",
    fax: "",
    email: "info.lax@northgo.com",
    labelSide: "america",
    stack: 0,
    pulse: true,
  },
];

export function phoneLine(office: Office): string {
  let line = `Tel ${office.phone}`;
  if (office.fax) line += ` · Fax ${office.fax}`;
  return line;
}

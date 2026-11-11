import { P, type Localized } from "./locales";
import { offices, phoneLine } from "./offices";

export type Point = {
  text: Localized;
  path?: string;
  hash?: string;
};

export type Card = {
  name: Localized;
  path: string;
  status: "ok" | "bad";
  desc: Localized;
  points?: Point[];
};

export type Section = {
  id: string;
  title: Localized;
  note: Localized;
  layout?: "services" | "two";
  warn?: Localized;
  notes?: Localized[];
  cards?: Card[];
  offices?: boolean;
};

export type TreeNode = {
  name: Localized;
  path?: string;
  hash?: string;
  status?: "bad";
  children?: TreeNode[];
};

export const sitemapUi = {
  mapTitle: P("Northgo sitemap", "Northgo 網站地圖", "Northgo サイトマップ", "Sơ đồ trang Northgo"),
  treeTitle: P("Northgo sitemap tree", "Northgo 樹狀網站地圖", "Northgo サイトマップ（ツリー）", "Sơ đồ trang Northgo dạng cây"),
  mapH1: P("Sitemap", "網站地圖", "サイトマップ", "Sơ đồ trang"),
  treeH1: P("Sitemap tree", "樹狀網站地圖", "サイトマップ", "Sơ đồ dạng cây"),
  tagline: P("Making logistics effortless.", "讓物流變得輕鬆。", "Making logistics effortless.", "Making logistics effortless."),
  mapLede: P(
    "Notes follow the language you pick, and each link opens that locale on www.northgo.com. English, Traditional Chinese, Japanese, and Vietnamese.",
    "說明跟著選取的語系走，連結會打開 www.northgo.com 上的對應語系。英文、繁體中文、日文、越南文。",
    "説明は選んだ言語に切り替わり、リンクは www.northgo.com のその言語を開きます。英語、繁体字中国語、日本語、ベトナム語。",
    "Phần mô tả đổi theo ngôn ngữ đang chọn, và liên kết mở đúng phiên bản đó trên www.northgo.com. Tiếng Anh, tiếng Trung phồn thể, tiếng Nhật và tiếng Việt.",
  ),
  treeLede: P(
    "Hierarchy and main anchors only. Longer notes stay on the detail map.",
    "只列頁面階層與主要錨點。較長的說明在詳細地圖。",
    "階層と主なアンカーだけ。詳しい説明は詳細マップにあります。",
    "Chỉ còn cấp trang và neo chính. Phần mô tả dài nằm ở bản chi tiết.",
  ),
  date: P("Checked 2026-11-11", "分析日期 2026-11-11", "確認日 2026-11-11", "Đã rà 2026-11-11"),
  stats: [
    { n: "44", label: P("pages that open", "可開啟的內容頁", "開けるページ", "trang mở được") },
    { n: "4", label: P("languages", "語系", "言語", "ngôn ngữ") },
    { n: "7", label: P("offices", "全球據點", "拠点", "văn phòng") },
    { n: "4", label: P("News links are 404", "News 連結失效", "News は 404", "liên kết News lỗi") },
  ],
  langLabel: P("Language", "語系", "言語", "Ngôn ngữ"),
  viewLabel: P("Map layout", "地圖形式", "表示", "Kiểu sơ đồ"),
  jumpLabel: P("Sections", "區段", "セクション", "Mục"),
  detailView: P("Detail", "詳細", "詳細", "Chi tiết"),
  treeView: P("Tree", "樹狀", "ツリー", "Cây"),
  worldView: P("World map", "全球地圖", "世界地図", "Bản đồ toàn cầu"),
  search: P("Search pages, offices, or URLs", "搜尋頁面、據點或網址", "ページ、拠点、URL を検索", "Tìm trang, văn phòng hoặc URL"),
  searchTree: P("Filter the tree", "篩選樹狀項目", "ツリーを絞り込む", "Lọc mục trên cây"),
  skip: P("Skip to sitemap", "跳至網站地圖", "サイトマップへ移動", "Tới sơ đồ trang"),
  empty: P("No matches.", "沒有符合的項目。", "一致する項目はありません。", "Không có mục phù hợp."),
  footer: P(
    "Based on public pages of www.northgo.com checked on 2026-11-11.",
    "來源為 2026-11-11 實測的 www.northgo.com 公開頁面。",
    "2026-11-11 に確認した www.northgo.com の公開ページに基づきます。",
    "Dựa trên các trang công khai của www.northgo.com đã kiểm tra ngày 2026-11-11.",
  ),
};

export const locationsUi = {
  title: P("Northgo · Global", "Northgo · 全球", "Northgo · グローバル", "Northgo · Toàn cầu"),
  h1: P("Global", "全球", "グローバル", "Toàn cầu"),
  lede: P(
    "7 offices are on this map",
    "7 個辦公室都在這張地圖上",
    "7つのオフィスがこの地図上にあります",
    "7 văn phòng đều trên bản đồ này",
  ),
  hq: P("HQ", "總部", "本社", "Trụ sở"),
  office: P("Office", "辦公室", "オフィス", "Văn phòng"),
  address: P("Address", "地址", "住所", "Địa chỉ"),
  phone: P("Phone", "電話", "電話", "Điện thoại"),
  email: P("Email", "電子郵件", "メール", "Email"),
  contact: P("Contact page", "聯絡頁", "お問い合わせ", "Trang liên hệ"),
  sitemap: P("Sitemap", "網站地圖", "サイトマップ", "Sơ đồ trang"),
  source: P(
    "Office details from www.northgo.com/zh-tw/contact.",
    "據點資料來源 www.northgo.com/zh-tw/contact。",
    "拠点情報は www.northgo.com/zh-tw/contact に基づきます。",
    "Thông tin văn phòng từ www.northgo.com/zh-tw/contact.",
  ),
  skip: P("Skip to map", "跳至地圖", "地図へ移動", "Tới bản đồ"),
  mapFail: P(
    "Could not load the world map. Check your network and reload.",
    "無法載入世界地圖，請確認網路後重新整理。",
    "世界地図を読み込めませんでした。ネットワークを確認して再読み込みしてください。",
    "Không tải được bản đồ thế giới. Kiểm tra mạng rồi tải lại.",
  ),
};

export const jumps = [
  { id: "overview", label: P("Overview", "概況", "概要", "Tổng quan") },
  { id: "home", label: P("Home", "首頁", "ホーム", "Trang chủ") },
  { id: "services", label: P("Services", "服務", "サービス", "Dịch vụ") },
  { id: "company", label: P("About", "關於", "会社概要", "Giới thiệu") },
  { id: "contact", label: P("Contact", "聯絡與據點", "連絡先", "Liên hệ") },
  { id: "legal", label: P("Legal", "法律", "法務", "Pháp lý") },
  { id: "news", label: P("News", "News", "News", "News") },
];

const names = {
  home: P("Home", "首頁", "ホーム", "Trang chủ"),
  why: P("Why Northgo", "為什麼選擇 Northgo", "Northgo を選ぶ理由", "Vì sao chọn Northgo"),
  services: P("Services", "服務", "サービス", "Dịch vụ"),
  freight: P("Freight Logistics", "貨運承攬", "貨物輸送", "Giao nhận vận tải"),
  ocean: P("Ocean Freight", "海運", "海上輸送", "Vận tải biển"),
  air: P("Air Freight", "空運", "航空輸送", "Vận tải hàng không"),
  land: P("Land Transportation", "陸運", "陸上輸送", "Vận tải đường bộ"),
  customs: P("Customs Clearance", "報關", "通関", "Thông quan"),
  project: P("Project Logistics", "專案物流", "プロジェクト物流", "Logistics dự án"),
  warehouse: P("Warehouse Logistics", "倉儲物流", "倉庫物流", "Kho bãi"),
  shipping: P("Shipping Agency", "船務代理", "船舶代理店", "Đại lý tàu"),
  about: P("About", "關於", "会社概要", "Giới thiệu"),
  contact: P("Contact", "聯絡", "お問い合わせ", "Liên hệ"),
  enquiry: P("Enquiry form", "詢價表單", "見積フォーム", "Biểu mẫu hỏi giá"),
  locations: P("Global offices", "全球據點", "世界の拠点", "Văn phòng toàn cầu"),
  privacy: P("Privacy Policy", "隱私權政策", "プライバシーポリシー", "Chính sách quyền riêng tư"),
  terms: P("Terms of Service", "服務條款", "利用規約", "Điều khoản dịch vụ"),
  cookie: P("Cookie Policy", "Cookie 政策", "Cookie ポリシー", "Chính sách cookie"),
  disclaimer: P("Legal Disclaimer", "法律聲明", "免責事項", "Tuyên bố miễn trừ"),
  news: P("News", "新聞", "ニュース", "Tin tức"),
  taipei: P("Taipei (Head office)", "台北（總部）", "台北（本社）", "Đài Bắc (trụ sở)"),
  taichung: P("Taichung", "台中", "台中", "Đài Trung"),
  kaohsiung: P("Kaohsiung", "高雄", "高雄", "Cao Hùng"),
  la: P("Los Angeles", "洛杉磯", "ロサンゼルス", "Los Angeles"),
  hcm: P("Ho Chi Minh City", "胡志明市", "ホーチミン", "TP. Hồ Chí Minh"),
  tokyo: P("Tokyo", "東京", "東京", "Tokyo"),
  osaka: P("Osaka", "大阪", "大阪", "Osaka"),
};

export const sections: Section[] = [
  {
    id: "overview",
    title: P("Site overview", "網站概況", "サイト概要", "Tổng quan website"),
    note: P("Webflow site, last published 2025-09-12", "Webflow 網站，最後發佈 2025-09-12", "Webflow サイト、最終公開 2025-09-12", "Website Webflow, xuất bản lần cuối 2025-09-12"),
    notes: [
      P(
        "Main menu: Services (four items), About, Contact, and Enquire now, which opens the enquiry form.",
        "主選單：服務（四項）、關於、聯絡，以及立即詢價（開啟詢價表單）。",
        "メインメニュー：サービス（4 項目）、会社概要、お問い合わせ、見積依頼（見積フォームを開く）。",
        "Menu chính: Dịch vụ (bốn mục), Giới thiệu, Liên hệ, và Enquire now (mở biểu mẫu hỏi giá).",
      ),
      P(
        "Locale URLs: English at the root, Traditional Chinese at `/zh-tw`, Japanese at `/ja`, Vietnamese at `/vi`.",
        "語系網址：英文在根路徑、繁體中文 `/zh-tw`、日文 `/ja`、越南文 `/vi`。",
        "言語 URL：英語はルート、繁体字中国語は `/zh-tw`、日本語は `/ja`、ベトナム語は `/vi`。",
        "URL ngôn ngữ: tiếng Anh ở gốc, tiếng Trung phồn thể `/zh-tw`, tiếng Nhật `/ja`, tiếng Việt `/vi`.",
      ),
      P(
        "The footer also links to News, Locations, and Privacy, Terms, Cookie, Disclaimer.",
        "頁尾另有 News、據點，以及隱私權、條款、Cookie、免責聲明。",
        "フッターには News、拠点、プライバシー、規約、Cookie、免責事項もある。",
        "Chân trang còn có News, văn phòng, cùng quyền riêng tư, điều khoản, cookie và tuyên bố miễn trừ.",
      ),
      P(
        "`/sitemap.xml` returns 404 and `/robots.txt` is empty. Facebook, Instagram, X, LinkedIn, and YouTube icons all use `#`.",
        "`/sitemap.xml` 回傳 404，`/robots.txt` 是空檔。Facebook、Instagram、X、LinkedIn、YouTube 圖示的連結都是 `#`。",
        "`/sitemap.xml` は 404、`/robots.txt` は空。Facebook、Instagram、X、LinkedIn、YouTube のアイコンはすべて `#`。",
        "`/sitemap.xml` trả về 404 và `/robots.txt` trống. Biểu tượng Facebook, Instagram, X, LinkedIn, YouTube đều trỏ tới `#`.",
      ),
      P(
        "The Traditional Chinese homepage headline is 「讓物流變得輕鬆。」. Japanese, Vietnamese, and the rest of the body copy stay in English.",
        "繁中首頁標題是「讓物流變得輕鬆。」。日文、越南文與其餘頁面內文維持英文原文。",
        "繁体字中国語ホームの見出しは「讓物流變得輕鬆。」。日本語・ベトナム語と、その他の本文は英語のまま。",
        "Tiêu đề trang chủ tiếng Trung là 「讓物流變得輕鬆。」. Tiếng Nhật, tiếng Việt và phần nội dung còn lại vẫn là tiếng Anh.",
      ),
    ],
  },
  {
    id: "home",
    title: P("Home", "首頁", "ホーム", "Trang chủ"),
    note: P("Brand line and service entries", "品牌主張與服務入口", "ブランドとサービスの入口", "Thông điệp và lối vào dịch vụ"),
    cards: [
      {
        name: names.home,
        path: "/",
        status: "ok",
        desc: P(
          "Headline “Making logistics effortless.” The Traditional Chinese homepage uses 「讓物流變得輕鬆。」. Northgo cites more than 30 years of making logistics simple.",
          "繁中標題「讓物流變得輕鬆。」。英文頁與日文、越南文頁的標題是 “Making logistics effortless.”。內文說明超過 30 年經驗，目標是把物流做簡單。",
          "見出しは “Making logistics effortless.”。繁体字中国語ホームだけ「讓物流變得輕鬆。」。30 年以上の経験で物流をシンプルにする、という内容です。",
          "Tiêu đề là “Making logistics effortless.”. Trang chủ tiếng Trung dùng 「讓物流變得輕鬆。」. Nội dung nêu hơn 30 năm kinh nghiệm để làm logistics đơn giản.",
        ),
        points: [
          { text: P("Four service entries: freight, project, warehouse, shipping agency.", "四大服務入口：貨運、專案、倉儲、船務代理。", "4 つのサービス入口：貨物、プロジェクト、倉庫、船舶代理。", "Bốn lối vào dịch vụ: vận tải, dự án, kho, đại lý tàu.") },
          { text: P("Why Northgo: seamless experience, hands-on experts, 360° solutions, 24/7 support.", "為什麼選擇 Northgo：無縫體驗、專家協作、360° 方案、24/7 支援。", "Northgo を選ぶ理由：途切れない体験、現場に入る専門家、360° の方案、24 時間サポート。", "Vì sao chọn Northgo: trải nghiệm liền mạch, chuyên gia đồng hành, giải pháp 360°, hỗ trợ 24/7."), path: "/", hash: "#why-northgo" },
          { text: P("The closing call to action goes to Contact.", "頁尾行動呼籲導向聯絡頁。", "末尾の案内はお問い合わせへ進みます。", "Lời kêu gọi cuối trang dẫn tới Liên hệ.") },
        ],
      },
    ],
  },
  {
    id: "services",
    title: P("Services", "服務", "サービス", "Dịch vụ"),
    note: P("Four pages in the Services menu", "選單中的四個服務頁", "メニューの 4 サービス", "Bốn trang trong menu Dịch vụ"),
    layout: "services",
    cards: [
      {
        name: names.freight,
        path: "/services/freight-logistics",
        status: "ok",
        desc: P(
          "Freight forwarding. Page line: “Efficient logistics, seamless connections.”",
          "貨運承攬。頁首標語 “Efficient logistics, seamless connections.”",
          "国際貨物輸送。見出しは “Efficient logistics, seamless connections.”",
          "Giao nhận vận tải. Dòng mở đầu: “Efficient logistics, seamless connections.”",
        ),
        points: [
          { text: P("Ocean freight: FCL, LCL, global carriers, tailored options.", "海運：FCL、LCL、全球承運人、個人化方案。", "海上輸送：FCL、LCL、グローバルキャリア、個別プラン。", "Đường biển: FCL, LCL, hãng tàu toàn cầu, phương án riêng."), path: "/services/freight-logistics", hash: "#ocean-freight" },
          { text: P("Air freight.", "空運。", "航空輸送。", "Vận tải hàng không."), path: "/services/freight-logistics", hash: "#air-freight" },
          { text: P("Land transportation.", "陸運。", "陸上輸送。", "Vận tải đường bộ."), path: "/services/freight-logistics", hash: "#land-transport" },
          { text: P("Customs clearance.", "報關。", "通関。", "Thông quan."), path: "/services/freight-logistics", hash: "#customs-clearance" },
        ],
      },
      {
        name: names.project,
        path: "/services/project-logistics",
        status: "ok",
        desc: P(
          "Oversized, heavy, and high-value cargo. Page line: “Turning heavy lifts into light work.”",
          "超大、超重與高價值貨物。頁首 “Turning heavy lifts into light work.”",
          "超大型・重量・高額貨物。見出しは “Turning heavy lifts into light work.”",
          "Hàng siêu trường, siêu trọng và giá trị cao. Dòng mở đầu: “Turning heavy lifts into light work.”",
        ),
        points: [
          { text: P("Services: engineering solutions, project management.", "服務：工程方案、專案管理。", "サービス：エンジニアリング、プロジェクト管理。", "Dịch vụ: giải pháp kỹ thuật, quản lý dự án.") },
          { text: P("Industries: oil and gas, offshore and marine, infrastructure, energy, rail, renewable energy, mining, engineering and construction, industrial.", "產業：石油與天然氣、離岸與海事、基礎建設、能源、鐵路、再生能源、採礦、工程與營建、工業。", "産業：石油・ガス、オフショア・海洋、インフラ、エネルギー、鉄道、再生可能エネルギー、鉱業、エンジニアリング・建設、産業設備。", "Ngành: dầu khí, ngoài khơi và hàng hải, hạ tầng, năng lượng, đường sắt, năng lượng tái tạo, khai khoáng, kỹ thuật và xây dựng, công nghiệp.") },
          { text: P("Commitment to quality and HSE, plus customer testimonials.", "品質與 HSE 承諾、客戶見證。", "品質と HSE への約束、お客様の声。", "Cam kết chất lượng và HSE, cùng lời chứng thực.") },
        ],
      },
      {
        name: names.warehouse,
        path: "/services/warehouse-logistics",
        status: "ok",
        desc: P(
          "Warehousing. Page line: “Storage you trust, flexibility you need.”",
          "倉儲。頁首 “Storage you trust, flexibility you need.”",
          "倉庫。見出しは “Storage you trust, flexibility you need.”",
          "Kho bãi. Dòng mở đầu: “Storage you trust, flexibility you need.”",
        ),
        points: [
          { text: P("Located facilities, flexible storage, inventory management, value-added services.", "據點配置、彈性倉儲、庫存管理、加值服務。", "拠点配置、柔軟な保管、在庫管理、付加価値サービス。", "Mặt bằng theo vị trí, lưu kho linh hoạt, quản lý tồn kho, dịch vụ gia tăng.") },
          { text: P("Offshore logistics expertise.", "離岸物流專長。", "オフショア物流の専門性。", "Chuyên môn logistics ngoài khơi.") },
        ],
      },
      {
        name: names.shipping,
        path: "/services/shipping-agency",
        status: "ok",
        desc: P(
          "Shipping agency. Page line: “Anchoring success with every voyage.”",
          "船務代理。頁首 “Anchoring success with every voyage.”",
          "船舶代理店。見出しは “Anchoring success with every voyage.”",
          "Đại lý tàu. Dòng mở đầu: “Anchoring success with every voyage.”",
        ),
        points: [
          { text: P("Vessel types: dry bulk, tankers, break bulk, cruiser, offshore, specialised carrier, container ship, car carrier.", "船型：乾散貨、油輪、雜貨、郵輪、離岸、特殊船、貨櫃船、汽車船。", "船種：ドライバルク、タンカー、ブレークバルク、クルーズ、オフショア、特殊船、コンテナ船、自動車船。", "Loại tàu: hàng rời khô, tàu dầu, hàng rời tổng hợp, du thuyền, ngoài khơi, tàu chuyên dụng, tàu container, tàu chở ô tô.") },
          { text: P("Services: port agency, marine services.", "服務：港口代理、海事服務。", "サービス：港湾代理、マリタイムサービス。", "Dịch vụ: đại lý cảng, dịch vụ hàng hải.") },
          { text: P("Strengths: local relationships, rapid response, offshore experience, client communication.", "優勢：在地關係、快速回應、離岸經驗、客戶溝通。", "強み：現地ネットワーク、迅速な対応、オフショア経験、顧客との連携。", "Thế mạnh: quan hệ tại chỗ, phản hồi nhanh, kinh nghiệm ngoài khơi, trao đổi với khách.") },
        ],
      },
    ],
  },
  {
    id: "company",
    title: P("About", "關於", "会社概要", "Giới thiệu"),
    note: P("Brand, vision, and story", "品牌、願景與故事", "ブランド、ビジョン、ストーリー", "Thương hiệu, tầm nhìn và câu chuyện"),
    cards: [
      {
        name: names.about,
        path: "/about",
        status: "ok",
        desc: P(
          "Headline “Welcome to Northgo.” Brand, vision, and story.",
          "標題 “Welcome to Northgo”。品牌、願景與故事。",
          "見出しは “Welcome to Northgo”。ブランド、ビジョン、沿革。",
          "Tiêu đề “Welcome to Northgo”. Thương hiệu, tầm nhìn và câu chuyện.",
        ),
        points: [
          { text: P("Vision: the most trusted name in logistics.", "願景：成為最受信賴的物流品牌。", "ビジョン：最も信頼される物流の名前。", "Tầm nhìn: thương hiệu logistics được tin cậy nhất.") },
          { text: P("Mission: making logistics effortless.", "使命：讓物流變得輕鬆。", "ミッション：物流を無理なく、かんたんに。", "Sứ mệnh: khiến logistics trở nên nhẹ nhàng.") },
          { text: P("Values: customer focus, integrity and transparency, innovation, sustainability and responsibility.", "價值：以客戶為中心、誠信透明、創新卓越、永續與責任。", "価値観：顧客中心、誠実と透明性、革新、持続可能性と責任。", "Giá trị: lấy khách hàng làm trung tâm, trung thực minh bạch, đổi mới, bền vững và trách nhiệm.") },
          { text: P("Story: what has changed, and what remains the same.", "故事：什麼變了、什麼沒變。", "ストーリー：変わったこと、変わらないこと。", "Câu chuyện: điều đã đổi, và điều vẫn giữ.") },
        ],
      },
    ],
  },
  {
    id: "contact",
    title: P("Contact and offices", "聯絡與據點", "連絡先と拠点", "Liên hệ và văn phòng"),
    note: P("Enquiry form and seven offices", "詢價表單與七個辦公室", "見積フォームと 7 拠点", "Biểu mẫu hỏi giá và bảy văn phòng"),
    cards: [
      {
        name: names.contact,
        path: "/contact",
        status: "ok",
        desc: P(
          "Headline “Mastering Complexity, Delivering Simplicity.” Footer Locations also lands here.",
          "標題 “Mastering Complexity, Delivering Simplicity.”。頁尾據點也指向這一頁。",
          "見出しは “Mastering Complexity, Delivering Simplicity.”。フッターの拠点もこのページです。",
          "Tiêu đề “Mastering Complexity, Delivering Simplicity.”. Mục văn phòng ở chân trang cũng trỏ tới đây.",
        ),
        points: [
          { text: P("Enquiry fields: name, company, email, phone, country, service checkboxes, message, terms.", "詢價欄位：姓名、公司、Email、電話、國家、服務勾選、訊息、條款同意。", "見積項目：氏名、会社、Email、電話、国、サービス選択、メッセージ、規約同意。", "Trường hỏi giá: họ tên, công ty, email, điện thoại, quốc gia, chọn dịch vụ, nội dung, đồng ý điều khoản."), path: "/contact", hash: "#enquiry-form" },
          { text: P("Global offices, seven locations.", "全球據點，七個辦公室。", "世界の拠点、7 か所。", "Văn phòng toàn cầu, bảy địa điểm."), path: "/contact", hash: "#locations" },
        ],
      },
    ],
    offices: true,
  },
  {
    id: "legal",
    title: P("Legal", "法律文件", "法務", "Pháp lý"),
    note: P("Four policy pages in the footer", "頁尾四個政策頁", "フッターの 4 ポリシー", "Bốn trang chính sách ở chân trang"),
    layout: "two",
    cards: [
      {
        name: names.privacy,
        path: "/legal/privacy-policy",
        status: "ok",
        desc: P("Collection, use, retention, rights, and cross-border transfers.", "蒐集、使用、保存、權利與跨境傳輸。", "収集、利用、保管、権利、越境移転。", "Thu thập, sử dụng, lưu giữ, quyền và chuyển dữ liệu xuyên biên giới."),
      },
      {
        name: names.terms,
        path: "/legal/terms",
        status: "ok",
        desc: P("Use, accounts, fees, intellectual property, liability, and governing law.", "使用、帳戶、費用、智財、責任與準據法。", "利用、アカウント、料金、知財、責任、準拠法。", "Sử dụng, tài khoản, phí, sở hữu trí tuệ, trách nhiệm và luật áp dụng."),
      },
      {
        name: names.cookie,
        path: "/legal/cookie-policy",
        status: "ok",
        desc: P("Cookie types, purposes, and how to manage them.", "Cookie 種類、用途與管理方式。", "Cookie の種類、用途、管理方法。", "Loại cookie, mục đích và cách quản lý."),
      },
      {
        name: names.disclaimer,
        path: "/legal/disclaimer",
        status: "ok",
        desc: P("Not professional advice, external links, and limits of liability.", "非專業建議、外部連結與責任限制。", "専門的助言ではない旨、外部リンク、責任の制限。", "Không phải tư vấn chuyên môn, liên kết ngoài, và giới hạn trách nhiệm."),
      },
    ],
  },
  {
    id: "news",
    title: P("News", "News", "News", "News"),
    note: P("Linked in the footer. The page is missing.", "頁尾有連結，頁面不存在。", "フッターにリンクはあるが、ページはない。", "Chân trang có liên kết. Trang không tồn tại."),
    warn: P(
      "/news returns 404 in all four locales. The footer still shows the link.",
      "四個語系的 /news 都回傳 404。頁尾仍顯示這個連結。",
      "4 言語とも /news は 404。フッターにはリンクが残っています。",
      "/news trả về 404 ở cả bốn ngôn ngữ. Chân trang vẫn hiện liên kết này.",
    ),
    cards: [
      {
        name: names.news,
        path: "/news",
        status: "bad",
        desc: P(
          "The same 404 is at /zh-tw/news, /ja/news, and /vi/news.",
          "同樣失效：/zh-tw/news、/ja/news、/vi/news。",
          "/zh-tw/news、/ja/news、/vi/news も同様に開けません。",
          "/zh-tw/news, /ja/news và /vi/news cũng không mở được.",
        ),
      },
    ],
  },
];

function node(
  name: Localized,
  path?: string | null,
  hash?: string | null,
  children?: TreeNode[],
  status?: "bad",
): TreeNode {
  const item: TreeNode = { name };
  if (path) item.path = path;
  if (hash) item.hash = hash;
  if (children) item.children = children;
  if (status) item.status = status;
  return item;
}

export const sitemapTree: TreeNode[] = [
  node(names.home, "/", null, [node(names.why, "/", "#why-northgo")]),
  node(names.services, null, null, [
    node(names.freight, "/services/freight-logistics", null, [
      node(names.ocean, "/services/freight-logistics", "#ocean-freight"),
      node(names.air, "/services/freight-logistics", "#air-freight"),
      node(names.land, "/services/freight-logistics", "#land-transport"),
      node(names.customs, "/services/freight-logistics", "#customs-clearance"),
    ]),
    node(names.project, "/services/project-logistics"),
    node(names.warehouse, "/services/warehouse-logistics"),
    node(names.shipping, "/services/shipping-agency"),
  ]),
  node(names.about, "/about"),
  node(names.contact, "/contact", null, [
    node(names.enquiry, "/contact", "#enquiry-form"),
    node(names.locations, "/contact", "#locations", [
      node(names.taipei),
      node(names.taichung),
      node(names.kaohsiung),
      node(names.la),
      node(names.hcm),
      node(names.tokyo),
      node(names.osaka),
    ]),
  ]),
  node(P("Legal", "法律文件", "法務", "Pháp lý"), null, null, [
    node(names.privacy, "/legal/privacy-policy"),
    node(names.terms, "/legal/terms"),
    node(names.cookie, "/legal/cookie-policy"),
    node(names.disclaimer, "/legal/disclaimer"),
  ]),
  node(names.news, "/news", null, undefined, "bad"),
];

export { offices, phoneLine };

(function () {
  const order = ["en", "zh", "ja", "vi"];
  const origin = "https://www.northgo.com";

  function P(en, zh, ja, vi) {
    return { en: en, zh: zh, ja: ja, vi: vi };
  }

  const locales = [
    { id: "en", label: "EN", lang: "en", prefix: "" },
    { id: "zh", label: "繁中", lang: "zh-Hant", prefix: "/zh-tw" },
    { id: "ja", label: "日本語", lang: "ja", prefix: "/ja" },
    { id: "vi", label: "Tiếng Việt", lang: "vi", prefix: "/vi" }
  ];

  const ui = {
    mapTitle: P("Northgo sitemap", "Northgo 網站地圖", "Northgo サイトマップ", "Sơ đồ trang Northgo"),
    treeTitle: P("Northgo sitemap tree", "Northgo 樹狀網站地圖", "Northgo サイトマップ（ツリー）", "Sơ đồ trang Northgo dạng cây"),
    mapH1: P("Sitemap", "網站地圖", "サイトマップ", "Sơ đồ trang"),
    treeH1: P("Sitemap tree", "樹狀網站地圖", "サイトマップ", "Sơ đồ dạng cây"),
    tagline: P("Making logistics effortless.", "讓物流變得輕鬆。", "Making logistics effortless.", "Making logistics effortless."),
    mapLede: P(
      "Notes follow the language you pick, and each link opens that locale on www.northgo.com. English, Traditional Chinese, Japanese, and Vietnamese.",
      "說明跟著選取的語系走，連結會打開 www.northgo.com 上的對應語系。英文、繁體中文、日文、越南文。",
      "説明は選んだ言語に切り替わり、リンクは www.northgo.com のその言語を開きます。英語、繁体字中国語、日本語、ベトナム語。",
      "Phần mô tả đổi theo ngôn ngữ đang chọn, và liên kết mở đúng phiên bản đó trên www.northgo.com. Tiếng Anh, tiếng Trung phồn thể, tiếng Nhật và tiếng Việt."
    ),
    treeLede: P(
      "Hierarchy and main anchors only. Longer notes stay on the detail map.",
      "只列頁面階層與主要錨點。較長的說明在詳細地圖。",
      "階層と主なアンカーだけ。詳しい説明は詳細マップにあります。",
      "Chỉ còn cấp trang và neo chính. Phần mô tả dài nằm ở bản chi tiết."
    ),
    date: P("Checked 2026-11-11", "分析日期 2026-11-11", "確認日 2026-11-11", "Đã rà 2026-11-11"),
    stats: [
      { n: "44", label: P("pages that open", "可開啟的內容頁", "開けるページ", "trang mở được") },
      { n: "4", label: P("languages", "語系", "言語", "ngôn ngữ") },
      { n: "7", label: P("offices", "全球據點", "拠点", "văn phòng") },
      { n: "4", label: P("News links are 404", "News 連結失效", "News は 404", "liên kết News lỗi") }
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
      "Dựa trên các trang công khai của www.northgo.com đã kiểm tra ngày 2026-11-11."
    ),
    originLabel: P("Site root for this language", "此語系的網站根路徑", "この言語のサイトルート", "Gốc website của ngôn ngữ này")
  };

  const jumps = [
    { id: "overview", label: P("Overview", "概況", "概要", "Tổng quan") },
    { id: "home", label: P("Home", "首頁", "ホーム", "Trang chủ") },
    { id: "services", label: P("Services", "服務", "サービス", "Dịch vụ") },
    { id: "company", label: P("About", "關於", "会社概要", "Giới thiệu") },
    { id: "contact", label: P("Contact", "聯絡與據點", "連絡先", "Liên hệ") },
    { id: "legal", label: P("Legal", "法律", "法務", "Pháp lý") },
    { id: "news", label: P("News", "News", "News", "News") }
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
    legal: P("Legal", "法律文件", "法務", "Pháp lý"),
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
    osaka: P("Osaka", "大阪", "大阪", "Osaka")
  };

  const officeFull = {
    taipei: P("Taipei Office (Head office)", "台北辦公室（總部）", "台北オフィス（本社）", "Văn phòng Đài Bắc (trụ sở)"),
    taichung: P("Taichung Office", "台中辦公室", "台中オフィス", "Văn phòng Đài Trung"),
    kaohsiung: P("Kaohsiung Office", "高雄辦公室", "高雄オフィス", "Văn phòng Cao Hùng"),
    la: P("Los Angeles Office", "洛杉磯辦公室", "ロサンゼルスオフィス", "Văn phòng Los Angeles"),
    hcm: P("Ho Chi Minh Office", "胡志明市辦公室", "ホーチミンオフィス", "Văn phòng TP. Hồ Chí Minh"),
    tokyo: P("Tokyo Office", "東京辦公室", "東京オフィス", "Văn phòng Tokyo"),
    osaka: P("Osaka Office", "大阪辦公室", "大阪オフィス", "Văn phòng Osaka")
  };

  const offices = [
    { name: officeFull.taipei, address: "7F., No. 10, Sec. 3, Minsheng E. Rd., Taipei City 104511, Taiwan", phone: "Tel +886-2-2531-8677 · Fax +886-2-2531-8577", email: "info.tpe@northgo.com" },
    { name: officeFull.taichung, address: "No. 4, Zhongheng 11th Rd., Taichung City 435058, Taiwan", phone: "Tel +886-4-2326-2580 · Fax +886-4-2326-0308", email: "info.txg@northgo.com" },
    { name: officeFull.kaohsiung, address: "19F-2, No.31 Hai-Pien Rd., Kaohsiung City 802609, Taiwan", phone: "Tel +886-7-335-0730 · Fax +886-7-336-4536", email: "info.khh@northgo.com" },
    { name: officeFull.la, address: "119 S. Atlantic Blvd, Ste#301, Monterey Park, CA 91754, USA", phone: "Tel +1-714-853-1088", email: "info.lax@northgo.com" },
    { name: officeFull.hcm, address: "5th Floor, No. 92D Nguyen Huu Canh Street, Ward 22, Binh Thanh District, Ho Chi Minh City, Vietnam", phone: "Tel +84-28-9995-7368", email: "info.hcmc@northgo.com" },
    { name: officeFull.tokyo, address: "6FL., Gran+Ginza-East, 1-5-1 Shintomi, Chuo-Ku, Tokyo 104-0041, Japan", phone: "Tel +81-3-6260-3944 · Fax +81-3-6260-3945", email: "info.tyo@northgo.com" },
    { name: officeFull.osaka, address: "3FL., MF Sakura-Bashi Build, 2-6-23 Sonezaki Shinchi, Kita-ku, Osaka 530-0002, Japan", phone: "Tel +81-6-6676-8395 · Fax +81-6-6676-8397", email: "info.osa@northgo.com" }
  ];

  const sections = [
    {
      id: "overview",
      title: P("Site overview", "網站概況", "サイト概要", "Tổng quan website"),
      note: P("Webflow site, last published 2025-09-12", "Webflow 網站，最後發佈 2025-09-12", "Webflow サイト、最終公開 2025-09-12", "Website Webflow, xuất bản lần cuối 2025-09-12"),
      notes: [
        P(
          "Main menu: Services (four items), About, Contact, and Enquire now, which opens the enquiry form.",
          "主選單：服務（四項）、關於、聯絡，以及立即詢價（開啟詢價表單）。",
          "メインメニュー：サービス（4 項目）、会社概要、お問い合わせ、見積依頼（見積フォームを開く）。",
          "Menu chính: Dịch vụ (bốn mục), Giới thiệu, Liên hệ, và Enquire now (mở biểu mẫu hỏi giá)."
        ),
        P(
          "Locale URLs: English at the root, Traditional Chinese at `/zh-tw`, Japanese at `/ja`, Vietnamese at `/vi`.",
          "語系網址：英文在根路徑、繁體中文 `/zh-tw`、日文 `/ja`、越南文 `/vi`。",
          "言語 URL：英語はルート、繁体字中国語は `/zh-tw`、日本語は `/ja`、ベトナム語は `/vi`。",
          "URL ngôn ngữ: tiếng Anh ở gốc, tiếng Trung phồn thể `/zh-tw`, tiếng Nhật `/ja`, tiếng Việt `/vi`."
        ),
        P(
          "The footer also links to News, Locations, and Privacy, Terms, Cookie, Disclaimer.",
          "頁尾另有 News、據點，以及隱私權、條款、Cookie、免責聲明。",
          "フッターには News、拠点、プライバシー、規約、Cookie、免責事項もある。",
          "Chân trang còn có News, văn phòng, cùng quyền riêng tư, điều khoản, cookie và tuyên bố miễn trừ."
        ),
        P(
          "`/sitemap.xml` returns 404 and `/robots.txt` is empty. Facebook, Instagram, X, LinkedIn, and YouTube icons all use `#`.",
          "`/sitemap.xml` 回傳 404，`/robots.txt` 是空檔。Facebook、Instagram、X、LinkedIn、YouTube 圖示的連結都是 `#`。",
          "`/sitemap.xml` は 404、`/robots.txt` は空。Facebook、Instagram、X、LinkedIn、YouTube のアイコンはすべて `#`。",
          "`/sitemap.xml` trả về 404 và `/robots.txt` trống. Biểu tượng Facebook, Instagram, X, LinkedIn, YouTube đều trỏ tới `#`."
        ),
        P(
          "The Traditional Chinese homepage headline is 「讓物流變得輕鬆。」. Japanese, Vietnamese, and the rest of the body copy stay in English.",
          "繁中首頁標題是「讓物流變得輕鬆。」。日文、越南文與其餘頁面內文維持英文原文。",
          "繁体字中国語ホームの見出しは「讓物流變得輕鬆。」。日本語・ベトナム語と、その他の本文は英語のまま。",
          "Tiêu đề trang chủ tiếng Trung là 「讓物流變得輕鬆。」. Tiếng Nhật, tiếng Việt và phần nội dung còn lại vẫn là tiếng Anh."
        )
      ]
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
            "Tiêu đề là “Making logistics effortless.”. Trang chủ tiếng Trung dùng 「讓物流變得輕鬆。」. Nội dung nêu hơn 30 năm kinh nghiệm để làm logistics đơn giản."
          ),
          points: [
            { text: P("Four service entries: freight, project, warehouse, shipping agency.", "四大服務入口：貨運、專案、倉儲、船務代理。", "4 つのサービス入口：貨物、プロジェクト、倉庫、船舶代理。", "Bốn lối vào dịch vụ: vận tải, dự án, kho, đại lý tàu.") },
            { text: P("Why Northgo: seamless experience, hands-on experts, 360° solutions, 24/7 support.", "為什麼選擇 Northgo：無縫體驗、專家協作、360° 方案、24/7 支援。", "Northgo を選ぶ理由：途切れない体験、現場に入る専門家、360° の方案、24 時間サポート。", "Vì sao chọn Northgo: trải nghiệm liền mạch, chuyên gia đồng hành, giải pháp 360°, hỗ trợ 24/7."), path: "/", hash: "#why-northgo" },
            { text: P("The closing call to action goes to Contact.", "頁尾行動呼籲導向聯絡頁。", "末尾の案内はお問い合わせへ進みます。", "Lời kêu gọi cuối trang dẫn tới Liên hệ.") }
          ]
        }
      ]
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
            "Giao nhận vận tải. Dòng mở đầu: “Efficient logistics, seamless connections.”"
          ),
          points: [
            { text: P("Ocean freight: FCL, LCL, global carriers, tailored options.", "海運：FCL、LCL、全球承運人、個人化方案。", "海上輸送：FCL、LCL、グローバルキャリア、個別プラン。", "Đường biển: FCL, LCL, hãng tàu toàn cầu, phương án riêng."), path: "/services/freight-logistics", hash: "#ocean-freight" },
            { text: P("Air freight.", "空運。", "航空輸送。", "Vận tải hàng không."), path: "/services/freight-logistics", hash: "#air-freight" },
            { text: P("Land transportation.", "陸運。", "陸上輸送。", "Vận tải đường bộ."), path: "/services/freight-logistics", hash: "#land-transport" },
            { text: P("Customs clearance.", "報關。", "通関。", "Thông quan."), path: "/services/freight-logistics", hash: "#customs-clearance" }
          ]
        },
        {
          name: names.project,
          path: "/services/project-logistics",
          status: "ok",
          desc: P(
            "Oversized, heavy, and high-value cargo. Page line: “Turning heavy lifts into light work.”",
            "超大、超重與高價值貨物。頁首 “Turning heavy lifts into light work.”",
            "超大型・重量・高額貨物。見出しは “Turning heavy lifts into light work.”",
            "Hàng siêu trường, siêu trọng và giá trị cao. Dòng mở đầu: “Turning heavy lifts into light work.”"
          ),
          points: [
            { text: P("Services: engineering solutions, project management.", "服務：工程方案、專案管理。", "サービス：エンジニアリング、プロジェクト管理。", "Dịch vụ: giải pháp kỹ thuật, quản lý dự án.") },
            { text: P("Industries: oil and gas, offshore and marine, infrastructure, energy, rail, renewable energy, mining, engineering and construction, industrial.", "產業：石油與天然氣、離岸與海事、基礎建設、能源、鐵路、再生能源、採礦、工程與營建、工業。", "産業：石油・ガス、オフショア・海洋、インフラ、エネルギー、鉄道、再生可能エネルギー、鉱業、エンジニアリング・建設、産業設備。", "Ngành: dầu khí, ngoài khơi và hàng hải, hạ tầng, năng lượng, đường sắt, năng lượng tái tạo, khai khoáng, kỹ thuật và xây dựng, công nghiệp.") },
            { text: P("Commitment to quality and HSE, plus customer testimonials.", "品質與 HSE 承諾、客戶見證。", "品質と HSE への約束、お客様の声。", "Cam kết chất lượng và HSE, cùng lời chứng thực.") }
          ]
        },
        {
          name: names.warehouse,
          path: "/services/warehouse-logistics",
          status: "ok",
          desc: P(
            "Warehousing. Page line: “Storage you trust, flexibility you need.”",
            "倉儲。頁首 “Storage you trust, flexibility you need.”",
            "倉庫。見出しは “Storage you trust, flexibility you need.”",
            "Kho bãi. Dòng mở đầu: “Storage you trust, flexibility you need.”"
          ),
          points: [
            { text: P("Located facilities, flexible storage, inventory management, value-added services.", "據點配置、彈性倉儲、庫存管理、加值服務。", "拠点配置、柔軟な保管、在庫管理、付加価値サービス。", "Mặt bằng theo vị trí, lưu kho linh hoạt, quản lý tồn kho, dịch vụ gia tăng.") },
            { text: P("Offshore logistics expertise.", "離岸物流專長。", "オフショア物流の専門性。", "Chuyên môn logistics ngoài khơi.") }
          ]
        },
        {
          name: names.shipping,
          path: "/services/shipping-agency",
          status: "ok",
          desc: P(
            "Shipping agency. Page line: “Anchoring success with every voyage.”",
            "船務代理。頁首 “Anchoring success with every voyage.”",
            "船舶代理店。見出しは “Anchoring success with every voyage.”",
            "Đại lý tàu. Dòng mở đầu: “Anchoring success with every voyage.”"
          ),
          points: [
            { text: P("Vessel types: dry bulk, tankers, break bulk, cruiser, offshore, specialised carrier, container ship, car carrier.", "船型：乾散貨、油輪、雜貨、郵輪、離岸、特殊船、貨櫃船、汽車船。", "船種：ドライバルク、タンカー、ブレークバルク、クルーズ、オフショア、特殊船、コンテナ船、自動車船。", "Loại tàu: hàng rời khô, tàu dầu, hàng rời tổng hợp, du thuyền, ngoài khơi, tàu chuyên dụng, tàu container, tàu chở ô tô.") },
            { text: P("Services: port agency, marine services.", "服務：港口代理、海事服務。", "サービス：港湾代理、マリタイムサービス。", "Dịch vụ: đại lý cảng, dịch vụ hàng hải.") },
            { text: P("Strengths: local relationships, rapid response, offshore experience, client communication.", "優勢：在地關係、快速回應、離岸經驗、客戶溝通。", "強み：現地ネットワーク、迅速な対応、オフショア経験、顧客との連携。", "Thế mạnh: quan hệ tại chỗ, phản hồi nhanh, kinh nghiệm ngoài khơi, trao đổi với khách.") }
          ]
        }
      ]
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
            "Tiêu đề “Welcome to Northgo”. Thương hiệu, tầm nhìn và câu chuyện."
          ),
          points: [
            { text: P("Vision: the most trusted name in logistics.", "願景：成為最受信賴的物流品牌。", "ビジョン：最も信頼される物流の名前。", "Tầm nhìn: thương hiệu logistics được tin cậy nhất.") },
            { text: P("Mission: making logistics effortless.", "使命：讓物流變得輕鬆。", "ミッション：物流を無理なく、かんたんに。", "Sứ mệnh: khiến logistics trở nên nhẹ nhàng.") },
            { text: P("Values: customer focus, integrity and transparency, innovation, sustainability and responsibility.", "價值：以客戶為中心、誠信透明、創新卓越、永續與責任。", "価値観：顧客中心、誠実と透明性、革新、持続可能性と責任。", "Giá trị: lấy khách hàng làm trung tâm, trung thực minh bạch, đổi mới, bền vững và trách nhiệm.") },
            { text: P("Story: what has changed, and what remains the same.", "故事：什麼變了、什麼沒變。", "ストーリー：変わったこと、変わらないこと。", "Câu chuyện: điều đã đổi, và điều vẫn giữ.") }
          ]
        }
      ]
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
            "Tiêu đề “Mastering Complexity, Delivering Simplicity.”. Mục văn phòng ở chân trang cũng trỏ tới đây."
          ),
          points: [
            { text: P("Enquiry fields: name, company, email, phone, country, service checkboxes, message, terms.", "詢價欄位：姓名、公司、Email、電話、國家、服務勾選、訊息、條款同意。", "見積項目：氏名、会社、Email、電話、国、サービス選択、メッセージ、規約同意。", "Trường hỏi giá: họ tên, công ty, email, điện thoại, quốc gia, chọn dịch vụ, nội dung, đồng ý điều khoản."), path: "/contact", hash: "#enquiry-form" },
            { text: P("Global offices, seven locations.", "全球據點，七個辦公室。", "世界の拠点、7 か所。", "Văn phòng toàn cầu, bảy địa điểm."), path: "/contact", hash: "#locations" }
          ]
        }
      ],
      offices: true
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
          desc: P("Collection, use, retention, rights, and cross-border transfers.", "蒐集、使用、保存、權利與跨境傳輸。", "収集、利用、保管、権利、越境移転。", "Thu thập, sử dụng, lưu giữ, quyền và chuyển dữ liệu xuyên biên giới.")
        },
        {
          name: names.terms,
          path: "/legal/terms",
          status: "ok",
          desc: P("Use, accounts, fees, intellectual property, liability, and governing law.", "使用、帳戶、費用、智財、責任與準據法。", "利用、アカウント、料金、知財、責任、準拠法。", "Sử dụng, tài khoản, phí, sở hữu trí tuệ, trách nhiệm và luật áp dụng.")
        },
        {
          name: names.cookie,
          path: "/legal/cookie-policy",
          status: "ok",
          desc: P("Cookie types, purposes, and how to manage them.", "Cookie 種類、用途與管理方式。", "Cookie の種類、用途、管理方法。", "Loại cookie, mục đích và cách quản lý.")
        },
        {
          name: names.disclaimer,
          path: "/legal/disclaimer",
          status: "ok",
          desc: P("Not professional advice, external links, and limits of liability.", "非專業建議、外部連結與責任限制。", "専門的助言ではない旨、外部リンク、責任の制限。", "Không phải tư vấn chuyên môn, liên kết ngoài, và giới hạn trách nhiệm.")
        }
      ]
    },
    {
      id: "news",
      title: P("News", "News", "News", "News"),
      note: P("Linked in the footer. The page is missing.", "頁尾有連結，頁面不存在。", "フッターにリンクはあるが、ページはない。", "Chân trang có liên kết. Trang không tồn tại."),
      warn: P(
        "/news returns 404 in all four locales. The footer still shows the link.",
        "四個語系的 /news 都回傳 404。頁尾仍顯示這個連結。",
        "4 言語とも /news は 404。フッターにはリンクが残っています。",
        "/news trả về 404 ở cả bốn ngôn ngữ. Chân trang vẫn hiện liên kết này."
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
            "/zh-tw/news, /ja/news và /vi/news cũng không mở được."
          )
        }
      ]
    }
  ];

  function node(name, path, hash, children, status) {
    const item = { name: name };
    if (path) item.path = path;
    if (hash) item.hash = hash;
    if (children) item.children = children;
    if (status) item.status = status;
    return item;
  }

  const tree = [
    node(names.home, "/", null, [
      node(names.why, "/", "#why-northgo")
    ]),
    node(names.services, null, null, [
      node(names.freight, "/services/freight-logistics", null, [
        node(names.ocean, "/services/freight-logistics", "#ocean-freight"),
        node(names.air, "/services/freight-logistics", "#air-freight"),
        node(names.land, "/services/freight-logistics", "#land-transport"),
        node(names.customs, "/services/freight-logistics", "#customs-clearance")
      ]),
      node(names.project, "/services/project-logistics"),
      node(names.warehouse, "/services/warehouse-logistics"),
      node(names.shipping, "/services/shipping-agency")
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
        node(names.osaka)
      ])
    ]),
    node(names.legal, null, null, [
      node(names.privacy, "/legal/privacy-policy"),
      node(names.terms, "/legal/terms"),
      node(names.cookie, "/legal/cookie-policy"),
      node(names.disclaimer, "/legal/disclaimer")
    ]),
    node(names.news, "/news", null, null, "bad")
  ];

  let lang = "zh";
  let mode = "map";
  let app = null;
  let query = "";
  let bound = false;
  let firstPaint = true;

  function detect() {
    let q = "";
    try { q = new URLSearchParams(location.search).get("lang") || ""; } catch (e) { q = ""; }
    if (order.includes(q)) return q;
    try {
      const saved = localStorage.getItem("ng-sitemap-lang");
      if (order.includes(saved)) return saved;
    } catch (e) {}
    return "zh";
  }

  function current() {
    return locales.find(function (item) { return item.id === lang; });
  }

  function t(pack) {
    if (pack == null) return "";
    if (typeof pack === "string") return pack;
    return pack[lang] || pack.en || "";
  }

  function bag() {
    const parts = [];
    for (let i = 0; i < arguments.length; i++) {
      const value = arguments[i];
      if (value == null) continue;
      if (typeof value === "string") parts.push(value);
      else order.forEach(function (key) { if (value[key]) parts.push(value[key]); });
    }
    return parts.join(" ");
  }

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[ch];
    });
  }

  function rich(value) {
    return esc(t(value)).replace(/`([^`]+)`/g, "<code>$1</code>");
  }

  function pathLabel(path, hash, prefix) {
    const base = prefix == null ? current().prefix : prefix;
    if (!path || path === "/") {
      if (hash) return (base || "") + "/" + hash;
      return base || "/";
    }
    return base + path + (hash || "");
  }

  function allPaths(path, hash) {
    return locales.map(function (item) { return pathLabel(path, hash, item.prefix); }).join(" ");
  }

  function url(path, hash) {
    return origin + pathLabel(path, hash);
  }

  function persist() {
    try { localStorage.setItem("ng-sitemap-lang", lang); } catch (e) {}
    try {
      const next = new URL(location.href);
      if (next.searchParams.get("lang") !== lang) {
        next.searchParams.set("lang", lang);
        history.replaceState(null, "", next);
      }
    } catch (e) {}
  }

  function langsHtml() {
    const buttons = locales.map(function (item) {
      const on = item.id === lang;
      return '<button type="button" data-set-lang="' + item.id + '" role="radio" aria-checked="' + (on ? "true" : "false") + '">' + esc(item.label) + "</button>";
    }).join("");
    return '<div class="langs" role="radiogroup" aria-label="' + esc(t(ui.langLabel)) + '">' + buttons + "</div>";
  }

  function viewsHtml() {
    const detail = "sitemap.html?lang=" + lang;
    const treeHref = "sitemap-tree.html?lang=" + lang;
    const worldHref = "locations.html?lang=" + lang;
    const detailCurrent = mode === "map" ? ' aria-current="page"' : "";
    const treeCurrent = mode === "tree" ? ' aria-current="page"' : "";
    return '<nav class="views" aria-label="' + esc(t(ui.viewLabel)) + '">' +
      '<a href="' + detail + '"' + detailCurrent + ">" + esc(t(ui.detailView)) + "</a>" +
      '<a href="' + treeHref + '"' + treeCurrent + ">" + esc(t(ui.treeView)) + "</a>" +
      '<a href="' + worldHref + '">' + esc(t(ui.worldView)) + "</a>" +
      "</nav>";
  }

  function chrome(compact) {
    const h1 = compact ? ui.treeH1 : ui.mapH1;
    const lede = compact ? ui.treeLede : ui.mapLede;
    const jumpsHtml = compact ? "" : '<nav class="jumps" aria-label="' + esc(t(ui.jumpLabel)) + '">' + jumps.map(function (item) {
      return '<a href="#' + item.id + '">' + esc(t(item.label)) + "</a>";
    }).join("") + "</nav>";
    const statsHtml = compact ? "" : '<div class="stats">' + ui.stats.map(function (item) {
      return '<div class="stat"><b>' + item.n + "</b><span>" + esc(t(item.label)) + "</span></div>";
    }).join("") + "</div>";
    const searchLabel = compact ? ui.searchTree : ui.search;
    return '<a class="skip" href="#content">' + esc(t(ui.skip)) + "</a>" +
      '<header class="hero' + (compact ? " hero-compact" : "") + '"><div class="wrap">' +
      '<div class="brand"><a class="logo" href="' + esc(url("/")) + '">North<span>GO</span></a><div class="meta-note">' + esc(t(ui.date)) + "</div></div>" +
      "<h1>" + esc(t(h1)) + "<br><em>" + esc(t(ui.tagline)) + "</em></h1>" +
      '<p class="lede">' + esc(t(lede)) + "</p>" +
      statsHtml +
      "</div></header>" +
      '<div class="toolbar"><div class="wrap">' +
      '<div class="tools">' + langsHtml() + viewsHtml() + "</div>" +
      '<input class="search" id="q" type="search" placeholder="' + esc(t(searchLabel)) + '" aria-label="' + esc(t(searchLabel)) + '" value="' + esc(query) + '">' +
      jumpsHtml +
      "</div></div>";
  }

  function pointsHtml(card) {
    if (!card.points || !card.points.length) return "";
    return '<ul class="sub">' + card.points.map(function (point) {
      const text = esc(t(point.text));
      if (point.hash) {
        return '<li><a href="' + esc(url(point.path || card.path, point.hash)) + '">' + text + "</a></li>";
      }
      return "<li>" + text + "</li>";
    }).join("") + "</ul>";
  }

  function cardHay(card) {
    const bits = [bag(card.name), bag(card.desc), allPaths(card.path), card.path];
    (card.points || []).forEach(function (point) {
      bits.push(bag(point.text), point.hash || "");
    });
    return bits.join(" ");
  }

  function cardHtml(card) {
    const badge = card.status === "bad"
      ? '<span class="badge bad">404</span>'
      : '<span class="badge ok">200</span>';
    return '<article class="card" data-text="' + esc(cardHay(card)) + '"><div class="card-top"><div>' +
      "<h3>" + esc(t(card.name)) + "</h3>" +
      '<a class="path" href="' + esc(url(card.path)) + '">' + esc(pathLabel(card.path)) + "</a>" +
      '<p class="desc">' + esc(t(card.desc)) + "</p></div>" + badge + "</div>" +
      pointsHtml(card) + "</article>";
  }

  function officeHtml(office) {
    const hay = bag(office.name) + " " + office.address + " " + office.phone + " " + office.email;
    return '<article class="card office" data-text="' + esc(hay) + '"><strong>' + esc(t(office.name)) + "</strong><p>" +
      esc(office.address) + '</p><small>' + esc(office.phone) + '<br><a href="mailto:' + esc(office.email) + '">' +
      esc(office.email) + "</a></small></article>";
  }

  function mapHtml() {
    const body = sections.map(function (section) {
      const cards = (section.cards || []).map(cardHtml).join("");
      const officeBlock = section.offices
        ? '<div class="offices" style="margin-top:0.85rem">' + offices.map(officeHtml).join("") + "</div>"
        : "";
      const warn = section.warn ? '<div class="note">' + esc(t(section.warn)) + "</div>" : "";
      const notes = section.notes
        ? '<article class="card" data-text="' + esc(section.notes.map(bag).join(" ")) + '"><ul class="findings">' +
          section.notes.map(function (item) { return "<li>" + rich(item) + "</li>"; }).join("") +
          "</ul></article>"
        : "";
      const layout = section.layout ? " " + section.layout : "";
      const grid = (section.cards && section.cards.length)
        ? '<div class="grid' + layout + '">' + cards + "</div>"
        : "";
      return '<section id="' + section.id + '"><div class="section-head"><h2>' + esc(t(section.title)) +
        "</h2><p>" + esc(t(section.note)) + "</p></div>" + warn + notes + grid + officeBlock + "</section>";
    }).join("");
    return chrome(false) + '<main id="content"><div class="wrap">' + body +
      '<p class="empty" id="empty">' + esc(t(ui.empty)) + "</p></div></main>" +
      "<footer><div class=\"wrap\">" + esc(t(ui.footer)) + "</div></footer>";
  }

  function treeRow(item) {
    const label = '<span class="label' + (item.path ? "" : " group") + '">' + esc(t(item.name)) + "</span>";
    const path = item.path ? '<span class="path">' + esc(pathLabel(item.path, item.hash)) + "</span>" : "";
    const badge = item.status === "bad" ? '<span class="badge bad">404</span>' : "";
    if (!item.path) return '<div class="row">' + label + "</div>";
    return '<a class="row tree-row" href="' + esc(url(item.path, item.hash)) + '">' + label + path + badge + "</a>";
  }

  function treeItems(items) {
    return "<ul>" + items.map(function (item) {
      const kids = item.children && item.children.length ? treeItems(item.children) : "";
      const hay = bag(item.name) + " " + (item.path ? allPaths(item.path, item.hash) : "") + " " + (item.hash || "");
      return '<li data-text="' + esc(hay) + '">' + treeRow(item) + kids + "</li>";
    }).join("") + "</ul>";
  }

  function treeHtml() {
    const root = url("/");
    return chrome(true) + '<main id="content"><div class="wrap"><article class="card tree-card">' +
      '<p class="desc"><a href="' + esc(root) + '">www.northgo.com</a> · ' + esc(pathLabel("/")) + "</p>" +
      '<nav class="tree" aria-label="' + esc(t(ui.treeH1)) + '">' + treeItems(tree) + "</nav></article>" +
      '<p class="empty" id="empty">' + esc(t(ui.empty)) + "</p></div></main>" +
      "<footer><div class=\"wrap\">" + esc(t(ui.footer)) + "</div></footer>";
  }

  function applyFilter() {
    const term = query.trim().toLowerCase();
    const empty = app.querySelector("#empty");
    if (mode === "tree") {
      const items = Array.prototype.slice.call(app.querySelectorAll(".tree li"));
      if (!term) {
        items.forEach(function (li) { li.hidden = false; });
        if (empty) empty.classList.remove("show");
        return;
      }
      for (let i = items.length - 1; i >= 0; i--) {
        const li = items[i];
        const self = (li.getAttribute("data-text") || "").toLowerCase().indexOf(term) !== -1;
        if (self) {
          li.hidden = false;
          Array.prototype.forEach.call(li.querySelectorAll("li"), function (child) { child.hidden = false; });
        } else {
          const lists = Array.prototype.filter.call(li.children, function (el) { return el.tagName === "UL"; });
          const childHit = lists.some(function (ul) {
            return Array.prototype.some.call(ul.children, function (child) {
              return child.tagName === "LI" && !child.hidden;
            });
          });
          li.hidden = !childHit;
        }
      }
      if (empty) empty.classList.toggle("show", items.length > 0 && items.every(function (li) { return li.hidden; }));
      return;
    }
    const cards = Array.prototype.slice.call(app.querySelectorAll(".card"));
    let shown = 0;
    cards.forEach(function (card) {
      const hay = (card.getAttribute("data-text") || "").toLowerCase();
      const hit = !term || hay.indexOf(term) !== -1;
      card.hidden = !hit;
      if (hit) shown += 1;
    });
    Array.prototype.forEach.call(app.querySelectorAll("main section"), function (section) {
      const any = Array.prototype.some.call(section.querySelectorAll(".card"), function (card) { return !card.hidden; });
      section.hidden = Boolean(term) && !any;
    });
    if (empty) empty.classList.toggle("show", shown === 0);
  }

  function render() {
    const y = window.scrollY;
    const focusLang = document.activeElement && document.activeElement.getAttribute
      ? document.activeElement.getAttribute("data-set-lang")
      : "";
    document.documentElement.lang = current().lang;
    document.title = t(mode === "tree" ? ui.treeTitle : ui.mapTitle);
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t(mode === "tree" ? ui.treeLede : ui.mapLede));
    app.innerHTML = mode === "tree" ? treeHtml() : mapHtml();
    const field = app.querySelector("#q");
    if (field) field.value = query;
    applyFilter();
    if (focusLang) {
      const button = app.querySelector('[data-set-lang="' + focusLang + '"]');
      if (button) button.focus();
    }
    if (firstPaint) {
      firstPaint = false;
      const id = (location.hash || "").replace(/^#/, "");
      const target = id && document.getElementById(id);
      if (target) target.scrollIntoView();
      return;
    }
    window.scrollTo(0, y);
  }

  function onClick(event) {
    const button = event.target.closest ? event.target.closest("[data-set-lang]") : null;
    if (!button) return;
    const next = button.getAttribute("data-set-lang");
    if (!order.includes(next) || next === lang) return;
    lang = next;
    persist();
    render();
  }

  function onInput(event) {
    if (!event.target || event.target.id !== "q") return;
    query = event.target.value;
    applyFilter();
  }

  lang = detect();
  persist();

  window.NG = {
    mount: function (nextMode, root) {
      mode = nextMode === "tree" ? "tree" : "map";
      app = root;
      if (!bound) {
        bound = true;
        document.addEventListener("click", onClick);
        document.addEventListener("input", onInput);
      }
      render();
    }
  };
})();

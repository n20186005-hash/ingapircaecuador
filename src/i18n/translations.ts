export type Locale = "zh" | "en" | "es";

export const translations = {
  zh: {
    nav: {
      about: "遗址概览",
      visiting: "游览指南",
      transportation: "交通接驳",
      tips: "游览建议",
      reviews: "游客评价",
      faq: "常见问题",
      location: "地图位置",
    },
    hero: {
      tagline: "厄瓜多尔最大的印加考古遗址",
      title: "英加皮尔卡考古建筑群",
      subtitle: "Complejo Arqueológico Ingapirca",
      cta: "探索遗址之旅",
    },
    rating: {
      reviews: "条评价",
      source: "Google 评论",
    },
    about: {
      title: "遗址概览：你所不知道的英加皮尔卡",
      p1: "1. 名字的含义与历史渊源\n「Ingapirca」在克丘亚语（Quechua）中意为「印加石墙」（Inca + Pirca）。这座遗址位于厄瓜多尔卡尼亚尔省（Cañar），是迄今为止发现的最大印加考古遗址。它不仅仅是一个军事要塞，更是印加帝国向北扩张时，与当地卡尼亚里人（Cañari）文化融合的独特见证。",
      p2: "2. 卡尼亚里与印加的建筑融合\n英加皮尔卡最迷人的地方在于其「双重文化」特征。在印加人到达之前，卡尼亚里人已经在此定居。考古学家发现，遗址中既有印加传统的精细多边形石工（如太阳神庙），也有卡尼亚里人更为质朴的圆形石屋。这种建筑风格的并存，反映了两个民族之间复杂而和平的共存关系。",
      myth: {
        title: "洪荒与重生：卡尼亚里人的“金刚鹦鹉”创世神话",
        intro: "在印加帝国的铁蹄踏足这片土地之前，英加皮尔卡的主人是骄傲的卡尼亚里人（Cañari）。要真正理解这片古老石墙的灵魂，我们必须将目光投向远古的一场灭世大洪水。",
        story: "根据流传千年的安第斯神话，一场毁灭性的大洪水曾吞噬了整个世界，几乎抹去了所有生命。在这场浩劫中，仅有两名卡尼亚里兄弟——阿陶鲁帕吉（Ataorupagui）和库西卡约（Cusicayo）——拼死逃上了高耸入云的瓦卡伊尼扬山（Huacayñan，意为“眼泪之路”）。\n\n洪水退去后，大地面目全非，两兄弟面临着饥饿的绝境。就在此时，奇迹降临了。每天当他们外出寻找食物无果、疲惫返回山洞时，都会发现洞穴里摆满了丰盛的佳肴和玉米酒。为了查明真相，哥哥躲在洞穴深处暗中观察。他震惊地发现，带来食物的竟是两只长着人类面孔的神秘金刚鹦鹉（Guacamayas）。\n\n这两只神鸟不仅拯救了兄弟俩，最终还化作美丽的女子与他们结合。他们的后代在这片高原生息繁衍，最终建立起了伟大的卡尼亚里文明。",
        trivia: {
          title: "📚 科普延展：神话背后的历史真相",
          content: "考古学家和人类学家认为，金刚鹦鹉并非安第斯高寒山区的本土物种，它们生活在潮湿炎热的亚马逊雨林。这个创世神话不仅是卡尼亚里人的图腾信仰，更是极其重要的历史侧写——它证明了早在印加帝国到来之前，居住在安第斯山脉的卡尼亚里人就已经跨越了险峻的地理屏障，与亚马逊雨林的部落建立了深厚的贸易与文化交流网络。"
        }
      },
      astronomy: {
        title: "捕捉太阳与月亮：英加皮尔卡的天文“黑科技”",
        intro: "英加皮尔卡不仅是一座堡垒，更是一座巨大的、由石头打造的精密天文台。在没有现代望远镜的时代，古代原住民通过惊人的几何学与光影计算，将浩瀚的星空“雕刻”在了大地上。",
        temple: {
          title: "太阳神庙（El Castillo）—— 南美洲的建筑孤品",
          p1: "非凡的椭圆： 这是南美洲已知唯一一座椭圆形的印加神庙。印加建筑师通常偏爱矩形，但为了完美契合卡尼亚里人原有的祭祀圣地，并精确追踪太阳的轨迹，他们破例设计了这个平滑的椭圆结构。",
          p2: "光影的魔法： 神庙顶部曾设有一间带有多个壁龛的房间。每年6月21日的夏至（Inti Raymi，即印加太阳祭），当太阳升起时，第一缕阳光会如同一把精准的利剑，穿透特定的壁龛，直射入房间的核心。这是帝国用来确认农业节气、彰显太阳神（Inti）无上权威的神圣时刻。"
        },
        pilaloma: {
          title: "皮拉洛玛月历石（Pilaloma）—— 水中望月的农耕智慧",
          p1: "这不是一口普通的井： 如果您留意脚下，会在皮拉洛玛区域发现一块极其特殊的巨大平坦岩石，表面被人工开凿出了28个大小不一的圆孔。考古学家确认，这是一个古老的“月历仪”。古代祭司会在这些圆孔中注满清水。",
          p2: "水镜观星： 在晴朗的夜晚，平静的水面变成了28面“水镜”。祭司们通过观察月亮在不同水孔中的倒影位置，来追踪长达28天的月相盈亏周期（Lunar Cycle）。这种不仰头即可精确观星的智慧，不仅避免了高海拔地区夜晚冷风对眼睛的刺激，更为卡尼亚里人提供了播种和收割的精确时间表。"
        },
        trivia: "💡 游览提示：当您在遗址漫步时，请注意观察石头上的细微光影变化。由于地处赤道附近且海拔超过3100米，这里的星空观测条件极为优越。印加和卡尼亚里人正是利用这独特的地理位置，将建筑、历法与神明完美融合在了一起。"
      },
      timeline: {
        title: "历史时间轴",
        events: [
          { period: "公元 500-1400年", description: "卡尼亚里人定居并建立祭祀中心（皮拉洛玛时期）" },
          { period: "15世纪末", description: "印加帝国图帕克·尤潘基征服此地，通过联姻实现双帝国融合" },
          { period: "16世纪中叶", description: "西班牙殖民时期，部分石头被拆卸用于建造附近教堂" },
          { period: "1739年", description: "法国学者查尔斯·玛丽·德·拉·康达明（La Condamine）进行首次科学考察并绘制草图" },
          { period: "20世纪至今", description: "系统性考古发掘与现代文物保护" }
        ]
      },
      caraDelInca: {
        title: "特色地标：印加人的脸庞（Cara del Inca）",
        content: "在遗址附近的徒步路线上，有一处不可错过的天然奇观——“印加人的脸庞”。这是一块巨大的天然岩石，其轮廓在风化作用下，奇迹般地呈现出一位拥有高挺鼻梁的印加守卫的侧脸。传说大自然亲自雕刻了这位沉睡的守卫，让他日夜注视着太阳神庙。这是喜欢徒步和摄影的游客最爱的打卡点。"
      },
      conservation: {
        title: "考古保护的警示录：文物保护的挑战",
        content: "现代考古不仅是发掘，更是保护与反思。在20世纪90年代的清理工作中，为了去除石头表面的苔藓和地衣，曾使用过一些化学溶剂和物理清理方法。然而，这一过度清洁的举动意外破坏了绿色安山岩的天然保护层，反而加速了微生物的降解和石材的风化。这段历史成为了重要的教训，如今 INPC 采用了更为温和且科学的非侵入式干预手段来保护遗址。这也提醒我们：面对千年的遗迹，有时候“不干预”才是最好的保护。"
      },
      highlights: {
        title: "景点速览 (Quick Facts)",
        items: [
          "地理位置：厄瓜多尔，卡尼亚尔省，英加皮尔卡堂区（Cañar / Parroquia Ingapirca）",
          "海拔：约 3,160 米",
          "文化归属：印加帝国 + 卡尼亚里文化",
          "遗址面积：约 4 公顷",
          "核心建筑：太阳神庙（Templo del Sol）",
        ],
      },
      management: {
        title: "遗址的保护与官方管理机构",
        content: "英加皮尔卡考古建筑群目前由厄瓜多尔国家文化遗产研究所（INPC, Instituto Nacional de Patrimonio Cultural）直接管理。作为国家一级文化遗产，遗址的日常维护包括石砌结构的加固、游客路径的规划以及原住民社区的文化活动支持。游客中心提供官方导游服务（通常包含英语和西班牙语讲解），建议通过官方网站提前查询开放状态及特别活动信息。",
      },
    },
    visiting: {
      title: "游览指南 (Visitor Information)",
      hours: {
        title: "开放时间",
        content: "星期四至星期日：09:00 – 16:30\n星期三：09:00 – 16:30",
        note: "星期一、星期二：休息（每周例行闭馆）。官方建议出发前通过电话 +593 7 221 7109 确认开放状态。",
      },
      price: {
        title: "门票参考",
        content: "外国游客：$2 美元\n厄瓜多尔本国公民及学生享有优惠票价",
        note: "门票包含45分钟强制性官方导览，禁止无向导自行进入核心区。现场购买，支持美元现金及当地电子支付方式。",
      },
      duration: {
        title: "建议游览时长与气候",
        content: "建议预留 2 - 3 小时",
        note: "海拔超过 3,000 米，紫外线强烈，气温较低，务必做好防晒和保暖准备。",
      },
      animals: {
        title: "“遗址居民”专属小贴士：羊驼与美洲驼",
        content: "在遗址中，您会遇到散养的羊驼（Alpacas）和美洲驼（Llamas）。如何区分它们？羊驼体型较小，绒毛丰厚，看起来毛茸茸的；而美洲驼体型较高大，脖子更长，耳朵呈独特的香蕉状。您可以自由地与它们合影，但为了动物的健康，请绝对不要投喂任何人类食物。"
      },
      bring: {
        title: "游览准备",
        items: [
          "高倍数防晒霜和遮阳帽（高海拔紫外线极强）",
          "保暖外套（高原早晚温差大，即使白天也可能突然降温）",
          "舒适防滑的徒步鞋（遗址内有较多碎石和坡度）",
          "携带至少 1 升水，遗址内无商店",
        ],
      },
    },
    transportation: {
      title: "交通接驳：如何从昆卡（Cuenca）前往英加皮尔卡",
      airport: {
        title: "从昆卡机场（CUE）出发",
        content: "昆卡距离英加皮尔卡约 80 公里，车程约 1.5 至 2 小时。以下是详细的交通方案：",
        options: [
          {
            name: "方案 A：包车/出租车（最推荐，灵活自由）",
            price: "$40 - $60 美元（往返）",
            time: "单程 1.5 - 2 小时",
            steps: [
              "第 1 步：提取行李后，在机场到达大厅寻找官方出租车柜台或提前预订的包车司机。",
              "第 2 步：明确告知目的地为「Complejo Arqueológico Ingapirca, Cañar」。",
              "第 3 步：建议与司机协商等待或往返价格，这样可以避免返程时打不到车的困境。",
              "第 4 步：沿途风景优美，司机会在 Pan-American Highway（泛美公路）上行驶，约 1.5 小时后抵达遗址停车场。"
            ]
          },
          {
            name: "方案 B：从昆卡市区乘坐城际大巴（经济实惠）",
            price: "$3 - $5 美元",
            time: "2 - 2.5 小时",
            steps: [
              "第 1 步：从昆卡市区前往 Terminal Terrestre de Cuenca（昆卡长途汽车总站）。",
              "第 2 步：寻找前往「Azogues」或「Cañar」方向的大巴，告知司机在「Ingapirca」路口下车。",
              "第 3 步：下车后需步行约 3 公里（或搭乘当地摩托车出租车）才能到达遗址入口。",
              "第 4 步：返程时需在路边等候经过的大巴，建议在下午 14:00 前开始返程，以免错过末班车。"
            ]
          },
          {
            name: "方案 C：参加昆卡本地一日游团（最省心）",
            price: "$25 - $45 美元/人",
            time: "全天（含其他景点）",
            steps: [
              "第 1 步：在昆卡市区任何一家旅行社或酒店前台咨询「Ingapirca Day Tour」。",
              "第 2 步：确认行程包含遗址门票、导游讲解和往返交通。",
              "第 3 步：通常早上 08:00 - 09:00 从昆卡出发，下午 16:00 - 17:00 返回。",
              "第 4 步：部分行程还会顺路参观 Gualaceo 和 Chordeleg 等手工艺小镇，性价比较高。"
            ]
          }
        ]
      },
      city: {
        title: "从昆卡市区自驾或租车",
        content: "如果您在昆卡租车，前往英加皮尔卡的路线非常清晰，且沿途有清晰的指示牌。",
        steps: [
          "导航设置：在 Google Maps 或 Waze 中输入「Complejo Arqueológico Ingapirca」或坐标 F45G+P8H, Cañar。",
          "行车路线：从昆卡出发，沿泛美公路（Pan-American Highway）向北行驶，经过 Azogues 后继续前行约 15 公里，按路标右转进入通往遗址的支路。",
          "停车指南：遗址入口处设有大型免费停车场。周末及节假日车位较紧张，建议上午 10:00 前抵达。"
        ]
      },
      selfDrive: {
        title: "从瓜亚基尔（Guayaquil）或基多（Quito）长途前往",
        content: "如果您从厄瓜多尔其他主要城市前来，通常需要先抵达昆卡，再转车前往遗址。",
        steps: [
          "从瓜亚基尔出发：乘坐大巴沿泛美公路东行，约 3-4 小时抵达昆卡，再转乘当地交通前往遗址（总行程约 5-6 小时）。",
          "从基多出发：乘坐夜间大巴或国内航班飞往昆卡，次日再前往遗址（建议至少安排两天一夜的行程）。",
          "导航提醒：昆卡至遗址的最后一段路为山路，部分路段未铺装，建议驾驶 SUV 或高底盘车辆。"
        ]
      }
    },
    tips: {
      title: "游览建议",
      items: [
        "高原反应预防：遗址海拔超过 3,000 米，建议提前一天抵达昆卡适应海拔，游览时避免剧烈奔跑。",
        "最佳拍摄时间：上午 10:00 至下午 14:00 阳光直射太阳神庙，是拍摄金金色光影的最佳时机。",
        "官方导游：游客必须在官方导游（英语/西班牙语）带领下游览核心区，以保护脆弱的考古遗迹。",
        "尊重当地习俗：英加皮尔卡至今仍是当地原住民举办传统仪式的神圣场所，参观时请保持安静，不要攀爬遗迹墙体。",
      ],
    },
    gallery: {
      title: "精彩照片",
      viewMore: "在 Google Maps 查看更多相片",
    },
    reviews: {
      title: "游客评价",
      subtitle: "来自 Google Maps 的真实评价",
      viewMore: "在 Google Maps 查看更多评价",
    },
    faq: {
      title: "常见问题 (FAQ)",
      subtitle: "深入了解英加皮尔卡考古建筑群",
      items: [
        {
          question: "英加皮尔卡和马丘比丘有什么不同？",
          answer: "虽然两者都是印加遗址，但英加皮尔卡的规模较小，且独特地融合了卡尼亚里土著文化。与马丘比丘相比，这里游客更少，可以更安静地欣赏遗迹。此外，英加皮尔卡的太阳神庙具有独特的椭圆形结构，这是马丘比丘所不具备的。"
        },
        {
          question: "需要提前在网上预订门票吗？",
          answer: "目前无需提前网购。门票直接在遗址入口处的售票窗口现场购买即可。但由于遗址偶尔会因特殊文化活动或维护而临时关闭，建议出发前致电 +593 7 221 7109 确认开放状态。"
        },
        {
          question: "遗址适合儿童和老年人参观吗？",
          answer: "遗址整体对儿童和老年人友好，但部分区域有坡度和碎石。建议老年人使用登山杖，并避免长时间在户外暴晒。游客中心提供简易的无障碍通道，但部分古老石阶可能无法通行轮椅。"
        },
        {
          question: "可以在遗址内野餐或吃东西吗？",
          answer: "为了保护遗迹，遗址核心区域内不允许野餐或进食。但游客中心附近设有指定的休息区和小型小吃摊，可以购买当地特色零食和饮料。"
        },
        {
          question: "遗址内有洗手间吗？",
          answer: "有。游客中心和遗址入口附近设有公共洗手间，但条件较为简陋。建议在出发前在昆卡市区使用酒店或商场的洗手间。"
        },
        {
          question: "如果只会说英语，参观时会有障碍吗？",
          answer: "不会。遗址提供的官方导游通常能用西班牙语和英语进行讲解。如果您只会说中文，建议提前下载离线翻译 App（如 Google Translate），并下载好遗址的离线地图。"
        },
        {
          question: "英加皮尔卡是否被列入联合国教科文组织世界遗产名录？",
          answer: "截至目前，英加皮尔卡尚未被列入联合国教科文组织世界遗产名录，但它已经是厄瓜多尔的国家级文化遗产，并一直在积极准备申遗工作。联合国教科文组织世界遗产中心对其有相关记录。"
        },
        {
          question: "雨季（10月至5月）去英加皮尔卡会影响参观吗？",
          answer: "会有一定影响。高原雨季多阵雨，建议在 10:00 前进入遗址，通常雨势在午后才会增强。如果遇到大雨，部分户外区域可能会暂时关闭。旱季（6月至9月）是游览的最佳时节，天空湛蓝，视野极佳。"
        },
        {
          question: "可以在遗址内拍婚纱照或商业摄影吗？",
          answer: "个人非商业性质的拍照和录像是可以的。但如果需要进行婚纱摄影、广告拍摄或其他商业用途的影像记录，必须提前向 INPC（国家文化遗产研究所）申请拍摄许可，并支付相应的费用。"
        },
        {
          question: "周边还有哪些值得一游的景点？",
          answer: "从英加皮尔卡返回昆卡的途中，可以顺路参观 Azogues 的教堂和手工艺品市场，或者前往 Gualaceo 和 Chordeleg 体验传统的厄瓜多尔乡村手工艺（如著名的 Tagua 坚果雕刻和黄金首饰制作）。如果时间充裕，还可以前往 Cajas 国家公园进行高原湖泊徒步。"
        }
      ],
    },
    location: {
      title: "地图位置",
      address: "F45G+P8H, CAÑAR, 厄瓜多尔",
      openMaps: "在 Google Maps 查看位置",
    },
    contact: {
      title: "联系方式",
      phone: "+593 7 221 7109",
      phoneNote: "建议提前致电确认开放状态及特别活动",
    },
    footer: {
      callToAction: "作为文化遗产的守护者，请与我们一起遵守“不留下痕迹（Leave No Trace）”原则。",
      text: "© 2026 英加皮尔卡考古建筑群旅行指南 · 保留所有权利。",
      made: "本网站是一个独立的第三方旅游资讯项目。我们与当地政府或其他官方机构没有任何关联。为探索者而制",
      linksTitle: "相关链接",
      links: [
        { name: "厄瓜多尔国家文化遗产研究所 (INPC)", url: "https://www.patrimoniocultural.gob.ec/complejo-arqueologico-ingapirca/" },
        { name: "Ingapirca 地方教区政府官方介绍", url: "https://www.ingapirca.gob.ec/index.php/ct-menu-item-11" },
        { name: "卡尼亚里人民联合会", url: "http://www.mancomunidadcanari.gob.ec/cantones/canar-complejo-arqueologico-de-ingapirca/8/" },
        { name: "联合国教科文组织世界遗产中心", url: "https://whc.unesco.org/en/list/1459/" },
        { name: "厄瓜多尔官方旅游局", url: "https://ecuador.travel/en/ecuador-and-its-world-heritage-sites/" },
      ],
    },
  },
  en: {
    nav: {
      about: "Overview",
      visiting: "Visit Guide",
      transportation: "Getting There",
      tips: "Travel Tips",
      reviews: "Reviews",
      faq: "FAQ",
      location: "Location",
    },
    hero: {
      tagline: "The Largest Inca Archaeological Site in Ecuador",
      title: "Ingapirca Archaeological Complex",
      subtitle: "Complejo Arqueológico Ingapirca",
      cta: "Explore the Archaeological Site",
    },
    rating: {
      reviews: "reviews",
      source: "Google Reviews",
    },
    about: {
      title: "Overview: What You Didn't Know About Ingapirca",
      p1: "1. The Meaning of the Name and Historical Origins\n\"Ingapirca\" means \"Inca Stone Wall\" in Quechua (Inca + Pirca). Located in Cañar Province, Ecuador, it is the largest known Inca archaeological site discovered to date. It is not merely a military fortress but a unique testament to the cultural fusion between the expanding Inca Empire and the local Cañari people.",
      p2: "2. Cañari and Inca Architectural Fusion\nThe most fascinating aspect of Ingapirca is its \"dual culture\" character. Before the arrival of the Incas, the Cañari people had already settled here. Archaeologists have found that the site contains both the fine polygonal stonework of the Inca tradition (such as the Temple of the Sun) and the more rustic circular stone houses of the Cañari people. This coexistence of architectural styles reflects a complex and peaceful relationship between the two peoples.",
      myth: {
        title: "Flood and Rebirth: The Cañari \"Macaw\" Creation Myth",
        intro: "Before the Inca Empire set foot on this land, Ingapirca belonged to the proud Cañari people. To truly understand the soul of these ancient stone walls, we must look back to a devastating flood in ancient times.",
        story: "According to an Andean myth passed down for millennia, a devastating flood once swallowed the world, wiping out almost all life. In this catastrophe, only two Cañari brothers—Ataorupagui and Cusicayo—managed to escape to the towering Mount Huacayñan (meaning \"The Road of Tears\").\n\nWhen the waters receded, the earth was unrecognizable, and the brothers faced starvation. Just then, a miracle happened. Every day, when they returned to their cave exhausted from searching for food, they found it filled with abundant meals and corn beer. To find out the truth, the older brother hid deep in the cave to observe. He was shocked to discover that the food was brought by two mysterious macaws (Guacamayas) with human faces.\n\nThese two divine birds not only saved the brothers but eventually transformed into beautiful women and united with them. Their descendants multiplied on this highland, eventually building the great Cañari civilization.",
        trivia: {
          title: "📚 Historical Truth Behind the Myth",
          content: "Archaeologists and anthropologists note that macaws are not native to the high, cold Andes; they live in the hot, humid Amazon rainforest. This creation myth is not only the totem belief of the Cañari people but also a crucial historical profile—it proves that long before the Incas arrived, the Cañari people living in the Andes had already crossed treacherous geographical barriers to establish deep trade and cultural exchange networks with the tribes of the Amazon rainforest."
        }
      },
      astronomy: {
        title: "Capturing the Sun and Moon: Ingapirca's Ancient Astronomical Technology",
        intro: "Ingapirca is not just a fortress, but a massive, precision observatory made of stone. Without modern telescopes, ancient indigenous people used astonishing geometry and light calculations to \"carve\" the vast starry sky into the earth.",
        temple: {
          title: "Temple of the Sun (El Castillo) — A South American Architectural Anomaly",
          p1: "The Extraordinary Ellipse: This is the only known elliptical Inca temple in South America. Inca architects usually preferred rectangles, but to perfectly align with the Cañari people's original sacred site and precisely track the sun's trajectory, they made an exception and designed this smooth elliptical structure.",
          p2: "The Magic of Light and Shadow: The top of the temple once had a room with multiple niches. Every year on the summer solstice of June 21 (Inti Raymi, the Inca Festival of the Sun), as the sun rises, the first ray of sunlight pierces like a precise sword through specific niches directly into the core of the room. This was the sacred moment used by the empire to confirm the agricultural solar terms and manifest the supreme authority of the Sun God (Inti)."
        },
        pilaloma: {
          title: "Pilaloma Lunar Calendar — Agricultural Wisdom from the Moon in the Water",
          p1: "Not an Ordinary Well: If you look down in the Pilaloma area, you will find a very special, huge flat rock with 28 artificially carved circular holes of varying sizes. Archaeologists have confirmed that this is an ancient \"lunar calendar.\" Ancient priests would fill these holes with clear water.",
          p2: "Stargazing via Water Mirrors: On clear nights, the calm water surface turned into 28 \"water mirrors.\" Priests tracked the 28-day lunar cycle by observing the reflection of the moon in different water holes. This wisdom of precise stargazing without having to look up not only prevented the cold highland night wind from irritating their eyes but also provided the Cañari people with an exact schedule for planting and harvesting."
        },
        trivia: "💡 Visit Tip: As you stroll through the site, please observe the subtle changes of light and shadow on the stones. Located near the equator and at an altitude of over 3,100 meters, the stargazing conditions here are excellent. The Incas and Cañaris used this unique geographical location to perfectly integrate architecture, calendars, and deities."
      },
      timeline: {
        title: "Historical Timeline",
        events: [
          { period: "500-1400 AD", description: "Cañari people settled and established a ceremonial center (Pilaloma Period)" },
          { period: "Late 15th Century", description: "Inca Empire's Tupac Yupanqui conquered the area, achieving dual-empire integration through marriage" },
          { period: "Mid-16th Century", description: "During the Spanish colonial period, some stones were dismantled to build nearby churches" },
          { period: "1739", description: "French scholar Charles Marie de La Condamine conducted the first scientific expedition and drew sketches" },
          { period: "20th Century - Present", description: "Systematic archaeological excavations and modern conservation" }
        ]
      },
      caraDelInca: {
        title: "Iconic Landmark: The Inca's Face (Cara del Inca)",
        content: "On the hiking trails near the site, there is a natural wonder not to be missed—the \"Cara del Inca\" (Inca's Face). It is a massive natural rock whose profile, shaped by weathering, miraculously resembles the side profile of an Inca guard with a prominent nose. Legend has it that nature itself carved this sleeping guard to watch over the Temple of the Sun day and night. It is a favorite photo spot for hikers and photographers."
      },
      conservation: {
        title: "Archaeological Conservation Warning: The Challenges of Heritage Protection",
        content: "Modern archaeology is not just about excavation, but also about protection and reflection. During cleaning work in the 1990s, chemical solvents and physical cleaning methods were used to remove moss and lichen from the stone surfaces. However, this over-cleaning accidentally destroyed the natural protective layer of the green andesite, accelerating microbial degradation and stone weathering. This history has become an important lesson, and today the INPC uses much gentler and scientifically sound non-invasive interventions to protect the site. It reminds us that when facing millennial ruins, sometimes \"non-intervention\" is the best protection."
      },
      highlights: {
        title: "Quick Facts",
        items: [
          "Location: Cañar / Parroquia Ingapirca, Ecuador",
          "Altitude: ~3,160 meters",
          "Cultural Affiliation: Inca Empire + Cañari Culture",
          "Site Area: ~4 hectares",
          "Core Structure: Temple of the Sun (Templo del Sol)",
        ],
      },
      management: {
        title: "Site Protection and Official Management",
        content: "The Ingapirca Archaeological Complex is currently directly managed by the National Institute of Cultural Heritage of Ecuador (INPC, Instituto Nacional de Patrimonio Cultural). As a national first-class cultural heritage site, daily maintenance includes reinforcement of stone structures, planning of visitor paths, and support for cultural activities of indigenous communities. The visitor center provides official guided tours (usually including English and Spanish commentary). It is recommended to check the official website in advance for opening status and special event information."
      },
    },
    visiting: {
      title: "Visitor Information",
      hours: {
        title: "Operating Hours",
        content: "Thursday - Sunday: 09:00 – 16:30\nWednesday: 09:00 – 16:30",
        note: "Monday & Tuesday: Closed (weekly routine closure). It is officially recommended to call +593 7 221 7109 before departure to confirm opening status.",
      },
      price: {
        title: "Ticket Information",
        content: "Foreign adult visitors: $2 USD\nEcuadorian citizens and students enjoy discounted fares",
        note: "Ticket includes a mandatory 45-minute official guided tour. Unaccompanied entry to the core area is prohibited. Tickets are purchased on-site; USD cash and local electronic payments are accepted.",
      },
      duration: {
        title: "Recommended Duration & Climate",
        content: "Recommended visit duration: 2 - 3 hours",
        note: "Altitude exceeds 3,000 meters. Strong UV rays and low temperatures. Be sure to prepare for sun protection and warmth.",
      },
      animals: {
        title: "\"Site Residents\" Tip: Alpacas and Llamas",
        content: "Within the site, you will encounter free-roaming Alpacas and Llamas. How do you tell them apart? Alpacas are smaller and have thick, fluffy fleece; Llamas are taller, have longer necks, and distinctive banana-shaped ears. You are welcome to take photos with them, but for their health, please absolutely do not feed them any human food."
      },
      bring: {
        title: "Preparation",
        items: [
          "High-SPF sunscreen and sun hat (extreme high-altitude UV exposure)",
          "Warm jacket (highland temperature varies greatly between day and night, sudden cooling is possible even during the day)",
          "Comfortable non-slip hiking shoes (there are many gravel and slopes within the site)",
          "Carry at least 1 liter of water, as there are no shops within the site.",
        ],
      },
    },
    transportation: {
      title: "Getting There: From Cuenca to Ingapirca",
      airport: {
        title: "From Cuenca Airport (CUE)",
        content: "Cuenca is about 80 km from Ingapirca, about a 1.5 to 2 hour drive. Here are the detailed transportation options:",
        options: [
          {
            name: "Option A: Private Car/Taxi (Highly Recommended, Flexible)",
            price: "$40 - $60 USD (round trip)",
            time: "1.5 - 2 hours one way",
            steps: [
              "Step 1: After claiming luggage, look for the official taxi counter in the airport arrivals hall or your pre-booked private car driver.",
              "Step 2: Clearly state your destination as \"Complejo Arqueológico Ingapirca, Cañar\".",
              "Step 3: It is recommended to negotiate a waiting or round-trip price with the driver to avoid the dilemma of not being able to hail a car for the return trip.",
              "Step 4: The scenery along the way is beautiful. The driver will travel on the Pan-American Highway, arriving at the site parking lot in about 1.5 hours."
            ]
          },
          {
            name: "Option B: Intercity Bus from Cuenca Downtown (Budget-Friendly)",
            price: "$3 - $5 USD",
            time: "2 - 2.5 hours",
            steps: [
              "Step 1: From downtown Cuenca, go to the Terminal Terrestre de Cuenca (Cuenca Long-Distance Bus Terminal).",
              "Step 2: Look for buses heading to \"Azogues\" or \"Cañar\" and tell the driver to drop you off at the \"Ingapirca\" road intersection.",
              "Step 3: After getting off, you need to walk about 3 km (or take a local motorcycle taxi) to reach the site entrance.",
              "Step 4: For the return trip, you need to wait for passing buses on the roadside. It is recommended to start the return trip before 14:00 to avoid missing the last bus."
            ]
          },
          {
            name: "Option C: Cuenca Local Day Tour (Most Hassle-Free)",
            price: "$25 - $45 USD/person",
            time: "Full day (including other attractions)",
            steps: [
              "Step 1: Inquire about \"Ingapirca Day Tour\" at any travel agency or hotel front desk in Cuenca downtown.",
              "Step 2: Confirm that the itinerary includes site entrance fees, guided tours, and round-trip transportation.",
              "Step 3: Usually departs from Cuenca at 08:00 - 09:00 in the morning and returns at 16:00 - 17:00 in the afternoon.",
              "Step 4: Some itineraries also stop by handicraft towns such as Gualaceo and Chordeleg along the way, offering good value for money."
            ]
          }
        ]
      },
      city: {
        title: "Self-Drive from Cuenca Downtown",
        content: "If you rent a car in Cuenca, the route to Ingapirca is very clear, and there are clear signs along the way.",
        steps: [
          "Navigation: Enter \"Complejo Arqueológico Ingapirca\" or coordinates F45G+P8H, Cañar in Google Maps or Waze.",
          "Driving Route: Depart from Cuenca, drive north along the Pan-American Highway, continue for about 15 km after passing Azogues, and turn right into the branch road leading to the site according to the signs.",
          "Parking: There is a large free parking lot at the site entrance. Parking spaces are tight on weekends and holidays. It is recommended to arrive before 10:00 AM."
        ]
      },
      selfDrive: {
        title: "Long-Distance Travel from Guayaquil or Quito",
        content: "If you are coming from other major cities in Ecuador, you usually need to arrive in Cuenca first, then transfer to local transportation to the site.",
        steps: [
          "From Guayaquil: Take a bus east along the Pan-American Highway, about 3-4 hours to Cuenca, then transfer to local transportation to the site (total trip about 5-6 hours).",
          "From Quito: Take an overnight bus or domestic flight to Cuenca, then go to the site the next day (it is recommended to arrange at least a two-day one-night trip).",
          "Navigation reminder: The last section of the road from Cuenca to the site is a mountain road, and some sections are unpaved. It is recommended to drive an SUV or high-chassis vehicle."
        ]
      }
    },
    tips: {
      title: "Travel Tips",
      items: [
        "Altitude Sickness Prevention: The site altitude exceeds 3,000 meters. It is recommended to arrive in Cuenca one day in advance to acclimatize. Avoid running vigorously during the visit.",
        "Best Photography Time: 10:00 AM to 2:00 PM when sunlight directly hits the Temple of the Sun, is the best time to capture golden light and shadow.",
        "Official Guide: Visitors must tour the core area with an official guide (English/Spanish) to protect the fragile archaeological ruins.",
        "Respect Local Customs: Ingapirca remains a sacred place where local indigenous people hold traditional ceremonies. Please keep quiet during the visit and do not climb on the ruin walls."
      ],
    },
    gallery: {
      title: "Photo Gallery",
      viewMore: "View More Photos on Google Maps",
    },
    reviews: {
      title: "Visitor Reviews",
      subtitle: "Real reviews from Google Maps",
      viewMore: "View More Reviews on Google Maps",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Learn more about the Ingapirca Archaeological Complex",
      items: [
        {
          question: "What is the difference between Ingapirca and Machu Picchu?",
          answer: "Although both are Inca sites, Ingapirca is smaller in scale and uniquely blends indigenous Cañari culture. Compared to Machu Picchu, there are fewer tourists here, allowing for a quieter appreciation of the ruins. In addition, the Temple of the Sun at Ingapirca has a unique elliptical structure, which Machu Picchu does not have."
        },
        {
          question: "Do I need to book tickets online in advance?",
          answer: "Currently, online booking is not required. You can purchase tickets directly at the ticket window at the site entrance. However, as the site may temporarily close for special cultural activities or maintenance, it is recommended to call +593 7 221 7109 before departure to confirm the opening status."
        },
        {
          question: "Is the site suitable for children and the elderly?",
          answer: "The site is generally friendly to children and the elderly, but some areas have slopes and gravel. It is recommended that the elderly use hiking poles and avoid prolonged exposure to the sun outdoors. The visitor center provides simple accessible passages, but some ancient stone steps may not be passable for wheelchairs."
        },
        {
          question: "Can I have a picnic or eat inside the site?",
          answer: "To protect the ruins, picnicking or eating is not allowed within the core area of the site. However, there are designated rest areas and small snack stalls near the visitor center where you can buy local specialty snacks and drinks."
        },
        {
          question: "Are there restrooms inside the site?",
          answer: "Yes. Public restrooms are available near the visitor center and the site entrance, but conditions are relatively basic. It is recommended to use restrooms at hotels or shopping malls in Cuenca before departure."
        },
        {
          question: "Will there be barriers if I only speak English?",
          answer: "No. Official guides provided at the site can usually provide commentary in both Spanish and English. If you only speak Chinese, it is recommended to download an offline translation App (such as Google Translate) in advance and download the offline map of the site."
        },
        {
          question: "Is Ingapirca listed on the UNESCO World Heritage List?",
          answer: "As of now, Ingapirca has not been listed on the UNESCO World Heritage List, but it is already a national-level cultural heritage site in Ecuador and has been actively preparing for World Heritage nomination. The UNESCO World Heritage Centre has relevant records on it."
        },
        {
          question: "Will visiting Ingapirca during the rainy season (October to May) affect the visit?",
          answer: "It will have some impact. High-altitude rainy seasons have more showers. It is recommended to enter the site before 10:00, as the rain usually intensifies only in the afternoon. If there is heavy rain, some outdoor areas may be temporarily closed. The dry season (June to September) is the best time to visit, with blue skies and excellent visibility."
        },
        {
          question: "Can I take wedding photos or commercial photography at the site?",
          answer: "Personal non-commercial photography and videography are allowed. However, if you need to conduct wedding photography, advertising shoots, or other commercial-purpose imaging, you must apply for a filming permit from the INPC (National Institute of Cultural Heritage) in advance and pay the corresponding fees."
        },
        {
          question: "What other attractions are worth visiting nearby?",
          answer: "On the way back from Ingapirca to Cuenca, you can stop by the churches and handicraft markets in Azogues, or go to Gualaceo and Chordeleg to experience traditional Ecuadorian rural handicrafts (such as the famous Tagua nut carvings and gold jewelry making). If time permits, you can also go to Cajas National Park for highland lake hiking."
        }
      ],
    },
    location: {
      title: "Map Location",
      address: "F45G+P8H, CAÑAR, Ecuador",
      openMaps: "View Location on Google Maps",
    },
    contact: {
      title: "Contact",
      phone: "+593 7 221 7109",
      phoneNote: "Call ahead to confirm opening status and special events",
    },
    footer: {
      callToAction: "As a guardian of cultural heritage, please join us in observing the \"Leave No Trace\" principles.",
      text: "© 2026 Ingapirca Archaeological Complex Travel Guide · All rights reserved.",
      made: "This website is an independent third-party travel information project. We have no affiliation with local government or other official institutions. Made for explorers",
      linksTitle: "Related Links",
      links: [
        { name: "INPC (Ecuador National Institute of Cultural Heritage)", url: "https://www.patrimoniocultural.gob.ec/complejo-arqueologico-ingapirca/" },
        { name: "Ingapirca Local Government Official Introduction", url: "https://www.ingapirca.gob.ec/index.php/ct-menu-item-11" },
        { name: "Cañari People's Federation", url: "http://www.mancomunidadcanari.gob.ec/cantones/canar-complejo-arqueologico-de-ingapirca/8/" },
        { name: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/1459/" },
        { name: "Ecuador Official Tourism Board", url: "https://ecuador.travel/en/ecuador-and-its-world-heritage-sites/" },
      ],
    },
  },
  es: {
    nav: {
      about: "Descripción General",
      visiting: "Guía de Visita",
      transportation: "Cómo Llegar",
      tips: "Consejos",
      reviews: "Reseñas",
      faq: "Preguntas Frecuentes",
      location: "Ubicación",
    },
    hero: {
      tagline: "El Sitio Arqueológico Inca Más Grande del Ecuador",
      title: "Complejo Arqueológico Ingapirca",
      subtitle: "Ingapirca Archaeological Complex",
      cta: "Explora el Sitio Arqueológico",
    },
    rating: {
      reviews: "reseñas",
      source: "Google Reviews",
    },
    about: {
      title: "Descripción General: Lo Que No Sabías Sobre Ingapirca",
      p1: "1. El Significado del Nombre y los Orígenes Históricos\n\"Ingapirca\" significa \"Muro de Piedra Inca\" en quechua (Inca + Pirca). Ubicado en la provincia de Cañar, Ecuador, es el sitio arqueológico inca más grande descubierto hasta la fecha. No es meramente una fortaleza militar, sino un testimonio único de la fusión cultural entre el creciente Imperio Inca y el pueblo local Cañari.",
      p2: "2. Fusión Arquitectónica Cañari e Inca\nEl aspecto más fascinante de Ingapirca es su carácter de \"cultura dual\". Antes de la llegada de los incas, el pueblo Cañari ya se había asentado aquí. Los arqueólogos han encontrado que el sitio contiene tanto la fina mampostería poligonal de la tradición inca (como el Templo del Sol) como las más rústicas casas de piedra circular del pueblo Cañari. Esta coexistencia de estilos arquitectónicos refleja una relación compleja y pacífica entre los dos pueblos.",
      myth: {
        title: "Diluvio y Renacimiento: El Mito de Creación Cañari de las \"Guacamayas\"",
        intro: "Antes de que el Imperio Inca pisara esta tierra, Ingapirca pertenecía al orgulloso pueblo Cañari. Para comprender verdaderamente el alma de estos antiguos muros de piedra, debemos mirar hacia un devastador diluvio en tiempos antiguos.",
        story: "Según un mito andino transmitido durante milenios, un devastador diluvio una vez se tragó el mundo, aniquilando casi toda la vida. En esta catástrofe, solo dos hermanos Cañaris, Ataorupagui y Cusicayo, lograron escapar a la imponente montaña Huacayñan (que significa \"El Camino de las Lágrimas\").\n\nCuando las aguas retrocedieron, la tierra estaba irreconocible y los hermanos se enfrentaban a la inanición. Justo entonces, ocurrió un milagro. Todos los días, cuando regresaban a su cueva exhaustos de buscar comida, la encontraban llena de abundantes comidas y chicha. Para descubrir la verdad, el hermano mayor se escondió en lo profundo de la cueva para observar. Se sorprendió al descubrir que la comida era traída por dos misteriosas guacamayas con rostros humanos.\n\nEstas dos aves divinas no solo salvaron a los hermanos, sino que finalmente se transformaron en hermosas mujeres y se unieron a ellos. Sus descendientes se multiplicaron en estas tierras altas, construyendo eventualmente la gran civilización Cañari.",
        trivia: {
          title: "📚 Verdad Histórica Detrás del Mito",
          content: "Arqueólogos y antropólogos señalan que las guacamayas no son nativas de los Andes altos y fríos; viven en la selva amazónica cálida y húmeda. Este mito de creación no es solo la creencia totémica del pueblo Cañari, sino también un perfil histórico crucial: demuestra que mucho antes de la llegada de los incas, el pueblo Cañari que vivía en los Andes ya había cruzado barreras geográficas traicioneras para establecer profundas redes de intercambio comercial y cultural con las tribus de la selva amazónica."
        }
      },
      astronomy: {
        title: "Capturando el Sol y la Luna: La Antigua Tecnología Astronómica de Ingapirca",
        intro: "Ingapirca no es solo una fortaleza, sino un observatorio masivo y de precisión hecho de piedra. Sin telescopios modernos, los antiguos pueblos indígenas utilizaron cálculos asombrosos de geometría y luz para \"tallar\" el vasto cielo estrellado en la tierra.",
        temple: {
          title: "Templo del Sol (El Castillo) — Una Anomalía Arquitectónica Sudamericana",
          p1: "La Elipse Extraordinaria: Este es el único templo inca elíptico conocido en América del Sur. Los arquitectos incas generalmente preferían los rectángulos, pero para alinearse perfectamente con el sitio sagrado original del pueblo Cañari y rastrear con precisión la trayectoria del sol, hicieron una excepción y diseñaron esta suave estructura elíptica.",
          p2: "La Magia de la Luz y la Sombra: La parte superior del templo una vez tuvo una habitación con múltiples nichos. Cada año, en el solsticio de verano del 21 de junio (Inti Raymi, la Fiesta Inca del Sol), cuando sale el sol, el primer rayo de luz solar atraviesa como una espada precisa a través de nichos específicos directamente hacia el núcleo de la habitación. Este fue el momento sagrado utilizado por el imperio para confirmar los períodos solares agrícolas y manifestar la autoridad suprema del Dios Sol (Inti)."
        },
        pilaloma: {
          title: "Calendario Lunar de Pilaloma — Sabiduría Agrícola de la Luna en el Agua",
          p1: "No es un Pozo Ordinario: Si miras hacia abajo en el área de Pilaloma, encontrarás una roca plana enorme y muy especial con 28 agujeros circulares de diferentes tamaños tallados artificialmente. Los arqueólogos han confirmado que se trata de un antiguo \"calendario lunar\". Los antiguos sacerdotes llenaban estos agujeros con agua clara.",
          p2: "Observación de Estrellas a través de Espejos de Agua: En noches claras, la superficie tranquila del agua se convertía en 28 \"espejos de agua\". Los sacerdotes rastreaban el ciclo lunar de 28 días observando el reflejo de la luna en diferentes agujeros de agua. Esta sabiduría de observación precisa de estrellas sin tener que mirar hacia arriba no solo evitó que el viento frío de la noche andina irritara sus ojos, sino que también proporcionó al pueblo Cañari un horario exacto para sembrar y cosechar."
        },
        trivia: "💡 Consejo de Visita: Mientras pasea por el sitio, observe los sutiles cambios de luz y sombra en las piedras. Ubicado cerca del ecuador y a una altitud de más de 3.100 metros, las condiciones de observación de estrellas aquí son excelentes. Los incas y cañaris utilizaron esta ubicación geográfica única para integrar perfectamente arquitectura, calendarios y deidades."
      },
      timeline: {
        title: "Línea de Tiempo Histórica",
        events: [
          { period: "500-1400 d.C.", description: "El pueblo Cañari se asentó y estableció un centro ceremonial (Período Pilaloma)" },
          { period: "Fines del Siglo XV", description: "Túpac Yupanqui del Imperio Inca conquistó el área, logrando la integración de dos imperios a través del matrimonio" },
          { period: "Mediados del Siglo XVI", description: "Durante el período colonial español, algunas piedras fueron desmanteladas para construir iglesias cercanas" },
          { period: "1739", description: "El erudito francés Charles Marie de La Condamine realizó la primera expedición científica y dibujó bocetos" },
          { period: "Siglo XX - Presente", description: "Excavaciones arqueológicas sistemáticas y conservación moderna" }
        ]
      },
      caraDelInca: {
        title: "Punto de Referencia: La Cara del Inca",
        content: "En las rutas de senderismo cerca del sitio, hay una maravilla natural que no debe perderse: la \"Cara del Inca\". Es una enorme roca natural cuyo perfil, moldeado por la erosión, se asemeja milagrosamente al perfil lateral de un guardia inca con una nariz prominente. La leyenda dice que la propia naturaleza talló a este guardia dormido para vigilar el Templo del Sol día y noche. Es un lugar favorito para tomar fotos para excursionistas y fotógrafos."
      },
      conservation: {
        title: "Advertencia de Conservación: Los Desafíos de la Protección del Patrimonio",
        content: "La arqueología moderna no se trata solo de excavación, sino también de protección y reflexión. Durante los trabajos de limpieza en la década de 1990, se utilizaron disolventes químicos y métodos físicos para eliminar el musgo y los líquenes de las superficies de piedra. Sin embargo, esta limpieza excesiva destruyó accidentalmente la capa protectora natural de la andesita verde, acelerando la degradación microbiana y la erosión de la piedra. Esta historia se ha convertido en una lección importante, y hoy en día el INPC utiliza intervenciones no invasivas mucho más suaves y científicamente sólidas para proteger el sitio. Nos recuerda que al enfrentar ruinas milenarias, a veces la \"no intervención\" es la mejor protección."
      },
      highlights: {
        title: "Datos Rápidos (Quick Facts)",
        items: [
          "Ubicación: Cañar / Parroquia Ingapirca, Ecuador",
          "Altitud: ~3.160 metros",
          "Afiliación Cultural: Imperio Inca + Cultura Cañari",
          "Área del Sitio: ~4 hectáreas",
          "Estructura Central: Templo del Sol (Templo del Sol)",
        ],
      },
      management: {
        title: "Protección del Sitio y Gestión Oficial",
        content: "El Complejo Arqueológico Ingapirca es actualmente gestionado directamente por el Instituto Nacional de Patrimonio Cultural del Ecuador (INPC). Como sitio de patrimonio cultural de primera clase a nivel nacional, el mantenimiento diario incluye el refuerzo de estructuras de piedra, la planificación de senderos para visitantes y el apoyo a actividades culturales de comunidades indígenas. El centro de visitantes ofrece visitas guiadas oficiales (generalmente incluyendo comentarios en inglés y español). Se recomienda consultar el sitio web oficial con anticipación para conocer el estado de apertura e información sobre eventos especiales."
      },
    },
    visiting: {
      title: "Información para Visitantes",
      hours: {
        title: "Horario de Operación",
        content: "Jueves - Domingo: 09:00 – 16:30\nMiércoles: 09:00 – 16:30",
        note: "Lunes y Martes: Cerrado (cierre rutinario semanal). Se recomienda oficialmente llamar al +593 7 221 7109 antes de la partida para confirmar el estado de apertura.",
      },
      price: {
        title: "Información de Boletos",
        content: "Visitantes adultos extranjeros: $2 USD\nCiudadanos ecuatorianos y estudiantes disfrutan de tarifas preferenciales",
        note: "El boleto incluye un recorrido guiado oficial obligatorio de 45 minutos. Se prohíbe la entrada al área central sin guía. Los boletos se compran en el lugar; se aceptan dólares en efectivo y pagos electrónicos locales.",
      },
      duration: {
        title: "Duración Recomendada y Clima",
        content: "Duración recomendada de la visita: 2 - 3 horas",
        note: "La altitud supera los 3.000 metros. Fuertes rayos UV y bajas temperaturas. Asegúrese de prepararse para la protección solar y el abrigo.",
      },
      animals: {
        title: "Consejo sobre \"Residentes del Sitio\": Alpacas y Llamas",
        content: "Dentro del sitio, encontrará alpacas y llamas deambulando libremente. ¿Cómo distinguirlas? Las alpacas son más pequeñas y tienen lana gruesa y esponjosa; las llamas son más altas, tienen cuellos más largos y distintivas orejas en forma de plátano. Le invitamos a tomarse fotos con ellas, pero por su salud, por favor no les dé absolutamente ninguna comida humana."
      },
      bring: {
        title: "Preparación",
        items: [
          "Protector solar de alto FPS y sombrero (exposición extrema a rayos UV en altitud)",
          "Chaqueta abrigada (la temperatura en las tierras altas varía mucho entre el día y la noche, es posible un enfriamiento repentino incluso durante el día)",
          "Zapatos de caminata cómodos y antideslizantes (hay mucha grava y pendientes dentro del sitio)",
          "Lleve al menos 1 litro de agua, ya que no hay tiendas dentro del sitio.",
        ],
      },
    },
    transportation: {
      title: "Cómo Llegar: De Cuenca a Ingapirca",
      airport: {
        title: "Desde el Aeropuerto de Cuenca (CUE)",
        content: "Cuenca está a unos 80 km de Ingapirca, a unas 1.5 a 2 horas en automóvil. Aquí están las opciones detalladas de transporte:",
        options: [
          {
            name: "Opción A: Auto Privado/Taxi (Muy Recomendado, Flexible)",
            price: "$40 - $60 USD (ida y vuelta)",
            time: "1.5 - 2 horas solo ida",
            steps: [
              "Paso 1: Después de reclamar el equipaje, busque el mostrador de taxis oficiales en la sala de llegadas del aeropuerto o a su conductor de auto privado pre-reservado.",
              "Paso 2: Indique claramente su destino como \"Complejo Arqueológico Ingapirca, Cañar\".",
              "Paso 3: Se recomienda negociar un precio de espera o ida y vuelta con el conductor para evitar el dilema de no poder tomar un auto para el viaje de regreso.",
              "Paso 4: El paisaje a lo largo del camino es hermoso. El conductor viajará por la Carretera Panamericana, llegando al estacionamiento del sitio en unas 1.5 horas."
            ]
          },
          {
            name: "Opción B: Bus Interurbano desde el Centro de Cuenca (Económico)",
            price: "$3 - $5 USD",
            time: "2 - 2.5 horas",
            steps: [
              "Paso 1: Desde el centro de Cuenca, vaya a la Terminal Terrestre de Cuenca (Terminal de Buses de Larga Distancia de Cuenca).",
              "Paso 2: Busque buses con destino a \"Azogues\" o \"Cañar\" y dígale al conductor que lo deje en la intersección de carretera \"Ingapirca\".",
              "Paso 3: Después de bajar, necesita caminar unos 3 km (o tomar un taxi moto local) para llegar a la entrada del sitio.",
              "Paso 4: Para el viaje de regreso, necesita esperar buses que pasen al borde de la carretera. Se recomienda comenzar el viaje de regreso antes de las 14:00 para evitar perder el último bus."
            ]
          },
          {
            name: "Opción C: Tour de un Día desde Cuenca (Más Sin Molestias)",
            price: "$25 - $45 USD/persona",
            time: "Día completo (incluyendo otras atracciones)",
            steps: [
              "Paso 1: Consulte sobre el \"Ingapirca Day Tour\" en cualquier agencia de viajes o mostrador de hotel en el centro de Cuenca.",
              "Paso 2: Confirme que el itinerario incluye tarifas de entrada al sitio, visitas guiadas y transporte de ida y vuelta.",
              "Paso 3: Usualmente sale de Cuenca a las 08:00 - 09:00 de la mañana y regresa a las 16:00 - 17:00 de la tarde.",
              "Paso 4: Algunos itinerarios también hacen paradas en pueblos artesanales como Gualaceo y Chordeleg en el camino, ofreciendo una buena relación calidad-precio."
            ]
          }
        ]
      },
      city: {
        title: "Conducción Propia desde el Centro de Cuenca",
        content: "Si alquila un automóvil en Cuenca, la ruta a Ingapirca es muy clara y hay señales claras a lo largo del camino.",
        steps: [
          "Navegación: Ingrese \"Complejo Arqueológico Ingapirca\" o coordenadas F45G+P8H, Cañar en Google Maps o Waze.",
          "Ruta de Conducción: Salga de Cuenca, conduzca hacia el norte a lo largo de la Carretera Panamericana, continúe por unos 15 km después de pasar Azogues y gire a la derecha en el camino que lleva al sitio según los letreros.",
          "Estacionamiento: Hay un gran estacionamiento gratuito en la entrada del sitio. Los espacios de estacionamiento son limitados los fines de semana y días festivos. Se recomienda llegar antes de las 10:00 AM."
        ]
      },
      selfDrive: {
        title: "Viaje Larga Distancia desde Guayaquil o Quito",
        content: "Si viene desde otras ciudades principales de Ecuador, generalmente necesita llegar a Cuenca primero y luego transferirse al transporte local al sitio.",
        steps: [
          "Desde Guayaquil: Tome un bus hacia el este a lo largo de la Carretera Panamericana, unas 3-4 horas a Cuenca, luego transfiera al transporte local al sitio (viaje total unas 5-6 horas).",
          "Desde Quito: Tome un bus nocturno o un vuelo doméstico a Cuenca, luego vaya al sitio al día siguiente (se recomienda arreglar un viaje de al menos dos días y una noche).",
          "Recordatorio de navegación: El último tramo del camino de Cuenca al sitio es un camino de montaña y algunas secciones no están pavimentadas. Se recomienda conducir un SUV o un vehículo de chasis alto."
        ]
      }
    },
    tips: {
      title: "Consejos de Viaje",
      items: [
        "Prevención del Mal de Altura: La altitud del sitio supera los 3.000 metros. Se recomienda llegar a Cuenca un día con anticipación para aclimatarse. Evite correr vigorosamente durante la visita.",
        "Mejor Hora para Fotografía: De 10:00 AM a 2:00 PM cuando la luz solar golpea directamente el Templo del Sol, es la mejor hora para capturar luz dorada y sombras.",
        "Guía Oficial: Los visitantes deben recorrer el área central con un guía oficial (inglés/español) para proteger las frágiles ruinas arqueológicas.",
        "Respetar las Costumbres Locales: Ingapirca sigue siendo un lugar sagrado donde los indígenas locales realizan ceremonias tradicionales. Por favor, mantenga silencio durante la visita y no trepe sobre los muros de las ruinas."
      ],
    },
    gallery: {
      title: "Galería de Fotos",
      viewMore: "Ver Más Fotos en Google Maps",
    },
    reviews: {
      title: "Reseñas de Visitantes",
      subtitle: "Reseñas reales de Google Maps",
      viewMore: "Ver Más Reseñas en Google Maps",
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Conozca más sobre el Complejo Arqueológico Ingapirca",
      items: [
        {
          question: "¿Cuál es la diferencia entre Ingapirca y Machu Picchu?",
          answer: "Aunque ambos son sitios incas, Ingapirca es de menor escala y únicamente combina la cultura indígena Cañari. En comparación con Machu Picchu, hay menos turistas aquí, lo que permite apreciar las ruinas más tranquilamente. Además, el Templo del Sol en Ingapirca tiene una estructura elíptica única, que Machu Picchu no tiene."
        },
        {
          question: "¿Necesito reservar boletos en línea con anticipación?",
          answer: "Actualmente no es necesario comprar en línea. Puede comprar boletos directamente en la ventanilla de entrada del sitio. Sin embargo, como el sitio puede cerrar temporalmente por actividades culturales especiales o mantenimiento, se recomienda llamar al +593 7 221 7109 antes de la partida para confirmar el estado de apertura."
        },
        {
          question: "¿El sitio es adecuado para niños y personas mayores?",
          answer: "El sitio generalmente es amigable para niños y personas mayores, pero algunas áreas tienen pendientes y grava. Se recomienda que las personas mayores usen bastones de caminata y eviten la exposición prolongada al sol al aire libre. El centro de visitantes proporciona pasos accesibles simples, pero algunas antiguas escaleras de piedra pueden no ser transversables para sillas de ruedas."
        },
        {
          question: "¿Puedo hacer un picnic o comer dentro del sitio?",
          answer: "Para proteger las ruinas, no se permite hacer picnics o comer dentro del área central del sitio. Sin embargo, hay áreas de descanso designadas y pequeños puestos de bocadillos cerca del centro de visitantes donde puede comprar bocadillos y bebidas locales especiales."
        },
        {
          question: "¿Hay baños dentro del sitio?",
          answer: "Sí. Hay baños públicos disponibles cerca del centro de visitantes y la entrada del sitio, pero las condiciones son relativamente básicas. Se recomienda usar los baños en hoteles o centros comerciales en Cuenca antes de la partida."
        },
        {
          question: "¿Habrá barreras si solo hablo inglés?",
          answer: "No. Los guías oficiales proporcionados en el sitio generalmente pueden proporcionar comentarios tanto en español como en inglés. Si solo habla chino, se recomienda descargar una aplicación de traducción fuera de línea (como Google Translate) con anticipación y descargar el mapa fuera de línea del sitio."
        },
        {
          question: "¿Está Ingapirca en la Lista del Patrimonio Mundial de la UNESCO?",
          answer: "Hasta ahora, Ingapirca no ha sido incluido en la Lista del Patrimonio Mundial de la UNESCO, pero ya es un sitio de patrimonio cultural de nivel nacional en Ecuador y ha estado preparándose activamente para la nominación al Patrimonio Mundial. El Centro del Patrimonio Mundial de la UNESCO tiene registros relevantes sobre él."
        },
        {
          question: "¿Afectará la visita a Ingapirca durante la temporada de lluvias (octubre a mayo)?",
          answer: "Tendrá algún impacto. Las temporadas de lluvias en altitudes altas tienen más aguaceros. Se recomienda entrar al sitio antes de las 10:00, ya que la lluvia generalmente se intensifica solo en la tarde. Si hay lluvia fuerte, algunas áreas al aire libre pueden cerrarse temporalmente. La temporada seca (junio a septiembre) es el mejor momento para visitar, con cielos azules y excelente visibilidad."
        },
        {
          question: "¿Puedo tomar fotos de bodas o fotografía comercial en el sitio?",
          answer: "Se permiten fotografía y videografía personales no comerciales. Sin embargo, si necesita realizar fotografía de bodas, sesiones publicitarias u otra imaginería con fines comerciales, debe solicitar un permiso de filmación al INPC (Instituto Nacional de Patrimonio Cultural) con anticipación y pagar las tarifas correspondientes."
        },
        {
          question: "¿Qué otras atracciones vale la pena visitar cerca?",
          answer: "En el camino de regreso de Ingapirca a Cuenca, puede hacer una parada en las iglesias y mercados artesanales en Azogues, o ir a Gualaceo y Chordeleg para experimentar artesanías rurales tradicionales ecuatorianas (como las famosas tallas de nueces Tagua y fabricación de joyas de oro). Si el tiempo lo permite, también puede ir al Parque Nacional Cajas para caminatas en lagos de tierras altas."
        }
      ],
    },
    location: {
      title: "Ubicación en el Mapa",
      address: "F45G+P8H, CAÑAR, Ecuador",
      openMaps: "Ver Ubicación en Google Maps",
    },
    contact: {
      title: "Contacto",
      phone: "+593 7 221 7109",
      phoneNote: "Llame con anticipación para confirmar el estado de apertura y eventos especiales",
    },
    footer: {
      callToAction: "Como guardián del patrimonio cultural, únase a nosotros para observar el principio de \"No Dejar Rastro\" (Leave No Trace).",
      text: "© 2026 Guía de Viaje del Complejo Arqueológico Ingapirca · Todos los derechos reservados.",
      made: "Este sitio web es un proyecto independiente de información turística de terceros. No tenemos afiliación con el gobierno local u otras instituciones oficiales. Hecho para exploradores",
      linksTitle: "Enlaces Relacionados",
      links: [
        { name: "INPC (Instituto Nacional de Patrimonio Cultural)", url: "https://www.patrimoniocultural.gob.ec/complejo-arqueologico-ingapirca/" },
        { name: "Gobierno Autónomo Descentralizado de Ingapirca", url: "https://www.ingapirca.gob.ec/index.php/ct-menu-item-11" },
        { name: "Mancomunidad Cañari", url: "http://www.mancomunidadcanari.gob.ec/cantones/canar-complejo-arqueologico-de-ingapirca/8/" },
        { name: "Centro del Patrimonio Mundial de la UNESCO", url: "https://whc.unesco.org/en/list/1459/" },
        { name: "Ministerio de Turismo del Ecuador", url: "https://ecuador.travel/en/ecuador-and-its-world-heritage-sites/" },
      ],
    },
  },
};

export type LinkItem = { name: string; url: string };

export type FAQItem = { question: string; answer: string };

export type TransportOption = { name: string; time: string; price: string; steps: string[] };

export type TimelineEvent = { period: string; description: string };

export type Translations = {
  nav: { about: string; visiting: string; transportation: string; tips: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: {
    title: string;
    p1: string;
    p2: string;
    myth: {
      title: string;
      intro: string;
      story: string;
      trivia: { title: string; content: string };
    };
    astronomy: {
      title: string;
      intro: string;
      temple: { title: string; p1: string; p2: string };
      pilaloma: { title: string; p1: string; p2: string };
      trivia: string;
    };
    timeline: {
      title: string;
      events: TimelineEvent[];
    };
    caraDelInca: {
      title: string;
      content: string;
    };
    conservation: {
      title: string;
      content: string;
    };
    highlights: { title: string; items: string[] };
    management: { title: string; content: string };
  };
  visiting: {
    title: string;
    hours: { title: string; content: string; note: string };
    price: { title: string; content: string; note: string };
    duration: { title: string; content: string; note: string };
    animals: { title: string; content: string };
    bring: { title: string; items: string[] };
  };
  transportation: {
    title: string;
    airport: { title: string; content: string; options: TransportOption[] };
    city: { title: string; content: string; steps: string[] };
    selfDrive: { title: string; content: string; steps: string[] };
  };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  contact: { title: string; phone: string; phoneNote: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

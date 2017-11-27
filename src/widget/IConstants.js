import {
  Platform,
  Dimensions
} from 'react-native';

export const HEIGHT_TOP_BAR = (Platform.OS === 'android' ? 44 : 64);
export const HEIGHT_STATUS_BAR = (Platform.OS === 'android' ? 0 : 20);
export const HEIGHT_NAV_BAR = 44;

export const {width, height} = Dimensions.get('window');

export const TOURIST_DAY_TYPE  = 'tourist_day_type';

export const EventType = {
  HOME_REFRESH: 'home_refresh',

};

export const ItemType = {
  Chi: 0,                 // 美食
  CanTing: 1,             // 餐厅
  Zhu: 2,                 // 酒店
  Xing: 3,                // 行
  You: 4,                 // 景区
  Gou: 5,                 // 购物
  Yu: 6,                  // 娱乐
  TeChan: 7,              // 特产
  XianLu: 8,              // 线路
  C2CShop: 9,             // 商城商铺
  Meeting: 10,            // 会议室
  Diner: 11,              // 团餐
};

export const COLOR_BAR = '#407ab0';

export const ENTRIES1 = [
  {
      title1: '要美丽也要健康',
      subtitle1: '9元起开始秒杀美妆和生活用品',
      imageUrl: 'https://img14.360buyimg.com/jdcms/s570x311_jfs/t13645/255/898921802/27305/cbf9cef6/5a169591N51c30d47.jpg!cc_570x311!q70'
  },
  {
      title1: '时尚水晶特卖',
      subtitle1: '看直播领福利秒杀时尚珠宝',
      imageUrl: 'https://img10.360buyimg.com/jdcms/s570x311_jfs/t12967/334/899702520/188335/9d5aa5d4/5a168019N46a44ef3.jpg!cc_570x311!q70'
  },
  {
      title1: '一大波超值美食来袭 | 9块9包邮',
      subtitle1: '99减50| 9块9包邮| 买二送 ',
      imageUrl: 'https://img11.360buyimg.com/jdcms/s570x311_jfs/t13978/183/241458447/178133/9e242758/5a065d1fN9396bbf1.jpg!cc_570x311!q70'
  },
  {
      title1: '冬季巨补水',
      subtitle1: '超值优惠',
      imageUrl: 'https://img10.360buyimg.com/jdcms/s370x278_jfs/t11530/152/2262091594/63052/bb014674/5a13b659Nb43ef070.jpg!q70.jpg'
  },
  {
      title1: '美食美妆嗨起来',
      subtitle1: '点赞抽奖',
      imageUrl: 'https://img13.360buyimg.com/jdcms/s370x278_jfs/t12475/308/823405400/153646/f9a4e293/5a13fbfbNdde6c8d0.jpg!q70.jpg'
  },
  {
      title1: '保暖打底衣衫套装19元秒杀',
      subtitle1: '限量50套',
      imageUrl: 'https://img11.360buyimg.com/jdcms/s370x278_jfs/t12400/299/722950596/92818/c1c2c42a/5a127d0bNbb07fe11.jpg!q70.jpg'
  }
];

export const headerImageList =
  [
    { img: 'https://img1.360buyimg.com/da/jfs/t7327/335/454602385/98025/b932ffad/5993a56eN9c69e186.jpg' },
    { img: 'https://img1.360buyimg.com/da/jfs/t7528/68/508436321/82229/77b609e2/5993fc05N60097f1b.jpg' },
    { img: 'https://img1.360buyimg.com/da/jfs/t5905/5/8490456013/201515/7003241c/59897db9N2e5b7a1d.jpg' },
    { img: 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5980/206/7949022704/142882/36a2fa76/5982fc54N811efe24.jpg!q70.jpg' },
    { img: 'https://img1.360buyimg.com/da/jfs/t7441/40/549890588/101422/1b5a76d9/5994500aN390cfafe.jpg' },
    { img: 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5923/95/9003534526/147037/91c49b47/598d2ad7Ne05bde18.jpg!q70.jpg' },
    { img: 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t7153/242/1152176614/126753/7a03faf3/59885048Nea9b7450.jpg!q70.jpg' },
    { img: 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t6832/97/2397554959/192781/193ccf9f/598bcca9N75954ab2.jpg!q70.jpg' }
  ];

export const menuButtonList =
  [
    {
      "title": "京东超市",
      "image": "https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png",
    },
    {
      "title": "全球购",
      "image": "https://m.360buyimg.com/mobilecms/s80x80_jfs/t3286/167/1907269933/15789/da204cbe/57d53f16Nf3431cbd.png",
    },
    {
      "title": "服装城",
      "image": "https://m.360buyimg.com/mobilecms/s80x80_jfs/t3208/285/1806438443/12227/e35aa8d/57d5407cN0d6adf20.png",
    },
    {
      "title": "京东生鲜",
      "image": "https://m.360buyimg.com/mobilecms/s80x80_jfs/t3079/222/1812395993/14681/29321e2c/57d54122N700d9c1b.png",
    },
    {
      "title": "京东到家",
      "image": "https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/294/1570684882/19292/8b63dd4d/582adfbcNf82877de.png",
    },
    {
      "title": "充值缴费",
      "image": "https://m.360buyimg.com/mobilecms/s80x80_jfs/t3118/92/1836879034/12255/981e942a/57d54204N32b71c87.png",
    },
    {
      "title": "惠赚钱",
      "image": "https://m.360buyimg.com/mobilecms/s80x80_jfs/t3424/278/301037516/11616/98748707/58096edbNcd05f66b.png",
    },
    {
      "title": "领券",
      "image": "https://m.360buyimg.com/mobilecms/s80x80_jfs/t2998/309/2273695416/11154/f4ae1409/57d542e9N71c56086.png",
    },
    {
      "title": "物流查询",
      "image": "https://m.360buyimg.com/mobilecms/s80x80_jfs/t3199/169/1818813995/12570/62402b0d/57d54364Needc47cd.png",
    },
    {
      "title": "领京豆",
      "image": "https://m.360buyimg.com/mobilecms/s126x126_jfs/t2758/175/4146829331/10078/d6a3aa98/57aacab9N98edf989.png",
    }
  ];

export const fastNewsList =
  [
    {
      "title": "菜鸟妈妈看过来，儿童水杯怎么选购",
      "status": "爆"
    },
    {
      "title": "联想笔记本1元秒，疯11重磅来袭",
      "status": "抢"
    },
    {
      "title": "为梦想全力以赴，是对年轻最好的答复,不让青春后悔，努力吧",
      "status": "热"
    }
  ];

export const secKillList =
  [
    {
      "price": "69",
      "saleprice": "79",
      "image": "https://m.360buyimg.com/mobilecms/s220x220_jfs/t5902/346/9795287200/456795/92b091ac/5996c3caNeb22e6cf.jpg!q70.jpg"
    },
    {
      "price": "739",
      "saleprice": "1400",
      "image": "https://m.360buyimg.com/mobilecms/s220x220_jfs/t6040/1/4394880767/83748/a7f8efd4/5963473dN1263113d.jpg!q70.jpg"
    },
    {
      "price": "2180",
      "saleprice": "2980",
      "image": "https://m.360buyimg.com/mobilecms/s220x220_jfs/t7567/309/361219979/231193/30195baa/59925d65N1232e886.jpg!q70.jpg"
    },
    {
      "price": "79",
      "saleprice": "189",
      "image": "https://m.360buyimg.com/mobilecms/s220x220_jfs/t5719/44/9719809227/281002/e54c3f37/5989d3c4N4723398d.jpg!q70.jpg"
    },
    {
      "price": "2999",
      "saleprice": "7999",
      "image": "https://m.360buyimg.com/mobilecms/s220x220_jfs/t4450/358/2230183257/239652/984ae0/58ec4e81N8179a85d.jpg!q70.jpg"
    },
    {
      "price": "14.8",
      "saleprice": "28",
      "image": "https://m.360buyimg.com/mobilecms/s220x220_jfs/t4612/6/2566815046/273928/e52a93e8/58f1e835N66cfea98.jpg!q70.jpg"
    },
    {
      "price": "142",
      "saleprice": "316",
      "image": "https://m.360buyimg.com/mobilecms/s220x220_jfs/t4510/309/3075745347/215485/5581c2f2/58f5d9e3N6906e4fc.jpg!q70.jpg"
    },
    {
      "price": "499",
      "saleprice": "938",
      "image": "https://m.360buyimg.com/mobilecms/s220x220_jfs/t3154/30/4668573126/228804/a0346780/58510ae2N5e4e6ee0.jpg!q70.jpg"
    },
    {
      "price": "399",
      "saleprice": "999",
      "image": "https://m.360buyimg.com/mobilecms/s220x220_jfs/t3829/89/1973550682/291661/6102e9e4/58478011N43640f44.jpg!q70.jpg"
    },
    {
      "price": "989",
      "saleprice": "1299",
      "image": "https://m.360buyimg.com/mobilecms/s220x220_jfs/t1765/276/1504523165/63106/b5324057/55f662fcN1acd6292.jpg!q70.jpg"
    }
  ];

  export const foundLiveList =
  [
    {
      "head": "发现好货",
      "subTitle": "发现品质生活",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t4510/155/2908643045/3935/9bcb4f7/58f42e5bNb54468ad.jpg!q70.jpg",
      "secondImage":"https://m.360buyimg.com/n1/jfs/t4462/87/2242841985/281432/803e74cf/58ec7b35N58351ebe.jpg!q70.jpg"
    },
    {
      "head": "会买专辑",
      "subTitle": "帮你买买买",
      "special":"",
      "image":"https://m.360buyimg.com/n1/jfs/t4489/7/3925110432/127806/bb0f79ad/59098b7fN66f109dc.jpg!q70.jpg",
      "secondImage":""
    },
    {
      "head": "京东精选",
      "subTitle": "用心呵护宝宝",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t5974/93/397949007/28464/7ad5e407/5927c459N2a8dd593.jpg!q70.jpg",
      "secondImage":""
    },
    {
      "head": "排行榜",
      "subTitle": "专属你的购物指南",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/s220x220_jfs/t4564/290/544288422/153264/2644e03c/58d1457dNdb0ddafb.jpg!q70.jpg",
      "secondImage":"https://m.360buyimg.com/mobilecms/s220x220_jfs/t5917/2/3045071016/213215/2b47569b/5948c394N5c7f7494.jpg!q70.jpg"
    },
    {
      "head": "新品首发",
      "subTitle": "OPPO特别版",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t5137/80/1620258323/3817/d2ca0058/5912cf51N20cf199b.jpg!q70.jpg",
      "secondImage":""
    },
    {
      "head": "闪购",
      "subTitle": "品牌限时特卖",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t5659/105/9262783744/9750/a8626146/5984734cN83138bfa.jpg!q70.jpg",
      "secondImage":""
    }
  ];

  export const loveLiveList =
  [
    {
      "head": "玩转3C",
      "subTitle": "8亿手机优惠券大放送",
      "special":"周末放假",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t4510/155/2908643045/3935/9bcb4f7/58f42e5bNb54468ad.jpg!q70.jpg",
      "secondImage":"https://m.360buyimg.com/mobilecms/jfs/t4714/264/2574832015/28060/665b4bd4/58f0afbbN8df02e1a.jpg!q70.jpg"
    },
    {
      "head": "京东家电",
      "subTitle": "周年优惠65‘电视3999抢",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t5227/14/2282553514/26046/f0db42cb/59194f50N9566d025.jpg!q70.jpg",
      "secondImage":"https://m.360buyimg.com/mobilecms/s220x220_jfs/t4678/15/3583772800/39334/5c01ba94/59000cf5N7363c564.jpg!q70.jpg"
    },
    {
      "head": "京东超市",
      "subTitle": "满99减50 买2免1",
      "special":"周末购便宜",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t6040/320/1778100950/33921/b7d575cf/5936bc51Nc643252e.jpg!q70.jpg",
      "secondImage":"https://m.360buyimg.com/mobilecms/s220x220_jfs/t3577/220/2008453266/358909/aca180e9/583e23deNbd2bd886.jpg!q70.jpg"
    },
    {
      "head": "爱家",
      "subTitle": "家居每日1元抢 厨具200-50",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t5941/128/8994580643/24841/677a2a1a/598c23c6N857def0e.jpg!q70.jpg",
      "secondImage":"https://m.360buyimg.com/mobilecms/s220x220_jfs/t4540/330/3494284653/475363/9df4c5cd/58fea23dNf6eb557b.jpg!q70.jpg"
    },
    {
      "head": "爱宝宝",
      "subTitle": "跨店2件8折",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t6166/359/363527116/32380/5ccdfa44/593e484dN963ccbaf.png!q70.jpg",
      "secondImage":""
    },
    {
      "head": "爱美丽",
      "subTitle": "神券200-188",
      "special":"买彩妆",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t5131/132/1506641483/8972/bc1edad8/591117b5Nf4cb97d0.jpg!q70.jpg",
      "secondImage":""
    },
    {
      "head": "爱吃",
      "subTitle": "百草味99-50",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t6253/183/767376802/23771/ae210f31/5944ca49Nb2539ea4.jpg!q70.jpg",
      "secondImage":""
    },
    {
      "head": "爱穿搭",
      "subTitle": "反季低至99",
      "special":"低至99",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t6844/338/2326076505/3363/6e807589/598b03ebN46bd0e81.jpg!q70.jpg",
      "secondImage":""
    }
  ];

  export const twoFirstImageList =
  [
    { img: 'https://m.360buyimg.com/mobilecms/jfs/t7969/1/9948956/64430/32ee9317/598dcce5Nf362e544.jpg!q70.jpg' },
    { img: 'https://img1.360buyimg.com/da/jfs/t5599/7/9644245577/99923/b07ae09a/598800bbN5d962c06.jpg' }
  ];

  export const twoSecondImageList =
  [
    { img: 'https://m.360buyimg.com/mobilecms/jfs/t6112/271/9420835391/68763/a444e9b/5993aadeN24ac0f48.jpg!q70.jpg' },
    { img: 'https://img1.360buyimg.com/da/jfs/t7900/34/293029846/37779/dcc22cc/59915cbcN3b18fd95.jpg' }
  ];
  
  export const leftMenuArray = 
  [
    {
      "title": "热门推荐",
      "selected":true
    },
     {
      "title": "京东超市",
      "selected":false
    }, {
      "title": "全球购",
      "selected":false
    }, {
      "title": "男装",
      "selected":false
    }, {
      "title": "女装",
      "selected":false
    }, {
      "title": "男鞋",
      "selected":false
    }, {
      "title": "女鞋",
      "selected":false
    }, {
      "title": "内衣配饰",
      "selected":false
    }, {
      "title": "箱包手袋",
      "selected":false
    }, {
      "title": "美妆个护",
      "selected":false
    }, {
      "title": "钟表珠宝",
      "selected":false
    }, {
      "title": "手机数码",
      "selected":false
    }, {
      "title": "电脑办公",
      "selected":false
    }, {
      "title": "家用电器",
      "selected":false
    }, {
      "title": "食品生鲜",
      "selected":false
    }, {
      "title": "酒水饮料",
      "selected":false
    }, {
      "title": "计生情趣",
      "selected":false
    },
    
  ];

  export const enjoyQualityList =
  [
    {
      "head": "全球尖货",
      "subTitle": "进口保健品",
      "special":"买3免1",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t5614/31/292041316/19365/40ae9a6/591e6d79Nf3003b62.jpg!q70.jpg",
      "secondImage":"https://m.360buyimg.com/mobilecms/jfs/t5623/263/9070131128/10329/d8684ae9/5982c60fNbd09eb4a.jpg!q70.jpg",
      "thirdImage":"https://m.360buyimg.com/mobile/s100x100_jfs/t4963/71/1471015167/5148/3635a4aa/58f0aa0eNe377b2c7.jpg"
    },
    {
      "head": "京东精选",
      "subTitle": "精选优质生活",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t7750/89/54832219/19315/edf11d1f/598e7d8eN96ccd7cf.jpg!q70.jpg",
      "secondImage":"https://m.360buyimg.com/mobilecms/jfs/t7792/87/58828937/14202/f90a3d14/598e7da2N6805d379.jpg!q70.jpg",
      "thirdImage":"https://m.360buyimg.com/mobilecms/jfs/t7390/309/58313646/17839/619591de/598e7decN027fb530.jpg!q70.jpg"
    },
    {
      "head": "京东体育",
      "subTitle": "潮流运动",
      "special":"Adidas超品日",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t5398/30/2534664804/40991/bae3998a/591bba83N68e6da33.jpg!q70.jpg",
      "secondImage":"https://m.360buyimg.com/mobile/s100x100_jfs/t3247/3/7916019827/9943/162c0b8c/58bcdbccN70c06c10.jpg",
      "thirdImage":"https://m.360buyimg.com/mobile/s100x100_jfs/t4087/305/688079276/12350/db4a6111/5859f336N1ea6c25f.jpg"
    },
    {
      "head": "奢品大牌",
      "subTitle": "大牌七夕购",
      "special":"买3免1",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t5965/108/8753607462/10895/756aaaf1/598b04d2N81da720c.jpg!q70.jpg",
      "secondImage":"https://m.360buyimg.com/n1/jfs/t2296/105/2923549483/56253/1f4f4737/5722d00aNe95627e5.jpg!q70.jpg",
      "thirdImage":"https://m.360buyimg.com/mobilecms/jfs/t6013/59/9572455883/7419/c3925c60/59957696N81f970d0.jpg!q70.jpg"
    },
    {
      "head": "环球时尚",
      "subTitle": "地址399",
      "special":"秀身材",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t5929/82/3453254297/9755/6346233/59523ed5Nafca88cb.jpg!q70.jpg",
      "secondImage":"",
      "thirdImage":""
    },
    {
      "head": "珠宝首饰",
      "subTitle": "七夕妻喜",
      "special":"周大福",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t6097/197/9475768067/14823/fed5f7a4/5992d48dNdf035a3e.jpg!q70.jpg",
      "secondImage":"",
      "thirdImage":""
    },
    {
      "head": "设计师",
      "subTitle": "潮流设计精选",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t6100/256/7723408015/12288/567f9043/598060aaN05be0673.jpg!q70.jpg",
      "secondImage":"",
      "thirdImage":""
    },
    {
      "head": "买手甄选",
      "subTitle": "户外消夏季",
      "special":"自营",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t6967/26/485171584/7295/c2b95531/5976eecdN85970df2.jpg!q70.jpg",
      "secondImage":"",
      "thirdImage":""
    }
  ];

  export const foundAndList =
  [
    {
      "head": "手机通讯",
      "subTitle": "是不是在找手机？",
      "special":"",
      "image":"https://img12.360buyimg.com/mobilecms/s220x220_jfs/t10165/119/370921696/402592/caf4a05e/59cda9aeNd3bcf902.jpg",
      "secondImage":"https://img11.360buyimg.com/mobilecms/s220x220_jfs/t6157/284/1655853472/314776/91431fa7/5955c6a1N0c69eab2.jpg",
      "thirdImage":"https://img10.360buyimg.com/mobilecms/s220x220_jfs/t6943/311/2156183263/141109/d6983fae/59897ddeN7b159d6f.jpg",
      "shopName":"vivo京东自营官方旗舰店"
    },
    {
      "head": "清洁用品",
      "subTitle": "家庭清洁请看这里",
      "special":"",
      "image":"https://img11.360buyimg.com/da/s386x260_jfs/t13750/15/544761968/41296/c38e8e73/5a0e5483N61524199.jpg!q90",
      "secondImage":"https://img20.360buyimg.com/da/s386x260_jfs/t13270/100/725454322/67218/17a0fdb0/5a122e02Nff6d7d36.jpg!q90",
      "thirdImage":"https://img11.360buyimg.com/da/s386x260_jfs/t5740/193/4142084405/53095/de516023/5948bb23N6da9eb71.jpg!q90",
      "shopName":"蓝月亮京东自营店"
    },
    {
      "head": "攻占高街时髦，经典小黑鞋打头阵",
      "subTitle": "",
      "special":"",
      "image":"https://img12.360buyimg.com/mobilecms/s220x220_jfs/t6091/284/3118766368/180889/56d87ace/594c8cffNdf67df78.jpg",
      "secondImage":"https://img13.360buyimg.com/mobilecms/s220x220_jfs/t12895/354/561854608/38253/4da6e623/5a0e2173N6ba3c030.jpg",
      "thirdImage":"",
      "rNum":"16"
    },
    {
      "head": "会按摩的平价洗衣机，洁净不伤衣",
      "subTitle": "",
      "special":"",
      "image":"https://img14.360buyimg.com/mobilecms/s220x220_jfs/t4195/316/2665598069/44160/22e73a82/58d48a81N864af70a.jpg",
      "secondImage":"https://img10.360buyimg.com/mobilecms/s220x220_jfs/t2986/330/2296781313/64049/d520957/57a2f64dN8f3883de.jpg",
      "thirdImage":"",
      "rNum":"20"
    }
  ];

  export const goShoppingList =
  [
    {
      "head": "电脑办公",
      "subTitle": "0元试用",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t5635/152/7666382974/9239/a9346c68/5971ffa0N65e17615.png!q70.jpg",
      "secondImage":"",
      "thirdImage":""
    },
    {
      "head": "时尚馆",
      "subTitle": "早秋心机裙装",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t7210/323/517300128/8867/9492097d/5994091eN914202d6.jpg!q70.jpg",
      "secondImage":"",
      "thirdImage":""
    },
    {
      "head": "大家电馆",
      "subTitle": "买5k送1999券",
      "special":"",
      "image":"https://m.360buyimg.com/n1/jfs/t3895/190/286401413/406955/fe674c5c/5847bb9aNd8b684fd.jpg!q70.jpg",
      "secondImage":"",
      "thirdImage":""
    },
    {
      "head": "礼品馆",
      "subTitle": "满减直降",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t6004/308/9558518671/24775/d297d0f3/5995779dN7f5f26c6.jpg!q70.jpg",
      "secondImage":"",
      "thirdImage":""
    },
    {
      "head": "买美妆",
      "subTitle": "好物买二免一",
      "special":"",
      "image":"https://m.360buyimg.com//mobilecms/s276x276_jfs/t1903/46/2566296866/145335/75ea7559/570ccf22N3f21a37f.jpg!q70.jpg",
      "secondImage":"",
      "thirdImage":""
    },
    {
      "head": "小家电馆",
      "subTitle": "2件8.5折",
      "special":"",
      "image":"https://m.360buyimg.com/n1/jfs/t4258/3/1961252490/141819/b34cf35f/58c9f736N4e611532.jpg!q70.jpg",
      "secondImage":"",
      "thirdImage":""
    },
    {
      "head": "手机数码",
      "subTitle": "一加5",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t7375/224/252198739/45708/c04c8a91/59911034Nd7c60d56.jpg!q70.jpg",
      "secondImage":"",
      "thirdImage":""
    },
    {
      "head": "奢品馆",
      "subTitle": "奢品上新季",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t3145/274/6089854963/6156/b8c15d28/5899a350N109dc152.jpg!q70.jpg",
      "secondImage":"",
      "thirdImage":""
    },
    {
      "head": "母婴馆",
      "subTitle": "满299减100",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t7873/113/314636375/8326/4ea2d394/59917216Nc5cf3e92.jpg!q70.jpg",
      "secondImage":"",
      "thirdImage":""
    },
    {
      "head": "医药城",
      "subTitle": "大牌直降",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/s220x220_jfs/t4312/293/3098835407/112476/5aac19b0/58da1185Ndade383d.jpg!q70.jpg",
      "secondImage":"",
      "thirdImage":""
    },
    {
      "head": "医药保健",
      "subTitle": "大牌直降",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/jfs/t6076/71/8812913950/10523/1cb08444/598d6a2dNc7d4d85c.jpg!q70.jpg",
      "secondImage":"",
      "thirdImage":""
    },
    {
      "head": "运动户外",
      "subTitle": "满199减20",
      "special":"",
      "image":"https://m.360buyimg.com/mobilecms/s220x220_jfs/t2977/220/2244241394/124740/a6df12ed/57a30231N3250a1ab.jpg!q70.jpg",
      "secondImage":"",
      "thirdImage":""
    }
  ];



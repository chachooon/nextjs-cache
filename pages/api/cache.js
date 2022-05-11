
export default async function handler(req, res) {
    try {
  
      await new Promise((resolve) => setTimeout(resolve, 1000));
 
      // if(req.method === 'POST') {
      res.setHeader("Cache-Control", "public, max-age=5, immutable");
      res.setHeader("X-Cache", "MISS");

      if(req.query['category'] === '1' || req.body['category'] === '1' ) {
        res.status(200).json([
            {
                "productCode": "IS091035",
                "productName": "한화생명 평생동행 종신보험2204(무)[보증비용부과형]",
                "productDescription": "나와 우리가족의 행복을 위해 준비하는 종신보험",
                "productCategory": "1",
                "idx": 6200,
                "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS091035",
                "purpose": "노후생활보장",
                "channelType": "homepage",
                "new": true,
                "hit": false
            },
            {
                "productCode": "IS091040",
                "productName": "한화생명 암변액유니버셜종신보험2202(무)",
                "productDescription": "사망도 암도 같이 준비하는 변액종신보험",
                "productCategory": "1",
                "idx": 6203,
                "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS091040",
                "purpose": "중대질병",
                "channelType": "homepage",
                "new": true,
                "hit": false
            },
            {
                "productCode": "IS091039",
                "productName": "한화생명 The특별한 변액유니버셜종신보험2202(무)",
                "productDescription": "차곡차곡 쌓아서 보장받는 든든한 변액종신보험",
                "productCategory": "1",
                "idx": 6202,
                "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS091039",
                "purpose": "가족생활보장",
                "channelType": "homepage",
                "new": true,
                "hit": false
            },
            {
                "productCode": "IS091015",
                "productName": "한화생명 누구나필요한 수술비종신보험2202(무)",
                "productDescription": "암, 뇌, 심장 등 종합적으로 보장받는 수술비 종신보험",
                "productCategory": "1",
                "idx": 5186,
                "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS091015",
                "purpose": "진단/치료",
                "channelType": "homepage",
                "new": false,
                "hit": false
            },
            {
                "productCode": "IS091001",
                "productName": "한화생명 The스마트한 통합종신보험2204(무)[보증비용부과형]",
                "productDescription": "갑작스러운 소득상실 보전을 위해 사망보험금이 지급되는 종신보험",
                "productCategory": "1",
                "idx": 1160,
                "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS091001",
                "purpose": "가족생활보장",
                "channelType": "homepage",
                "new": false,
                "hit": false
            },
            {
                "productCode": "IS091010 ",
                "productName": "한화생명 실속플러스 GI보험2204(무)",
                "productDescription": "부담은 줄이고 실속은 챙기는 종합보장보험",
                "productCategory": "1",
                "idx": 3183,
                "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS091010",
                "purpose": "진단/치료",
                "channelType": "homepage",
                "new": false,
                "hit": true
            },
            {
                "productCode": "IS091024",
                "productName": "한화생명 간편가입 평생동행 종신보험2204(무)[보증비용부과형]",
                "productDescription": "간편심사로 준비하는 나와 우리가족을 위한 종신보험",
                "productCategory": "1",
                "idx": 6192,
                "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS091024",
                "purpose": "가족생활보장",
                "channelType": "homepage",
                "new": false,
                "hit": true
            },
            {
                "productCode": "IS091026",
                "productName": "한화생명 간편가입 누구나필요한 수술비종신보험2202(무)",
                "productDescription": "질병에 따라 수술방식에 따라 선택하는 수술비보험",
                "productCategory": "1",
                "idx": 6193,
                "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS091026",
                "purpose": "진단/치료",
                "channelType": "homepage",
                "new": false,
                "hit": false
            }
        ]);  
      }
      if(req.query['category'] === '3'|| req.body['category'] === '3') {
          res.status(200).json([
              {
                  "productCode": "IS095025",
                  "productName": "한화생명 암보장 더한 치매보험2204(무)",
                  "productDescription": "암과 치매를 한 번에 준비하는 보장보험",
                  "productCategory": "3",
                  "idx": 6201,
                  "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS095025",
                  "purpose": "노후생활보장",
                  "channelType": "homepage",
                  "new": true,
                  "hit": false
              },
              {
                  "productCode": "IS095027",
                  "productName": "한화생명 시그니처 암보험(무)",
                  "productDescription": "나를 위해 알차게 준비하는 암보장보험",
                  "productCategory": "3",
                  "idx": 7200,
                  "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS095027",
                  "purpose": "중대질병",
                  "channelType": "homepage",
                  "new": true,
                  "hit": false
              },
              {
                  "productCode": "IS095019",
                  "productName": "한화생명 누구나필요한 수술비건강보험(갱신형)2202(무)",
                  "productDescription": "질병에 따라 수술형태에 따라 선택하여 보장받는 수술비보장보험",
                  "productCategory": "3",
                  "idx": 5185,
                  "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS095019",
                  "purpose": "진단/치료",
                  "channelType": "homepage",
                  "new": false,
                  "hit": false
              },
              {
                  "productCode": "IS095008",
                  "productName": "한화생명 간편가입 꼭맞춤 보장보험(갱신형)2204(무)",
                  "productDescription": "소외될 수 있는 유병력자 및 고령자를 위한 전용보장보험",
                  "productCategory": "3",
                  "idx": 2167,
                  "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS095008",
                  "purpose": "진단/치료",
                  "channelType": "homepage",
                  "new": false,
                  "hit": true
              },
              {
                  "productCode": "IS095011",
                  "productName": "한화생명 꼭맞춤 보장보험2204(무)",
                  "productDescription": "나에게 필요한 특약을 골라담아 보장 받는 건강보험",
                  "productCategory": "3",
                  "idx": 3182,
                  "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS095011",
                  "purpose": "진단/치료",
                  "channelType": "homepage",
                  "new": false,
                  "hit": false
              },
              {
                  "productCode": "IS095023",
                  "productName": "한화생명 간편가입 누구나필요한 수술비건강보험(갱신형)2202(무)",
                  "productDescription": "질병에 따라 수술형태에 따라 선택하여 보장받는 수술비보장보험",
                  "productCategory": "3",
                  "idx": 6190,
                  "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS095023",
                  "purpose": "진단/치료",
                  "channelType": "homepage",
                  "new": false,
                  "hit": true
              },
              {
                  "productCode": "IS095010",
                  "productName": "한화생명 한큐가입 간편건강보험(갱신형)2204(무)",
                  "productDescription": "하나의 질문으로 가입 가능한 3대질병 보장보험",
                  "productCategory": "3",
                  "idx": 3176,
                  "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS095010",
                  "purpose": "진단/치료",
                  "channelType": "homepage",
                  "new": false,
                  "hit": true
              },
              {
                  "productCode": "IS095014",
                  "productName": "한화생명 스마일치아보험(갱신형)(무)",
                  "productDescription": "2015년 20887천명, 2016년 21548천명, 2017년 22597천명, 2018년 22911천명, 2019년 24048천명. 자료출처는 보건의료빅데이터개방시스템 건강보험진료통계 2019.",
                  "productCategory": "3",
                  "idx": 3188,
                  "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS095014",
                  "purpose": "진단/치료",
                  "channelType": "homepage",
                  "new": false,
                  "hit": false
              }
          ])
      }
      if(req.query['category'] === '4'|| req.body['category'] === '4') {
          res.status(200).json([
              {
                  "productCode": "IS095009",
                  "productName": "LIFEPLUS 어른이보험2204(무)",
                  "productDescription": "사고 및 질병으로부터 대비하여 보장받는 어린이보험",
                  "productCategory": "4",
                  "idx": 3179,
                  "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS095009",
                  "purpose": "진단/치료",
                  "channelType": "homepage",
                  "new": false,
                  "hit": true
              }
          ])  
      }     
      if(req.query['category'] === '5'|| req.body['category'] === '5') {
          res.status(200).json([
              {
                  "productCode": "IS090405",
                  "productName": "한화생명 내게맞는 연금보험(무)",
                  "productDescription": "기본 연금보장은 물론 특약으로 사망보장도 받는 연금보험",
                  "productCategory": "5",
                  "idx": 88,
                  "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS090405",
                  "purpose": "노후생활보장",
                  "channelType": "homepage",
                  "new": false,
                  "hit": true
              },
              {
                  "productCode": "IS030500",
                  "productName": "한화생명 연금저축 하이드림연금보험2204",
                  "productDescription": "세액공제·연복리·납입유예 혜택이 있는 1석 3조 연금보험\r\n",
                  "productCategory": "5",
                  "idx": 22,
                  "detailLink": "https://qam.hanwhalife.com/mobile/insurance/product/IN_SM00000_P20000.do?catecode=IS030500",
                  "purpose": "노후생활보장",
                  "channelType": "homepage",
                  "new": false,
                  "hit": true
              }
          ])  
      }
      if(!req.query['category']) {
        res.status(200).json([
          {
              "menuCategory": "1",
              "menuName": "종신/정기"
          },
          {
              "menuCategory": "3",
              "menuName": "건강/상해"
          },
          {
              "menuCategory": "4",
              "menuName": "어린이"
          },
          {
              "menuCategory": "5",
              "menuName": "연금/저축"
          }
        ]);
      }
  
    } catch (err) {
      res.status(500).json({ error: "Server error" });
    }
  }
  
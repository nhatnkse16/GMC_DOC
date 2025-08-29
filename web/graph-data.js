// Sơ đồ: mỗi phần là 1 node, edges thể hiện liên quan chính
// Layout thủ công dạng lưới để dễ quan sát; có thể tinh chỉnh toạ độ nếu muốn

const NODES = [
  { id: 1,  file: '01_Google_Ads_Playbook_Overview.md',                title: 'Tổng quan',                            group: 'Overview',   x: 140, y: 80 },
  { id: 2,  file: '02_Part_01_TOF_Machine.md',                         title: 'TOF Machine',                        group: 'Funnel',     x: 340, y: 80 },
  { id: 3,  file: '03_Part_02_YouTube_Ads_Takeover.md',                title: 'YouTube Ads',                        group: 'YouTube',    x: 540, y: 80 },
  { id: 4,  file: '04_Part_03_Google_Shopping_Ads.md',                 title: 'Shopping Ads',                       group: 'Shopping',   x: 740, y: 80 },
  { id: 5,  file: '05_Part_04_Display_Ads_Strategy.md',                title: 'Display Strategy',                   group: 'Display',    x: 940, y: 80 },
  { id: 6,  file: '06_Part_05_Search_Campaigns.md',                    title: 'Search Campaigns',                   group: 'Search',     x: 1140, y: 80 },
  { id: 7,  file: '07_Part_06_Non_Brand_Scale.md',                     title: 'Non‑Brand Scale',                    group: 'NonBrand',   x: 140, y: 180 },
  { id: 8,  file: '08_Part_07_Brand_Campaigns.md',                     title: 'Brand Campaigns',                    group: 'Brand',      x: 340, y: 180 },
  { id: 9,  file: '09_Part_08_Remarketing_Strategy.md',                title: 'Remarketing',                        group: 'Strategy',   x: 540, y: 180 },
  { id: 10, file: '10_Part_09_Keyword_Research.md',                    title: 'Keyword Research',                   group: 'Search',     x: 740, y: 180 },
  { id: 11, file: '11_Part_10_Ad_Copy_Optimization.md',                title: 'Ad Copy',                            group: 'Copy',       x: 940, y: 180 },
  { id: 12, file: '12_Part_11_Landing_Page_Optimization.md',           title: 'Landing Page',                      group: 'Landing',    x: 1140, y: 180 },
  { id: 13, file: '13_Part_12_Bidding_Strategies.md',                  title: 'Bidding',                            group: 'Bidding',    x: 140, y: 280 },
  { id: 14, file: '14_Part_13_ChatGPT_4_Prompts.md',                   title: 'ChatGPT‑4 Prompts',                  group: 'AI',         x: 340, y: 280 },
  { id: 15, file: '15_Part_14_AI_Tools_Integration.md',                title: 'AI Tools',                           group: 'AI',         x: 540, y: 280 },
  { id: 16, file: '16_Part_15_Feed_Optimization.md',                   title: 'Feed Optimization',                  group: 'Shopping',   x: 740, y: 280 },
  { id: 17, file: '17_Part_17_How_Google_Ads_Works_2024.md',          title: 'How Google Ads Works',               group: 'System',     x: 940, y: 280 },
  { id: 18, file: '18_Part_17_Conversion_Tracking.md',                 title: 'Conversion Tracking',                group: 'Tracking',   x: 1140, y: 280 },
  { id: 19, file: '19_Part_18_Analytics_Setup.md',                     title: 'Analytics Setup',                    group: 'Analytics',  x: 140, y: 380 },
  { id: 20, file: '20_Part_19_Performance_Monitoring.md',              title: 'Performance Monitor',                group: 'Monitoring', x: 340, y: 380 },
  { id: 21, file: '21_Part_20_Budget_Management.md',                   title: 'Budget Management',                  group: 'Finance',    x: 540, y: 380 },
  { id: 22, file: '22_Part_21_Quality_Score_Optimization.md',          title: 'Quality Score',                     group: 'Search',     x: 740, y: 380 },
  { id: 23, file: '23_Part_22_Negative_Keywords.md',                   title: 'Negative Keywords',                 group: 'Search',     x: 940, y: 380 },
  { id: 24, file: '24_Part_23_Ad_Extensions.md',                       title: 'Ad Extensions',                     group: 'Search',     x: 1140, y: 380 },
  { id: 25, file: '25_Part_24_Responsive_Search_Ads.md',               title: 'Responsive Search',                  group: 'Search',     x: 140, y: 480 },
  { id: 26, file: '26_Part_25_Smart_Bidding.md',                       title: 'Smart Bidding',                     group: 'Bidding',    x: 340, y: 480 },
  { id: 27, file: '27_Part_26_Audience_Targeting.md',                  title: 'Audience Targeting',                 group: 'Targeting',  x: 540, y: 480 },
  { id: 28, file: '28_Part_27_Geographic_Targeting.md',                title: 'Geographic',                         group: 'Targeting',  x: 740, y: 480 },
  { id: 29, file: '29_Part_28_Device_Targeting.md',                    title: 'Device Targeting',                   group: 'Targeting',  x: 940, y: 480 },
  { id: 30, file: '30_Part_29_Time_Targeting.md',                      title: 'Time Targeting',                     group: 'Targeting',  x: 1140, y: 480 },
  { id: 31, file: '31_Part_30_Competitor_Analysis.md',                 title: 'Competitor Analysis',                group: 'Strategy',   x: 140, y: 580 },
  { id: 32, file: '32_Part_31_Creative_Testing.md',                    title: 'Creative Testing',                   group: 'Creative',   x: 340, y: 580 },
  { id: 33, file: '33_Part_32_Campaign_Types.md',                      title: 'Campaign Types',                     group: 'Strategy',   x: 540, y: 580 },
  { id: 34, file: '34_Part_33_Copy_Research.md',                       title: 'Copy Research',                      group: 'Copy',       x: 740, y: 580 },
  { id: 35, file: '35_Part_34_Landing_Page_Research.md',               title: 'Landing Research',                   group: 'Landing',    x: 940, y: 580 },
  { id: 36, file: '36_Part_35_Automation_Tools.md',                    title: 'Automation Tools',                   group: 'Tools',      x: 1140, y: 580 },
  { id: 37, file: '37_Part_36_Reporting_Dashboard.md',                 title: 'Reporting',                          group: 'Reporting',  x: 140, y: 680 },
  { id: 38, file: '38_Part_37_Data_Analysis.md',                       title: 'Data Analysis',                      group: 'Analytics',  x: 340, y: 680 },
  { id: 39, file: '39_Part_38_Scaling_Strategies.md',                  title: 'Scaling Strategies',                 group: 'Strategy',   x: 540, y: 680 },
  { id: 40, file: '40_Part_39_Performance_Optimization.md',            title: 'Performance Opt',                   group: 'Optimization', x: 740, y: 680 },
  { id: 41, file: '41_Part_40_Cost_Management.md',                     title: 'Cost Management',                    group: 'Finance',    x: 940, y: 680 },
  { id: 42, file: '42_Part_41_Conversion_Optimization.md',             title: 'Conversion Opt',                    group: 'Optimization', x: 1140, y: 680 },
  { id: 43, file: '43_Part_42_Revenue_Optimization.md',                title: 'Revenue Opt',                        group: 'Optimization', x: 140, y: 780 },
  { id: 44, file: '44_Part_43_Profit_Optimization.md',                 title: 'Profit Opt',                         group: 'Optimization', x: 340, y: 780 },
  { id: 45, file: '45_Part_44_Scaling_Challenges.md',                  title: 'Scaling Challenges',                 group: 'Strategy',   x: 540, y: 780 },
  { id: 46, file: '46_Part_45_Advanced_Strategies.md',                 title: 'Advanced Strategies',                group: 'Strategy',   x: 740, y: 780 },
  { id: 47, file: '47_Part_47_Future_Trends.md',                       title: 'Future Trends',                      group: 'Strategy',   x: 940, y: 780 },
  { id: 48, file: '48_Part_48_Non_Brand_Scaling_Final.md',             title: 'Non-Brand Final',                    group: 'NonBrand',   x: 1140, y: 780 },
  { id: 49, file: '49_Part_49_Implementation_Guide.md',                title: 'Implementation',                     group: 'Guide',      x: 640, y: 860 }
]

// Mối quan hệ: 1) tuyến tính theo trình tự học 2) theo cụm chủ đề
const EDGES = [
  // Tuyến tính (rút gọn, nối qua các mốc chính để đỡ rối)
  { from: 1,  to: 2,  label: 'Bắt đầu hành trình' },
  { from: 2,  to: 6,  label: 'TOF → Keyword' },
  { from: 6,  to: 10, label: 'Keyword → Bidding' },
  { from: 10, to: 13, label: 'Chiến lược kênh' },
  { from: 13, to: 17, label: 'Hiểu hệ thống' },
  { from: 17, to: 19, label: 'Tối đa giá trị' },
  { from: 19, to: 22, label: 'Data vận hành' },
  { from: 22, to: 23, label: 'Shopping nâng cao' },
  { from: 23, to: 27, label: 'Báo cáo/Quyết định' },
  { from: 27, to: 33, label: 'Kiến trúc campaign' },
  { from: 33, to: 36, label: 'Tối ưu LP' },
  { from: 36, to: 37, label: 'QS & Search' },
  { from: 37, to: 46, label: 'Non‑brand scale' },
  { from: 46, to: 49, label: 'Kết thúc lộ trình' },

  // Cụm YouTube
  { from: 3,  to: 8,  label: 'Shorts mở TOF' },
  { from: 8,  to: 12, label: 'Hệ thống hoá hook' },
  { from: 12, to: 32, label: 'Mastery' },
  { from: 32, to: 35, label: 'Sản xuất & đo lường' },
  { from: 35, to: 39, label: 'Roadmap scale' },

  // Cụm Shopping
  { from: 5,  to: 23, label: 'Feed → tối ưu' },
  { from: 23, to: 25, label: 'Bonus nâng cao' },
  { from: 25, to: 28, label: 'Mở rộng Shopping' },
  { from: 28, to: 29, label: 'Merchant Centre' },
  { from: 29, to: 48, label: 'Khắc phục sự cố' },

  // Cụm Search/Bidding/QS
  { from: 6,  to: 9,  label: 'Copy bám intent' },
  { from: 9,  to: 10, label: 'Copy ảnh hưởng QS' },
  { from: 10, to: 18, label: 'Giảm CPC' },
  { from: 18, to: 37, label: 'QS cải thiện CPC' },
  { from: 47, to: 10, label: 'Auction → điều chỉnh bid' },

  // Cụm AI/Data/Reporting
  { from: 11, to: 14, label: 'AI nội dung' },
  { from: 14, to: 20, label: 'Plug‑ins tăng tốc' },
  { from: 24, to: 26, label: 'AI/ML nâng cao' },
  { from: 27, to: 43, label: 'Trọng tâm báo cáo' },
  { from: 43, to: 44, label: 'Vận hành tuần/tháng' },

  // Non‑brand & Scale
  { from: 7,  to: 46, label: 'Non‑brand nền tảng' },
  { from: 46, to: 49, label: 'Final Playbook' },
];

// Nguồn tham khảo chung (có thể bổ sung thêm)
const SOURCES = [
  { label: 'ECHELONN.IO GOOGLE ADS PLAYBOOK', url: 'https://bustling-literature-951.notion.site/ECHELONN-IO-GOOGLE-ADS-PLAYBOOK-106c537aac0042db9df0986b9f9521ca' }
];

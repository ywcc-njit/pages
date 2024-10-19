const students = [
    {
        name: 'A M Muntasir Rahman',
        email: 'ar238@njit.edu',
        webpage: 'https://sites.google.com/njit.edu/ammuntasirrahman/',
        linkedin: 'https://www.linkedin.com/in/a-m-muntasir-rahman/',
        scholar: 'https://scholar.google.com/citations?user=_inhYXAAAAAJ&hl=en'
    },
    {
        name: 'Ahmad Alemari',
        email: 'aaa376@njit.edu',
        linkedin: 'https://www.linkedin.com/in/ahmad-alemari-927661121/'
    },
    {
        name: 'Akhitha S. Manjitha',
        email: 'asm277@njit.edu',
        webpage: 'https://asmanjitha.github.io/Akhitha_Manjitha/',
        linkedin: 'https://www.linkedin.com/in/asmanjitha',
        github: 'https://github.com/asmanjitha'
    },
    {
        name: 'Arash Moradi-Karkaj',
        email: 'am3493@njit.edu',
        linkedin: 'https://www.linkedin.com/in/moradiarash/',
        github: 'https://github.com/thearash',
        scholar: 'https://scholar.google.com/citations?hl=en&user=GNJwTSMAAAAJ'
    },
    {
        name: 'Cong Qi',
        email: 'cq5@njit.edu',
        linkedin: 'https://www.linkedin.com/feed/',
        github: 'https://github.com/MineSelf2016',
        scholar: 'https://scholar.google.com/citations?user=r3schCwAAAAJ'
    },
    {
        name: 'Danzel Serrano',
        email: 'ds867@njit.edu',
        linkedin: 'https://www.linkedin.com/in/danzel-serrano-542870181',
        github: 'https://github.com/dependanz',
        scholar: 'https://scholar.google.com/citations?user=L44bua4AAAAJ'
    },
    {
        name: 'Erica Zhou',
        email: 'sz23@njit.edu',
        webpage: 'https://ericass.github.io',
        linkedin: 'https://www.linkedin.com/in/shuxin-erica-z-a98b8a73/',
        scholar: 'https://scholar.google.com/citations?user=Gowiv4oAAAAJ&hl=en&authuser=1'
    },
    {
        name: 'Fan Yang',
        email: 'fy34@njit.edu',
        webpage: 'https://yangegp.github.io/'
    },
    {
        name: 'Fatemeh Ramezani Khozestani',
        email: 'fr46@njit.edu',
        linkedin: 'http://linkedin.com/in/fatemehramezanikhozestani'
    },
    {
        name: 'Genwei Zhang',
        email: 'gz6@njit.edu',
        webpage: 'https://genwei-zhang.github.io/resume/',
        linkedin: 'https://www.linkedin.com/in/genwei-zhang-4736b61a0/',
        github: 'https://github.com/Genwei-Zhang',
        scholar: 'https://scholar.google.com/citations?user=_B56DB4AAAAJ&hl=en'
    },
    {
        name: 'Haiyan Zhao',
        email: 'hz54@njit.edu',
        webpage: 'https://hy-zhao23.github.io/',
        github: 'https://github.com/hy-zhao23',
        scholar: 'https://scholar.google.com/citations?user=9FobigIAAAAJ&hl=en'
    },
    {
        name: 'Hamideh Sabaei',
        email: 'hs833@njit.edu'
    },
    {
        name: 'Jiayi Chen (Derek) ',
        email: 'jc2693@njit.edu',
        linkedin: 'https://www.linkedin.com/in/jiayic/',
        github: 'https://github.com/jiayiderekchen'
    },
    {
        name: 'Jingyi Gu',
        email: 'jg95@njit.edu',
        webpage: 'https://jingyigu.github.io/homepage.github.io//',
        linkedin: 'https://www.linkedin.com/in/jingyi-gu/',
        github: 'https://github.com/JingyiGu',
        scholar: 'https://scholar.google.com/citations?user=rZOW2IEAAAAJ&hl=en'
    },
    {
        name: 'Muhid Hassan Risvy',
        email: 'mr2229@njit.edu',
        webpage: 'https://risvy.github.io//',
        linkedin: 'https://www.linkedin.com/in/muhid-hassan-risvy-16895a198/',
        github: 'https://github.com/Risvy',
        scholar: 'https://scholar.google.com/citations?hl=en&user=9tYrjh8AAAAJ'
    },
    {
        name: 'Muyeed Ahmed',
        email: 'ma234@njit.edu',
        linkedin: 'https://www.linkedin.com/in/muyeed-ahmed/',
        github: 'https://github.com/MuyeedAhmed',
        scholar: 'https://scholar.google.com/citations?user=YBPPO0gAAAAJ&hl=en'
    },
    {
        name: 'Oliver Alvarado Rodriguez',
        email: 'oaa9@njit.edu',
        linkedin: 'https://www.linkedin.com/in/oliver-alvarado-rod/',
        github: 'https://github.com/alvaradoo',
        scholar: 'https://scholar.google.com/citations?user=dV5vV3gAAAAJ&hl=en'
    },
    {
        name: 'Qiufan Ji',
        email: 'qj39@njit.edu',
        github: 'https://github.com/qiufan319',
        scholar: 'https://scholar.google.com/citations?hl=en&user=EVKeaCEAAAAJ'
    },
    {
        name: 'Sabbir Ahmed Saqlain',
        email: 'ss4738@njit.edu',
        webpage: 'https://sabbirahmedsaqlain.github.io',
        linkedin: 'https://www.linkedin.com/in/sabbir-ahmed-saqlain/',
        github: 'https://github.com/SabbirAhmedSaqlain',
        scholar: 'https://scholar.google.com/citations?user=9C9dTI4AAAAJ'
    },
    {
        name: 'Sohrab Namazi Nia',
        email: 'sn773@njit.edu',
        linkedin: 'https://www.linkedin.com/in/sohrabnamazinia',
        github: 'https://github.com/sohrabnamazinia',
        scholar: 'https://scholar.google.com/citations?hl=en&user=6S4ilWIAAAAJ'
    },
    {
        name: 'Soroush Vahidi',
        email: 'sv96@njit.edu',
        linkedin: 'https://www.linkedin.com/in/soroush-vahidi/',
        github: 'https://github.com/SoroushVahidi',
        scholar: 'https://scholar.google.com/citations?user=GNk1ajUAAAAJ&hl=en'
    },
    {
        name: 'Subhodeep Ghosh',
        email: 'sg2646@njit.edu',
        github: 'https://github.com/Subhodeep01',
        scholar: 'https://scholar.google.com/citations?user=bw2cW1UAAAAJ&hl=en'
    },
    {
        name: 'Suraj K. Ojha',
        email: 'so299@njit.edu',
        linkedin: 'https://www.linkedin.com/in/suraj-ojha/?originalSubdomain=np',
        github: 'https://github.com/Suraez'
    },
    {
        name: 'Swastik Biswas',
        email: 'sb2785@njit.edu',
        linkedin: 'https://www.linkedin.com/in/swastikbiswas/',
        github: 'https://github.com/Swastik1993'
    },
    {
        name: 'Tapan Basak',
        email: 'tb358@njit.edu',
        linkedin: 'https://www.linkedin.com/tapanbasak12',
        github: 'https://github.com/tapanbasak12'
    },
    {
        name: 'Xinyun Zhao',
        email: 'xz43@njit.edu',
        linkedin: 'https://www.linkedin.com/in/xinyun-zhao-salakri/',
        github: 'https://github.com/Salakri'
    },
    {
        name: 'Yeqing Chen',
        email: 'yc598@njit.edu',
        scholar: 'https://scholar.google.com/citations?user=26nuDHUAAAAJ'
    },
    {
        name: 'Yucong Shen',
        email: 'ys496@njit.edu',
        webpage: 'https://sites.google.com/view/yucongshen',
        scholar: 'https://scholar.google.com/citations?user=qCtfvm0AAAAJ&hl=en'
    },
    {
        name: 'Ali Parviz',
        email: 'ap2248@njit.edu'
    },
    {
        name: 'Alireza Ardalani',
        email: 'aa3564@njit.edu'
    },
    {
        name: 'Anik Pramanik',
        email: 'ap2645@njit.edu'
    },
    {
        name: 'Ankan Dash',
        email: 'ad892@njit.edu'
    },
    {
        name: 'Azadeh Naderi',
        email: 'an57@njit.edu'
    },
    {
        name: 'Chengyu Yang',
        email: 'cy322@njit.edu'
    },
    {
        name: 'Chenxi Hou',
        email: 'ch395@njit.edu'
    },
    {
        name: 'Ching-Hao Fan',
        email: 'cf322@njit.edu'
    },
    {
        name: 'Chun Jie Chong',
        email: 'cc255@njit.edu'
    },
    {
        name: 'Chunhui Xu',
        email: 'cx4@njit.edu'
    },
    {
        name: 'Craig Iaboni',
        email: 'csi3@njit.edu'
    },
    {
        name: 'Ehsan Beikihassan',
        email: 'eb283@njit.edu'
    },
    {
        name: 'Erfan Arvan',
        email: 'ea442@njit.edu'
    },
    {
        name: 'Erin Kenney',
        email: 'clk8@njit.edu'
    },
    {
        name: 'Fernando Vera Buschmann',
        email: 'fv54@njit.edu'
    },
    {
        name: 'Fuhuan Li',
        email: 'fl28@njit.edu'
    },
    {
        name: 'Glenn Merritt',
        email: 'gmm46@njit.edu'
    },
    {
        name: 'Hai An Tran',
        email: 'at738@njit.edu'
    },
    {
        name: 'Hanzhang Fang',
        email: 'hf78@njit.edu'
    },
    {
        name: 'Hao Xu',
        email: 'hx8@njit.edu'
    },
    {
        name: 'Hao Zhou',
        email: 'hz394@njit.edu'
    },
    {
        name: 'Haoran Liu',
        email: 'hl425@njit.edu'
    },
    {
        name: 'Haoshu Lu',
        email: 'hl58@njit.edu'
    },
    {
        name: 'Haotian Yin',
        email: 'hy9@njit.edu'
    },
    {
        name: 'Hongyang Zhang',
        email: 'hz372@njit.edu'
    },
    {
        name: 'Jialiang Li',
        email: 'jl2356@njit.edu'
    },
    {
        name: 'Jianlan Ren',
        email: 'jr689@njit.edu'
    },
    {
        name: 'Junyi Ye',
        email: 'jy394@njit.edu'
    },
    {
        name: 'Kazi Amanul Islam Siddiqui',
        email: 'ks225@njit.edu'
    },
    {
        name: 'Khoa Nguyen',
        email: 'nk569@njit.edu'
    },
    {
        name: 'Kim Thinh On',
        email: 'to58@njit.edu'
    },
    {
        name: 'Komal Kumari',
        email: 'kk675@njit.edu'
    },
    {
        name: 'Kuang Du',
        email: 'kd226@njit.edu'
    },
    {
        name: 'Le Gao',
        email: 'lg282@njit.edu'
    },
    {
        name: 'Mahshad Koohi Habibi Dehkordi',
        email: 'mk985@njit.edu'
    },
    {
        name: 'Mahya Samdaliri',
        email: 'ms3539@njit.edu'
    },
    {
        name: 'Mayooran Thavendra',
        email: 'mt658@njit.edu'
    },
    {
        name: 'Md Rakibul Hasan',
        email: 'mh629@njit.edu'
    },
    {
        name: 'Mehri RezaeiAliabadi',
        email: 'mr882@njit.edu'
    },
    {
        name: 'Mehtab Sidhu',
        email: 'mss87@njit.edu'
    },
    {
        name: 'Mohammad Dindoost',
        email: 'md724@njit.edu'
    },
    {
        name: 'Naidan Zhang',
        email: 'nz85@njit.edu'
    },
    {
        name: 'Naren Khatwani',
        email: 'nk88@njit.edu'
    },
    {
        name: 'Patrick O'Keefe',
        email: 'pmo6@njit.edu'
    },
    {
        name: 'Pritam Sen',
        email: 'ps37@njit.edu'
    },
    {
        name: 'Quijing Wang',
        email: 'qw26@njit.edu'
    },
    {
        name: 'Rikesh Niroula',
        email: 'rn382@njit.edu'
    },
    {
        name: 'Ryan Lee',
        email: 'rl293@njit.edu'
    },
    {
        name: 'Sha Cao',
        email: 'sc2772@njit.edu'
    },
    {
        name: 'Shameen Shrestha',
        email: 'ss5375@njit.edu'
    },
    {
        name: 'Shaoze Fan',
        email: 'sf392@njit.edu'
    },
    {
        name: 'Shen Fan',
        email: 'sf269@njit.edu'
    },
    {
        name: 'Siqi Jiang',
        email: 'sj225@njit.edu'
    },
    {
        name: 'Tianxing Hu',
        email: 'th367@njit.edu'
    },
    {
        name: 'Wei Yao',
        email: 'wy95@njit.edu'
    },
    {
        name: 'Xiaoliang Wu',
        email: 'xw54@njit.edu'
    },
    {
        name: 'Xuan Zhang',
        email: 'xz296@njit.edu'
    },
    {
        name: 'Xuxiang Zhang',
        email: 'xz445@njit.edu'
    },
    {
        name: 'Zhaoxin Yan',
        email: 'zy7@njit.edu'
    },
    {
        name: 'Zhenduo Wang',
        email: 'zw37@njit.edu'
    },
];

Vue.createApp({
    data() {
        return {
            nowList: '熱門影片',
            menuSw: false,
            isHttp: false,
            
            // 影片列表
            mvList: [],

            // 主要banner
            banner: {
                num: 0,
                val: [
                    { alt: "波多野結衣", url: "images/carousel/actor_01.webp", pos: "35%", },
                    { alt: "蜜美杏", url: "images/carousel/actor_02.webp", pos: "50%", },
                    { alt: "橋本ありな", url: "images/carousel/actor_03.webp", pos: "65%", },
                    { alt: "深田えいみ", url: "images/carousel/actor_04.webp", pos: "41%", },
                    { alt: "小早川怜子", url: "images/carousel/actor_05.webp", pos: "65%", },
                    { alt: "君島みお", url: "images/carousel/actor_06.webp", pos: "70%", },
                    { alt: "大槻ひびき", url: "images/carousel/actor_07.webp", pos: "55%", },
                    { alt: "松下紗栄子", url: "images/carousel/actor_08.webp", pos: "50%", },
                    { alt: "鄰家素人", url: "images/carousel/sort_01.webp", pos: "63%", },
                    { alt: "西洋歐美", url: "images/carousel/sort_02.webp", pos: "47%", },
                    { alt: "裏番動漫", url: "images/carousel/sort_03.webp", pos: "52%", },
                    { alt: "制服誘惑", url: "images/carousel/sort_04.webp", pos: "60%", },
                    { alt: "熟女人妻", url: "images/carousel/sort_05.webp", pos: "50%", }
                ]
            },

            // 選擇menu(演員)
            actor: [
                { name: "波多野結衣", selData: 0 },
                { name: "蜜美杏", selData: 1 },
                { name: "橋本ありな", selData: 2 },
                { name: "深田えいみ", selData: 3 },
                { name: "小早川怜子", selData: 4 },
                { name: "君島みお", selData: 5 },
                { name: "大槻ひびき", selData: 6 },
                { name: "松下紗栄子", selData: 7 }
            ],
            // 選擇menu(類別)
            sort: [
                { title: "鄰家素人", en: "Amateur", sub_01: "鄰家女孩", sub_02: "真實上演", selData: 8 },
                { title: "西洋歐美", en: "Western", sub_01: "異國之戀", sub_02: "金髮尤物", selData: 9 },
                { title: "裏番動漫", en: "Anime", sub_01: "最熱動漫", sub_02: "火速上線", selData: 10 },
                { title: "制服誘惑", en: "Uniform", sub_01: "理性慾望", sub_02: "相互對峙", selData: 11 },
                { title: "熟女人妻", en: "Milf & Wife", sub_01: "寂寞人妻", sub_02: "等你來愛", selData: 12 }
            ],

            // 連結按鈕
            linkBtn: [
                { href: 'https://www.june110.com', alt: 'LinkWeb line_1', src: 'images/download/dlBtn_01.webp' },
                { href: 'https://www.june111.com', alt: 'LinkWeb line_1', src: 'images/download/dlBtn_02.webp' },
                { href: 'https://www.june112.com', alt: 'LinkWeb line_1', src: 'images/download/dlBtn_03.webp' }
            ]
        }
    },
    methods: {
        // 返回背景style
        reBannerStyle(url, pos) {
            return `background-image: url(${url}); --bgpos:${pos};`;
        },
        rebgi(data) {
            return `background-image: url(${data})`;
        },
        // 創立影片
        createVod(style) {
            let tagVal = '';
            let sortType = '';
            let nowTitle = '熱門影片';
            // ==== 撈外部API ====
            // switch (style) {
            //     case 0: tagVal = '波多野結衣'; nowTitle = '波多野結衣'; break;
            //     case 1: tagVal = '蜜美杏'; nowTitle = '蜜美杏'; break;
            //     case 2: tagVal = '橋本ありな'; nowTitle = '橋本ありな'; break;
            //     case 3: tagVal = '深田えいみ'; nowTitle = '深田えいみ'; break;
            //     case 4: tagVal = '小早川怜子'; nowTitle = '小早川怜子'; break;
            //     case 5: tagVal = '君島みお'; nowTitle = '君島みお'; break;
            //     case 6: tagVal = '大槻ひびき'; nowTitle = '大槻ひびき'; break;
            //     case 7: tagVal = '松下紗栄子'; nowTitle = '松下紗栄子'; break;
            //     case 8: tagVal = '素人'; nowTitle = '鄰家素人'; break;
            //     case 9: sortType = '3'; nowTitle = '西洋歐美'; break;
            //     case 10: sortType = '4'; nowTitle = '裏番動漫'; break;
            //     case 11: tagVal = '制服'; nowTitle = '制服誘惑'; break;
            //     case 12: tagVal = '人妻'; nowTitle = '熟女人妻'; break;
            // }
            // axios.get("https://www.baline888.com/api.php/external/tagsel", { params: { key: "588THTUoI", tag: tagVal, type: sortType } }).then((r) => { this.mvList = r.data; this.nowList = nowTitle; });

            // ==== 撈內部json ====
            switch (style) {
                case 0: 
                    nowTitle = '波多野結衣'; 
                    axios.get("json/actor_01.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
                    break;
                case 1: 
                    nowTitle = '蜜美杏';
                    axios.get("json/actor_02.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
                    break;
                case 2: 
                    nowTitle = '橋本ありな'; 
                    axios.get("json/actor_03.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
                    break;
                case 3: 
                    nowTitle = '深田えいみ'; 
                    axios.get("json/actor_04.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
                    break;
                case 4: 
                    nowTitle = '小早川怜子'; 
                    axios.get("json/actor_05.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
                    break;
                case 5: 
                    nowTitle = '君島みお'; 
                    axios.get("json/actor_06.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
                    break;
                case 6: 
                    nowTitle = '大槻ひびき'; 
                    axios.get("json/actor_07.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
                    break;
                case 7: 
                    nowTitle = '松下紗栄子'; 
                    axios.get("json/actor_08.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
                    break;
                case 8: 
                    nowTitle = '鄰家素人'; 
                    axios.get("json/sort_01.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
                    break;
                case 9: 
                    nowTitle = '西洋歐美'; 
                    axios.get("json/sort_02.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
                    break;
                case 10: 
                    nowTitle = '裏番動漫'; 
                    axios.get("json/sort_03.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
                    break;
                case 11: 
                    nowTitle = '制服誘惑'; 
                    axios.get("json/sort_04.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
                    break;
                case 12: 
                    nowTitle = '熟女人妻'; 
                    axios.get("json/sort_05.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
                    break;
                default:
                    nowTitle = '熱門影片';
                    axios.get("json/home.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
                    break;
            }
        },
        // 綁定videojs
        showVod(idx) {
            this.$nextTick(() => {
                if (!this.isMobile()){
                    let vod = document.querySelectorAll(".video-js");
                    videojs(vod[idx]);
                }      
            })
        },
        // 移除videojs,並賦予原先的參數
        delVod(idx) {
            this.$nextTick(() => {
                if (!this.isMobile()){
                    let vod = document.querySelectorAll(".video-js");
                    videojs(vod[idx]).dispose();
                    let itemList = document.querySelectorAll('#mvList .mvItem');
                    let template = document.createElement('template');
                    template.innerHTML = `<video  class="video-js" preload='auto' webkit-playsinline="true" playsinline="true" x5-video-player-type='h5-page' autoplay loop muted>
                                    <source src="${this.mvList[idx].vod_play_url}" type="application/x-mpegURL">
                                    </video>`;
                    itemList[idx].appendChild(template.content.lastChild);
                }      
            })
        },
        // 判斷移動端
        isMobile() {
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
            var flag = false;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = true;
                    break;
                }
            }
            return flag;
        },

    },

    created() {
        if (document.location.protocol == 'https:') {
            let meta = document.createElement('meta');
            meta.content = 'upgrade-insecure-requests';
            meta.httpEquiv = 'Content-Security-Policy';
            document.getElementsByTagName('head')[0].appendChild(meta);
        }
        this.$nextTick(() => { this.createVod("index"); })
    },
    mounted() {
        window.onresize = () => { this.menuSw = false; }
    },
}).mount("#app");
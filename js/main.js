Vue.createApp({
    data() {
        return {
            nowList: '熱門影片',
            menuSw: false,
            blockade: false,
            mvBox_url:"--url:url(../images/other/bodyBg.webp)",
            mvList: [],
            banner : {},
            actor : [],
            sort : [],
            linkBtn : [],
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
        createVod(style){
            let tagVal = '';
            let sortType = '';
            let nowTitle = '熱門影片';
            // ==== 撈外部API ====
            switch (style) {
                case 0: tagVal = '波多野結衣'; nowTitle = '波多野結衣'; break;
                case 1: tagVal = '蜜美杏'; nowTitle = '蜜美杏'; break;
                case 2: tagVal = '橋本ありな'; nowTitle = '橋本ありな'; break;
                case 3: tagVal = '深田えいみ'; nowTitle = '深田えいみ'; break;
                case 4: tagVal = '小早川怜子'; nowTitle = '小早川怜子'; break;
                case 5: tagVal = '君島みお'; nowTitle = '君島みお'; break;
                case 6: tagVal = '大槻ひびき'; nowTitle = '大槻ひびき'; break;
                case 7: tagVal = '松下紗栄子'; nowTitle = '松下紗栄子'; break;
                case 8: tagVal = '素人'; nowTitle = '鄰家素人'; break;
                case 9: sortType = '3'; nowTitle = '西洋歐美'; break;
                case 10: sortType = '4'; nowTitle = '裏番動漫'; break;
                case 11: tagVal = '制服'; nowTitle = '制服誘惑'; break;
                case 12: tagVal = '人妻'; nowTitle = '熟女人妻'; break;
            }
            axios.get("https://funsgirl.cc/api.php/external/tagsel", { params: { key: "588THTUoI", tag: tagVal, type: sortType } }).then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
    
            // ==== 撈內部json ====
            // switch (style) {
            //     case 0: 
            //         nowTitle = '波多野結衣'; 
            //         axios.get("json/actor_01.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
            //         break;
            //     case 1: 
            //         nowTitle = '蜜美杏';
            //         axios.get("json/actor_02.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
            //         break;
            //     case 2: 
            //         nowTitle = '橋本ありな'; 
            //         axios.get("json/actor_03.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
            //         break;
            //     case 3: 
            //         nowTitle = '深田えいみ'; 
            //         axios.get("json/actor_04.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
            //         break;
            //     case 4: 
            //         nowTitle = '小早川怜子'; 
            //         axios.get("json/actor_05.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
            //         break;
            //     case 5: 
            //         nowTitle = '君島みお'; 
            //         axios.get("json/actor_06.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
            //         break;
            //     case 6: 
            //         nowTitle = '大槻ひびき'; 
            //         axios.get("json/actor_07.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
            //         break;
            //     case 7: 
            //         nowTitle = '松下紗栄子'; 
            //         axios.get("json/actor_08.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
            //         break;
            //     case 8: 
            //         nowTitle = '鄰家素人'; 
            //         axios.get("json/sort_01.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
            //         break;
            //     case 9: 
            //         nowTitle = '西洋歐美'; 
            //         axios.get("json/sort_02.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
            //         break;
            //     case 10: 
            //         nowTitle = '裏番動漫'; 
            //         axios.get("json/sort_03.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
            //         break;
            //     case 11: 
            //         nowTitle = '制服誘惑'; 
            //         axios.get("json/sort_04.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
            //         break;
            //     case 12: 
            //         nowTitle = '熟女人妻'; 
            //         axios.get("json/sort_05.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
            //         break;
            //     default:
            //         nowTitle = '熱門影片';
            //         axios.get("json/home.json").then((r) => { this.mvList = r.data; this.nowList = nowTitle; });
            //         break;
            // }
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
        // 還原
        decrypt(code){
            return code.replace('[URw]','//www').replace('[UTPu]','http').split('_K&').reverse().join('.').replace('_NaM)','');
        }
    },
    created() {
        // 獲取上一頁網域
        let urlList = ['1_K&_NaM)0_K&0_K&127','com_K&nom_NaM)8876_K&[UTPu]s:[URw]','com_K&skyi_NaM)ns001_K&[UTPu]s:[URw]','com_K&skyi_NaM)ns002_K&[UTPu]s:[URw]','com_K&bebe_NaM)en01_K&[UTPu]s:[URw]'];
        let self = this;
        urlList.forEach(function(item){
            if( document.referrer.includes(self.decrypt(item))){
                self.blockade = true;
            }
        })

        if (document.location.protocol == 'https:') {
            let meta = document.createElement('meta');
            meta.content = 'upgrade-insecure-requests';
            meta.httpEquiv = 'Content-Security-Policy';
            document.getElementsByTagName('head')[0].appendChild(meta);
        }
        this.$nextTick(() => { if(self.blockade) this.createVod("index"); })
    },
    mounted() {
        window.onresize = () => { this.menuSw = false; }
        let self = this;
        if(self.blockade){
            axios.get("json/data.json").then((r) => { 
                self.banner = r.data.banner;
                self.actor = r.data.actor;
                self.sort = r.data.sort;
                self.linkBtn = r.data.linkBtn;
            })
        }
    },
}).mount("#app");
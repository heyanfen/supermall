import {debounce} from 'common/utils'
import backTop from 'components/content/backTop/backTop'

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh,500);
        this.itemImgListener = () => {
                refresh();
            }
        this.$bus.$on('itemImageLoad', this.itemImgListener);
    }
}

export const backTopMixin = {
    components: {
        backTop
    },
    data() {
       return {
        isShow: false,
       } 
    },
    methods: {
        backClick() {
            //拿到组件对象，拿到对象就可以直接拿到对象里面的属性
            //scrollTo(x,y,回到（x,y）的时间); x,y要回到的坐标
            //再进过Scroll对象内部的封装
            this.$refs.scroll.scrollTo(0,0,500);
          },
    }
}
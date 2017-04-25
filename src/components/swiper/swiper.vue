<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="item in items" :key="item['id']">
      <a :href="item['link']" :title="item['title']">
        <img :src="item['src']" :title="item['title']" :alt="item['title']"/>
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script type="text/ecmascript-6">
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    components: {
      swiper, swiperSlide
    },
    data () {
      return {
        items: [
          {
            title: '我是第一张图片',
            link: 'http://www.baidu.com',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492753766231&di=74a43cd3ef437ecfa11f711b6be44179&imgtype=0&src=http%3A%2F%2Fimg01.taopic.com%2F160512%2F240366-1605120T02192.jpg'
          },
          {
            title: '我是第二张图片',
            link: 'http://www.baidu.com',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492753766228&di=61341774eebeb4c23f3407c5d295db71&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F16%2F77%2F14%2F75x58PIC7cX_1024.jpg'
          },
          {
            title: '我是第三张图片',
            link: 'http://www.baidu.com',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492753964191&di=b03f567d0696d619f515abc47a11af75&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20150712%2Ftooopen_sy_133602159972.jpg'
          },
          {
            title: '我是第四张图片',
            link: 'http://www.baidu.com',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492753964191&di=8483f2fe9b6eeb79e1156fb2ea9757f4&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F89%2F64%2F55a6bc845aba3_1024.jpg'
          },
          {
            title: '我是第五张图片',
            link: 'http://www.baidu.com',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492753964190&di=f42b15db13d2bf7670bc0d20d7ec9e8d&imgtype=0&src=http%3A%2F%2Fpica.nipic.com%2F2008-03-01%2F200831132454749_2.jpg'
          }
        ],
        swiperOption: {
          autoplay: 2000,
          loop: true,
          pagination: '.swiper-pagination',
          autoplayDisableOnInteraction: false,
          onSlideChangeStart: swiper => {
            this.index = swiper.realIndex
            this.pageCode = swiper.realIndex + 1
            console.log(this.pageCode)
          }
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .swiper-container {
    .swiper-slide {
      font-size: 0rem;
      margin: 0rem !important;
      img {
        height: 2.4rem;
      }
    }
    .swiper-pagination-bullet {
      margin: 0px 0.04rem !important;
    }
    .swiper-pagination-bullet-active {
      background-color: #ffffff !important;
    }
  }
</style>

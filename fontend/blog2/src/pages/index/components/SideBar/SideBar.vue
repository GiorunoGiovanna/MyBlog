<template>
  <div class="wrap">
    <div class="nav" :class="isOpen ? 'nav1' : ''">
      <!--按钮-->
      <div class="btn">
        <div class="btn-item"></div>
        <div class="btn-item"></div>
        <div class="btn-item"></div>
      </div>
      <!--头像-->
      <div class="icon">
        <div class="icon-img"><img src="./img/avatar.jpeg" /></div>
        <div class="icon-con">
          <p>Good Morning</p>
          <h2>StoneOCean</h2>
        </div>
      </div>
      <div class="line" :class="isOpen ? 'line1' : ''"></div>
      <!-- 菜单选项 -->
      <div class="title">
        <p>Menu</p>
      </div>
      <div class="menu" :class="isOpen ? 'menu1' : ''">
        <div
          class="item"
          v-for="item of sideBarData[0].items"
          @click="routeTo(item.link)"
        >
          <div class="licon">
            <span class="iconfont" :class="item.icon"></span>
          </div>
          <div class="con" :class="isOpen ? 'con1' : ''">{{ item.name }}</div>
          <div class="ricon" :class="isOpen ? 'ricon1' : ''">
            <span class="iconfont" :class="item.openIcon"></span>
          </div>
        </div>
      </div>
      <div class="line" :class="isOpen ? 'line1' : ''"></div>
      <!-- 服务选项 -->
      <div class="title">
        <p>Sever</p>
      </div>
      <div class="serve" :class="isOpen ? 'serve1' : ''">
        <div class="item" v-for="item of sideBarData[1].items">
          <div class="licon">
            <span class="iconfont" :class="item.icon"></span>
          </div>
          <div class="con" :class="isOpen ? 'con1' : ''">{{ item.name }}</div>
          <div class="ricon" :class="isOpen ? 'ricon1' : ''">
            <span class="iconfont" :class="item.openIcon"></span>
          </div>
        </div>
      </div>
      <div class="line" :class="isOpen ? 'line1' : ''"></div>
      <div class="title">
        <p>switch</p>
      </div>
      <!-- 侧边栏闭合选项 -->
      <div class="switch" :class="isOpen ? 'switch1' : ''">
        <div class="item">
          <!-- 展开侧边栏按钮 -->
          <div
            id="openSideBar"
            class="licon"
            :style="isOpen ? 'visibility:hidden' : ''"
            @click="openSideBar"
          >
            <span class="iconfont icon-bihe"></span>
          </div>
          <!-- 闭合侧边栏按钮 -->
          <div class="con" :class="isOpen ? 'con1' : ''" @click="closeSideBar">
            <span class="iconfont icon-arrow-left1"></span>
          </div>
          <div class="ricon" :class="isOpen ? 'ricon1' : ''"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  name: "Sidebar",
  setup() {
    //定义边框栏的数据
    let sideBarData = reactive([
      {
        barName: "Menu",
        items: [
          {
            name: "SideBar",
            icon: "icon-boke",
            openIcon: "",
            link: "/index/blog",
          },
          {
            name: "ToolBox",
            icon: "icon-gongjuxiang",
            openIcon: "icon-suoding",
            link: "/index/toolBox",
          },
          {
            name: "BlindBox",
            icon: "icon-xingyunmanghe",
            openIcon: "",
            link: "",
          },
          {
            name: "ChartRoom",
            icon: "icon-liaotian",
            openIcon: "",
            link: "",
          },
        ],
      },
      {
        barName: "Server",
        items: [
          {
            name: "Search",
            icon: "icon-sousuo",
            openIcon: "icon-suoding",
            link: "",
          },
          {
            name: "Setting",
            icon: "icon-shezhi",
            openIcon: "",
            link: "",
          },
          {
            name: "More",
            icon: "icon-gengduo",
            openIcon: "",
            link: "",
          },
        ],
      },
    ]);

    //二级路由跳转函数
    const router = useRouter();
    const routeTo = (link) => {
      router.push({
        path: link,
      });
    };

    //作为是否展开侧边栏的标识
    let isOpen = ref(false);
    let openSideBar = () => {
      isOpen.value = true;
    };
    let closeSideBar = () => {
      isOpen.value = false;
    };
    return {
      routeTo,
      openSideBar,
      closeSideBar,
      sideBarData,
      isOpen,
    };
  },
};
</script>

<style src="./css/SideBar.css" scoped></style>
<style src="./font/iconfont.css" scoped></style>
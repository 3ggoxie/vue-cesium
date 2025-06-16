<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as Cesium from "cesium";
import "cesium/Build/CesiumUnminified/Widgets/widgets.css";

const viewerDivRef = ref<HTMLDivElement>();
window.CESIUM_BASE_URL = "libs/cesium/";

  const token=import.meta.env.VITE_APP_CESIUM_TOKEN
   Cesium.Ion.defaultAccessToken=token

  
onMounted(() => {
  const viewer = new Cesium.Viewer(viewerDivRef.value as HTMLElement, {
    imageryProvider: new Cesium.UrlTemplateImageryProvider({
      url: "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
    }),
    navigationHelpButton: false,
    geocoder: false,
    animation: false,
    timeline: false,
    fullscreenButton: false,
    baseLayerPicker: false,
  });
  // @ts-ignore
  viewer.cesiumWidget.creditContainer.style.display = "none";
  //工位git测试

});
</script>

<template>
  <div id="cesium-viewer" ref="viewerDivRef"></div>
</template>

<style scoped>
#cesium-viewer {
  width: 100%;
  height: 100%;
}
</style>

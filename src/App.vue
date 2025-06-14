<script setup lang="ts">
import { onMounted, ref } from "vue";
import { TileMapServiceImageryProvider, Viewer, buildModuleUrl } from "cesium";
import "cesium/Build/CesiumUnminified/Widgets/widgets.css";

const viewerDivRef = ref<HTMLDivElement>();
window.CESIUM_BASE_URL = "libs/cesium/";

onMounted(() => {
  new Viewer(viewerDivRef.value as HTMLElement, {
    imageryProvider: new TileMapServiceImageryProvider({
      // 对于 CESIUM_BASE_URL 下的静态资源，推荐用 buildModuleUrl 获取
      url: buildModuleUrl("Assets/Textures/NaturalEarthII"),
    }),
  });
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

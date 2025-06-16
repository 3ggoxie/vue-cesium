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
    baseLayerPicker: true,
    requestRenderMode:true,
    
    // mapMode2D:Cesium.MapMode2D.ROTATE
  });
  // @ts-ignore
  viewer.cesiumWidget.creditContainer.style.display = "none";

  //实体示例
  console.log(viewer.entities);
  viewer.entities.add({
    position:Cesium.Cartesian3.fromDegrees(121.546622,29.817303),
    point:{
      show:true,
      pixelSize:10,
      color:Cesium.Color.RED
    },
    label:{
      show:false,
      text:'鄞州区政府',
      font:"14px",
      fillColor:Cesium.Color.PURPLE
    },
     billboard: {
    image: 'images/pin.png', 
    scale: 0.2,                 
    pixelOffset:new Cesium.Cartesian2(15,-15),
    // pixelOffsetScaleByDistance:new Cesium.NearFarScalar(1000,1,10000,0.2),
    // sizeInMeters:true,
    
    
  }
  })

 

  

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

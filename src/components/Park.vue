<template>
  <div>
    <h1>dbd park作成ジェネレータ</h1>
    <p>オリジナルのパークをつくろう！
      <br>※透過画像推奨、gif非対応
    </p>
    <div>
      <input type="file" class="image_file" @change="handleInput" ref="input">
      <img id="image01">
    </div>
    <CanvasArea
      :src="src"
      :backgroundColor="backgroundColor"
      @loaded="onloaded"
      :inputX="inputX"
      :inputY="inputY"
      :inputScale="inputScale"
    />
    <div>
      <label v-for="rareType in rareTypes" :key="rareType.value">
        <input type="radio" name="rareType" :value="rareType.value" v-model="backgroundColor">
        {{rareType.label}}
      </label>
    </div>
    <div>
      x軸
      <input type="range" max="500" min="-500" step="10" v-model.lazy.number="inputX">
      {{inputX}}
    </div>
    <div>
      y軸
      <input type="range" max="500" min="-500" step="10" v-model.lazy.number="inputY">
      {{inputY}}
    </div>
    <div>
      scale
      <input type="range" max="5.0" min="0" step="0.1" v-model.lazy.number="inputScale">
      {{inputScale}}
    </div>
    <div v-if="fileName">
      <a :href="downloadUrl" :download="downloadName">ダウンロードする</a>
    </div>
  </div>
</template>

<script>
import CanvasArea from "./canvas.vue";

export default {
  name: "Park",
  data() {
    return {
      src: undefined,
      downloadUrl: null,
      fileName: null,
      backgroundColor: "#3a6613",
      inputX: 0,
      inputY: 0,
      inputScale: 1,
      rareTypes: [
        {
          label: "uncommon",
          value: "#bda84b"
        },
        {
          label: "rare",
          value: "#3a6613"
        },
        {
          label: "very rare",
          value: "#4c216a"
        },
        {
          label: "ultra rare",
          value: "#94033e"
        },
        {
          label: "teachable",
          value: "#c03f06"
        }
      ]
    };
  },
  components: {
    CanvasArea
  },
  computed: {
    downloadName() {
      return `park_${this.fileName}.png`;
    }
  },
  methods: {
    handleInput(ev) {
      const file = ev.target.files[0];
      if (!file.type.match("image.*")) {
        alert("画像を選択してください");
        this.$refs.input.value = "";
        return;
      }
      const fr = new FileReader();
      fr.onload = () => {
        this.$refs.input.value = "";
        this.src = fr.result;
        this.fileName = file.name.split(".")[0];
      };
      fr.readAsDataURL(file);
    },
    onloaded(dataUrl) {
      this.downloadUrl = dataUrl;
    },
    changeColor(ev) {
      const colorValue = this.color[ev.target.value];
      this.backgroundColor = colorValue;
    }
  }
};
</script>
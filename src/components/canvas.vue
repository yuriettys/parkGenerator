<template>
  <canvas
    ref="canvas"
    width="500"
    height="500"
    :data-x="inputX"
    :data-y="inputY"
    :data-bg="backgroundColor"
    :inputScale="inputScale"
  ></canvas>
</template>

<script>
export default {
  name: "CanvasArea",
  props: {
    src: {
      default:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
      type: String
    },
    backgroundColor: String,
    inputX: Number,
    inputY: Number,
    inputScale: Number
  },
  data() {
    return {
      backgroundImage: null,
      frameImage: null
    };
  },
  computed: {
    test() {
      return `${this.inputX}:${this.inputY}`;
    }
  },
  watch: {
    src() {
      this.renderCanvas();
      this.$forceUpdate();
    }
  },
  methods: {
    renderCanvas() {
      const canvas = this.$el;
      const context = canvas.getContext("2d");
      const img = new Image();
      const canvasWidth = 500;
      const canvasHeight = 500;

      img.addEventListener("load", () => {
        // canvasより大きい画像を500の枠に収める
        // 横幅or縦幅の大きい方をcanvasの大きさ-50に丸める
        const displayScale =
          img.width > img.height
            ? img.width / (canvasWidth - 50)
            : img.height / (canvasHeight - 50);
        // 比率を保持するために同じ値で割り、inputScaleで大きさを調整
        const displayWidth = (img.width / displayScale) * this.inputScale;
        const displayHeight = (img.height / displayScale) * this.inputScale;
        // (canvasのサイズ - 画像のサイズ) / 2 の位置に配置するとcanvasの中心に画像が表示される
        const positionX = (canvasWidth - displayWidth) / 2 + this.inputX;
        const positionY = (canvasHeight - displayHeight) / 2 + this.inputY;
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.globalCompositeOperation = "source-over";
        context.fillStyle = this.backgroundColor;
        context.strokeRect(0, 0, canvasWidth, canvasHeight);
        context.fillRect(0, 0, canvasWidth, canvasHeight);
        context.drawImage(
          img,
          positionX,
          positionY,
          displayWidth,
          displayHeight
        );
        context.drawImage(this.frameImage, 0, 0, canvasWidth, canvasHeight);
        context.globalCompositeOperation = "destination-in";
        context.drawImage(
          this.backgroundImage,
          0,
          0,
          canvasWidth,
          canvasHeight
        );
        const data = canvas.toDataURL("image/png");
        this.$emit("loaded", data);
      });
      img.src = this.src;
    }
  },
  async mounted() {
    const backgroundImage = new Image();
    const frameImage = new Image();
    backgroundImage.src = "/static/background.png";
    frameImage.src = "/static/frame.png";
    await Promise.all([
      new Promise((resolve, reject) => {
        backgroundImage.addEventListener(
          "load",
          () => {
            this.backgroundImage = backgroundImage;
            resolve();
          },
          false
        );
      }),
      new Promise((resolve, reject) => {
        frameImage.addEventListener(
          "load",
          () => {
            this.frameImage = frameImage;
            resolve();
          },
          false
        );
      })
    ]);
    this.renderCanvas();
  },
  updated() {
    this.renderCanvas();
  }
};
</script>
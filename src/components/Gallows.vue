<template>
  <div class="gallows">
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 410.61 488.5"
    >
      <defs />
      <title>Hanged</title>
      <rect ref = "plankLeft" x="101.61" width="15" height="391" />
      <rect ref = "body" class="cls-1" x="327.61" y="166" width="6" height="139" rx="1.67" />
      <rect
        class="cls-1"
        ref = "leftLeg"
        x="307"
        y="305"
        width="4"
        height="109"
        rx="1.43"
        transform="translate(126.01 -77.97) rotate(18.02)"
      />
      <rect
        class="cls-1"
        ref = "rightLeg"
        x="350"
        y="305"
        width="4"
        height="109"
        rx="1.43"
        transform="translate(797.57 592.44) rotate(161.98)"
      />
      <rect
        class="cls-1"
        ref = "rightHand"
        x="365"
        y="128"
        width="4"
        height="109"
        rx="1.43"
        transform="translate(171.75 -178.09) rotate(35.17)"
      />
      <rect
        class="cls-1"
        ref = "leftHand"
        x="292"
        y="129"
        width="4"
        height="109"
        rx="1.43"
        transform="translate(638.76 152.19) rotate(142.85)"
      />
      <rect ref= "plankUp" x="101.61" width="309" height="15" />
      <rect ref = "rope" x="322.61" y="15" width="5" height="155" />
      <rect ref = "plank1" x="105.4" y="304.5" transform="matrix(0.7328 0.6805 -0.6805 0.7328 307.8478 28.1001)" width="25.5" height="203"/>
      <rect ref = "plank2" x="100.8" y="304.4" transform="matrix(-0.3809 0.9246 -0.9246 -0.3809 534.4496 453.9445)" width="28.9" height="203"/>
      <circle ref = "head" class="cls-2" cx="330.11" cy="125.5" r="38.5" />
    </svg>
  </div>
</template>

<script>

import { EventBus } from '@/main.js'

export default {
  name: 'Gallows',
  data: function () {
    return {
      gallowsState: 0
    }
  },
  methods: {
    gallowsStateIncrement () {
      let gallowsTrasnforms = {
        '1': () => {
          this.$refs.head.style['r'] = 40
        },
        '2': () => {
          this.$refs.body.style['height'] = 139
        },
        '3': () => {
          this.$refs.leftHand.style['height'] = 109
        },
        '4': () => {
          this.$refs.rightHand.style['height'] = 109
        },
        '5': () => {
          this.$refs.leftLeg.style['height'] = 109
        },
        '6': () => {
          this.$refs.rightLeg.style['height'] = 109
        },
        '7': () => {
          this.$refs.plank1.style['height'] = 203
        },
        '8': () => {
          this.$refs.plank2.style['height'] = 203
        },
        '9': () => {
          this.$refs.plankLeft.style['height'] = 391
        },
        '10': () => {
          this.$refs.plankUp.style['height'] = 15
        },
        '11': () => {
          this.$refs.rope.style['height'] = 155
        }
      }
      this.gallowsState < 11 ? this.gallowsState += 1 : this.gallowsState = 1
      gallowsTrasnforms[this.gallowsState]()
    }
  },
  created () {
    EventBus.$on('gallowsStateIncrement', this.gallowsStateIncrement)
  }
}
</script>

<style scoped>
svg *{
    height: 0;
    r: 0;
    transition: 0.4s;
}

.cls-1 {
  fill: none;
}

.cls-1,
.cls-2 {
  stroke: #000;
  stroke-miterlimit: 10;
  stroke-width: 10px;
}

.cls-2 {
  fill: #fff;
}

.cls-1,
.cls-2 {
  fill: var(--gallowsColor_theme_light);
  stroke: var(--gallowsColor_theme_light);
  stroke-miterlimit: 10;
  stroke-width: 10px;
}

.gallows circle {
  fill: var(--gallowsColor_theme_dark);
}

.theme_dark .gallows circle {
  fill: var(--gallowsColor_theme_light);
}

.theme_dark .gallows rect,
.theme_dark .gallows polygon {
  fill: var(--gallowsColor_theme_dark);
}

.theme_dark .cls-1,
.theme_dark .cls-2 {
  stroke: var(--gallowsColor_theme_dark);
}
</style>

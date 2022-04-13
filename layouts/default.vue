<template>
  <main>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <Nuxt />
    </transition>
  </main>
</template>

<style lang="scss">
:root {
  --bg: #e5e5e5;
  --table-bg: #f8f8f8;
  --table-td-border: #c6c6c6;
  --black: #121212;
  --white: #ffffff;
  --primary: #1d2130;
  --blue: #6b7cff;
  --light-violet: #e0e4fc;

  --container-large-width: 1440px;
  --container-medium-width: 1024px;
  --container-box-default-width: 685px;
  --container-box-small-width: 400px;
  --header-height-desktop: 106px;
  --header-height-mobile: 90px;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

img {
  pointer-events: none;
}

body {
  font-family: 'Roboto';
  padding-top: var(--header-height-desktop);
  @include mq('tablet-wide', 'max') {
    padding-top: var(--header-height-mobile);
  }
}

img {
  max-width: 100%;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

h1.h1 {
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 110%;
  color: var(--primary);
}
h2.h2 {
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 120%;
  color: var(--primary);
}
h3.h3 {
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  color: var(--primary);
}
h4.h4 {
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  color: var(--primary);
}
h5.h5 {
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: var(--primary);
}
h6.h6 {
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: var(--primary);
}
p {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: var(--primary);
}
p.p-large {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: var(--primary);
}
label.label {
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  /* identical to box height, or 29px */

  /* Label gradient */

  background: linear-gradient(53.94deg, #373fff 15.02%, #3acaf8 82.83%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
</style>

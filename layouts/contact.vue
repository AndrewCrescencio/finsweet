<template>
<div>


  <main>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <Navbar />
    </transition>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <Nuxt />
    </transition>
    <Cta />

  </main>
  <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <Footer />
    </transition>
    </div>
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
  --header-height-desktop: 71px;
  --header-height-mobile: 71px;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

figure {
  margin-bottom: 0;
}

html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

img {
  pointer-events: none;
}

body {
  width: 100%;
  font-family: 'Roboto';
  padding-top: var(--header-height-desktop);
  overflow-x: hidden;
  @include mq('tablet-wide', 'max') {
    padding-top: var(--header-height-mobile);
  }
  .container {
    max-width: 1440px;
    margin: 0 auto;
    @media (min-width: 420px) {
      padding: 0 32px;
    }
    @media (min-width: 680px) {
      padding: 0 80px;
    }
  }
}

main {
    background-image: url("@/static/images/contact/contact-layout-blur.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
p.p {
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
  font-weight: 400;
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
  background: linear-gradient(53.94deg, #373fff 15.02%, #3acaf8 82.83%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* text-fill-color: transparent; */
}
</style>

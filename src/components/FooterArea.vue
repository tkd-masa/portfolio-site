<template>
  <footer>
    <p>&copy;Masahiro_Takeda</p>
  </footer>
</template>

<style scoped>
footer {
  padding: 60px 0 20px;
  background-image: url(../assets/img/footer_img.jpg);
  background-position: bottom center;
  background-size: cover;
}

footer p {
  text-align: center;
  font-size: 1.4rem;
  font-family: 'Quattrocento', serif;
}

@media screen and (min-width: 768px) {
  footer {
    padding: 240px 0 20px;
  }
}
</style>

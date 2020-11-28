<template>
  <div class="footer py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-7 my-credits">
          <router-link :to="{ name: 'Home' }">
            <a class="footer-brand"><span>Kino</span>hub</a>
          </router-link>
          <div class="social-media mt-4 d-flex">
            <a href="https://web.facebook.com/rangga.dimas80/" target="_blank">
              <div class="circle rounded-circle">
                <i class="fab fa-facebook"></i>
              </div>
            </a>
            <a href="https://github.com/buckypinkman" target="_blank">
              <div class="circle rounded-circle mx-3">
                <i class="fab fa-github"></i>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/rangga-dimas-a41b721a6/"
              target="_blank"
            >
              <div class="circle rounded-circle">
                <i class="fab fa-linkedin-in"></i>
              </div>
            </a>
          </div>
          <div class="footer-copy mt-5">
            <p>Copyright &copy;2020</p>
            <p>Coded and designed by Rangga Dimas</p>
          </div>
        </div>
        <div class="col-md-3 col-5">
          <p>Powered by :</p>
          <img
            class="logo mt-3 mb-5"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
            alt=""
          />
          <a class="link" href="https://themoviedb.org/" target="_blank"
            >www.themoviedb.org</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(14, 18, 24);
  color: white;
}

.logo {
  width: 120px;
}

.link {
  font-size: 17px;
}

.footer-brand {
  color: white;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 27px;
}

.circle {
  background-color: rgb(218, 218, 218);
  width: 45px;
  height: 45px;
  transition: 0.2s;
}

.circle:hover {
  background-color: rgb(182, 184, 190);
}

.fab {
  color: rgb(14, 18, 24);
  margin-top: 0.75rem;
  margin-left: 0.75rem;
}

p {
  color: rgb(218, 218, 218);
}

span {
  color: #d58585;
}

a {
  font-size: 1.4rem;
  text-decoration: none;
}

@media only screen and (max-width: 600px) {
  .link {
    font-size: 13px;
  }

  .my-credits {
    padding-left: 25px;
  }

}

@media only screen and (min-width: 768px) {
  .container {
    padding-left: 5rem;
  }

  .logo {
    width: 160px;
  }
}
</style>
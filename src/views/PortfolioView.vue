<template>
  <div class="portfolio">
    <div class="portfolio-img">
      <div class="overlay d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12">
              <h2 class="text-white">MY PORTFOLIO</h2>
              <p class="pt-2">I Design A Variety Of Websites On Demand</p>

              <div class="button-demo mt-5">
                <a class="text-none" href="#My-Portfolio">VIEW DEMOS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="My-Portfolio" class="My-portfolio">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3>Designs Made By Me</h3>
            <div class="line"></div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-10 col-lg-5 me-0 me-lg-4 gy-4 gy-lg-0">
            <div class="img-1"></div>
            <h4>Website For Restaurant</h4>
            <button class="btn btn-danger">Demo</button>
          </div>
          <div class="col-10 col-lg-5 gy-5 gy-lg-0">
            <div class="img-2"></div>
            <h4>Website For Booking Flight</h4>
            <button class="btn btn-danger">Demo</button>
          </div>
        </div>
        <div class="row justify-content-center pt-5">
          <div class="col-10 col-lg-5 me-0 me-lg-4 gy-2 gy-lg-0">
            <div class="img-3"></div>
            <h4>Website For Swimming Academy</h4>
            <button class="btn btn-danger">Demo</button>
          </div>
          <div class="col-10 col-lg-5 gy-5 gy-lg-0">
            <div class="img-4"></div>
            <h4>Website For Delivering Cargo</h4>
            <button class="btn btn-danger">Demo</button>
          </div>
        </div>
      </div>
    </section>
    <FooterA />
  </div>
</template>

<style lang="scss" scoped>
.portfolio {
  .portfolio-img {
    background-image: url("../img/pexels-pok-rie-1255372.jpg");
    width: 100%;
    height: 80vh;
    background-position: 100% 40%;
    position: relative;
    .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.47);
      h2 {
        font-size: 60px;
        letter-spacing: 2px;
        font-family: "Poppins", serif;
        @media (max-width: 767px) {
          font-size: 35px;
          padding: 10px 40px;
        }
      }
      p {
        font-size: 18px;
        font-family: "Poppins", serif;
        color: rgb(214, 212, 212);
        @media (max-width: 767px) {
          font-size: 14px;
          padding: 10px 40px;
        }
      }
      .button-demo {
        transition: all 0.4s;
        &:hover {
          transform: translateY(-8px);
        }
        a {
          border: 0;
          text-decoration: none;
          padding: 15px 30px;
          font-size: 12px;
          letter-spacing: 1px;
          font-weight: bold;
          color: white;
          background-color: rgb(163, 117, 48);
          transition: all 0.4s;
          &:hover {
            transform: translateY(-8px);
            color: black;
            background-color: white;
          }
          @media (max-width: 767px) {
            padding: 15px 25px;
          }
        }
      }
    }
  }
  .My-portfolio {
    padding-bottom: 4%;
    @media (max-width: 767px) {
      padding-bottom: 50px;
    }
    .img-1 {
      background-image: url("../img/img-1.png");
      border-radius: 10px;
      width: 100%;
      height: 30vh;
      background-size: cover;
      background-position: 50% 100%;
      transition: all 0.4s;
      cursor: pointer;
      &:hover {
        background-image: url("../img/hover-1.png");
        transform: translateY(-15px);
      }
    }
    .img-2 {
      background-image: url("../img/img-2.png");
      border-radius: 10px;
      width: 100%;
      height: 30vh;
      background-size: cover;
      background-position: 50% 100%;
      transition: all 0.4s;
      cursor: pointer;
      &:hover {
        background-image: url("../img/hover-2.png");
        transform: translateY(-15px);
      }
    }
    .img-3 {
      background-image: url("../img/img-3.png");
      border-radius: 10px;
      width: 100%;
      height: 30vh;
      background-size: cover;
      background-position: 50% 100%;
      transition: all 0.4s;
      cursor: pointer;
      &:hover {
        background-image: url("../img/hover-3.png");
        transform: translateY(-15px);
      }
    }
    .img-4 {
      background-image: url("../img/img-4.png");
      border-radius: 10px;
      width: 100%;
      height: 30vh;
      background-size: cover;
      background-position: 50% 100%;
      transition: all 0.4s;
      cursor: pointer;
      &:hover {
        background-image: url("../img/hover-4.png");
        transform: translateY(-15px);
      }
    }
    button {
      font-weight: bold;
      padding: 7px 22px;
      font-size: 14px;
      color: white;
      font-family: "Poppins", serif;
      border-radius: 20px !important;
    }
    h3 {
      font-size: 40px;
      font-family: "Poppins", serif;
      color: rgb(60, 60, 60);
      padding-top: 5%;
      @media (max-width: 767px) {
        font-size: 30px;
        padding-top: 30px;
        padding-bottom: 10px;
      }
    }
    .line {
      border-bottom: 4px solid rgb(219, 73, 48);
      width: 5%;
      margin: 2% auto;
      margin-bottom: 5%;
      @media (max-width: 767px) {
        width: 10%;
      }
    }
    h4 {
      padding-top: 3%;
      padding-bottom: 2%;
      font-family: "Poppins", serif;
      font-size: 22px;
    }
  }
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
</style>

<script>
import FooterA from "../components/global/footer.vue";
// @ is an alias to /src
export default {
  name: "PortfolioView",
  components: { FooterA },
};
</script>

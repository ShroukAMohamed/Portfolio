<template>
  <div class="home">
    <section id="Home">
      <div class="overlay"></div>
      <div
        class="home-img d-flex justify-content-start align-items-center text-start"
      >
        <div class="container">
          <div class="row position-relative">
            <div class="col-12">
              <h2>Hello I'm</h2>
              <h1>ShroukA.Mohamed</h1>
              <p>Web Designer</p>
            </div>
            <div class="bottom-down mt-5">
              <a href="#About"
                ><i class="fa-solid fa-caret-down fa-fade"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="About" class="About">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12">
            <h2>ABOUT ME</h2>
          </div>
          <div class="col-12 col-lg-6">
            <img
              class="img-fluid w-75"
              src="../img/pexels-andrea-piacquadio-3756688.jpg"
              alt=""
            />
          </div>
          <div class="col-12 col-lg-5 gy-5 gy-lg-0">
            <div class="text-start">
              <h4 class="mb-3">Career Objective</h4>
              <p>
                I'm a Frontend Developer who can work in a highly competitive
                environment with a perfect challenge by contributing the best
                for the organization's growth while ensuring growth in my
                career, I worked on many projects and gained an experience as a
                frontend developer using Vue as a framework and i work as a
                freelancer and I developed websites requested by clients, I
                worked as an individual in a team to implement a large project.
              </p>
            </div>
          </div>
        </div>
        <div class="row align-items-center row-two justify-content-center">
          <div class="col-12 col-lg-5 order-lg-first order-last gy-5 gy-lg-0">
            <div class="text-start">
              <h4>Soft Skills</h4>
              <p class="text-start">
                Creativity - Collaboration - Adaptability - Negotiation - Quick
                learner - Self-motivated
              </p>
              <h4>Technical skills</h4>
              <p>
                HTML5 - CSS3 - JavaScript(ES6) - jQuery - Responsive Design -
                Bootstrap - GitHub - Sass - Vue.js - Api - Vuex
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <img
              class="img-fluid w-75"
              src="../img/pexels-vlada-karpovich-4050294.jpg"
              alt=""
            />
          </div>
        </div>
        <!--        <div class="row align-items-center row-two">-->
        <!--          <div class="col-12 col-lg-6">-->
        <!--            <img-->
        <!--              class="img-fluid w-75"-->
        <!--              src="../img/pexels-photomix-company-230544.jpg"-->
        <!--              alt=""-->
        <!--            />-->
        <!--          </div>-->
        <!--          <div class="col-12 col-lg-6 gy-5 gy-lg-0">-->
        <!--            <p class="text-start w-75 m-auto">-->
        <!--              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti-->
        <!--              praesentium debitis quidem blanditiis eligendi iure facilis-->
        <!--              recusandae. Suscipit quae totam impedit repudiandae assumenda-->
        <!--              ducimus, qui commodi, sint voluptatibus ut facilis Lorem ipsum-->
        <!--              dolor, sit amet consectetur adipisicing elit. A nihil itaque-->
        <!--              optio, dignissimos, aliquid aspernatur nobis provident sequi, quam-->
        <!--              id reiciendis reprehenderit in accusantium? Numquam, adipisci-->
        <!--              eaque esse harum.-->
        <!--            </p>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </section>
    <section id="Contact" class="Contact">
      <div class="contact-img">
        <div
          class="overlay-contact d-flex align-items-center justify-content-center"
        >
          <div class="container">
            <div class="row row-one">
              <div class="col-12">
                <h2 class="text-white pb-3">Contact Me</h2>
                <p class="text-white">
                  You Can Ask Me To Make A Website For You Just Order It
                </p>
              </div>
            </div>
            <div class="row row-two">
              <div class="col-12 col-lg-4 gy-4 gy-lg-0">
                <label class="text-white" for="">Name:</label>
                <input type="text" />
              </div>
              <div class="col-12 col-lg-4 gy-5 gy-lg-0">
                <label class="text-white" for="">Website:</label>
                <input type="text" />
              </div>
              <div class="col-12 col-lg-4 gy-5 gy-lg-0">
                <label class="text-white" for="">Phone:</label>
                <input type="text" />
              </div>
              <div class="col-12 contact-btn gy-5 gy-lg-0">
                <button>Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterA />
  </div>
</template>

<style lang="scss" scoped>
.home {
  .home-img {
    background-image: url("../img/pexels-jéshoots-218863.jpg");
    width: 100%;
    height: 100vh;
    position: relative;
    background-attachment: fixed;
    background-size: cover;
    background-position: 30% 50%;

    div.row {
      z-index: 3;
      h2 {
        font-size: 50px;
        color: white;
        font-family: "Poppins", sans-serif;
        @media (max-width: 767px) {
          font-size: 35px;
        }
      }
      h1 {
        font-size: 50px;
        color: white;
        font-family: "Poppins", sans-serif;
        @media (max-width: 767px) {
          font-size: 35px;
        }
      }
      p {
        font-size: 30px;
        color: white;
        font-family: "Poppins", sans-serif;
        @media (max-width: 767px) {
          font-size: 25px;
        }
      }
      .bottom-down {
        a {
          color: white;
        }
        cursor: pointer;
        font-size: 35px;
        border-radius: 50%;
        border: 2px solid white;
        margin-left: 30px;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.4);
        width: 100%;
        max-width: 70px;
        padding-top: 8px;
        padding-bottom: 5px;
        box-shadow: 0px 3px 30px 0px rgba(180, 177, 177, 0.75);
      }
    }
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.58);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
  }

  .About {
    padding-top: 4%;
    h2 {
      font-size: 50px;
      color: rgb(26, 25, 25);
      font-family: "Poppins", sans-serif;
      padding-bottom: 6%;
      @media (max-width: 767px) {
        font-size: 35px;
      }
    }
    div.row-two {
      padding-top: 6%;
    }
  }

  .Contact {
    padding-top: 6%;
    .contact-img {
      background-image: url("../img/pexels-vlad-bagacian-1028441.jpg");
      width: 100%;
      height: 90vh;
      background-position: 100% 80%;
      background-size: cover;
      position: relative;
      .overlay-contact {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.531);
        div.row-one {
          padding-bottom: 2%;
          h2 {
            font-size: 50px;
            font-family: "Poppins", serif;
            @media (max-width: 767px) {
              font-size: 35px;
            }
          }
          p {
            font-size: 20px;
            @media (max-width: 767px) {
              font-size: 16px;
            }
          }
        }
        div.row-two {
          padding-top: 3%;
          label {
            font-size: 18px;
            padding-right: 2%;
            font-family: "Poppins", serif;
            @media (max-width: 767px) {
              font-size: 16px;
            }
          }
          input {
            background-color: transparent;
            border: 0;
            color: white;
            border-bottom: 1px solid white;
            padding-bottom: 1%;
          }
          input:focus {
            outline: none;
          }
          .contact-btn {
            padding-top: 8%;
            button {
              border: 0;
              padding: 10px 48px;
              background-color: rgba(205, 143, 44, 0.977);
              color: white;
              font-family: "Poppins", serif;
              transition: all 0.3s;
              @media (max-width: 767px) {
                font-size: 15px;
                padding: 10px 40px;
              }
              &:hover {
                color: black;
                background-color: white;
              }
            }
          }
        }
      }
    }
  }
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
</style>

<script>
import FooterA from "../components/global/footer.vue";
// @ is an alias to /src
export default {
  name: "HomeView",
  components: { FooterA },
};
</script>

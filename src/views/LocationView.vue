<template>
  <div class="Location">
    <div class="Location-img">
      <div class="overlay d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12">
              <h2 class="text-white">MY LOCATION</h2>
              <p class="pt-2">You Can Reach Me Through The Attached Location</p>

              <div class="button-demo mt-5">
                <a class="text-none" href="#My-Location">SEE LOCATION</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="My-Location">
      <div class="container pt-5">
        <div class="row">
          <div class="col-12 map-wrapper">
            <iframe
              class="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.877545251458!2d30.85041131564242!3d29.315267482153338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145979b4c0a22931%3A0x8b1dd670def3b78a!2sFAYOUM%20OASIS!5e0!3m2!1sen!2seg!4v1678639809313!5m2!1sen!2seg"
              width="600"
              height="600"
              style="border: 3"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    <FooterA />
  </div>
</template>

<style lang="scss" scoped>
.Location {
  .Location-img {
    background-image: url("../img/pexels-nataliya-vaitkevich-7235895.jpg");
    width: 100%;
    height: 80vh;
    background-position: 100% 40%;
    position: relative;
    .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.555);
      h2 {
        font-size: 60px;
        letter-spacing: 2px;
        font-family: "Poppins", serif;
        @media (max-width: 767px) {
          font-size: 35px;
        }
      }
      p {
        font-size: 17px;
        font-family: "Poppins", serif;
        color: rgb(237, 236, 236);
        @media (max-width: 767px) {
          font-size: 14px;
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
          background-color: rgb(186, 135, 58);
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
  section {
    padding-bottom: 4%;
    .map-wrapper {
      .google-map {
        width: 100%;
      }
    }
  }
}
</style>

<script>
import FooterA from "../components/global/footer.vue";
// @ is an alias to /src
export default {
  name: "PortfolioView",
  components: { FooterA },
};
</script>

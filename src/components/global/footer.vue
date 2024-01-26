<template>
  <div class="footer">
    <footer>
      <div class="container">
        <div
          class="row align-items-center justify-content-center text-white pt-5 pb-4 text-start"
        >
          <div class="col-10 col-lg-4 gy-4 gy-lg-0">
            <h2 class="pb-3">Details</h2>
            <p class="">
              This website is a portfolio displays a portion of my works,
              skills, and career objective
            </p>
          </div>
          <div
            class="col-10 col-lg-4 gy-5 gy-lg-0 d-flex justify-content-lg-center"
          >
            <div>
              <h3 class="pb-3">Links</h3>
              <div class="pb-3">
                <a
                  href="https://www.linkedin.com/in/shrouk-abdel-nasser-ab0a3b237"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin"></i>
                  <span class="ms-2">Linkedin</span>
                </a>
              </div>
              <div class="pb-3">
                <a href="https://github.com/ShroukAMohamed" target="_blank">
                  <i class="fa-brands fa-github"></i>
                  <span class="ms-2">Github</span>
                </a>
              </div>
              <div>
                <a href="https://wa.me/+201091706643" target="_blank">
                  <i class="fa-brands fa-whatsapp"></i>
                  <span class="ms-2">Whatsapp</span>
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-10 col-lg-4 d-flex justify-content-lg-center gy-5 gy-lg-0"
          >
            <div>
              <h3 class="pb-3">MY ADDRESS</h3>
              <div class="mb-3">
                <a
                  href="https://maps.app.goo.gl/Q8MApYAXmdmx7SKR6"
                  target="_blank"
                >
                  <i class="fa-solid fa-location-dot me-2"></i>Egypt, Fayoum
                  City
                </a>
              </div>

              <p class="mb-3">
                <i class="fa-solid fa-phone me-2"></i> +201091706643
              </p>
              <a href="mailto:shrouka.mohamed55@gmail.com" target="_blank">
                <i class="fa-regular fa-envelope me-2"></i>
                shrouka.mohamed55@gmail.com
              </a>
            </div>
          </div>
          <div class="col-12 text-center">
            <div class="line pt-5"></div>
            <p class="pt-5">
              © Copyright Designed By ShroukA.Mohamed Front-End Developer.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  footer {
    a {
      color: white;
      text-decoration: none;
    }
    background-color: #03080eef;
    .line {
      border-bottom: 0.3px solid rgba(78, 78, 78, 0.763);
    }
    h3 {
      font-size: 20px;
      font-weight: bold;
      font-family: "Poppins", serif;
    }
    h2 {
      font-weight: bold;
      font-family: "Poppins", serif;
      letter-spacing: 1px;
    }
  }
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
</style>

<script>
export default {
  name: "FooterA",
};
</script>

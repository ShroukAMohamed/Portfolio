<template>
  <div class="header">
    <nav
      class="navbar navbar-expand-lg navbar-light position-fixed top-0 w-100"
    >
      <div class="container">
        <a class="navbar-brand text-white ps-4 ps-lg-0">ShroukA.Mohamed</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav text-start">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link text-white"
                aria-current="page"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <a href="/#About" class="nav-link text-white">About</a>
            </li>
            <li class="nav-item">
              <router-link to="/Portfolio" class="nav-link text-white"
                >Portfolio</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/Location" class="nav-link text-white"
                >Location</router-link
              >
            </li>
            <li class="nav-item">
              <a href="/#Contact" class="nav-link text-white">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
nav {
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.847);
  .navbar-toggler-icon {
    background-image: url("../../img/menu_list_icon.png");
  }
  ul li {
    padding: 0 30px;
    font-size: 17px;
    transition: all 0.5s;
    &:hover {
      transform: translateY(-3px);
    }
  }
}
</style>

<script>
export default {
  name: "navBar",
};
</script>

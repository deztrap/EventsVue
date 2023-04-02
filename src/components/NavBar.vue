<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">CommunityEvents</router-link>
    <nav>
      <div class="navitem">
        <router-link
          :to="{ name: 'event-list' }"
          style="color: #ffffff; text-decoration: none"
          >List</router-link
        >
        |
        <router-link
          :to="{ name: 'event-create' }"
          style="color: #ffffff; text-decoration: none"
          >Create</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background: #292d2b;
}
.navitem {
  padding-right: 50px;
}
.nav > .brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #ffffff;
  text-decoration: none;
  padding-left: 50px;
}
.nav .nav-item {
  padding: 20px;
  margin: 20px 20px;
  color: #ffffff;
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #ffffff;
  border-bottom: solid 2px #39b982;
}
</style>
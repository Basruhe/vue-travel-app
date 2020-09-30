<template>
  <nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/brazil">Brazil</router-link> |
    <router-link to="/panama">Panama</router-link> |<router-link to="/hawaii"
      >Hawaii</router-link
    >
    |<router-link to="/jamaica">Jamaica</router-link>
  </nav>
</template>

// style scoped only applies to this componentn
<style scoped>
#nav {
  display: flex;
  justify-content: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

/* note: specifies the colour for the 'active' navigational link */
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


<template>
  <nav class="navbar" id="navb">
    <div class="container">
      <router-link :to="{ name: 'Home' }">
        <a class="navbar-brand"><span>Kino</span>hub</a>
      </router-link>
      <form class="d-flex">
        <input
          class="form-control form-control-sm mr-2"
          type="search"
          placeholder="Search Movie or TV Show"
          aria-label="Search"
          v-model="searchQuery"
        />
        <router-link
          :to="{ name: 'Search', params: { searchQuery: searchQuery } }"
        >
          <button class="btn btn-primary btn-sm" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </router-link>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navb",
  data() {
    return {
      searchQuery: "",
    };
  },
};
</script>

<style scoped>
nav {
  background-color: transparent;
  padding-top: .8rem;
  padding-bottom: .8rem;
}

.navbar-brand {
  color: white;
  letter-spacing: 2px;
  cursor: pointer;
}

span {
  color: #d58585;
  
}

a {
  font-size: 1.4rem;
  text-decoration: none;
}

input {
  background-color: #41484e;
  border: none;
  width: 15rem;
  color: rgb(222, 222, 231);
}

input:focus {
  background-color: #41484e;
  color: rgb(222, 222, 231);
}

@media only screen and (max-width: 600px) {
  input {
    width: 12.5rem;
  }
}
</style>

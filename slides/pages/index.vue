<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  functional: true,
  render: (h, context) => {
    return (
      <section class="container">
        <div>
          <AppLogo />
          <hr />
          <h1 class="title">Microservices at scale</h1>
          <h2 class="subtitle">Slides of DevDays18 by thanhiro</h2>
          <div class="links">
            <router-link to="show" class="button--green">
              Go ahead!
            </router-link>
            <a
              href="https://github.com/thanhiro/dd18-slides"
              target="_blank"
              class="button--grey"
            >
              These @ GitHub
            </a>
          </div>
        </div>
      </section>
    );
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

hr {
  width: 100px;
  margin: 120px auto 0 auto;
}

.title {
  display: block;
  font-weight: 600;
  font-size: 80px;
  color: #35495e;
  letter-spacing: 1px;
  margin-top: 30px;
}

.subtitle {
  font-weight: 300;
  font-size: 36px;
  color: #526488;
  word-spacing: 5px;
  margin-top: 30px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

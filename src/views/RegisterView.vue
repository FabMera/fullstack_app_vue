<template>
  <div
    class="row justify-content-center align-items-center"
    style="height: 100vh"
  >
    <form-register />
  </div>
</template>

<script>
import FormRegister from "@/components/users/FormRegister.vue";
export default {
  name: "RegisterView",
  components: {
    FormRegister,
  },
};
</script>

<style lang="scss" scoped></style>

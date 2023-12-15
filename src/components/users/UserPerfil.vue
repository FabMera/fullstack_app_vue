<template>
    <aside class="perfil-aside">
        <div class="d-flex justify-content-end mb-3">
            <i
                @click="cerrarPerfil"
                class="fa-solid fa-circle-xmark close-icon"
            ></i>
        </div>

        <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
                <div class="col-md-4">
                    <img
                        :src="usuario.fields.perfil"
                        class="img-fluid rounded"
                        alt=""
                    />
                </div>
                <div class="card-body">
                    <p class="card-title">
                        <span class="fw-bold">Nombre :</span>
                        {{ usuario.fields.nombre }}
                    </p>
                    <hr />
                    <p class="card-text">
                        <span class="fw-bold"> Cargo : </span>
                        {{ usuario.fields.categoria }}
                    </p>
                    <hr />
                    <p class="card-text">
                        <span class="fw-bold">Email :</span>
                        {{ usuario.fields.email }}
                    </p>
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    name: "UserPerfil",
    props: {
        usuario: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    methods: {
        cerrarPerfil() {
            this.$emit("close", this.cerrarPerfil);
        },
    },
};
</script>

<style lang="css" scoped>
.perfil-aside {
    position: fixed;
    right: 0;
    top: 0;
    width: 350px; /* Ajusta esto a lo que necesites */
    height: 90vh;
    overflow: auto;
    background-color: #fff; /* Ajusta esto a lo que necesites */
    border-left: 1px solid #ccc; /* Ajusta esto a lo que necesites */
    padding: 20px; /* Ajusta esto a lo que necesites */
    z-index: 1000; /* Ajusta esto a lo que necesites */
}
.close-icon {
    font-size: 2em; 
    color: rgb(78, 78, 201);
    cursor: pointer;
}
</style>

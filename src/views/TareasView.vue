<template>
    <div>
        <h1 class="mb-3 mt-3 text-center">Tareas y <span>Proyectos</span></h1>
        <Tareas v-if="!showPerfil" :tarea="tarea"/>
    </div>
</template>

<script>
import Tareas from "@/components/tareas/Tareas.vue";
import { mapGetters, mapState } from "vuex";
export default {
    name: "TareasView",
    data() {
        return {};
    },
    components: {
        Tareas,
    },
    computed: {
        ...mapGetters("usuarios",["getUsuario"]),
        ...mapState("usuarios",["showPerfil"]),
        tarea() {
            return this.getUsuario;
        },
    },
};
</script>

<style lang="scss" scoped></style>

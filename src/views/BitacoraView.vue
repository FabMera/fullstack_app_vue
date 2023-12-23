<template>
    <div>
        <h1 class="mt-3 text-center">Bitacora y <span>Avanzes</span></h1>
        <div v-if="!showPerfil && bitacorasFiltradas.length > 0">
            <Bitacora
                v-for="(bitacora, index) in bitacorasFiltradas"
                :bitacora="bitacora"
                :key="index"
            />
        </div>
        <div class="mensaje" v-else-if="!showPerfil && bitacorasFiltradas.length === 0">
        No existen bitácoras creadas por el usuario {{ usuarioLogueado.userUsername }}
    </div>
        <div class="mt-2 d-flex flex-column">
            <button
                @click="agregarBitacora"
                class="btn btn-primary mx-3 boton-agregar"
            >
                <span class="plus-icon">+</span>
            </button>
        </div>
    </div>
</template>

<script>
import Bitacora from "@/components/tareas/Bitacora.vue";
import Loading from "@/components/Loading.vue";
import { mapActions, mapMutations, mapState } from "vuex";
export default {
    name: "BitacoraView",
    data() {
        return {
            loading: true,
        };
    },
    created() {
        const usuarioLogin = JSON.parse(
            localStorage.getItem("usuarioLogueado")
        );

        if (usuarioLogin) {
            this.setUsuarioLogueado(usuarioLogin);
        }
        this.loadBitacora();
    },
    components: {
        Bitacora,
        Loading,
    },
    computed: {
        ...mapState("bitacora", ["bitacoras"]),
        ...mapState("usuarios", ["usuarioLogueado", "showPerfil"]),

        bitacorasFiltradas() {
            console.log(this.usuarioLogueado.userEmail);
            console.log(this.bitacoras);
            if (!this.usuarioLogueado || !this.bitacoras) return [];
            const filterBitacoras = this.bitacoras.filter(
                (bitacora) =>
                    bitacora.email_user=== this.usuarioLogueado.userEmail
            );
            console.log(this.usuarioLogueado.userEmail);
            console.log(filterBitacoras);
            return filterBitacoras;
        },
    },
    methods: {
        ...mapActions("bitacora", ["loadBitacora"]),
        ...mapMutations("usuarios", ["setUsuarioLogueado"]),
    },
};
</script>

<style lang="css" scoped>
.loading-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.boton-agregar {
    display: flex;
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    padding: 0;
    font-size: 24px;
    justify-content: center;
    align-items: center;
}
.boton-agregar i {
    margin: 0;
}
.boton-agregar .plus-icon {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 7px;
}

.mensaje {
    padding: 20px;
    margin: 10px auto;
    max-width: 600px;
    border: 1px solid #007BFF;
    border-radius: 5px;
    background-color: #E9F8FF;
    color: #007BFF;
    font-size: 1.2em;
    text-align: center;
}
</style>

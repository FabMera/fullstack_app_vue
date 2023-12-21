<template>
    <div>
        <h1 class="mt-3 text-center">Bitacora y <span>Avanzes</span></h1>
        <div v-if="!showPerfil">
        
            <template v-if="bitacorasFiltradas.length > 0 || !loading">
                <Bitacora
                    v-for="(bitacora, index) in bitacoras"
                    :bitacora="bitacora"
                    :key="index"
                />
            </template>
            <div class="loading-modal" v-else>
                <Loading />
            </div>
        </div>
    </div>
</template>

<script>
import Bitacora from "@/components/tareas/Bitacora.vue";
import Loading from "@/components/Loading.vue";
import { mapActions, mapState } from "vuex";
export default {
    name: "BitacoraView",
    data() {
        return {
            loading: true,
        };
    },
    components: {
        Bitacora,
        Loading,
    },
    computed: {
        ...mapState("bitacora", ["bitacoras"]),
        ...mapState("usuarios", ["usuarioLogueado", "showPerfil"]),

        userEmail() {
            if (!this.usuarioLogueado || !this.usuarioLogueado.token)
                return null;
            const base64Url = this.usuarioLogueado.token.split(".")[1];
            const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
            const jsonPayload = decodeURIComponent(
                atob(base64)
                    .split("")
                    .map(function (c) {
                        return (
                            "%" +
                            ("00" + c.charCodeAt(0).toString(16)).slice(-2)
                        );
                    })
                    .join("")
            );

            const decodedToken = JSON.parse(jsonPayload);
            return decodedToken.email;
        },

        bitacorasFiltradas() {
            this.loading = true;
            console.log(this.userEmail);
            this.loading = false;
            console.log(this.bitacoras);
            if (!this.userEmail || !this.bitacoras) return [];
            const filterBitacoras = this.bitacoras.filter(
                (bitacora) => bitacora.email_user === this.userEmail
            );
            console.log(this.bitacoras);
            this.loading = false;
            return filterBitacoras;
        },
    },
    methods: {
        ...mapActions("bitacora", ["loadBitacora"]),
    },
    created() {
        this.loadBitacora();
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
</style>

<template>
    <div>
        <h1 class="mb-3 mt-3">Bitacora y <span>Avanzes</span></h1>
        <div v-if="!showPerfil">
            <Bitacora
                v-for="(bitacora, index) in bitacorasFiltradas"
                :bitacora="bitacora"
                :key="index"
            />
        </div>
    </div>
</template>

<script>
import Bitacora from "@/components/tareas/Bitacora.vue";
import { mapActions, mapState } from "vuex";
export default {
    name: "BitacoraView",
    data() {
        return {};
    },
    components: {
        Bitacora,
    },
    computed: {
        ...mapState("bitacora", ["bitacoras"]),
        ...mapState("usuarios", ["usuarioLogueado", "showPerfil"]),
        
        userEmail() {
            if (!this.usuarioLogueado || !this.usuarioLogueado.token) return null;
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
            console.log(this.userEmail);
            console.log(this.bitacoras);
            if(!this.userEmail || !this.bitacoras) return [];
            return this.bitacoras.filter(
                (bitacora) => bitacora.email_user === this.userEmail
            );
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

<style lang="scss" scoped></style>

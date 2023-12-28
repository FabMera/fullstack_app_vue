<template>
    <div>
        <h1 class="mt-3 text-center mb-4 p-3">Bitacora y Avanzes</h1>
        <div v-if="!showPerfil && bitacorasFiltradas.length > 0">
            <Bitacora
                :bitacorasFiltradas="bitacorasFiltradas"
                @editar-bitacora="abrirModalEditar"
                @eliminar-bitacora="eliminarBitacora"
            />
        </div>
        <div
            class="mensaje"
            v-else-if="!showPerfil && bitacorasFiltradas.length === 0"
        >
            No existen bitácoras creadas por el usuario
            {{ usuarioLogueado.userUsername }}
        </div>
        <div class="mt-2 d-flex flex-column">
            <button
                @click="abrirModalBitacora"
                class="btn btn-primary mx-3 boton-agregar"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Agrega una nueva bitacora"
            >
                <span class="plus-icon"
                    ><i class="fa-solid fa-pen-to-square"></i
                ></span>
            </button>
        </div>
        <div v-if="showModalbitacora" @close="closeModal">
            <div class="overlay"></div>
            <bitacora-modal
                @agregar-bitacora="agregarBitacora"
                :bitacora="bitacora"
                @close="closeModal"
                :is-editar="isEditing"
            />
        </div>
    </div>
</template>

<script>
import Bitacora from "@/components/tareas/ListaBitacoras.vue";
import Loading from "@/components/Loading.vue";
import { mapActions, mapMutations, mapState } from "vuex";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";
import Swal from "sweetalert2";
import BitacoraModal from "@/components/tareas/BitacoraModal.vue";

export default {
    name: "BitacoraView",
    emits: ["agregar-bitacora", "close", "editar-bitacora", "eliminar-bitacora"],
    data() {
        return {
            loading: true,
            bitacora: {
                date_create: "",
                descripcion: "",
                date_finish: "",
                estado: false,
            },
            showModalbitacora: false,
            isEditing: false,
            originalBitacora: null,
        };
    },
    mounted() {
        const tooltipTriggerList = document.querySelectorAll(
            '[data-bs-toggle="tooltip"]'
        );
        tooltipTriggerList.forEach((tooltipTriggerEl) => {
            new Tooltip(tooltipTriggerEl);
        });
    },

    created() {
        const usuarioLogin = JSON.parse(
            localStorage.getItem("usuarioLogueado")
        );

        if (usuarioLogin) {
            this.setUsuarioLogueado(usuarioLogin);
        }
        if (this.bitacoras.length === 0) {
            this.loadBitacora();
        }
    },
    components: {
        Bitacora,
        Loading,
        BitacoraModal,
    },
    computed: {
        ...mapState("bitacora", ["bitacoras"]),
        ...mapState("usuarios", ["usuarioLogueado", "showPerfil"]),
        bitacorasFiltradas() {
            if (!this.usuarioLogueado || !this.bitacoras) return [];
            const filterBitacoras = this.bitacoras.filter(
                (bitacora) =>
                    bitacora.email_user === this.usuarioLogueado.userEmail
            );
            return filterBitacoras;
        },
    },
    methods: {
        ...mapActions("bitacora", [
            "loadBitacora",
            "createBitacora",
            "updateBitacoraEdit",
            "deleteBitacora",
        ]),
        ...mapMutations("usuarios", ["setUsuarioLogueado"]),
        abrirModalEditar(bitacora) {
            this.bitacora = bitacora;
            this.isEditing = true;
            this.showModalbitacora = true;
        },
        abrirModalBitacora() {
            this.resetBitacora();
            this.isEditing = false;
            this.showModalbitacora = true;
        },
        async agregarBitacora() {
            this.closeModal();
            this.showLoading();

            try {
                if (this.bitacora.id) {
                    await this.updateBitacoraEdit(this.bitacora);
                    this.showSuccessMessage(true);
                    return;
                } else {
                    await this.createBitacoraEntry();
                    this.showSuccessMessage(false);
                    Swal.close();
                }
                this.resetBitacora();
            } catch (error) {
                console.log(error);
                Swal.close();
            }
        },
        closeModal() {
            this.showModalbitacora = false;
            this.isEditing = false;
            this.$nextTick();
        },
        resetBitacora() {
            this.bitacora = {
                date_create: "",
                descripcion: "",
                date_finish: "",
                estado: false,
            };
        },
        showSuccessMessage(isEditing) {
            setTimeout(() => {
                Swal.close();

                Swal.fire({
                    title: isEditing ? "Editado" : "Guardado",
                    text: isEditing
                        ? "El registro se editó correctamente"
                        : "El registro se guardó correctamente",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }, 1000);
        },
        showLoading() {
            Swal.fire({
                title: "Espere por favor...",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });
        },
        async eliminarBitacora(id) {
            const { isConfirmed } = await Swal.fire({
                title: "¿Desea eliminar esta bitacora?",
                text: "Esta acción no se puede revertir",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                cancelButtonText: "Cancelar",
                confirmButtonText: "Sí, eliminar",
            });
            if (isConfirmed) {
                new Swal({
                    title: "Espere por favor",
                    allowOutsideClick: false,
                });
                Swal.showLoading();
                try {
                    await this.deleteBitacora(id);
                    Swal.fire(
                        "Eliminado",
                        "El registro se eliminó correctamente",
                        "success"
                    );
                } catch (error) {
                    console.log(error);
                    Swal.close();
                }
            }
        },
        async createBitacoraEntry() {
            await this.createBitacora({
                ...this.bitacora,
                email_user: this.usuarioLogueado.userEmail,
            });
        },
    },
};
</script>

<style lang="css" scoped>
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
    margin-bottom: 5px;
    margin-left: 2px;
}

.mensaje {
    padding: 20px;
    margin: 10px auto;
    max-width: 600px;
    border: 1px solid #007bff;
    border-radius: 5px;
    background-color: #e9f8ff;
    color: #007bff;
    font-size: 1.2em;
    text-align: center;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}
</style>

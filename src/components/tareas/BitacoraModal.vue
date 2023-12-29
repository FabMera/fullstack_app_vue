<template>
    <div class="modal rounded shadow">
        <form class="w-100">
            <div class="d-flex justify-content-end mb-5">
                <i
                    @click="cerrarPerfil"
                    class="fa-solid fa-circle-xmark close-icon"
                ></i>
            </div>
            <div class="mb-3">
                <label for="date_create" class="form-label"
                    >Fecha de Inicio</label
                >
                <input
                    type="date"
                    class="form-control"
                    id="date_create"
                    v-model="bitacora.date_create"
                    :class="{
                        'is-invalid': formSubmitted && !bitacora.date_create,
                    }"
                />
                <p
                    v-if="formSubmitted && !bitacora.date_create"
                    class="text-danger custom-error mt-1"
                >
                    * El campo fecha de inicio es obligatorio
                </p>
            </div>
            <div class="mb-3">
                <label for="descripcion" class="form-label"
                    >Descripción de la Tarea</label
                >
                <textarea
                    class="form-control"
                    id="descripcion"
                    rows="3"
                    v-model="bitacora.descripcion"
                    :class="{
                        'is-invalid': formSubmitted && !bitacora.descripcion,
                    }"
                ></textarea>
                <p
                    v-if="formSubmitted && !bitacora.descripcion"
                    class="text-danger custom-error mt-1"
                >
                    * El campo descripcion es obligatorio
                </p>
            </div>
            <div class="mb-5">
                <label for="date_finish" class="form-label"
                    >Fecha de Termino</label
                >
                <input
                    type="date"
                    class="form-control"
                    id="date_finish"
                    v-model="bitacora.date_finish"
                    :class="{
                        'is-invalid': formSubmitted && !bitacora.date_finish,
                    }"
                />
                <p
                    v-if="formSubmitted && !bitacora.date_finish"
                    class="text-danger custom-error mt-1"
                >
                    * El campo fecha de termino es obligatorio
                </p>
            </div>
            <div v-if="isEditar" class="mb-3 form-check">
                <input
                    type="checkbox"
                    class="form-check-input"
                    id="estado"
                    v-model="bitacora.estado"
                />
                <label class="form-check-label" for="estado">Completar</label>
            </div>
            <button
                @click="agregarBitacora"
                type="submit"
                class="btn btn-primary w-100 mb-3"
            >
                {{ isEditar ? "Editar" : "Agregar" }}
            </button>
        </form>
    </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
    data() {
        return {
            formSubmitted: false,
        };
    },
    methods: {
        cerrarPerfil() {
            this.$emit("close");
        },
        agregarBitacora() {
            this.formSubmitted = true;
            if (
                !this.bitacora.date_create ||
                !this.bitacora.descripcion ||
                !this.bitacora.date_finish
            ) {
                return;
            }
            this.$emit("agregar-bitacora", this.bitacora);
        },
    },
    props: {
        bitacora: {
            type: Object,
            required: true,
        },
        isEditar: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style lang="css" scoped>
.custom-error {
    font-size: 0.75rem;
}
.is-invalid {
    border-color: red;
}
.close-icon {
    font-size: 2em;
    color: rgb(78, 78, 201);
    cursor: pointer;
    transition: color 0.3s ease;
}
.close-icon:hover {
    color: rgb(44, 44, 155);
}
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 350px;
    max-height: 550px;
    transform: translate(-50%, -50%);
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    z-index: 2000;
    padding: 10px;
    overflow: hidden;
}
</style>

<template>
    <div class="modal rounded shadow">
        <form class="w-100 ">
            <div class="d-flex justify-content-end mb-3 ">
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
                />
            </div>
            <div class="mb-3">
                <label for="descripcion" class="form-label">Descripción de la Tarea</label>
                <textarea
                    class="form-control"
                    id="descripcion"
                    rows="3"
                    v-model="bitacora.descripcion"
                ></textarea>
            </div>
            <div class="mb-3">
                <label for="date_finish" class="form-label"
                    >Fecha de Termino</label
                >
                <input
                    type="date"
                    class="form-control"
                    id="date_finish"
                    v-model="bitacora.date_finish"
                />
            </div>
            <div class="mb-3 form-check">
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
                class="btn btn-primary w-100"
            >
                {{ isEditar ? "Editar" : "Agregar"  }}
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        cerrarPerfil() {
            this.$emit("close");
        },
        agregarBitacora() {
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
    max-height: 500px;
    transform: translate(-50%, -50%);
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    z-index: 2000;
    padding: 10px;
}
</style>

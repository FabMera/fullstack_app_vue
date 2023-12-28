<template>
    <div class="table-responsive">
        <table
            class="table table-striped-columns text-center shadow table-hover"
        >
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Fecha de Inicio</th>
                    <th scope="col">Descripcion Tarea</th>
                    <th scope="col">Fecha de Termino</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bitacora in bitacorasFiltradas" :key="bitacora.id">
                    <th class="align-middle" scope="row">{{ bitacora.id }}</th>
                    <td class="align-middle">{{ bitacora.date_create }}</td>
                    <td class="align-middle">{{ bitacora.descripcion }}</td>
                    <td class="align-middle">{{ bitacora.date_finish }}</td>
                    <td class="align-middle">
                        <span
                            class="badge rounded-pill bg-success"
                            v-if="bitacora.estado"
                            >Completado</span
                        >
                        <span class="badge rounded-pill bg-danger" v-else
                            >Pendiente</span
                        >
                    </td>
                    <td class="mx-auto">
                        <button
                            @click="editarBitacora(bitacora)"
                            class="btn ms-1"
                            title="Editar bitacora"
                        >
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button
                            @click="eliminarBitacora(bitacora.id)"
                            class="btn ms-1"
                            title="Eliminar bitacora"
                        >
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Bitacora",
    data() {
        return {};
    },
    components: {},
    computed: {},
    methods: {
        editarBitacora(bitacora) {
            this.$emit("editar-bitacora", bitacora);
        },
        eliminarBitacora(id) {
            this.$emit("eliminar-bitacora", id);
        },
    },
    props: {
        bitacorasFiltradas: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="css" scoped>
.table {
    cursor: pointer;
}
@media (max-width: 992px) {
    .btn {
        margin-bottom: 2px;
    }
}
</style>

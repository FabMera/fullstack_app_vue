<template>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Fecha de Creacion</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Fecha de Termino</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bitacora in bitacorasFiltradas" :key="bitacora.id">
                    <th scope="row">{{ bitacora.id }}</th>
                    <td>{{ bitacora.date_create }}</td>
                    <td>{{ bitacora.descripcion }}</td>
                    <td>{{ bitacora.date_finish }}</td>
                    <td>
                        <div class="form-check form-check-inline">
                            <input
                                value="completada"
                                type="checkbox"
                                id="check-3"
                                class="form-check-input"
                            />
                            <label for="check-3" class="form-check-label"
                                >Completada</label
                            >
                        </div>
                    </td>
                    <td>
                        <button class="btn btn-primary me-1">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button class="btn btn-danger">
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
    methods: {},
    props: {
        bitacorasFiltradas: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="css" scoped>
@media (max-width: 992px) {
    .btn {
        margin-bottom: 2px;
    }
}
</style>

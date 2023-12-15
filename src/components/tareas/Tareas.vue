<template>
    <div class="row" v-if="tarea && tarea.fields">
        <div class="col-md-6 mt-2">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Tareas Asignadas :
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body">
                            {{ tarea.fields.tareas_asignadas }}
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Proyectos Asignados :
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body">
                            {{ tarea.fields.proyectos_colaborador }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="card-no-encontrado">
        <p class="usuario-no-encontrado">
            No hay tareas y/o proyectos que mostrar!
        </p>
    </div>
</template>

<script>
export default {
    name: "Tareas",
    data() {
        return {};
    },
    props: {
        tarea: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="css" scoped>
.card-no-encontrado {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    background-color: #f9f9f9;
}
.usuario-no-encontrado {
    color: red;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
}
</style>

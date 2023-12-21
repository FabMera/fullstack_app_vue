<template>
    <div>
        <div class="row" >
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
                            Fecha creacion : {{ bitacora.Date }}
                            <br>
                            Nombre :
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body">
                            Descripcion:
                            {{ bitacora.text }}
                            <!-- <ul>
                                <li
                                    v-for="(
                                        tareaAsignada, index
                                    ) in tareasAsignadas"
                                    :key="index"
                                >
                                    {{ tareaAsignada }}
                                </li>
                            </ul> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Bitacora",
        data() {
            return {

            };
        },
        components: {

        },
        computed: {

        },
        methods: {

        },
        props: {
            bitacora: {
                type: Object,
                required: true,
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>
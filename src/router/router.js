import Vue from "vue";
import Router from "vue-router";
// Components
import Residential from "./../components/Inspections/Residential.vue";
import Commercial from "./../components/Inspections/Commercial.vue";
import DamageAssement from "./../components/Inspections/DamageAssement.vue";
import PresaleInspection from "./../components/Inspections/PresaleInspection.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    router: [
        // Mane Inspections 
        {
            name: "Residential",
            path: "/inspection/residential",
            component: Residential
            
        },
        {
            mane: "Commercial",
            path: "/inspection/commercial",
            component: Commercial
        },
        {
            name: "Damage Assement",
            path: "/inspection/damage",
            component: DamageAssement
        }, 
        {
            name: "Presale",
            path: "/inspection/presale",
            component: PresaleInspection
        }, 
        {
            name: "Insurance Inpection",
            path: "/inspection/insuranceinspection",
            component: InsuranceInspection
        },
        {
            name: "Recertificacion", 
            path: "/inspection/recertificacion", 
            component: Recertification
        }

    ]
})
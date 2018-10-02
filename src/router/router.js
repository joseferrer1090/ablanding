import Vue from "vue";
import Router from "vue-router";
// Components
import Residential from "./../components/Inspections/Residential.vue";
import Commercial from "./../components/Inspections/Commercial.vue";
import DamageAssement from "./../components/Inspections/DamageAssement.vue";
import PresaleInspection from "./../components/Inspections/PresaleInspection.vue";
import InsuranceInspection from "./../components/Inspections/InsuranceInspection.vue";
import Recertification from "./../components/Inspections/Recertification.vue";
import ReserveStudy from "./../components/Inspections/ReserveStudy.vue";
import CertificateUser from "./../components/Inspections/CertificateUser.vue";
import Balcony from "./../components/Inspections/Balcony.vue";
import Consulting from "./../components/Inspections/Consulting.vue";

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
    },
    {
      name: "Reserve Study",
      path: "/inspection/reservestudy",
      component: ReserveStudy
    },
    {
      name: "CertificateOfUse",
      path: "/inspection/certificateofuser",
      component: CertificateUser
    },
    {
      name: "Balcony inspections",
      path: "/inspection/balcony",
      component: Balcony
    },
    {
      name: "Consulting",
      path: "/inspection/consulting",
      component: Consulting
    }
  ]
});

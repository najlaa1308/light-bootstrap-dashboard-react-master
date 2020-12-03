/*!

=========================================================
* Light Bootstrap Accueil React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-Accueil-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-Accueil-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Accueil from "views/Accueil.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Réserver from "views/Réserver.jsx";

const AccueilRoutes = [
  {
    path: "/Accueil",
    name: "Accueil",
    icon: "pe-7s-graph",
    component: Accueil,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Mon profil",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Liste de mes réservations",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/réserver",
    name: "Réserver",
    icon: "pe-7s-headphones",
    component: Réserver,
    layout: "/admin"
  },
];

export default AccueilRoutes;

/**
 * Index permite separar por namespaces las rutas
 * e importarlas mucho mas facil luego.
 */

//Entity Routes
import authorRoute from "./entityResources/clientRoute.js";
import cityRoute from "./entityResources/cityRoute.js";

export default {
  entityResources: [authorRoute, cityRoute],
};

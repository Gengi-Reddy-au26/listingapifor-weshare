import express from "express";
import {
  createGeneral,
  getAllGeneral,
  getGeneral,
} from "../controllers/Generalcontrollers.js";

//import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", createGeneral);
router.get("/:id",getGeneral);
router.get("/",  getAllGeneral);

export default router;




// import express from "express";
// import {
//   createGeneral,
//   deleteGeneral,
//   getAllGeneral,
  
//   getSingleGeneral,
//   getfeaturedGeneral,
 
//   getGeneralCount,
//   updateGeneral,
// } from "../controllers/Generalcontrollers.js";
// //from "./../controllers/GeneralController.js";
// //import { verifyAdmin } from "./../utils/verifyToken.js";

// const router = express.Router();

// // create new tour
// router.post("/",  createGeneral);

// // update  tour
// router.put("/:id",  updateGeneral);

// // delete tour
// router.delete("/:id",  deleteGeneral);

// // get single tour
// router.get("/:id", getSingleGeneral);

// // get all tours
// router.get("/", getAllGeneral);

// // get tour by search
// //router.get("/search/getGeneralBySearch", getGeneralBySearch);
// router.get("/search/getfeaturedGeneral", getfeaturedGeneral);
// router.get("/search/getGeneralCount", getGeneralCount);

// export default router;
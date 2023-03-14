 import General from "../models/General.js";

// create new general
export const createGeneral = async (req, res) => {
  const newGeneral = new General(req.body);
  try {
    const savedGeneral = await newGeneral.save();

    res.status(200).json({
      success: true,
      message: "Your detalis are applied ",
      data: savedGeneral,
    });
  } catch (err) {
    res.status(500).json({ success: true, message: "internal server error" });
  }
};

// get single booking
export const getGeneral = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await General.findById(id);

    res.status(200).json({
      success: true,
      message: "successful",
      data: book,
    });
  } catch (err) {
    res.status(404).json({ success: true, message: "not found" });
  }
};

// get all booking
export const getAllGeneral = async (req, res) => {
  try {
    const books = await General.find();

    res.status(200).json({
      success: true,
      message: "successful",
      data: books,
    });
  } catch (err) {
    res.status(500).json({ success: true, message: "internal server error" });
  }
};



// // create new tour
// export const createGeneral = async (req, res) => {
//   const newGeneral = new General(req.body);

//   try {
//     const savedGeneral = await newGeneral.save();

//     res.status(200).json({
//       success: true,
//       message: "Successfully created",
//       data: savedGeneral,
//     });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ success: false, message: "Failed to create. Try again" });
//   }
// };

// // update tour
// export const updateGeneral = async (req, res) => {
//   const id = req.params.id;

//   try {
//     const updatedGeneral = await Tour.findByIdAndUpdate(
//       id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );

//     res.status(200).json({
//       success: true,
//       message: "Successfully updated",
//       data: updatedGeneral,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "failed to update",
//     });
//   }
// };

// // delete tour
// export const deleteGeneral = async (req, res) => {
//   const id = req.params.id;

//   try {
//     await General.findByIdAndDelete(id);

//     res.status(200).json({
//       success: true,
//       message: "Successfully deleted",
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "failed to delete",
//     });
//   }
// };

// // getSingle tour
// export const getSingleGeneral = async (req, res) => {
//   const id = req.params.id;

//   try {
//     const General = await General.findById(id).populate("reviews");

//     res.status(200).json({
//       success: true,
//       message: "Successful",
//       data: General,
//     });
//   } catch (err) {
//     res.status(404).json({
//       success: false,
//       message: "not found",
//     });
//   }
// };

// // getAll tour
// export const getAllGeneral = async (req, res) => {
//   // for pagination
//   const page = parseInt(req.query.page);

//   try {
//     const General = await General.find({})
//       .populate("reviews")
//       .skip(page * 8)
//       .limit(8);

//     res.status(200).json({
//       success: true,
//       count: General.length,
//       message: "Successful",
//       data: General,
//     });
//   } catch (err) {
//     res.status(404).json({
//       success: false,
//       message: "not found",
//     });
//   }
// };

// // // get tour by search
// // export const getGeneralBySearch = async (req, res) => {
// //   // here 'i' means case sensitive
// //   const city = new RegExp(req.query.city, "i");
// //   const distance = parseInt(req.query.distance);
// //   const maxGroupSize = parseInt(req.query.maxGroupSize);

// //   try {
// //     // gte means greater than equal
// //     const General = await General.find({
// //       city,
// //       distance: { $gte: distance },
// //       maxGroupSize: { $gte: maxGroupSize },
// //     }).populate("reviews");

// //     res.status(200).json({
// //       success: true,
// //       message: "Successful",
// //       data:General,
// //     });
// //   } catch (err) {
// //     res.status(404).json({
// //       success: false,
// //       message: "not found",
// //     });
// //   }
// // };

// // get featured tour
// export const getfeaturedGeneral = async (req, res) => {
//   try {
//     const getfeaturedGeneral= await getfeaturedGeneral.find({ featured: true })
//       .populate("reviews")
//       .limit(8);

//     res.status(200).json({
//       success: true,
//       message: "Successful",
//       data: General,
//     });
//   } catch (err) {
//     res.status(404).json({
//       success: false,
//       message: "not found",
//     });
//   }
// };

// // get tour counts
// export const getGeneralCount = async (req, res) => {
//   try {
//     const GeneralCount = await General.estimatedDocumentCount();

//     res.status(200).json({ success: true, data: tourCount });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "failed to fetch" });
//   }
// };
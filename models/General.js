import mongoose from "mongoose";

const generalSchema = new mongoose.Schema(
    {
        title: {
          type: String,
          required: true,
          unique: true,
        },
        description : {
          type: String,
          required: true,
        },
        goodtoknow: {
          type: String,
          required: true,
        },
        distance: {
          type: Number,
          required: true,
        },

        photo: {
          type: String,
          required: true,
        },

        phone: {
            type: Number,
            required: true,
          },

          guestSize: {
            type: Number,
            required: true,
          },

          guestSize: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
            default: 0,
          },

          greatfor: {
          type: String,
          required: true,
        },


        tags: {
            type: String,
            required: true,
          },


          regions: {
            type: String,
            required: true,
          },

          pricing: {
          type: Number,
          required: true,
        },

        maxGroupSize: {
          type: Number,
          required: true,
        },
        maximumnumberofguestsallowed: {
            type: Number,
            required: true,
          },
      
          pricepereachadditionalguests
: {
            type: Number,
            required: true,
          },

          minimumnumberofhoursperreservation
          : {
                      type: Number,
                      required: true,
                    },
          
                    maximumnumberofhoursperreservation
                    : {
                                type: Number,
                                required: true,
                              },
                    

      
          Registrationsuccessful: {
            type: String,
            required: true,
          },
      
        reviews: [
          {
            type: mongoose.Types.ObjectId,
            ref: "Review",
          },
        ],
    
        featured: {
          type: Boolean,
          default: false,
        },
      },
      { timestamps: true }
    );
export default mongoose.model("General", generalSchema );
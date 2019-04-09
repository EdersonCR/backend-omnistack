const mongooose = require("mongoose");

const Box = new mongooose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        files: [{ type: mongooose.Schema.Types.ObjectId, ref: "File" }]
    },
    {
        timestamps: true
    }
);

module.exports = mongooose.model("Box", Box);
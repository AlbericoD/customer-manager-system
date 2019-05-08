import * as mongoose from 'mongoose';
const { Schema } = mongoose;

const CustomerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name cannot be blank.'],
      unique: true,
      trim: true
    },
    doc: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /^([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})$/
    },
    email: {
      type: String,
      required: false,
      trim: true
    },
    phone: {
      type: String,
      required: false,
      trim: true
    },
    cel: {
      type: String,
      required: false,
      trim: true
    }
  },
  {
    timestamps: true,
    useNestedStrict: true
  }
);

export default mongoose.model('Customer', CustomerSchema);

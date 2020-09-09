const mongoose = require('mongoose');


const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
})


export default mongoose.model('nessageContent', whatsappSchema);
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/e-store', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));

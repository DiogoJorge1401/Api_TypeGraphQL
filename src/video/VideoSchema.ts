import mongoose, { Schema } from 'mongoose'

interface Video {
  description: String
  title: String
  category: String
}

const VideoSchema = new Schema({
  description: String,
  title: String,
  category: String,
})

export default mongoose.model<Video>('Video', VideoSchema)

const {z} =require('zod');

exports.taskSchema = z.object({
    title:z.string().min(3),
    priority:z.number().min(1).max(5)
});
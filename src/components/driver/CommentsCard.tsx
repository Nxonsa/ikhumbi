import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

interface Comment {
  id: number;
  passenger: string;
  comment: string;
  date: string;
}

interface CommentsCardProps {
  comments: Comment[];
}

export const CommentsCard = ({ comments }: CommentsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <MessageSquare className="h-6 w-6 text-neutral-600" />
          <h2 className="text-xl font-semibold">Passenger Comments</h2>
        </div>
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border-b pb-4 last:border-b-0"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{comment.passenger}</span>
                <span className="text-sm text-neutral-500">{comment.date}</span>
              </div>
              <p className="text-neutral-600">{comment.comment}</p>
            </motion.div>
          ))}
          {comments.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-neutral-500 text-center"
            >
              No comments yet
            </motion.p>
          )}
        </div>
      </Card>
    </motion.div>
  );
};
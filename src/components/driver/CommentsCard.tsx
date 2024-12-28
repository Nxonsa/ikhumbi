import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

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
    <Card className="p-6">
      <div className="flex items-center space-x-4 mb-4">
        <MessageSquare className="h-6 w-6 text-neutral-600" />
        <h2 className="text-xl font-semibold">Passenger Comments</h2>
      </div>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b pb-4 last:border-b-0">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{comment.passenger}</span>
              <span className="text-sm text-neutral-500">{comment.date}</span>
            </div>
            <p className="text-neutral-600">{comment.comment}</p>
          </div>
        ))}
        {comments.length === 0 && (
          <p className="text-neutral-500 text-center">No comments yet</p>
        )}
      </div>
    </Card>
  );
};
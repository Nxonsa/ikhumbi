import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const DriverReviews = () => {
  // This would be fetched from your backend
  const reviews = [
    { id: 1, user: "Alice", rating: 5, comment: "Great service!", date: "2024-02-20" },
    { id: 2, user: "Bob", rating: 4, comment: "Good driver", date: "2024-02-19" },
  ];

  const averageRating = 4.5;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 p-6"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-neutral-800">Driver Reviews</h1>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`h-6 w-6 ${
                    star <= averageRating
                      ? "text-yellow-500 fill-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-neutral-800">
              {averageRating.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {reviews.map((review) => (
            <Card key={review.id} className="p-4 bg-white shadow-sm">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{review.user}</span>
                  <span className="text-sm text-neutral-500">{review.date}</span>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className={`h-4 w-4 ${
                        star <= review.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-neutral-600">{review.comment}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DriverReviews;
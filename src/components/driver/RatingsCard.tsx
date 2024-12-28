import { Card } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

interface RatingsCardProps {
  averageRating: number;
  totalRatings: number;
  ratingDistribution: { [key: number]: number };
}

export const RatingsCard = ({ averageRating, totalRatings, ratingDistribution }: RatingsCardProps) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Driver Ratings</h2>
      <div className="flex items-center space-x-4 mb-6">
        <div className="text-4xl font-bold">{averageRating.toFixed(1)}</div>
        <div>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                className={`h-5 w-5 ${
                  star <= averageRating
                    ? "text-yellow-500 fill-yellow-500"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-neutral-500">{totalRatings} ratings</p>
        </div>
      </div>
      <div className="space-y-2">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center space-x-2">
            <div className="flex items-center w-12">
              <span className="text-sm">{rating}</span>
              <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500 ml-1" />
            </div>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-500"
                style={{
                  width: `${((ratingDistribution[rating] || 0) / totalRatings) * 100}%`,
                }}
              />
            </div>
            <div className="w-12 text-sm text-right">
              {ratingDistribution[rating] || 0}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
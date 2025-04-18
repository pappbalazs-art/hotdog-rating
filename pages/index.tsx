import { useEffect, useState } from "react";

import { getDocs, collection } from "firebase/firestore";
import { database } from "@/firebase";

import DefaultLayout from "@/layouts/default";
import { RatingCard } from "@/components/rating-card";

export default function IndexPage() {
	const [ratings, setRatings] = useState<any>([]);

	const updateRatings = async () => {
		const ratingsSnapshot = await getDocs(collection(database, "ratings"));

		setRatings(
			ratingsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
		);
	};

	useEffect(() => {
		updateRatings();
	});

	return (
		<DefaultLayout>
			{ratings && (
				<div className="ratings-container max-w-md mx-auto">
					{ratings.map((rating: any) => (
						<RatingCard rating={rating} />
					))}
				</div>
			)}
		</DefaultLayout>
	);
}

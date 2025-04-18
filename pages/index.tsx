import { useEffect, useState } from "react";

import { getDocs, collection } from "firebase/firestore";
import { database } from "@/firebase";

import DefaultLayout from "@/layouts/default";
import { RatingCard } from "@/components/rating-card";

import { Button } from "@heroui/button";
import { PlusIcon } from "@/components/icons/plus-icon";
import { useDisclosure } from "@heroui/modal";
import CreateRatingModal from "@/components/create-rating-modal";

export default function IndexPage() {
	const [ratings, setRatings] = useState<any>([]);

	const createRatingModalDisclosure = useDisclosure();

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
			<CreateRatingModal
				isOpen={createRatingModalDisclosure.isOpen}
				onOpen={createRatingModalDisclosure.onOpen}
				onOpenChange={createRatingModalDisclosure.onOpenChange}
				updateRatings={updateRatings}
			/>

			<Button
				className="fixed bottom-4 right-4 z-40"
				isIconOnly
				aria-label="Add review"
				color="warning"
				size="lg"
				radius="full"
				variant="shadow"
				onPress={createRatingModalDisclosure.onOpen}
			>
				<PlusIcon />
			</Button>

			{ratings && (
				<div className="ratings-container max-w-md mx-auto z-0">
					{ratings.map((rating: any) => (
						<RatingCard rating={rating} />
					))}
				</div>
			)}
		</DefaultLayout>
	);
}

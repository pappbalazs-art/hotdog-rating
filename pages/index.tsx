import { useEffect, useMemo, useState } from "react";

import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { database } from "@/firebase";

import DefaultLayout from "@/layouts/default";
import { RatingCard } from "@/components/rating-card";

import { Button } from "@heroui/button";
import { Spinner } from "@heroui/spinner";
import { useDisclosure } from "@heroui/modal";
import { PlusIcon } from "@/components/icons/plus-icon";
import { SearchIcon } from "@/components/icons/search-icon";

import CreateRatingModal from "@/components/create-rating-modal";
import { Input } from "@heroui/input";

export default function IndexPage() {
	const [ratings, setRatings] = useState<any>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const [searchFilter, setSearchFilter] = useState("");

	const createRatingModalDisclosure = useDisclosure();

	const filteredRatings = useMemo(() => {
		let filteredRatings = [...ratings];

		if (searchFilter) {
			filteredRatings = filteredRatings.filter(
				(rating) =>
					rating.location_name
						.toLowerCase()
						.includes(searchFilter.toLowerCase()) ||
					rating.location_address
						.toLowerCase()
						.includes(searchFilter.toLowerCase())
			);
		}

		return filteredRatings;
	}, [ratings, searchFilter]);

	const updateRatings = async () => {
		const ratingsRef = collection(database, "ratings");
		const ratingsQuery = query(ratingsRef, orderBy("date", "desc"));
		const ratingsSnapshot = await getDocs(ratingsQuery);

		setRatings(
			ratingsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
		);
		setLoading(false);
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

			<Input
				className="w-full pb-6"
				variant="bordered"
				placeholder="Search..."
				startContent={<SearchIcon />}
				value={searchFilter}
				onValueChange={setSearchFilter}
				onClear={() => setSearchFilter("")}
				isClearable
			/>

			{loading && (
				<Spinner
					className="absolute inset-0 m-auto"
					color="warning"
					size="lg"
				/>
			)}

			{!loading && (
				<>
					<div className="ratings-container z-0 animate-fade-in">
						{filteredRatings.map((rating: any) => (
							<RatingCard rating={rating} key={rating.id} />
						))}
					</div>

					{filteredRatings.length === 0 && (
						<span className="text-small text-default-500 text-center">
							Itt még sajnos nem voltunk :(
						</span>
					)}
				</>
			)}
		</DefaultLayout>
	);
}

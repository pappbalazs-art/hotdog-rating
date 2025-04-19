import { SetStateAction, useEffect, useMemo, useState } from "react";

import {
	getDocs,
	collection,
	query,
	orderBy,
	OrderByDirection,
	FieldPath,
} from "firebase/firestore";
import { database } from "@/firebase";

import DefaultLayout from "@/layouts/default";

import { Button } from "@heroui/button";
import { Spinner } from "@heroui/spinner";
import { useDisclosure } from "@heroui/modal";
import { Input } from "@heroui/input";
import { PlusIcon } from "@/components/icons/plus-icon";
import { SearchIcon } from "@/components/icons/search-icon";

import { RatingCard } from "@/components/rating-card";

import CreateRatingModal from "@/components/create-rating-modal";
import DeleteRatingModal from "@/components/delete-rating-modal";
import EditRatingModal from "@/components/edit-rating-modal";
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@heroui/dropdown";
import { FilterIcon } from "@/components/icons/filter-icon";
import { SharedSelection } from "@heroui/system";

export default function IndexPage() {
	const [ratings, setRatings] = useState<any>([]);
	const [selectedRating, setSelectedRating] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const [searchFilter, setSearchFilter] = useState("");
	const [ratingsOrder, setRatingsOrder] = useState<SharedSelection>(
		new Set(["date-desc"])
	);

	const createRatingModalDisclosure = useDisclosure();
	const editRatingModalDisclosure = useDisclosure();
	const deleteRatingModalDisclosure = useDisclosure();

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

	const handleRatingsOrderSelection = (
		value: SetStateAction<SharedSelection>
	) => {
		setRatingsOrder(value);
		setLoading(true);
		updateRatings();
	};

	const updateRatings = async () => {
		const ratingsOrderBits = ratingsOrder.currentKey?.split("-") || [
			"date" as any,
			"desc" as any,
		];

		console.log(ratingsOrderBits);

		const ratingsRef = collection(database, "ratings");
		const ratingsQuery = query(
			ratingsRef,
			orderBy(ratingsOrderBits[0], ratingsOrderBits[1])
		);
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
			<EditRatingModal
				isOpen={editRatingModalDisclosure.isOpen}
				onOpen={editRatingModalDisclosure.onOpen}
				onOpenChange={editRatingModalDisclosure.onOpenChange}
				selectedRating={selectedRating}
				updateRatings={updateRatings}
			/>
			<DeleteRatingModal
				isOpen={deleteRatingModalDisclosure.isOpen}
				onOpen={deleteRatingModalDisclosure.onOpen}
				onOpenChange={deleteRatingModalDisclosure.onOpenChange}
				selectedRating={selectedRating}
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

			<section className="pb-6 flex flex-row gap-3 items-center justify-between">
				<Input
					variant="bordered"
					placeholder="Search..."
					startContent={<SearchIcon />}
					value={searchFilter}
					onValueChange={setSearchFilter}
					onClear={() => setSearchFilter("")}
					isClearable
				/>

				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<Button isIconOnly size="sm" variant="light">
							<FilterIcon size={24} />
						</Button>
					</DropdownTrigger>
					<DropdownMenu
						disallowEmptySelection
						selectionMode="single"
						selectedKeys={ratingsOrder}
						onSelectionChange={handleRatingsOrderSelection}
						variant="flat"
					>
						<DropdownItem key="date-desc">
							Date: Latest First
						</DropdownItem>
						<DropdownItem key="date-asc">
							Date: Oldest First
						</DropdownItem>
						<DropdownItem key="score-desc">
							Score: High to Low
						</DropdownItem>
						<DropdownItem key="score-asc">
							Score: Low to High
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</section>

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
							<RatingCard
								key={rating.id}
								rating={rating}
								setSelectedRating={setSelectedRating}
								openEditRatingModal={
									editRatingModalDisclosure.onOpen
								}
								openDeleteRatingModal={
									deleteRatingModalDisclosure.onOpen
								}
							/>
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

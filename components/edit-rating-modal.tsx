import { useEffect, useState } from "react";

import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { DatePicker } from "@heroui/date-picker";
import { Slider } from "@heroui/slider";

import {
	fromDate,
	getLocalTimeZone,
	toCalendarDate,
	today,
} from "@internationalized/date";
import {
	addDoc,
	collection,
	doc,
	Timestamp,
	updateDoc,
} from "firebase/firestore";
import { database } from "@/firebase";
import { HeartIcon } from "./icons/heart-icon";

function CreateRatingSlider({
	label,
	value,
	onValueChange,
}: {
	label: string;
	value: number;
	onValueChange: any;
}) {
	return (
		<Slider
			label={label}
			value={value}
			onChange={onValueChange}
			classNames={{
				base: "pb-2 w-full",
				label: "font-medium text-medium text-medium-700",
				value: "font-medium text-medium text-medium-700",
			}}
			color="warning"
			maxValue={10}
			minValue={1}
			showSteps
			size="md"
			step={1}
			renderThumb={(props) => (
				<div {...props} className="group">
					<HeartIcon
						className="relative top-[6px] cursor-grab"
						size={30}
						fill="#ffffff"
						stroke="#f5a524"
						strokeWidth={2}
					/>
				</div>
			)}
		/>
	);
}

export default function EditRatingModal({
	isOpen,
	onOpen,
	onOpenChange,
	selectedRating,
	updateRatings,
}: {
	isOpen: boolean;
	onOpen: () => void;
	onOpenChange: () => void;
	selectedRating: any;
	updateRatings: Function;
}) {
	const [locationName, setLocationName] = useState("");
	const [locationAddress, setLocationAddress] = useState("");
	const [date, setDate] = useState<any>(today(getLocalTimeZone()));
	const [dogRating, setDogRating] = useState(5);
	const [dogNotes, setDogNotes] = useState("");
	const [bunRating, setBunRating] = useState(5);
	const [bunNotes, setBunNotes] = useState("");
	const [sauceRating, setSauceRating] = useState(5);
	const [sauceNotes, setSauceNotes] = useState("");
	const [sauceToDogRatioRating, setSauceToDogRatioRating] = useState(5);
	const [sauceToDogRatioNotes, setSauceToDogRatioNotes] = useState("");
	const [dogToBunRatioRating, setDogToBunRatioRating] = useState(5);
	const [dogToBunRatioNotes, setDogToBunRatioNotes] = useState("");
	const [overallTasteRating, setOverallTasteRating] = useState(5);
	const [overallTasteNotes, setOverallTasteNotes] = useState("");
	const [customerServiceRating, setCustomerServiceRating] = useState(5);
	const [customerServiceNotes, setCustomerServiceNotes] = useState("");
	const [overallExperienceRating, setOverallExperienceRating] = useState(5);
	const [overallExperienceNotes, setOverallExperienceNotes] = useState("");
	const [extras, setExtras] = useState("");

	const handleSaveRating = async () => {
		const dateTimestamp = Timestamp.fromDate(
			new Date(date.year, date.month - 1, date.day)
		);

		await updateDoc(doc(database, "ratings", selectedRating.id), {
			location_name: locationName,
			location_address: locationAddress,
			date: dateTimestamp,
			dog_rating: dogRating,
			dog_notes: dogNotes,
			bun_rating: bunRating,
			bun_notes: bunNotes,
			sauce_rating: sauceRating,
			sauce_notes: sauceNotes,
			sauce_to_dog_ratio_rating: sauceToDogRatioRating,
			sauce_to_dog_ratio_notes: sauceToDogRatioNotes,
			dog_to_bun_ratio_rating: dogToBunRatioRating,
			dog_to_bun_ratio_notes: dogToBunRatioNotes,
			overall_taste_rating: overallTasteRating,
			overall_taste_notes: overallTasteNotes,
			customer_service_rating: customerServiceRating,
			customer_service_notes: customerServiceNotes,
			overall_experience_rating: overallExperienceRating,
			overall_experience_notes: overallExperienceNotes,
			extras: extras,
			score:
				(dogRating +
					bunRating +
					sauceRating +
					sauceToDogRatioRating +
					dogToBunRatioRating +
					overallTasteRating +
					customerServiceRating +
					overallExperienceRating) /
				8,
		});
		await updateRatings();

		onOpenChange();
	};

	useEffect(() => {
		if (!selectedRating) return;

		setLocationName(selectedRating.location_name);
		setLocationAddress(selectedRating.location_address);
		setDate(
			toCalendarDate(
				fromDate(
					new Date(selectedRating.date?.seconds * 1000),
					getLocalTimeZone()
				)
			)
		);
		setDogRating(selectedRating.dog_rating);
		setDogNotes(selectedRating.dog_notes);
		setBunRating(selectedRating.bun_rating);
		setBunNotes(selectedRating.bun_notes);
		setSauceRating(selectedRating.sauce_rating);
		setSauceNotes(selectedRating.sauce_notes);
		setSauceToDogRatioRating(selectedRating.sauce_to_dog_ratio_rating);
		setSauceToDogRatioNotes(selectedRating.sauce_to_dog_ratio_notes);
		setDogToBunRatioRating(selectedRating.sauce_to_dog_ratio_rating);
		setDogToBunRatioNotes(selectedRating.dog_to_bun_ratio_notes);
		setOverallTasteRating(selectedRating.overall_experience_rating);
		setOverallTasteNotes(selectedRating.overall_taste_notes);
		setCustomerServiceRating(selectedRating.customer_service_rating);
		setCustomerServiceNotes(selectedRating.customer_service_notes);
		setOverallExperienceRating(selectedRating.overall_experience_rating);
		setOverallExperienceNotes(selectedRating.overall_experience_notes);
		setExtras(selectedRating.extras);
	}, [selectedRating, isOpen]);

	return (
		<Modal
			classNames={{
				header: "border-b-[1px] border-[#e5e7eb]",
				footer: "border-t-[1px] border-[#e5e7eb]",
				body: "py-6",
			}}
			isOpen={isOpen}
			placement="center"
			scrollBehavior="outside"
			onOpenChange={onOpenChange}
		>
			<ModalContent>
				{(onClose: any) => (
					<>
						<ModalHeader className="flex flex-col gap-2">
							Edit rating
						</ModalHeader>
						<ModalBody>
							<Input
								label="Location Name"
								variant="bordered"
								isRequired
								value={locationName}
								onValueChange={setLocationName}
							/>
							<Input
								label="Location Address"
								variant="bordered"
								isRequired
								value={locationAddress}
								onValueChange={setLocationAddress}
							/>
							<DatePicker
								label="Date"
								variant="bordered"
								isRequired
								value={date}
								onChange={setDate}
							/>
							<CreateRatingSlider
								label="Dog"
								value={dogRating}
								onValueChange={setDogRating}
							/>
							<Input
								label="Dog Notes"
								variant="bordered"
								value={dogNotes}
								onValueChange={setDogNotes}
							/>
							<CreateRatingSlider
								label="Bun"
								value={bunRating}
								onValueChange={setBunRating}
							/>
							<Input
								label="Bun Notes"
								variant="bordered"
								value={bunNotes}
								onValueChange={setBunNotes}
							/>
							<CreateRatingSlider
								label="Sauce"
								value={sauceRating}
								onValueChange={setSauceRating}
							/>
							<Input
								label="Sauce Notes"
								variant="bordered"
								value={sauceNotes}
								onValueChange={setSauceNotes}
							/>
							<CreateRatingSlider
								label="Sauce to Dog Ratio"
								value={sauceToDogRatioRating}
								onValueChange={setSauceToDogRatioRating}
							/>
							<Input
								label="Sauce to Dog Ratio Notes"
								variant="bordered"
								value={sauceToDogRatioNotes}
								onValueChange={setSauceToDogRatioNotes}
							/>
							<CreateRatingSlider
								label="Dog to Bun Ratio"
								value={dogToBunRatioRating}
								onValueChange={setDogToBunRatioRating}
							/>
							<Input
								label="Dog to Bun Ratio Notes"
								variant="bordered"
								value={dogToBunRatioNotes}
								onValueChange={setDogToBunRatioNotes}
							/>
							<CreateRatingSlider
								label="Overall Taste"
								value={overallTasteRating}
								onValueChange={setOverallTasteRating}
							/>
							<Input
								label="Overall Taste Notes"
								variant="bordered"
								value={overallTasteNotes}
								onValueChange={setOverallTasteNotes}
							/>
							<CreateRatingSlider
								label="Customer Service"
								value={customerServiceRating}
								onValueChange={setCustomerServiceRating}
							/>
							<Input
								label="Customer Service Notes"
								variant="bordered"
								value={customerServiceNotes}
								onValueChange={setCustomerServiceNotes}
							/>
							<CreateRatingSlider
								label="Overall Experience"
								value={overallExperienceRating}
								onValueChange={setOverallExperienceRating}
							/>
							<Input
								label="Overall Experience Notes"
								variant="bordered"
								value={overallExperienceNotes}
								onValueChange={setOverallExperienceNotes}
							/>
							<Input
								label="Extras"
								variant="bordered"
								value={extras}
								onValueChange={setExtras}
							/>
						</ModalBody>
						<ModalFooter>
							<Button
								className="w-full"
								color="warning"
								onPress={handleSaveRating}
							>
								Save rating
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}

import { useState } from "react";

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

import { getLocalTimeZone, parseDate, today } from "@internationalized/date";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { database } from "@/firebase";

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
		/>
	);
}

export default function CreateRatingModal({
	isOpen,
	onOpen,
	onOpenChange,
	updateRatings,
}: {
	isOpen: boolean;
	onOpen: () => void;
	onOpenChange: () => void;
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

	const handleCreateRating = async () => {
		const dateTimestamp = Timestamp.fromDate(
			new Date(date.year, date.month - 1, date.day)
		);

		await addDoc(collection(database, "ratings"), {
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
		});
		await updateRatings();

		onOpenChange();

		// Reset the form fields
		setLocationName("");
		setLocationAddress("");
		setDate(today(getLocalTimeZone()));
		setDogRating(5);
		setDogNotes("");
		setBunRating(5);
		setBunNotes("");
		setSauceRating(5);
		setSauceNotes("");
		setSauceToDogRatioRating(5);
		setSauceToDogRatioNotes("");
		setDogToBunRatioRating(5);
		setDogToBunRatioNotes("");
		setOverallTasteRating(5);
		setOverallTasteNotes("");
		setCustomerServiceRating(5);
		setCustomerServiceNotes("");
		setOverallExperienceRating(5);
		setOverallExperienceNotes("");
		setExtras("");
	};

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
							Create new rating
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
								isDisabled={
									!(locationName && locationAddress && date)
								}
								onPress={handleCreateRating}
							>
								Add rating
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
